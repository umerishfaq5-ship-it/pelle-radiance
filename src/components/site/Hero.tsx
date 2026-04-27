import hero from "@/assets/hero-clinic.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
  <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-foreground">
    <img
      src={hero}
      alt="Interior of Pelle Aesthetic & Cosmetic clinic in Islamabad"
      className="absolute inset-0 h-full w-full object-cover animate-scale-in"
      width={1920}
      height={1080}
      fetchPriority="high"
    />
    <div className="absolute inset-0 bg-gradient-hero" />
    <div className="absolute inset-0 bg-foreground/20" />

    <div className="container-luxe relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pt-40 md:pb-28">
      <div className="max-w-4xl animate-fade-up">
        <div className="eyebrow !text-background/80">Pelle · Est. 2018 · Islamabad</div>
        <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] text-background text-balance">
          Enhancing your{" "}
          <em className="font-display italic text-accent">natural</em> beauty.
        </h1>
        <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-background/80">
          A premium aesthetic & cosmetic practice led by Dr. Tasneem Elahi —
          where medical precision meets the quiet artistry of timeless beauty.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="https://wa.me/923000000000"
            className="group inline-flex items-center gap-3 bg-background px-9 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#services" className="link-underline font-body text-sm uppercase tracking-[0.22em] text-background/90">
            Explore Treatments
          </a>
        </div>
      </div>
    </div>

    {/* meta strip */}
    <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-background/15">
      <div className="container-luxe grid grid-cols-2 gap-6 py-6 font-body text-[11px] uppercase tracking-[0.22em] text-background/70 md:grid-cols-4">
        <div>MBBS Certified</div>
        <div>Female-Led Practice</div>
        <div className="hidden md:block">5,000+ Patients</div>
        <div className="hidden md:block text-right">I-8 · Islamabad</div>
      </div>
    </div>
  </section>
);