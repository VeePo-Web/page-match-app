import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { ContactWizard } from "@/components/contact/ContactWizard";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

import { usePageMeta } from "@/hooks/usePageMeta";
import { useLocation } from "react-router-dom";

const generalSteps = [
  {
    title: "About You",
    fields: [
      { label: "Your Name", type: "text" as const, required: true },
      { label: "Email Address", type: "email" as const, required: true },
      { label: "Phone", type: "tel" as const },
    ],
  },
  {
    title: "Your Interest",
    fields: [
      { label: "Service", options: ["Weddings", "Teaching", "Events", "Other"] },
      { label: "Date (if applicable)", type: "date" as const },
    ],
  },
  {
    title: "Your Story",
    fields: [
      { label: "Tell me about your moment", type: "textarea" as const },
    ],
  },
];

export default function Contact() {
  const { pathname } = useLocation();

  usePageMeta({
    title: "Contact — Parker Gawryletz",
    description: "Get in touch with Parker Gawryletz. Wedding piano, lessons, and live events in Calgary to Banff.",
    canonical: `${window.location.origin}${pathname}`,
    ogImage: `${window.location.origin}/og-image.jpg`,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <MinimalHeader />
      <main id="main-content">
        <HeroStrip title="Tell me your story." subtitle="Get in Touch" height="h-[40vh]" />
        <Section>
          <ContactWizard steps={generalSteps} ctaLabel="Send Message" />
        </Section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
