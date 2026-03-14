import Navigation from "@/components/wedding/Navigation";
import ThingsToDoSection from "@/components/wedding/ThingsToDoSection";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import Footer from "@/components/wedding/Footer";

const ThingsToDo = () => {
  return (
    <main className="pt-16 bg-wedding-cream">
      <Navigation variant="solid" />
      <ThingsToDoSection />
      <FullWidthImage
        src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070"
        alt="Joshua Tree landscape"
        height="h-[300px] md:h-[400px]"
      />
      <Footer />
    </main>
  );
};

export default ThingsToDo;
