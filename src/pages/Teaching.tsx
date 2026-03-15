import { lazy, Suspense } from "react";
import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { PianoKeyNav } from "@/components/PianoKeyNav";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useLocation } from "react-router-dom";
import heroTeaching from "@/assets/hero-teaching.jpg";

const TeachingSections = lazy(() => import("@/components/teaching/TeachingSections"));

const pianoSections = [
  { id: "hero", label: "The Call" },
  { id: "exhale", label: "The Language" },
  { id: "pillars", label: "Three Pillars" },
  { id: "methodology", label: "The Approach" },
  { id: "threshold", label: "Common Concerns" },
  { id: "offering", label: "Investment" },
  { id: "crossing", label: "Begin" },
];

export default function Teaching() {
  const { pathname } = useLocation();

  usePageMeta({
    title: "Piano Lessons — Parker Gawryletz | Calgary",
    description: "Piano lessons in Calgary. $60/hr. All ages and levels. Technique, expression, and devotion.",
    canonical: `${window.location.origin}${pathname}`,
    ogImage: `${window.location.origin}/og-image.jpg`,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <MinimalHeader />
      <PianoKeyNav sections={pianoSections} />

      <main id="main-content">
        <HeroStrip
          title="Learn the instrument that speaks when words fall short."
          subtitle="Piano Lessons"
          height="h-[70vh]"
          backgroundImage={heroTeaching}
          watermark="Piano"
          showScrollCue
        />

        <Suspense fallback={<div className="min-h-screen" />}>
          <TeachingSections />
        </Suspense>
      </main>

      <Footer />
      <MobileStickyBar />
      <BackToTop />
    </div>
  );
}
