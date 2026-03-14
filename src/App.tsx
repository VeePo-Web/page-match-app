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

import Gateway from "./pages/Gateway";
import Weddings from "./pages/Weddings";
import Teaching from "./pages/Teaching";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Proof from "./pages/Proof";
import Listen from "./pages/Listen";
import NotFound from "./pages/NotFound";
import {
  WeddingsPricing, WeddingsAbout, WeddingsContact,
  TeachingPricing, TeachingAbout, TeachingContact,
  EventsAbout, EventsPricing, EventsContact,
} from "./pages/SubPages";
import { PrivacyPolicy, Terms, Accessibility } from "./pages/Legal";

const queryClient = new QueryClient();

function AppRoutes() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Gateway />} />
      <Route path="/weddings" element={<Weddings />} />
      <Route path="/weddings/pricing" element={<WeddingsPricing />} />
      <Route path="/weddings/about" element={<WeddingsAbout />} />
      <Route path="/weddings/contact" element={<WeddingsContact />} />
      <Route path="/teaching" element={<Teaching />} />
      <Route path="/teaching/pricing" element={<TeachingPricing />} />
      <Route path="/teaching/about" element={<TeachingAbout />} />
      <Route path="/teaching/contact" element={<TeachingContact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/about" element={<EventsAbout />} />
      <Route path="/events/pricing" element={<EventsPricing />} />
      <Route path="/events/contact" element={<EventsContact />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/proof" element={<Proof />} />
      <Route path="/listen" element={<Listen />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <ThemeProvider>
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
