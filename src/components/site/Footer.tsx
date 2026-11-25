import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { categories } from "@/data/services";

export const Footer = () => (
  <footer id="contact" className="bg-foreground text-background">
    <div className="container-luxe grid gap-16 py-20 md:grid-cols-12 md:py-28">
      {/* Brand & Contact */}
      <div className="md:col-span-4">
        <Link to="/" className="inline-block mb-6 bg-background p-3 rounded-md shadow-sm transition-transform hover:-translate-y-1">
          <img 
            src="/logo.webp" 
            alt="Pelle Aesthetic & Cosmetic" 
            className="h-12 w-auto object-contain md:h-16" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden">
            <div className="font-display text-3xl leading-none text-foreground">Pelle</div>
            <div className="font-body text-[9px] uppercase tracking-[0.28em] mt-1 text-muted-foreground">Aesthetic &amp; Cosmetic</div>
          </div>
        </Link>

        <p className="font-body text-sm leading-relaxed text-background/65 mb-8 max-w-sm">
          Islamabad's trusted cosmetic clinic led by Dr. Tasneem Elahi (Cosmetologist) —
          offering cosmetic surgery, laser treatments, hair transplant, dermatology and more in a
          completely private environment in Islamabad.
        </p>

        {/* 30+ Years Experience badge */}
        <div className="inline-flex items-center gap-2 mb-6 border border-accent/30 bg-accent/10 px-4 py-2 rounded-sm">
          <span className="text-accent text-lg">✦</span>
          <span className="font-body text-xs uppercase tracking-[0.2em] text-accent">30+ Years of Experience</span>
        </div>

        <div className="space-y-4 font-body text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-accent shrink-0" />
            <span className="text-background/80">Plot 14, Street 32, I-8/3, Islamabad, Pakistan</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 text-accent shrink-0" />
            <a href="tel:+923335100650" className="text-background/80 hover:text-background transition-colors">
              +92 333 5100650
            </a>
          </div>
          <div className="flex items-start gap-3">
            <MessageCircle className="mt-0.5 h-4 w-4 text-accent shrink-0" />
            <a
              href="https://wa.me/923335100650"
              target="_blank"
              rel="noreferrer"
              className="text-background/80 hover:text-background transition-colors"
            >
              WhatsApp: +92 333 5100650
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4 text-accent shrink-0" />
            <a href="mailto:care@pelleaesthetic.pk" className="text-background/80 hover:text-background transition-colors">
              care@pelleaesthetic.pk
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-accent shrink-0" />
            <div className="text-background/80">
              Mon – Sat: 3:00 PM – 8:00 PM<br />
              Sunday: Closed
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://wa.me/923335100650?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] px-5 py-3 text-xs uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Booking
          </a>
          <a
            href="https://www.instagram.com/PELLE_CLINIC/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-background/20 px-5 py-3 text-xs uppercase tracking-[0.18em] text-background/80 transition-colors hover:bg-background/10"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a
            href="https://www.facebook.com/people/Pelle-Aesthetic-Cosmetic-Clinic/100091946920729/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-background/20 px-5 py-3 text-xs uppercase tracking-[0.18em] text-background/80 transition-colors hover:bg-background/10"
          >
            <Facebook className="h-4 w-4" /> Facebook
          </a>
        </div>
      </div>

      {/* Treatments + Explore columns */}
      <div className="md:col-span-4 grid grid-cols-2 gap-8">
        {/* Col 1: Treatments */}
        <div>
          <div className="font-body text-[10px] uppercase tracking-[0.28em] text-background/50 mb-6">
            Treatments
          </div>
          <div className="space-y-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className="flex items-center gap-2 font-body text-sm text-background/70 hover:text-accent transition-colors py-1"
              >
                <span className="text-accent text-sm">{c.icon}</span>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Col 2: Explore */}
        <div>
          <div className="font-body text-[10px] uppercase tracking-[0.28em] text-background/50 mb-6">
            Explore
          </div>
          <div className="space-y-2">
            <Link to="/insights" className="block font-body text-sm text-background/70 hover:text-accent transition-colors py-1">✦ Aesthetic Insights Blog</Link>
            <Link to="/sitemap" className="block font-body text-sm text-background/70 hover:text-accent transition-colors py-1">→ Sitemap</Link>
            <Link to="/welfare" className="block font-body text-sm text-background/70 hover:text-accent transition-colors py-1">→ Pelle Care Initiative</Link>
            <div className="pt-3 font-body text-[9px] uppercase tracking-[0.22em] text-background/40 mb-2">Areas We Serve</div>
            <Link to="/location/f6-f7-islamabad" className="block font-body text-sm text-background/70 hover:text-accent transition-colors py-1">→ F-6 & F-7 Islamabad</Link>
            <Link to="/location/dha-islamabad" className="block font-body text-sm text-background/70 hover:text-accent transition-colors py-1">→ DHA Islamabad</Link>
            <Link to="/location/bahria-town-islamabad" className="block font-body text-sm text-background/70 hover:text-accent transition-colors py-1">→ Bahria Town</Link>
            <Link to="/location/e11-f10-islamabad" className="block font-body text-sm text-background/70 hover:text-accent transition-colors py-1">→ E-11 & F-10</Link>
            <Link to="/location/gulberg-greens-islamabad" className="block font-body text-sm text-background/70 hover:text-accent transition-colors py-1">→ Gulberg Greens</Link>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="md:col-span-4">
        <div className="font-body text-[10px] uppercase tracking-[0.28em] text-background/50 mb-6">
          Find Us — I-8, Islamabad
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden bg-background/5 ring-1 ring-background/10 mb-6">
          <iframe
            title="Pelle Aesthetic & Cosmetic location — Plot 14, Street 32, I-8/3 Islamabad"
            src="https://www.google.com/maps?q=Pelle+Aesthetic+%26+Cosmetic+Clinic+I-8+Islamabad+Pakistan&output=embed"
            className="h-full w-full grayscale-[40%] contrast-[1.05]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="font-body text-xs text-background/50 leading-relaxed">
          <strong className="text-background/70">Pelle Aesthetic &amp; Cosmetic</strong><br />
          Best Cosmetic Surgery Clinic in Islamabad · I-8 Sector<br />
          Dr. Tasneem Elahi — Cosmetologist<br />
          Serving Islamabad, Rawalpindi &amp; all Pakistan
        </div>
      </div>
    </div>

    <div className="border-t border-background/10">
      <div className="container-luxe flex flex-col items-start justify-between gap-3 py-7 font-body text-xs text-background/40 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Pelle Aesthetic &amp; Cosmetic · All Rights Reserved</span>
        <div className="flex items-center gap-4">
          <span>Dr. Tasneem Elahi · Cosmetologist · 30+ Years · I-8, Islamabad</span>
          <Link to="/sitemap" className="text-background/40 hover:text-background/70 transition-colors underline underline-offset-2">Sitemap</Link>
        </div>
      </div>
    </div>
  </footer>
);