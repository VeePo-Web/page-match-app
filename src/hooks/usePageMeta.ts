import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description?: string;
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (meta) {
        meta.content = description;
      }

      let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
      if (ogTitle) {
        ogTitle.content = title;
      }

      let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
      if (ogDesc) {
        ogDesc.content = description;
      }
    }
  }, [title, description]);
}
