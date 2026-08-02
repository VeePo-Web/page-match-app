import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { PageTransition } from "@/components/PageTransition";
import { SkipToContent } from "@/components/SkipToContent";
import { StructuredData } from "@/components/StructuredData";
import { lazy, Suspense } from "react";

// Gateway is eagerly loaded (entry point / LCP critical)
import Gateway from "./pages/Gateway";

// All other pages are lazy-loaded for code splitting
const Weddings = lazy(() => import("./pages/Weddings"));
const Teaching = lazy(() => import("./pages/Teaching"));
const Events = lazy(() => import("./pages/Events"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Proof = lazy(() => import("./pages/Proof"));
const Listen = lazy(() => import("./pages/Listen"));
const Auth = lazy(() => import("./pages/Auth"));
const AdminPhotos = lazy(() => import("./pages/AdminPhotos"));
const NotFound = lazy(() => import("./pages/NotFound"));
// SubPages and Legal are imported dynamically via LazySubPage/LazyLegalPage helpers below

const queryClient = new QueryClient();

// Minimal loading fallback
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-6 h-6 border border-muted-foreground/20 border-t-sage rounded-full animate-spin" />
    </div>
  );
}

// Lazy wrapper for sub-page components that need named exports
function LazySubPage({ component }: { component: string }) {
  const Component = lazy(() =>
    import("./pages/SubPages").then((mod) => ({ default: (mod as any)[component] }))
  );
  return (
    <Suspense fallback={<PageFallback />}>
      <Component />
    </Suspense>
  );
}

function LazyLegalPage({ component }: { component: string }) {
  const Component = lazy(() =>
    import("./pages/Legal").then((mod) => ({ default: (mod as any)[component] }))
  );
  return (
    <Suspense fallback={<PageFallback />}>
      <Component />
    </Suspense>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes location={location}>
        <Route path="/" element={<Gateway />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/weddings/pricing" element={<LazySubPage component="WeddingsPricing" />} />
        <Route path="/weddings/about" element={<LazySubPage component="WeddingsAbout" />} />
        <Route path="/weddings/contact" element={<LazySubPage component="WeddingsContact" />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/teaching/pricing" element={<LazySubPage component="TeachingPricing" />} />
        <Route path="/teaching/about" element={<LazySubPage component="TeachingAbout" />} />
        <Route path="/teaching/contact" element={<LazySubPage component="TeachingContact" />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/about" element={<LazySubPage component="EventsAbout" />} />
        <Route path="/events/pricing" element={<LazySubPage component="EventsPricing" />} />
        <Route path="/events/contact" element={<LazySubPage component="EventsContact" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/proof" element={<Proof />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/privacy-policy" element={<LazyLegalPage component="PrivacyPolicy" />} />
        <Route path="/terms" element={<LazyLegalPage component="Terms" />} />
        <Route path="/accessibility" element={<LazyLegalPage component="Accessibility" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

const App = () => (
  <ThemeProvider>
    <StructuredData />
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SkipToContent />
          <SmoothScrollProvider>
            <PageTransition>
              <AppRoutes />
            </PageTransition>
          </SmoothScrollProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
