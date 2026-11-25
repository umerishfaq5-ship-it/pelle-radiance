import clinic from "@/assets/hero-clinic.jpg";

const items = [
  { title: "Personalised Treatment Plans", text: "Every plan is built around your skin, health history and goals." },
  { title: "MBBS-Certified Doctor", text: "Treatments are planned and performed under the care of a qualified medical doctor." },
  { title: "Female-Led Practice", text: "A discreet, comfortable space — especially for sensitive and intimate treatments." },
  { title: "Medical-Grade Safety", text: "Approved devices and sterile protocols, suited to South Asian skin." },
  { title: "Natural Results", text: "Subtle, refined outcomes that look like you — never overdone." },
];

export const WhyUs = () => (
  <section id="why" className="bg-background py-24 md:py-28">
    <div className="container-luxe">
      <div className="rounded-3xl bg-secondary/50 p-6 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-5xl leading-[1.05] md:text-6xl">
            Why Choose <em className="text-primary">Pelle</em>
          </h2>
          <p className="mt-4 font-body text-base text-muted-foreground">
            Here's what makes our approach to patient care different.
          </p>
        </div>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img src={clinic} alt="Pelle clinic interior" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6">
            {items.map((it) => (
              <div key={it.title}>
                <h3 className="font-body text-lg font-semibold text-primary">{it.title}</h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-foreground/70">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
