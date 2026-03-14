import Navigation from "@/components/wedding/Navigation";
import RegistrySection from "@/components/wedding/RegistrySection";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import Footer from "@/components/wedding/Footer";

const Registry = () => {
  return (
    <main className="pt-16 bg-wedding-cream">
      <Navigation variant="solid" />
      <RegistrySection />
      <FullWidthImage
        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070"
        alt="Gift wrapping"
        height="h-[300px] md:h-[400px]"
      />
      <Footer />
    </main>
  );
};

export default Registry;
