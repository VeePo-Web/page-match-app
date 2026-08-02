CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (user_id = auth.uid());

CREATE TYPE public.photo_category AS ENUM ('wedding', 'live', 'teaching', 'portrait', 'archive');

CREATE TABLE public.photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  storage_path text NOT NULL UNIQUE,
  title text NOT NULL DEFAULT '',
  alt_text text NOT NULL DEFAULT '',
  category public.photo_category NOT NULL DEFAULT 'portrait',
  sort_order integer NOT NULL DEFAULT 0,
  width integer,
  height integer,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.photos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.photos TO authenticated;
GRANT ALL ON public.photos TO service_role;
ALTER TABLE public.photos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published photos are viewable by everyone"
ON public.photos FOR SELECT
USING (is_published OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert photos"
ON public.photos FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update photos"
ON public.photos FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete photos"
ON public.photos FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER photos_set_updated_at
BEFORE UPDATE ON public.photos
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE POLICY "Anyone can read parker photo files"
ON storage.objects FOR SELECT
USING (bucket_id = 'parker-photos');

CREATE POLICY "Admins can upload parker photo files"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'parker-photos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update parker photo files"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'parker-photos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete parker photo files"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'parker-photos' AND public.has_role(auth.uid(), 'admin'));