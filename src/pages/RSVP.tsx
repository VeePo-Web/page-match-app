import Navigation from "@/components/wedding/Navigation";
import RSVPSection from "@/components/wedding/RSVPSection";
import FAQSection from "@/components/wedding/FAQSection";
import FullWidthImage from "@/components/wedding/FullWidthImage";
import Footer from "@/components/wedding/Footer";

const RSVP = () => {
  return (
    <main className="pt-16 bg-wedding-cream">
      <Navigation variant="solid" />
      <RSVPSection />
      <FAQSection />
      <FullWidthImage
        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
        alt="Couple celebrating"
        height="h-[300px] md:h-[400px]"
      />
      <Footer />
    </main>
  );
};

export default RSVP;
