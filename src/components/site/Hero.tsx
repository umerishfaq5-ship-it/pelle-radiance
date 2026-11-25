import { useState, useEffect } from "react";
const hero = "/treatment-images/hero-dr-tasneem.webp";
import { ArrowRight, MessageCircle, Star } from "lucide-react";

const cyclingWords = ["Cosmetic Surgery", "Laser Skincare", "Hair Transplant", "Intimate Wellness", "Dermatology"];

export const Hero = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % cyclingWords.length);
        setFading(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-foreground">
      <img
        src={hero}
        alt="Dr. Tasneem Elahi — Cosmetic Surgeon & Aesthetic Physician Islamabad, Pelle Aesthetic & Cosmetic Clinic I-8"
        className="absolute inset-0 h-full w-full object-cover animate-scale-in"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-foreground/30" />

      {/* Star rating badge top-right */}
      <div className="absolute top-28 right-6 z-10 hidden md:flex flex-col items-center gap-1 bg-background/10 backdrop-blur-md border border-background/20 px-4 py-3 rounded-sm">
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map(s => <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />)}
        </div>
        <div className="font-body text-[9px] uppercase tracking-[0.2em] text-background/80 mt-1">5,000+ Happy Patients</div>
      </div>

      <div className="container-luxe relative z-10 flex min-h-[100svh] flex-col justify-end pb-24 pt-40 md:pb-32">
        <div className="max-w-4xl animate-fade-up">
          <div className="eyebrow !text-background/70">Pelle Aesthetic &amp; Cosmetic · Islamabad</div>

          <h1 className="mt-5 font-display text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.95] text-background text-balance">
            Expert{" "}
            <span
              className={`italic text-accent transition-opacity duration-400 inline-block ${fading ? "opacity-0" : "opacity-100"}`}
              style={{
                minWidth: "1ch",
                fontSize: cyclingWords[wordIdx] === "Intimate Wellness" ? "clamp(2.3rem,6.8vw,6.4rem)" : undefined,
              }}
            >
              {cyclingWords[wordIdx]}
            </span>
            <br className="hidden md:block" />
            in Islamabad.
          </h1>

          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-background/80 md:text-lg">
            Led by <strong className="text-background font-medium">Dr. Tasneem Elahi</strong> (Cosmetologist) — your trusted aesthetic specialist
            for cosmetic surgery, laser treatments, hair transplant and intimate wellness in a completely private clinic in Islamabad.
          </p>

          {/* Trust pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Cosmetologist", "30+ Years Experience", "5,000+ Patients", "100% Private Clinic"].map(t => (
              <span key={t} className="inline-flex items-center gap-1.5 bg-background/10 backdrop-blur-sm border border-background/20 px-3 py-1 font-body text-[10px] uppercase tracking-[0.2em] text-background/90 rounded-sm">
                ✓ {t}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/+923335100650?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Pelle%20Aesthetic%20%26%20Cosmetic."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-xs uppercase tracking-[0.22em] text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              <MessageCircle className="h-4 w-4" />
              Book via WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#appointment"
              className="group inline-flex items-center gap-3 border border-background/50 bg-background/10 backdrop-blur-sm px-8 py-4 text-xs uppercase tracking-[0.22em] text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Book Appointment
            </a>
            <a href="#services" className="link-underline font-body text-sm uppercase tracking-[0.2em] text-background/80 hidden md:inline-block">
              View All Treatments
            </a>
            <div>Mon – Sat &nbsp;·&nbsp; 3:00 PM – 8:00 PM</div>
          </div>
        </div>
      </div>

      {/* Bottom meta strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15">
        <div className="container-luxe grid grid-cols-2 gap-4 py-5 font-body text-[10px] uppercase tracking-[0.2em] text-background/65 md:grid-cols-4">
          <div>Cosmetologist</div>
          <div>Islamabad Clinic</div>
          <div className="hidden md:block">30+ Years · 5,000+ Patients</div>
          <div className="hidden md:block text-right">Islamabad · Mon–Sat 3–8 PM</div>
        </div>
      </div>
    </section>
  );
};