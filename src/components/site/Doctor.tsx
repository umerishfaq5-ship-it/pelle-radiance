import doc from "@/assets/dr-tasneem.webp";
import { CheckCircle, MessageCircle } from "lucide-react";

const credentials = [
  "Certified Cosmetologist — 30+ Years Practice",
  "Aesthetic Injectable Specialist",
  "Laser Skin & Hair Therapist",
  "Hair Transplant (FUE/DHI) — in partnership with Dr. Mazhar Hussain",
  "Intimate Wellness Specialist",
];

export const Doctor = () => (
  <section id="doctor" className="bg-secondary/30 py-24 md:py-36">
    <div className="container-luxe grid gap-16 md:grid-cols-12 md:gap-20">
      {/* Image column */}
      <div className="relative md:col-span-5">
        <div className="overflow-hidden bg-secondary shadow-elegant aspect-[3/4]">
          <img
            src={doc}
            alt="Dr. Tasneem Elahi — Cosmetologist & Aesthetic Physician, Islamabad"
            className="h-full w-full object-cover object-top"
            loading="lazy"
            width={800}
            height={1067}
          />
        </div>
        {/* Floating stat card */}
        <div className="absolute -bottom-6 -right-4 hidden bg-foreground p-7 text-background md:block shadow-elegant">
          <div className="font-display text-5xl leading-none">30<span className="text-accent">+</span></div>
          <div className="mt-2 font-body text-[10px] uppercase tracking-[0.25em] text-background/65">Years of Practice</div>
        </div>
        {/* Clinic badge */}
        <div className="absolute -top-4 -left-4 hidden bg-accent p-4 text-accent-foreground md:block">
          <div className="font-body text-[9px] uppercase tracking-[0.25em]">Pelle Aesthetic</div>
          <div className="font-body text-[9px] uppercase tracking-[0.25em] opacity-75">&amp; Cosmetic · Islamabad</div>
        </div>
      </div>

      {/* Content column */}
      <div className="md:col-span-7 md:pt-8">
        <div className="eyebrow">Meet Your Doctor</div>
        <h2 className="mt-5 font-display text-5xl leading-[1.03] md:text-7xl">
          Dr. Tasneem <em className="text-accent">Elahi</em>
        </h2>
        <div className="mt-3 font-body text-sm uppercase tracking-[0.22em] text-muted-foreground">
          Cosmetologist · Aesthetic Physician · Islamabad
        </div>

        <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-foreground/80 md:text-[17px]">
          <p>
            Dr. Tasneem Elahi is one of Islamabad's most trusted cosmetic specialists, with over 30 years
            of clinical practice. He combines deep expertise in cosmetology with aesthetic
            medicine to deliver outcomes that feel natural, personal, and truly transformative.
          </p>
          <p>
            At Pelle Aesthetic &amp; Cosmetic in Islamabad, he has built a practice grounded in a single
            philosophy: aesthetic medicine should enhance who you already are. Understanding the unique skin
            profiles of the Pakistani demographic, every consultation is deeply personal and every result is
            achieved with absolute precision.
          </p>
        </div>

        {/* Credentials list */}
        <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {credentials.map((c) => (
            <div key={c} className="flex items-center gap-2 font-body text-sm text-foreground/80">
              <CheckCircle className="h-4 w-4 text-accent shrink-0" />
              {c}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["30+", "Years"],
            ["5K+", "Patients"],
            ["98%", "Satisfaction"],
            ["7", "Specialties"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background p-5 md:p-6">
              <div className="font-display text-4xl text-primary">{n}</div>
              <div className="mt-1.5 font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://wa.me/923335100650?text=Hi%20Dr.%20Tasneem%2C%20I%20would%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-background transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Consult Dr. Tasneem
          </a>
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 border border-border px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  </section>
);