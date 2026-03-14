import { useEffect, lazy, Suspense } from "react";
import { setPageMeta } from "@/lib/seo";
import HeroSection from "@/components/wedding/HeroSection";
import BrandPromiseSection from "@/components/wedding/BrandPromiseSection";
import TrustBarSection from "@/components/wedding/TrustBarSection";
import NowBookingSection from "@/components/wedding/NowBookingSection";
import ScrollProgress from "@/components/wedding/ScrollProgress";
import BackToTop from "@/components/wedding/BackToTop";
import SectionIndicator from "@/components/wedding/SectionIndicator";
import venueImage from "@/assets/portfolio-venue.jpg";
import rockiesImage from "@/assets/service-area-rockies.jpg";

// Lazy-load below-fold sections
const ServicesOverviewSection = lazy(() => import("@/components/wedding/ServicesOverviewSection"));
const VendorShowcaseSection = lazy(() => import("@/components/wedding/VendorShowcaseSection"));
const EditorialImageBreak = lazy(() => import("@/components/wedding/EditorialImageBreak"));
const TestimonialSection = lazy(() => import("@/components/wedding/TestimonialSection"));
const EditorialSplitSection = lazy(() => import("@/components/wedding/EditorialSplitSection"));
const EditorialQuoteRibbon = lazy(() => import("@/components/wedding/EditorialQuoteRibbon"));
const GallerySection = lazy(() => import("@/components/wedding/GallerySection"));
const LoveQuoteSection = lazy(() => import("@/components/wedding/LoveQuoteSection"));
const ProcessTeaserSection = lazy(() => import("@/components/wedding/ProcessTeaserSection"));
const FullWidthImage = lazy(() => import("@/components/wedding/FullWidthImage"));
const FounderTeaserSection = lazy(() => import("@/components/wedding/FounderTeaserSection"));
const StatsSection = lazy(() => import("@/components/wedding/StatsSection"));
const PressMentionsSection = lazy(() => import("@/components/wedding/PressMentionsSection"));
const BrandManifestoSection = lazy(() => import("@/components/wedding/BrandManifestoSection"));
const FilmstripSection = lazy(() => import("@/components/wedding/FilmstripSection"));
const InstagramSection = lazy(() => import("@/components/wedding/InstagramSection"));
const JournalTeaserSection = lazy(() => import("@/components/wedding/JournalTeaserSection"));
const CTASection = lazy(() => import("@/components/wedding/CTASection"));
const Footer = lazy(() => import("@/components/wedding/Footer"));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hickory & Rose Wedding and Event Planning",
  "description": "Edmonton's luxury wedding planner specializing in refined rustic elegance. Day-of coordination, partial & full-service planning.",
  "url": "https://hickoryandrose.com",
  "telephone": "",
  "email": "sales@hickoryandrose.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Edmonton",
    "addressRegion": "Alberta",
    "addressCountry": "CA"
  },
  "areaServed": [
    "Edmonton", "Jasper", "Banff", "Lake Louise", "Calgary", "Canadian Rockies"
  ],
  "priceRange": "$$$$",
  "foundingDate": "2018",
  "sameAs": ["https://www.instagram.com/hickoryandrose"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "75"
  }
};

// Force rebuild v2
const Index = () => {
  useEffect(() => {
    setPageMeta({
      title: "Hickory & Rose — Luxury Wedding Planner in Edmonton, Alberta",
      description: "Edmonton's luxury wedding planner specializing in refined rustic elegance. Day-of coordination, partial & full-service planning. Calm leadership, elevated design.",
      path: "/",
    });

    // Inject JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    script.id = "jsonld-local-business";
    const existing = document.getElementById("jsonld-local-business");
    if (existing) existing.remove();
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <main id="main-content" className="overflow-hidden">
      <ScrollProgress />
      <BackToTop />
      <SectionIndicator />
      <HeroSection />
      <BrandPromiseSection />
      <TrustBarSection />
      <NowBookingSection />
      <Suspense fallback={null}>
        <ServicesOverviewSection />
        <EditorialQuoteRibbon
          quote="Your wedding day should be felt, not managed."
          attribution="Hickory & Rose"
          direction="left"
        />
        <GallerySection />
        <EditorialImageBreak />
        <TestimonialSection />
        <EditorialSplitSection />
        <LoveQuoteSection />
        <ProcessTeaserSection />
        <FullWidthImage
          src={venueImage}
          alt="Rustic barn wedding venue at twilight with warm string lights and mountain backdrop"
          height="h-[50vh] md:h-[60vh]"
          overlay
          caption="Edmonton · Alberta · The Canadian Rockies"
        />
        <FounderTeaserSection />
        <StatsSection />
        <EditorialQuoteRibbon
          quote="Every detail, placed with intention. Every moment, protected."
          direction="right"
        />
        <PressMentionsSection />
        <BrandManifestoSection />
        <FullWidthImage
          src={rockiesImage}
          alt="Cinematic aerial view of the Canadian Rocky Mountains at golden hour with alpine lake and evergreen forests"
          height="h-[45vh] md:h-[55vh]"
          overlay
          caption="Serving Edmonton · Jasper · Banff · Lake Louise · The Canadian Rockies"
        />
        <FilmstripSection />
        <VendorShowcaseSection />
        <CTASection />
        <InstagramSection />
        <JournalTeaserSection />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
