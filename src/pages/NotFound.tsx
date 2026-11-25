import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavLight } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, MessageCircle } from "lucide-react";

const POPULAR_LINKS = [
  { label: "Cosmetic Surgery", href: "/category/cosmetic-surgery" },
  { label: "Botox & Fillers", href: "/category/cosmetic-injectables" },
  { label: "Hair Transplant", href: "/category/hair-transplant" },
  { label: "Laser & Skincare", href: "/category/laser-skincare" },
  { label: "Dermatology", href: "/category/dermatology" },
  { label: "Breast Surgery", href: "/category/breast-surgery" },
  { label: "Intimate Wellness", href: "/category/intimate-wellness" },
  { label: "Aesthetic Insights Blog", href: "/insights" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Page Not Found | Pelle Aesthetic & Cosmetic Islamabad";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <NavLight />
      <main>
        <section className="container-luxe py-32 md:py-40 text-center">
          {/* 404 indicator */}
          <div className="font-body text-[10px] uppercase tracking-[0.35em] text-accent mb-6">
            Error 404
          </div>
          <h1 className="font-display text-6xl leading-tight md:text-8xl mb-6">
            Page Not Found
          </h1>
          <p className="font-body text-base leading-relaxed text-muted-foreground max-w-lg mx-auto mb-10 md:text-lg">
            The page you're looking for doesn't exist or may have moved.
            Browse our treatments below or contact Dr. Tasneem Elahi's team directly.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-accent px-8 py-4 font-body text-xs uppercase tracking-[0.25em] text-accent-foreground hover:opacity-90 transition-opacity"
            >
              <ArrowRight className="h-4 w-4" /> Return to Homepage
            </Link>
            <a
              href="https://wa.me/923335100650"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] px-8 py-4 font-body text-xs uppercase tracking-[0.22em] text-white hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          {/* Popular links */}
          <div className="max-w-2xl mx-auto">
            <div className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-6">
              Popular Treatments
            </div>
            <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
              {POPULAR_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  className="bg-background px-4 py-5 font-body text-xs text-foreground/70 hover:text-accent hover:bg-secondary/30 transition-colors text-center"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Sitemap link */}
          <p className="mt-10 font-body text-xs text-muted-foreground/50">
            Looking for something specific?{" "}
            <Link to="/sitemap" className="text-accent underline underline-offset-2 hover:opacity-80">
              View the full sitemap
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
