import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { usePageMeta } from "@/hooks/usePageMeta";
import {
  PHOTO_BUCKET,
  PHOTO_CATEGORIES,
  fetchPhotos,
  type PhotoCategory,
  type PhotoWithUrl,
} from "@/lib/photos";
import { toast } from "sonner";

function slugify(name: string) {
  const base = name.replace(/\.[^.]+$/, "");
  return (
    base
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 60) || "photo"
  );
}

export default function AdminPhotos() {
  const navigate = useNavigate();
  const { user, isAdmin, loading } = useAuth();
  const [photos, setPhotos] = useState<PhotoWithUrl[]>([]);
  const [busy, setBusy] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  usePageMeta({
    title: "Photo Library — Parker Gawryletz",
    description: "Manage the shared photo library.",
  });

  useEffect(() => {
    if (!loading && !user) navigate("/auth", { replace: true });
  }, [loading, user, navigate]);

  const load = useCallback(async () => {
    try {
      setPhotos(await fetchPhotos());
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not load photos.");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const upload = async (files: FileList | File[]) => {
    setBusy(true);
    try {
      let order = photos.length ? Math.max(...photos.map((p) => p.sort_order)) : 0;
      for (const file of Array.from(files)) {
        if (!file.type.startsWith("image/")) continue;
        const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
        const path = `${slugify(file.name)}-${Date.now().toString(36)}.${ext}`;

        const { error: upErr } = await supabase.storage
          .from(PHOTO_BUCKET)
          .upload(path, file, { contentType: file.type, upsert: false });
        if (upErr) throw upErr;

        order += 10;
        const { error: insErr } = await supabase.from("photos").insert({
          storage_path: path,
          title: slugify(file.name).replace(/-/g, " "),
          alt_text: "Photo of Parker Gawryletz",
          category: "portrait",
          sort_order: order,
        });
        if (insErr) throw insErr;
      }
      toast.success("Photos uploaded.");
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setBusy(false);
    }
  };

  const updatePhoto = async (id: string, patch: Partial<PhotoWithUrl>) => {
    setPhotos((prev) => prev.map((p) => (p.id === id ? ({ ...p, ...patch } as PhotoWithUrl) : p)));
    const { url: _url, ...dbPatch } = patch as PhotoWithUrl;
    const { error } = await supabase.from("photos").update(dbPatch).eq("id", id);
    if (error) toast.error(error.message);
  };

  const removePhoto = async (photo: PhotoWithUrl) => {
    if (!confirm(`Delete "${photo.title || photo.storage_path}"?`)) return;
    const { error } = await supabase.from("photos").delete().eq("id", photo.id);
    if (error) return toast.error(error.message);
    await supabase.storage.from(PHOTO_BUCKET).remove([photo.storage_path]);
    toast.success("Photo deleted.");
    await load();
  };

  if (loading) return null;

  if (!isAdmin) {
    return (
      <main className="min-h-screen flex items-center justify-center px-fitz-4 text-center">
        <div className="max-w-md">
          <p className="overline mb-fitz-3">Photo Library</p>
          <h1 className="text-foreground text-2xl mb-fitz-4">Admin access required</h1>
          <p className="text-muted-foreground mb-fitz-5 text-sm">
            You're signed in as {user?.email}, but this account isn't an admin yet. Ask for the admin
            role to be granted to this account, then reload this page.
          </p>
          <button
            onClick={() => supabase.auth.signOut()}
            className="text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
          >
            Sign out
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-fitz-4 md:px-fitz-6 py-fitz-8 max-w-5xl mx-auto">
      <header className="flex items-end justify-between gap-fitz-4 mb-fitz-6">
        <div>
          <p className="overline mb-fitz-2">Backend</p>
          <h1 className="text-foreground text-2xl">Parker Photo Library</h1>
          <p className="text-muted-foreground text-sm mt-fitz-2">
            {photos.length} photo{photos.length === 1 ? "" : "s"} stored
          </p>
        </div>
        <button
          onClick={() => supabase.auth.signOut()}
          className="text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
        >
          Sign out
        </button>
      </header>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          void upload(e.dataTransfer.files);
        }}
        onClick={() => fileInput.current?.click()}
        className={`cursor-pointer border border-dashed rounded-md p-fitz-7 text-center transition-colors mb-fitz-7 ${
          dragOver ? "border-gold/60 bg-gold/5" : "border-lines/30"
        }`}
      >
        <p className="text-muted-foreground text-sm">
          {busy ? "Uploading…" : "Drag photos here, or click to choose files"}
        </p>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && upload(e.target.files)}
        />
      </div>

      <div className="grid gap-fitz-5 sm:grid-cols-2">
        {photos.map((photo) => (
          <article key={photo.id} className="border border-lines/20 rounded-md overflow-hidden bg-card/30">
            <img
              src={photo.url}
              alt={photo.alt_text}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-fitz-4 grid gap-fitz-2">
              <input
                value={photo.title}
                onChange={(e) => updatePhoto(photo.id, { title: e.target.value })}
                placeholder="Title"
                className="bg-transparent border border-lines/25 rounded-sm px-2 py-1 text-sm text-foreground"
              />
              <input
                value={photo.alt_text}
                onChange={(e) => updatePhoto(photo.id, { alt_text: e.target.value })}
                placeholder="Alt text"
                className="bg-transparent border border-lines/25 rounded-sm px-2 py-1 text-sm text-foreground"
              />
              <div className="flex gap-2">
                <select
                  value={photo.category}
                  onChange={(e) => updatePhoto(photo.id, { category: e.target.value as PhotoCategory })}
                  className="flex-1 bg-transparent border border-lines/25 rounded-sm px-2 py-1 text-sm text-foreground"
                >
                  {PHOTO_CATEGORIES.map((c) => (
                    <option key={c} value={c} className="bg-background">
                      {c}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={photo.sort_order}
                  onChange={(e) => updatePhoto(photo.id, { sort_order: Number(e.target.value) })}
                  className="w-20 bg-transparent border border-lines/25 rounded-sm px-2 py-1 text-sm text-foreground"
                  aria-label="Sort order"
                />
              </div>
              <div className="flex items-center justify-between pt-fitz-2">
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={photo.is_published}
                    onChange={(e) => updatePhoto(photo.id, { is_published: e.target.checked })}
                  />
                  Published
                </label>
                <button
                  onClick={() => removePhoto(photo)}
                  className="text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-destructive"
                >
                  Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
