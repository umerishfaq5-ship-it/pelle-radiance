import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Instagram, MapPin, Menu, Phone, X, ChevronDown } from "lucide-react";
import { categories } from "@/data/services";
import { site, whatsappLink } from "@/data/site";

const links = [
  { href: "/#doctor", label: "About Doctor" },
  { href: "/#results", label: "Results" },
  { href: "/#why", label: "Why Pelle" },
  { href: "/#contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden bg-foreground text-background/80 md:block">
        <div className="container-luxe flex items-center justify-between py-2.5 font-body text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-accent" />{site.location}</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-accent" />{site.hours}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-background"><Phone className="h-3.5 w-3.5 text-accent" />{site.phoneDisplay}</a>
            <a href={site.instagram} aria-label="Instagram" className="hover:text-background"><Instagram className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md transition-shadow ${scrolled ? "shadow-soft" : "border-b border-border/70"}`}
      >
        <div className="container-luxe flex items-center justify-between py-4">
          <Link to="/" className="shrink-0">
            <div className="font-display text-3xl leading-none text-foreground">Pelle</div>
            <div className="eyebrow mt-1 !text-[9px]">Aesthetic & Cosmetic</div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <div className="group relative">
              <a href="/#services" className="inline-flex items-center gap-1 font-body text-sm text-foreground/80 hover:text-primary">
                Treatments <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </a>
              <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-card p-3 shadow-elegant">
                  {categories.map((c) => (
                    <Link key={c.slug} to={`/category/${c.slug}`} className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-secondary/60">
                      <img src={c.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                      <div>
                        <div className="font-body text-sm font-medium text-foreground">{c.name}</div>
                        <div className="font-body text-xs text-muted-foreground">{c.short}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="font-body text-sm text-foreground/80 hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink("Hello, I would like to book a consultation at Pelle.")}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-primary px-6 py-3 font-body text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-foreground sm:inline-flex"
            >
              Book Appointment
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container-luxe py-4">
              <div className="eyebrow mb-2">Treatments</div>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((c) => (
                  <Link key={c.slug} to={`/category/${c.slug}`} onClick={() => setOpen(false)} className="rounded-lg bg-secondary/50 px-3 py-2.5 font-body text-sm">
                    {c.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-border/60 py-3 font-body text-sm">
                    {l.label}
                  </a>
                ))}
              </div>
              <a
                href={whatsappLink("Hello, I would like to book a consultation at Pelle.")}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex justify-center rounded-full bg-primary px-6 py-3.5 font-body text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
