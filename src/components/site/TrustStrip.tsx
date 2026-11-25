import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

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
    <div className="relative flex flex-col items-center md:items-start text-center md:text-left p-6 md:p-8 group">
      <div className="font-display text-5xl md:text-6xl text-primary">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="mt-2 font-body text-sm font-semibold text-foreground">{stat.label}</div>
      <div className="mt-1 font-body text-xs text-muted-foreground italic">{stat.sub}</div>
      <div className="absolute bottom-0 left-6 right-6 h-px bg-border md:hidden" />
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
    <section ref={ref} className="bg-background border-b border-border">
      {/* Stats row */}
      <div className="container-luxe">
        <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} trigger={triggered} />
          ))}
        </div>
      </div>

      {/* Trust points */}
      <div className="bg-secondary/40 border-t border-border">
        <div className="container-luxe py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between">
            {trustPoints.map((t) => (
              <div key={t} className="inline-flex items-center gap-2 font-body text-xs text-foreground/75">
                <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
