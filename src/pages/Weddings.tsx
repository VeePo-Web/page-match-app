import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { PianoKeyNav } from "@/components/PianoKeyNav";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { WeddingsHero } from "@/components/weddings";
import { usePageMeta } from "@/hooks/usePageMeta";

const WeddingsExhale = lazy(() => import("@/components/weddings/WeddingsExhale").then(m => ({ default: m.WeddingsExhale })));
const WeddingsProcess = lazy(() => import("@/components/weddings/WeddingsProcess").then(m => ({ default: m.WeddingsProcess })));
const WeddingsVowMoment = lazy(() => import("@/components/weddings/WeddingsVowMoment").then(m => ({ default: m.WeddingsVowMoment })));
const WeddingsInvitation = lazy(() => import("@/components/weddings/WeddingsInvitation").then(m => ({ default: m.WeddingsInvitation })));
const WeddingsTransformation = lazy(() => import("@/components/weddings/WeddingsTransformation").then(m => ({ default: m.WeddingsTransformation })));
const WeddingsWitness = lazy(() => import("@/components/weddings/WeddingsWitness").then(m => ({ default: m.WeddingsWitness })));
const WeddingsThreePaths = lazy(() => import("@/components/weddings/WeddingsThreePaths").then(m => ({ default: m.WeddingsThreePaths })));
const WeddingsTestimonials = lazy(() => import("@/components/weddings/WeddingsTestimonials").then(m => ({ default: m.WeddingsTestimonials })));
const WeddingsCrossing = lazy(() => import("@/components/weddings/WeddingsCrossing").then(m => ({ default: m.WeddingsCrossing })));

const pianoSections = [
  { id: "hero", label: "The Vigil" },
  { id: "exhale", label: "The Exhale" },
  { id: "process", label: "The Preparation" },
  { id: "vow-moment", label: "The Vow Moment" },
  { id: "invitation", label: "The Invitation" },
  { id: "transformation", label: "The Transformation" },
  { id: "witness", label: "The Witness" },
  { id: "three-paths", label: "The Offering" },
  { id: "testimonials", label: "Kind Words" },
  { id: "crossing", label: "The Crossing" },
];

const SectionFallback = () => <div className="min-h-[40vh]" />;

export default function Weddings() {
  const { pathname } = useLocation();

  usePageMeta({
    title: "Wedding Pianist — Parker Gawryletz | Calgary to Banff",
    description: "Wedding pianist for ceremonies in Calgary, Cochrane, Canmore & Banff. Packages from $650. Custom arrangements included.",
    canonical: `${window.location.origin}${pathname}`,
    ogImage: `${window.location.origin}/og-image.jpg`,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <MinimalHeader />
      <PianoKeyNav sections={pianoSections} />
      <main id="main-content">
        <WeddingsHero />
        <Suspense fallback={<SectionFallback />}>
          <WeddingsExhale />
          <WeddingsProcess />
          <WeddingsVowMoment />
          <WeddingsInvitation />
          <WeddingsTransformation />
          <WeddingsWitness />
          <WeddingsThreePaths />
          <WeddingsTestimonials />
          <WeddingsCrossing />
        </Suspense>
      </main>
      <Footer />
      <MobileStickyBar />
      <BackToTop />
    </div>
  );
}
