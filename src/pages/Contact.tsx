import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { ContactWizard } from "@/components/contact/ContactWizard";
import { useEffect } from "react";

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
  useEffect(() => { document.title = "Contact — Parker Gawryletz"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <HeroStrip title="Tell me your story." subtitle="Get in Touch" height="h-[40vh]" />
        <Section>
          <ContactWizard steps={generalSteps} ctaLabel="Send Message" />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
