import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export const PHOTO_BUCKET = "parker-photos";

export type Photo = Database["public"]["Tables"]["photos"]["Row"];
export type PhotoCategory = Database["public"]["Enums"]["photo_category"];

export const PHOTO_CATEGORIES: PhotoCategory[] = [
  "wedding",
  "live",
  "teaching",
  "portrait",
  "archive",
];

/** One year, in seconds — signed URLs for the private photo bucket. */
const SIGNED_URL_TTL = 60 * 60 * 24 * 365;

export interface PhotoWithUrl extends Photo {
  url: string;
}

/** Fetch photos (optionally filtered by category) with usable image URLs. */
export async function fetchPhotos(category?: PhotoCategory): Promise<PhotoWithUrl[]> {
  let query = supabase
    .from("photos")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (category) query = query.eq("category", category);

  const { data, error } = await query;
  if (error) throw error;
  if (!data?.length) return [];

  const { data: signed, error: signError } = await supabase.storage
    .from(PHOTO_BUCKET)
    .createSignedUrls(
      data.map((p) => p.storage_path),
      SIGNED_URL_TTL
    );
  if (signError) throw signError;

  const urlByPath = new Map((signed ?? []).map((s) => [s.path ?? "", s.signedUrl]));

  return data.map((p) => ({ ...p, url: urlByPath.get(p.storage_path) ?? "" }));
}
