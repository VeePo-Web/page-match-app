import { useQuery } from "@tanstack/react-query";
import { fetchPhotos, type PhotoCategory } from "@/lib/photos";

/**
 * Read the shared Parker photo library from the backend.
 * Pass a category to narrow the results.
 */
export function usePhotos(category?: PhotoCategory) {
  return useQuery({
    queryKey: ["photos", category ?? "all"],
    queryFn: () => fetchPhotos(category),
    staleTime: 5 * 60 * 1000,
  });
}
