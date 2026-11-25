const items = [
  "Certified Cosmetologist",
  "100% Private & Confidential",
  "30+ Years of Experience",
  "WhatsApp Booking Available",
  "Mon – Sat · 3 – 8 PM",
  "Islamabad",
];

export const Marquee = () => (
  <div className="overflow-hidden border-b border-border bg-secondary py-3.5" aria-hidden="true">
    <div className="flex w-max animate-marquee whitespace-nowrap font-body text-sm text-foreground/80">
      {[...items, ...items, ...items, ...items].map((t, idx) => (
        <span key={idx} className="inline-flex items-center gap-10 pr-10">
          {t} <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  </div>
);
