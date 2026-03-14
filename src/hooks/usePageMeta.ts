import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function usePageMeta({ title, description, canonical, ogImage }: PageMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${selector}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, selector);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, 'property');
    }

    setMeta('og:title', title, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('twitter:card', 'summary_large_image', 'name');
    setMeta('twitter:title', title, 'name');

    if (description) {
      setMeta('twitter:description', description, 'name');
    }

    if (ogImage) {
      setMeta('og:image', ogImage, 'property');
      setMeta('twitter:image', ogImage, 'name');
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    const url = window.location.href;
    setMeta('og:url', url, 'property');
  }, [title, description, canonical, ogImage]);
}
