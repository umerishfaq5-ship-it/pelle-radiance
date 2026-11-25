import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { TrustBook } from "@/components/site/TrustBook";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Doctor } from "@/components/site/Doctor";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Faq } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Marquee />
      <TrustBook />
      <Services />
      <WhyUs />
      <Doctor />
      <BeforeAfter />
      <Faq />
      <CtaBanner />
    </main>
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
