import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => (
  <footer id="contact" className="bg-foreground text-background">
    <div className="container-luxe grid gap-16 py-24 md:grid-cols-12">
      <div className="md:col-span-5">
        <div className="eyebrow !text-accent">Visit the Clinic</div>
        <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
          A sanctuary in <em className="text-accent">I-8, Islamabad.</em>
        </h2>
        <p className="mt-8 max-w-md font-body text-base leading-relaxed text-background/70">
          Step into a private space designed for discretion, comfort and quiet luxury — where every detail of your care is curated.
        </p>

        <div className="mt-10 space-y-5 font-body text-sm">
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 h-4 w-4 text-accent" />
            <span className="text-background/85">Plot 14, Street 32, I-8/3, Islamabad, Pakistan</span>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-0.5 h-4 w-4 text-accent" />
            <span className="text-background/85">+92 300 000 0000</span>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-0.5 h-4 w-4 text-accent" />
            <span className="text-background/85">care@pelleaesthetic.pk</span>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="mt-0.5 h-4 w-4 text-accent" />
            <span className="text-background/85">Mon — Sat · 11:00 to 20:00</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://wa.me/923000000000"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-xs uppercase tracking-[0.22em] text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Booking
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-background/30 px-6 py-3.5 text-xs uppercase tracking-[0.22em] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            <Instagram className="h-4 w-4" /> @pelle.aesthetic
          </a>
        </div>
      </div>

      <div className="md:col-span-7">
        <div className="aspect-[4/3] w-full overflow-hidden bg-background/5 ring-1 ring-background/10">
          <iframe
            title="Pelle Aesthetic & Cosmetic location"
            src="https://www.google.com/maps?q=I-8%20Islamabad%20Pakistan&output=embed"
            className="h-full w-full grayscale-[40%] contrast-[1.05]"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div className="border-t border-background/10">
      <div className="container-luxe flex flex-col items-start justify-between gap-3 py-8 font-body text-xs uppercase tracking-[0.2em] text-background/50 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Pelle Aesthetic & Cosmetic</span>
        <span>Dr. Tasneem Elahi · MBBS · Cosmetologist</span>
      </div>
    </div>
  </footer>
);