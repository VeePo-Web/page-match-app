import BranchDecoration from "./BranchDecoration";
import ScrollReveal from "./ScrollReveal";
import { Gift, Heart, Home, Plane } from "lucide-react";
import { toast } from "sonner";

const registries = [
  { name: "Crate & Barrel", url: "https://www.crateandbarrel.com/gift-registry", icon: Home },
  { name: "Target", url: "https://www.target.com/gift-registry", icon: Gift },
  { name: "Williams Sonoma", url: "https://www.williams-sonoma.com/registry", icon: Heart },
];

const RegistrySection = () => {
  const handleRegistryClick = (name: string, url: string) => {
    toast.success(`Opening ${name} registry`, {
      description: "Search for 'Alicia Mitchell & Andres Garcia'",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleHoneymoonFund = () => {
    toast.success("Thank you for your generosity!", {
      description: "Redirecting to honeymoon fund...",
    });
    // In a real app, this would link to Venmo, PayPal, or a honeymoon registry
    window.open("https://www.honeyfund.com", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-wedding-cream py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        {/* Decoration */}
        <ScrollReveal className="flex justify-center mb-12">
          <BranchDecoration />
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif-wedding text-4xl md:text-5xl text-wedding-text mb-4">
            Registry
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-sans-wedding text-wedding-text-light max-w-2xl mx-auto mb-4 leading-relaxed">
            Truly, being there is more than enough. But if you'd like to give something, 
            we've listed a few places below.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-sans-wedding text-wedding-text-light max-w-2xl mx-auto mb-12 leading-relaxed">
            We're also saving for a trip to Italy—any contribution toward that would mean 
            the world to us.
          </p>
        </ScrollReveal>

        {/* Registry Logos */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          {registries.map((registry, index) => (
            <ScrollReveal key={registry.name} delay={0.1 * index}>
              <button
                onClick={() => handleRegistryClick(registry.name, registry.url)}
                className="group flex flex-col items-center gap-3 px-8 py-6 bg-white border-2 border-wedding-sage/20 rounded-lg hover:border-wedding-sage hover:shadow-lg transition-all duration-300 min-w-[200px] cursor-pointer"
              >
                <registry.icon className="w-8 h-8 text-wedding-sage group-hover:scale-110 transition-transform" />
                <span className="font-serif-wedding text-xl text-wedding-text group-hover:text-wedding-sage transition-colors">
                  {registry.name}
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Honeymoon Fund */}
        <ScrollReveal delay={0.5}>
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg border-2 border-wedding-teal/20">
            <Plane className="w-10 h-10 text-wedding-teal mx-auto mb-4" />
            <h3 className="font-serif-wedding text-2xl text-wedding-text mb-3">
              Honeymoon Fund
            </h3>
            <p className="font-sans-wedding text-sm text-wedding-text-light mb-6">
              We're planning a trip to the Amalfi Coast after the wedding. 
              If you'd like to be part of that, we'd be so grateful.
            </p>
            <button
              onClick={handleHoneymoonFund}
              className="inline-block bg-wedding-teal text-white font-sans-wedding text-sm px-8 py-3 rounded-full hover:bg-wedding-teal-light transition-colors cursor-pointer"
            >
              Contribute
            </button>
          </div>
        </ScrollReveal>

        {/* Thank You Note */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 max-w-lg mx-auto">
            <p className="font-script text-3xl text-wedding-sage mb-4">Thank You</p>
            <p className="font-sans-wedding text-sm text-wedding-text-light italic">
              We're grateful for your kindness and your presence in our lives. 
              That's really what matters most.
            </p>
            <p className="font-serif-wedding text-lg text-wedding-text mt-4">
              — Alicia & Andres
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegistrySection;
