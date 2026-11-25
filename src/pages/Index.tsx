import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Doctor } from "@/components/site/Doctor";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { AppointmentPopup } from "@/components/site/AppointmentPopup";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { GeoDataLayer } from "@/components/site/GeoDataLayer";
import { BackToTopFAB } from "@/components/site/BackToTopFAB";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Nav />
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Doctor />
      <BeforeAfter />
      <AppointmentForm />
      <FAQ />
      <GeoDataLayer />
    </main>
    <Footer />
    <WhatsAppFAB />
    <BackToTopFAB />
    <AppointmentPopup />
  </div>
);

export default Index;
