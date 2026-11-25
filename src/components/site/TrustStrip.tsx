import { useEffect, useRef, useState } from "react";
import { CheckCircle, Star } from "lucide-react";

const stats = [
  { end: 5000, suffix: "+", label: "Happy Patients", sub: "Across Islamabad & Pakistan" },
  { end: 30, suffix: "+", label: "Years of Practice", sub: "Expert clinical experience" },
  { end: 7, suffix: "", label: "Specialties", sub: "Under one roof" },
  { end: 98, suffix: "%", label: "Patient Satisfaction", sub: "Consistently rated 5 stars" },
];

const trustPoints = [
  "Certified Cosmetologist",
  "100% Private & Confidential",
  "30+ Years of Experience",
  "State-of-the-Art Equipment",
  "WhatsApp Booking Available",
  "Affordable Packages",
];

function useCountUp(end: number, duration = 1800, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration]);
  return count;
}

const StatCard = ({ stat, trigger }: { stat: typeof stats[0]; trigger: boolean }) => {
  const count = useCountUp(stat.end, 1800, trigger);
  return (
    <div className="flex flex-col px-2 py-6 md:py-8">
      <div className="font-display text-5xl text-primary md:text-6xl">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="mt-2 font-body text-sm font-semibold text-foreground">{stat.label}</div>
      <div className="mt-1 font-body text-xs text-muted-foreground">{stat.sub}</div>
    </div>
  );
};

export const TrustStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-background py-16 md:py-20">
      <div className="container-luxe">
        <div className="rounded-3xl bg-secondary p-6 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <h2 className="font-display text-5xl leading-none md:text-6xl">
              Our <em className="text-primary">Trust</em>
            </h2>
            <div className="hidden h-12 w-px bg-primary/25 md:block" />
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="mt-1 font-body text-sm text-muted-foreground">Rated by 5,000+ patients across Pakistan</div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-2 border-y border-dashed border-primary/30 md:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} stat={s} trigger={triggered} />
            ))}
          </div>

          {/* Trust points */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {trustPoints.map((t) => (
              <div key={t} className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 font-body text-sm text-foreground/80">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
