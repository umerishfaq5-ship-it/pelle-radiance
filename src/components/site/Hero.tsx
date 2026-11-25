import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-clinic.jpg";
import laser from "@/assets/service-laser.jpg";
import doctor from "@/assets/dr-tasneem.jpg";
import { whatsappLink } from "@/data/site";

const images = [hero, laser, doctor];

export const Hero = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[hsl(25_32%_22%)] via-[hsl(25_30%_32%)] to-[hsl(25_32%_44%)]">
      <div className="container-luxe grid min-h-[78svh] items-center gap-10 py-16 md:grid-cols-2 md:py-20">
        <div className="animate-fade-up">
          <div className="font-body text-sm text-background/80">Pelle Aesthetic & Cosmetic · Islamabad</div>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.02] text-background text-balance">
            Aesthetic & Cosmetic <em className="italic text-accent">Clinic</em>
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-background/80 md:text-lg">
            Pelle offers laser, skincare, cosmetic surgery, hair, dental and body treatments, each planned around your goals. Led by Dr. Tasneem Elahi, MBBS cosmetologist, in a private, female-led practice.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#results"
              className="rounded-full bg-background px-8 py-3.5 font-body text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              Before and After
            </a>
            <a
              href={whatsappLink("Hello, I would like to book a consultation at Pelle.")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 font-body text-sm font-medium text-accent-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              Book Appointment <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md md:max-w-none">
          <div className="absolute -inset-4 rounded-[2.5rem] border border-background/15" />
          <div className="relative h-full overflow-hidden rounded-[2rem] shadow-elegant">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={idx === 2 ? "Dr. Tasneem Elahi" : "Pelle Aesthetic & Cosmetic clinic"}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1600ms] ${idx === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
          <div className="absolute -bottom-5 left-6 flex gap-2 rounded-full bg-background px-4 py-3 shadow-soft">
            {images.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Show image ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
