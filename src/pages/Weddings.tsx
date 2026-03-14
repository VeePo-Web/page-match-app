import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { PianoKeyNav } from "@/components/PianoKeyNav";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { useEffect } from "react";
import {
  WeddingsHero,
  WeddingsExhale,
  WeddingsProcess,
  WeddingsVowMoment,
  WeddingsInvitation,
  WeddingsTransformation,
  WeddingsWitness,
  WeddingsThreePaths,
  WeddingsTestimonials,
  WeddingsCrossing,
} from "@/components/weddings";

const pianoSections = [
  { id: "hero", label: "The Vigil" },
  { id: "exhale", label: "The Exhale" },
  { id: "process", label: "The Preparation", isBlackKey: true },
  { id: "vow-moment", label: "The Vow Moment" },
  { id: "invitation", label: "The Invitation", isBlackKey: true },
  { id: "transformation", label: "The Transformation" },
  { id: "witness", label: "The Witness", isBlackKey: true },
  { id: "three-paths", label: "The Offering" },
  { id: "testimonials", label: "Kind Words", isBlackKey: true },
  { id: "crossing", label: "The Crossing" },
];

export default function Weddings() {
  useEffect(() => {
    document.title = "Parker Gawryletz — Wedding Pianist, Calgary to Banff";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <PianoKeyNav sections={pianoSections} />
      <main>
        <WeddingsHero />
        <WeddingsExhale />
        <WeddingsProcess />
        <WeddingsVowMoment />
        <WeddingsInvitation />
        <WeddingsTransformation />
        <WeddingsWitness />
        <WeddingsThreePaths />
        <WeddingsTestimonials />
        <WeddingsCrossing />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
