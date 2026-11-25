const items = [
  "Female-led practice",
  "MBBS-certified care",
  "Book your consultation on WhatsApp",
  "Laser · Skin · Surgery · Hair · Dental · Body",
  "I-8, Islamabad",
];

export const Marquee = () => (
  <div className="overflow-hidden border-b border-border bg-secondary/60 py-3.5">
    <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-body text-sm text-foreground/80">
      {[...items, ...items, ...items, ...items].map((t, idx) => (
        <span key={idx} className="inline-flex items-center gap-12">
          {t} <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  </div>
);
