import { useRef, useState } from "react";
import beforeAfter from "@/assets/before-after.jpg";

export const BeforeAfter = () => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, next)));
  };

  return (
    <section id="results" className="bg-secondary/40 py-28 md:py-40">
      <div className="container-luxe grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow">Real Results</div>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
            Before. <em className="text-accent">After.</em> Always you.
          </h2>
          <p className="mt-8 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            Drag to reveal the difference. Every result is documented under
            consistent lighting and angles — no filters, no retouching.
          </p>
        </div>

        <div
          ref={ref}
          className="relative aspect-[4/3] w-full select-none overflow-hidden bg-foreground shadow-elegant md:col-span-7"
          onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
          onClick={(e) => onMove(e.clientX)}
        >
          <img src={beforeAfter} alt="After treatment result" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img src={beforeAfter} alt="Before treatment" loading="lazy" className="absolute inset-0 h-full w-full object-cover saturate-[0.6] brightness-95" style={{ width: `${100 / (pos / 100)}%` }} />
            <div className="absolute left-6 top-6 bg-background/90 px-3 py-1 font-body text-[10px] uppercase tracking-[0.25em] text-foreground">Before</div>
          </div>
          <div className="absolute right-6 top-6 bg-accent px-3 py-1 font-body text-[10px] uppercase tracking-[0.25em] text-accent-foreground">After</div>

          <div className="pointer-events-none absolute inset-y-0 w-px bg-background" style={{ left: `${pos}%` }}>
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-background shadow-soft">
              <div className="font-display text-lg text-foreground">⇆</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-luxe mt-24 grid gap-px bg-border md:grid-cols-3">
        {[
          { q: "Dr. Tasneem doesn’t just treat skin — she listens. The result feels like a quieter, better version of me.", a: "— A.K., Islamabad" },
          { q: "From the consultation to the aftercare, Pelle felt more like a private atelier than a clinic. Truly world-class.", a: "— S.M., Lahore" },
          { q: "I came in for one treatment and stayed for the experience. Considered, calm, and beautifully done.", a: "— H.R., Dubai" },
        ].map((t, i) => (
          <figure key={i} className="bg-background p-10">
            <div className="font-display text-3xl leading-none text-accent">“</div>
            <blockquote className="mt-4 font-display text-2xl leading-snug text-foreground">{t.q}</blockquote>
            <figcaption className="mt-8 font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t.a}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};