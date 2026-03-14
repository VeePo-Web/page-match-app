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
import heroEvents from "@/assets/hero-events.jpg";

const EventsSections = lazy(() => import("@/components/events/EventsSections"));

const pianoSections = [
  { id: "hero", label: "The Atmosphere" },
  { id: "exhale", label: "Why Live Piano" },
  { id: "occasions", label: "Occasions", isBlackKey: true },
  { id: "approach", label: "The Approach" },
  { id: "threshold", label: "Concerns", isBlackKey: true },
  { id: "offering", label: "Three Presences" },
  { id: "crossing", label: "Begin" },
];

export default function Events() {
  const { pathname } = useLocation();

  usePageMeta({
    title: "Live Events — Parker Gawryletz | Calgary & Banff",
    description: "Live piano for corporate galas, private dinners, and memorial services. Calgary to Banff.",
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
          title="Live piano for moments that demand presence."
          subtitle="Live Events"
          height="h-[70vh]"
          backgroundImage={heroEvents}
          watermark="Events"
          showScrollCue
        />

        <Suspense fallback={<div className="min-h-screen" />}>
          <EventsSections />
        </Suspense>
      </main>

      <Footer />
      <MobileStickyBar />
      <BackToTop />
    </div>
  );
}
