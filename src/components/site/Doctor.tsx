import doc from "@/assets/dr-tasneem.jpg";

export const Doctor = () => (
  <section id="doctor" className="bg-secondary/40 py-28 md:py-40">
    <div className="container-luxe grid gap-16 md:grid-cols-12 md:gap-24">
      <div className="relative md:col-span-5">
        <div className="overflow-hidden bg-cream-deep shadow-elegant">
          <img
            src={doc}
            alt="Dr. Tasneem Elahi, MBBS Cosmetologist"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
        <div className="absolute -bottom-6 -right-6 hidden bg-foreground p-8 text-background md:block">
          <div className="font-display text-5xl leading-none">12<span className="text-accent">+</span></div>
          <div className="mt-2 font-body text-[10px] uppercase tracking-[0.25em] text-background/70">Years of Practice</div>
        </div>
      </div>

      <div className="md:col-span-7 md:pt-10">
        <div className="eyebrow">Meet the Doctor</div>
        <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
          Dr. Tasneem <em className="text-accent">Elahi</em>
        </h2>
        <div className="mt-3 font-body text-sm uppercase tracking-[0.22em] text-muted-foreground">
          MBBS · Cosmetologist · Aesthetic Physician
        </div>

        <div className="mt-10 space-y-6 font-body text-base leading-relaxed text-foreground/80 md:text-lg">
          <p>
            With over a decade in clinical practice, Dr. Tasneem has built Pelle
            on a singular philosophy — that aesthetic medicine should feel
            personal, restorative and quietly transformative.
          </p>
          <p>
            Her approach blends MBBS-trained clinical rigour with a refined
            artistic eye, ensuring outcomes that look and feel unmistakably
            yours — never overdone.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["12+", "Years"],
            ["5K+", "Patients"],
            ["98%", "Satisfaction"],
            ["20+", "Treatments"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background p-6">
              <div className="font-display text-4xl text-primary">{n}</div>
              <div className="mt-2 font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);