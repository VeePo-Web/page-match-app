import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const LocationSection = () => {
  const handleMapClick = () => {
    toast.success("Opening Google Maps", {
      description: "Getting directions to Joshua Tree Carmine Resort",
    });
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Joshua+Tree+CA",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+17605550123";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:sales@hickoryandrose.com";
  };

  return (
    <section className="bg-wedding-sage py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Label */}
        <ScrollReveal>
          <p className="font-sans-wedding text-sm tracking-widest uppercase text-white/80 text-center mb-4">
            The Location
          </p>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif-wedding text-4xl md:text-5xl lg:text-6xl text-white text-center mb-8">
            Joshua Tree Carmine Resort
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.2}>
          <p className="font-sans-wedding text-white/90 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            The resort sits in the heart of the Mojave, surrounded by Joshua trees and 
            wide desert sky. It's a quiet, beautiful place—and we can't wait to share it with you.
          </p>
        </ScrollReveal>

        {/* Contact Info */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button
              onClick={handleMapClick}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <MapPin size={18} />
              <span className="font-sans-wedding text-sm">62405 Verbena Rd, Joshua Tree, CA 92252</span>
            </button>
            <button
              onClick={handlePhoneClick}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <Phone size={18} />
              <span className="font-sans-wedding text-sm">(760) 555-0123</span>
            </button>
            <button
              onClick={handleEmailClick}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <Mail size={18} />
              <span className="font-sans-wedding text-sm">sales@hickoryandrose.com</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Map Link */}
        <ScrollReveal delay={0.4}>
          <div className="flex justify-center mb-16">
            <button
              onClick={handleMapClick}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-sans-wedding text-sm px-6 py-3 rounded-full transition-colors cursor-pointer"
            >
              <ExternalLink size={16} />
              View on Google Maps
            </button>
          </div>
        </ScrollReveal>

        {/* Image */}
        <ScrollReveal delay={0.5}>
          <div className="max-w-5xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070"
              alt="Joshua Tree Carmine Resort"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-sm shadow-2xl"
            />
          </div>
        </ScrollReveal>

        {/* Venue Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <ScrollReveal delay={0.6}>
            <div className="text-center">
              <h4 className="font-serif-wedding text-xl text-white mb-2">Ceremony</h4>
              <p className="font-sans-wedding text-sm text-white/80">
                Outdoor ceremony space with panoramic desert views
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.7}>
            <div className="text-center">
              <h4 className="font-serif-wedding text-xl text-white mb-2">Reception</h4>
              <p className="font-sans-wedding text-sm text-white/80">
                Grand ballroom with floor-to-ceiling windows
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.8}>
            <div className="text-center">
              <h4 className="font-serif-wedding text-xl text-white mb-2">Cocktails</h4>
              <p className="font-sans-wedding text-sm text-white/80">
                Sunset terrace overlooking Joshua Tree National Park
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
