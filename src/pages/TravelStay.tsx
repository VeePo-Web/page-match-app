import Navigation from "@/components/wedding/Navigation";
import TravelSection from "@/components/wedding/TravelSection";
import AccommodationsSection from "@/components/wedding/AccommodationsSection";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import Footer from "@/components/wedding/Footer";

const TravelStay = () => {
  return (
    <main className="pt-16 bg-wedding-cream">
      <Navigation variant="solid" />
      <TravelSection />
      <AccommodationsSection />
      <FullWidthImage
        src="https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069"
        alt="Desert road"
        height="h-[300px] md:h-[400px]"
      />
      <Footer />
    </main>
  );
};

export default TravelStay;
