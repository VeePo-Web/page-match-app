import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { usePageMeta } from "@/hooks/usePageMeta";

function LegalPage({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  usePageMeta({ title: `${title} — Parker Gawryletz`, description });
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main id="main-content">
        <HeroStrip title={title} height="h-[35vh]" />
        <Section>
          <div className="max-w-2xl mx-auto text-muted-foreground space-y-fitz-5">
            {children}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" description="How Parker Gawryletz collects, uses, and protects your information.">
      <p>Your privacy matters. This policy explains how Parker Gawryletz collects, uses, and protects your information when you visit this website or inquire about services.</p>
      <p>We collect only the information you provide through contact forms (name, email, phone, event details). This information is used solely to respond to your inquiry and plan your event.</p>
      <p>We do not sell, share, or distribute your personal information to third parties. Your data is stored securely and retained only as long as necessary to fulfil your request.</p>
      <p>For questions about this policy, contact parker@parkergawryletz.com.</p>
    </LegalPage>
  );
}

export function Terms() {
  return (
    <LegalPage title="Terms of Service" description="Terms of service for Parker Gawryletz's music services website.">
      <p>By using this website, you agree to these terms. This website is provided for informational purposes about Parker Gawryletz's music services.</p>
      <p>All content, including text, images, and design, is the property of Parker Gawryletz and may not be reproduced without permission.</p>
      <p>Service agreements, pricing, and availability are subject to confirmation via direct communication.</p>
    </LegalPage>
  );
}

export function Accessibility() {
  return (
    <LegalPage title="Accessibility Statement" description="Parker Gawryletz's commitment to web accessibility and WCAG 2.1 compliance.">
      <p>Parker Gawryletz is committed to ensuring this website is accessible to all visitors, including those with disabilities.</p>
      <p>This website strives to conform to WCAG 2.1 Level AA guidelines. We use semantic HTML, keyboard navigation support, screen reader compatibility, and sufficient color contrast.</p>
      <p>If you encounter any accessibility barriers, please contact parker@parkergawryletz.com and we will work to resolve the issue promptly.</p>
    </LegalPage>
  );
}
