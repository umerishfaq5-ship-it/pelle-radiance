import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Menu, X, ChevronDown, Phone } from "lucide-react";
import { categories } from "@/data/services";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { to: "/#doctor", label: "About Dr. Tasneem" },
    { to: "/#results", label: "Results" },
    { to: "/welfare", label: "Welfare" },
    { to: "/insights", label: "Insights", isRoute: true },
    { to: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container-luxe flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="group flex-shrink-0 flex items-center bg-background/90 p-2 rounded-md shadow-sm transition-transform hover:scale-105">
            <img 
              src="/logo.webp" 
              alt="Pelle Aesthetic & Cosmetic" 
              className="h-10 w-auto object-contain md:h-12" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden px-2">
              <div className={`font-display text-2xl leading-none transition-colors text-foreground`}>Pelle</div>
              <div className={`font-body text-[9px] uppercase tracking-[0.28em] mt-0.5 transition-colors text-muted-foreground`}>Aesthetic &amp; Cosmetic</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {/* Services Mega Dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`inline-flex items-center gap-1.5 font-body text-sm tracking-wide transition-colors ${
                  "text-foreground/80 hover:text-foreground"
                }`}
              >
                Treatments
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[680px] bg-background border border-border shadow-elegant rounded-sm p-6 grid grid-cols-3 gap-3"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="col-span-3 mb-2">
                    <div className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground">All Treatment Categories</div>
                  </div>
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/category/${cat.slug}`}
                      className="group flex items-start gap-3 rounded-sm p-3 hover:bg-secondary/60 transition-colors"
                    >
                      <span className="text-accent text-lg leading-none mt-0.5 shrink-0">{cat.icon}</span>
                      <div>
                        <div className="font-body text-sm font-medium text-foreground group-hover:text-primary">{cat.name}</div>
                        <div className="font-body text-xs text-muted-foreground mt-0.5 italic">{cat.short}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`link-underline font-body text-sm tracking-wide transition-colors ${
                    "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.to}
                  href={l.to}
                  className={`link-underline font-body text-sm tracking-wide transition-colors ${
                    "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+923335100650"
              className={`inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] transition-colors ${
                "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              +92 333 5100650
            </a>
            <a
              href="https://wa.me/923335100650?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Pelle%20Aesthetic%20%26%20Cosmetic."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors text-foreground`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-background transition-all duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-10 px-6 overflow-y-auto">
          <div className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-6">All Treatments</div>
          <div className="grid grid-cols-1 gap-1 mb-10">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="flex items-center gap-4 py-4 border-b border-border/40 group"
              >
                <span className="text-accent text-xl w-8 text-center shrink-0">{cat.icon}</span>
                <div>
                  <div className="font-body text-base font-medium text-foreground group-hover:text-primary transition-colors">{cat.name}</div>
                  <div className="font-body text-xs text-muted-foreground italic">{cat.short}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="space-y-4 mb-10">
            {navLinks.map((l) => (
              <a
                key={l.to}
                href={l.to}
                className="block font-body text-lg text-foreground/80 hover:text-foreground py-2 border-b border-border/30 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-3">
            <a
              href="https://wa.me/923335100650?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Pelle%20Aesthetic%20%26%20Cosmetic."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-accent w-full py-4 text-sm uppercase tracking-[0.2em] text-accent-foreground font-body"
            >
              <MessageCircle className="h-4 w-4" />
              Book via WhatsApp
            </a>
            <a
              href="tel:+923335100650"
              className="flex items-center justify-center gap-2 border border-border w-full py-4 text-sm uppercase tracking-[0.2em] text-foreground font-body"
            >
              <Phone className="h-4 w-4" />
              Call the Clinic
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export const NavLight = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { to: "/#doctor", label: "About Dr. Tasneem" },
    { to: "/#results", label: "Results" },
    { to: "/welfare", label: "Welfare" },
    { to: "/insights", label: "Insights", isRoute: true },
    { to: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur-xl transition-shadow ${scrolled ? "shadow-soft" : ""}`}>
        <div className="container-luxe flex items-center justify-between py-4">
          <Link to="/" className="group flex items-center bg-background p-1.5 rounded-md transition-transform hover:scale-105">
            <img 
              src="/logo.webp" 
              alt="Pelle Aesthetic & Cosmetic" 
              className="h-10 w-auto object-contain md:h-12" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden px-2">
              <div className="font-display text-2xl leading-none text-foreground">Pelle</div>
              <div className="font-body text-[9px] uppercase tracking-[0.28em] mt-0.5 text-muted-foreground">Aesthetic &amp; Cosmetic</div>
            </div>
          </Link>
          
          <nav className="hidden items-center gap-8 lg:flex">
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
                className="inline-flex items-center gap-1.5 font-body text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              >
                Treatments
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[680px] bg-background border border-border shadow-elegant rounded-sm p-6 grid grid-cols-3 gap-3"
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="col-span-3 mb-2">
                    <div className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground">All Treatment Categories</div>
                  </div>
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/category/${cat.slug}`}
                      className="group flex items-start gap-3 rounded-sm p-3 hover:bg-secondary/60 transition-colors"
                    >
                      <span className="text-accent text-lg leading-none mt-0.5 shrink-0">{cat.icon}</span>
                      <div>
                        <div className="font-body text-sm font-medium text-foreground group-hover:text-primary">{cat.name}</div>
                        <div className="font-body text-xs text-muted-foreground mt-0.5 italic">{cat.short}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.to}
                  to={l.to}
                  className="link-underline font-body text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.to}
                  href={l.to}
                  className="link-underline font-body text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              )
            )}
          </nav>

          <a
            href="https://wa.me/923335100650?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90 lg:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Book Now
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-background pt-20 px-6 lg:hidden overflow-y-auto">
          <div className="space-y-4 mt-6">
            {categories.map((cat) => (
              <Link key={cat.slug} to={`/category/${cat.slug}`} className="flex items-center gap-3 py-3 border-b border-border/40 font-body text-foreground">
                <span className="text-accent">{cat.icon}</span> {cat.name}
              </Link>
            ))}
          </div>
          <a
            href="https://wa.me/923335100650"
            className="mt-8 flex items-center justify-center gap-2 bg-accent w-full py-4 text-sm uppercase tracking-[0.2em] text-accent-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Book Now
          </a>
        </div>
      )}
    </>
  );
};