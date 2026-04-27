import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Doctor } from "@/components/site/Doctor";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Nav />
    <main>
      <Hero />
      <Services />
      <Doctor />
      <BeforeAfter />
    </main>
    <Footer />
  </div>
);

export default Index;
