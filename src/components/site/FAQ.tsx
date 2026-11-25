import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the consultation fee at Pelle Aesthetic?",
    a: "Our consultation fee varies by procedure. Many initial consultations are offered at a nominal fee which is deducted from your treatment cost. Please WhatsApp us for current pricing — we believe in full transparency.",
  },
  {
    q: "Is the clinic private and safe for all patients?",
    a: "Absolutely. Pelle Aesthetic & Cosmetic is led by Dr. Tasneem Elahi (Cosmetologist, 30+ years experience). We maintain strict privacy protocols — separate waiting areas are available and all procedures are performed with complete discretion, dignity, and professionalism for both male and female patients.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book via WhatsApp (the fastest method), fill in our online appointment form, or call the clinic directly. We reply to WhatsApp messages within 2 hours during clinic hours (Mon–Sat, 3–8 PM).",
  },
  {
    q: "Do you offer payment packages or instalment plans?",
    a: "Yes — for larger procedures we offer flexible payment plans. Please discuss this during your consultation and we will tailor a plan to suit your budget.",
  },
  {
    q: "Are all procedures safe for Pakistani/South Asian skin tones?",
    a: "Yes — all our laser and aesthetic treatments are carefully calibrated and protocol-optimised for South Asian skin tones (Fitzpatrick Types IV–VI). Dr. Tasneem has extensive experience treating darker skin safely.",
  },
  {
    q: "Is the clinic fully confidential — especially for intimate procedures?",
    a: "Yes, 100% confidential. We have strict data privacy protocols. Your records, consultation details and procedure information are never shared with any third party. For sensitive procedures, consultations are also done privately by appointment only.",
  },
  {
    q: "How long is recovery after cosmetic surgery?",
    a: "Recovery varies by procedure. Many non-surgical treatments require zero downtime. Surgical procedures typically range from 1–2 weeks (minor) to 4–6 weeks (major surgery). Dr. Tasneem will give you a detailed recovery plan during consultation.",
  },
  {
    q: "Do you accept patients from outside Islamabad?",
    a: "Yes! We welcome patients from Rawalpindi, Lahore, Karachi and all across Pakistan. Many patients also travel from UAE, UK and Saudi Arabia. We can arrange initial consultations online via WhatsApp video for out-of-city patients.",
  },
  {
    q: "What languages does Dr. Tasneem consult in?",
    a: "Dr. Tasneem consults in Urdu and English — whichever you prefer. Our WhatsApp support team also responds in both languages.",
  },
  {
    q: "Is hair transplant results permanent?",
    a: "Yes — hair transplantation at Pelle uses FUE and DHI techniques which transplant genetically resistant donor follicles. These follicles are permanent and continue growing for life. Results are typically fully visible at 12–15 months.",
  },
];

const Item = ({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) => (
  <div className="border-b border-border">
    <button
      onClick={toggle}
      className="flex w-full items-start justify-between gap-6 py-6 text-left group"
      aria-expanded={open}
    >
      <span className="font-body text-base font-medium text-foreground group-hover:text-primary transition-colors md:text-lg">
        {q}
      </span>
      <ChevronDown
        className={`h-5 w-5 shrink-0 text-accent mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-400 ${open ? "max-h-96 pb-6" : "max-h-0"}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <p className="font-body text-sm leading-relaxed text-muted-foreground md:text-base">{a}</p>
    </div>
  </div>
);

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  useEffect(() => {
    const ld = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "homepage-faq-ld";
    s.text = JSON.stringify(ld);
    document.head.appendChild(s);
    return () => { document.getElementById("homepage-faq-ld")?.remove(); };
  }, []);

  return (
    <section className="bg-background py-24 md:py-36">
      <div className="container-luxe grid gap-16 md:grid-cols-12">
        {/* Header */}
        <div className="md:col-span-4">
          <div className="eyebrow">Common Questions</div>
          <h2 className="mt-5 font-display text-5xl leading-[1.03] md:text-6xl text-balance">
            Your questions,{" "}
            <em className="text-accent">answered.</em>
          </h2>
          <p className="mt-6 font-body text-sm leading-relaxed text-muted-foreground md:text-base">
            Have more questions? WhatsApp us and we'll reply promptly — in Urdu or English.
          </p>
          <a
            href="https://wa.me/923335100650?text=Hi%2C%20I%20have%20a%20question%20about%20Pelle%20Aesthetic."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-accent px-6 py-3 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all hover:-translate-y-0.5"
          >
            Ask on WhatsApp
          </a>
        </div>

        {/* Accordion */}
        <div className="md:col-span-8">
          <div className="border-t border-border">
            {faqs.map((f, i) => (
              <Item
                key={i}
                q={f.q}
                a={f.a}
                open={openIdx === i}
                toggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
