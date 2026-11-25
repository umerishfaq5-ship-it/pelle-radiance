import { useState, useEffect } from "react";
const hero = "/treatment-images/hero-dr-tasneem.webp";
import { ArrowRight, Clock, MessageCircle, Star } from "lucide-react";

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
    <section className="relative isolate w-full overflow-hidden bg-gradient-brand">
      <div className="container-luxe grid items-center gap-12 pb-20 pt-32 md:pt-36 lg:min-h-[92svh] lg:grid-cols-12 lg:pb-16">
        {/* Text */}
        <div className="animate-fade-up lg:col-span-7">
          <div className="font-body text-sm text-background/75">Pelle Aesthetic &amp; Cosmetic · Islamabad</div>

          <h1 className="mt-5 font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[1] text-background text-balance">
            Expert{" "}
            <span
              className={`italic text-accent transition-opacity duration-400 inline-block ${fading ? "opacity-0" : "opacity-100"}`}
              style={{ minWidth: "1ch" }}
            >
              {cyclingWords[wordIdx]}
            </span>
            <br />
            in Islamabad.
          </h1>

          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-background/80 md:text-lg">
            Led by <strong className="font-medium text-background">Dr. Tasneem Elahi</strong> (Cosmetologist) — your trusted aesthetic specialist
            for cosmetic surgery, laser treatments, hair transplant and intimate wellness in a completely private clinic in Islamabad.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Cosmetologist", "30+ Years Experience", "5,000+ Patients", "100% Private Clinic"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-background/20 bg-background/10 px-3.5 py-1.5 font-body text-xs text-background/90 backdrop-blur-sm">
                ✓ {t}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#results"
              className="rounded-full bg-background px-8 py-3.5 font-body text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              Before and After
            </a>
            <a
              href="#appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-body text-sm font-medium text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/+923335100650?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Pelle%20Aesthetic%20%26%20Cosmetic."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-background/85 hover:text-background"
            >
              <MessageCircle className="h-4 w-4" /> Book via WhatsApp
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 font-body text-sm text-background/70">
            <Clock className="h-4 w-4 text-accent" /> Mon – Sat · 3:00 PM – 8:00 PM
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2.25rem] border border-background/15" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-elegant">
            <img
              src={hero}
              alt="Dr. Tasneem Elahi — Cosmetic Surgeon & Aesthetic Physician Islamabad, Pelle Aesthetic & Cosmetic Clinic I-8"
              className="h-full w-full object-cover animate-scale-in"
              width={1200}
              height={1500}
              {...{ fetchpriority: "high" }}
            />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-background px-5 py-3.5 shadow-elegant">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="font-body text-xs font-medium text-foreground">5,000+ Happy Patients</div>
          </div>
        </div>
      </div>
    </section>
  );
};
