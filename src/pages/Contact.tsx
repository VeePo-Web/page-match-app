import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

import { usePageMeta } from "@/hooks/usePageMeta";
import { useLocation } from "react-router-dom";
import contactHeroBg from "@/assets/contact-hero-bg.jpg";
import contactFormBg from "@/assets/contact-form-bg.jpg";

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
          <ContactForm serviceContext="General" ctaLabel="Send Message" />
        </Section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
