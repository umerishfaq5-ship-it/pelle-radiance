const hero = "/treatment-images/hero-dr-tasneem.webp";
import { ArrowRight, CheckCircle2, Clock, MessageCircle, Phone, Star } from "lucide-react";

const highlights = ["Certified Cosmetologist", "30+ Years Experience", "5,000+ Patients", "100% Private Clinic"];

export const Hero = () => (
  <section className="relative isolate w-full overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
    <div className="container-luxe grid items-center gap-12 pb-20 pt-32 md:pt-36 lg:min-h-[88svh] lg:grid-cols-12 lg:pb-16">
      {/* Text */}
      <div className="animate-fade-up lg:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-4 py-1.5 font-body text-xs font-medium text-primary">
          Pelle Aesthetic &amp; Cosmetic · Islamabad
        </div>

        <h1 className="mt-6 text-[clamp(2.25rem,4.6vw,3.9rem)] leading-[1.12] text-foreground text-balance">
          Skin, Hair &amp; <em className="text-primary">Aesthetic Clinic</em> in Islamabad
        </h1>

        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          From acne, pigmentation and melasma to laser hair removal, HydraFacial, hair transplant, Botox and
          rhinoplasty — every treatment at Pelle is planned by <strong className="font-semibold text-foreground">Dr. Tasneem Elahi</strong> (Cosmetologist,
          30+ years) at our private clinic in I-8/3, Islamabad.
        </p>

        <ul className="mt-7 grid max-w-xl grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {highlights.map((t) => (
            <li key={t} className="flex items-center gap-2.5 font-body text-sm text-foreground/80">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {t}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#appointment"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#results"
            className="rounded-full border border-border bg-background px-8 py-3.5 font-body text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Before and After
          </a>
          <a
            href="https://wa.me/+923335100650?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Pelle%20Aesthetic%20%26%20Cosmetic."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-2 py-3.5 font-body text-sm font-medium text-foreground/80 hover:text-primary"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 font-body text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Mon – Sat · 3:00 PM – 8:00 PM</span>
          <a href="tel:+923335100650" className="inline-flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4 text-primary" /> +92 333 5100650</a>
        </div>
      </div>

      {/* Image */}
      <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-elegant">
          <img
            src={hero}
            alt="Dr. Tasneem Elahi — Cosmetic Surgeon & Aesthetic Physician Islamabad, Pelle Aesthetic & Cosmetic Clinic I-8"
            className="h-full w-full object-cover"
            width={1200}
            height={1500}
            {...{ fetchpriority: "high" }}
          />
        </div>
        <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-border bg-background px-5 py-3.5 shadow-soft">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <div className="font-body text-sm font-medium text-foreground">5,000+ Happy Patients</div>
        </div>
      </div>
    </div>
  </section>
);
