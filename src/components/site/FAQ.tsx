import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Where is Pelle Aesthetic & Cosmetic in Islamabad?",
    a: "Our clinic is at Plot 14, Street 32, Sector I-8/3, Islamabad. It is easy to reach from G-8, G-9, H-8, H-9, I-9, I-10 and Rawalpindi via Faizabad. We are open Monday to Saturday, 3:00 PM – 8:00 PM, by appointment.",
  },
  {
    q: "What skin problems do you treat?",
    a: "We treat acne and acne scars, pigmentation, melasma, dark spots, uneven skin tone, open pores, fine lines and wrinkles, as well as conditions such as vitiligo, psoriasis and keloids. Dr. Tasneem Elahi examines your skin first and then recommends a treatment plan suited to your skin type.",
  },
  {
    q: "How much does a hair transplant cost in Islamabad?",
    a: "The cost of a hair transplant depends on the number of grafts you need, the technique (FUE or DHI) and the area being treated. Send clear photos of your hair on WhatsApp (+92 333 5100650) and we will give you an estimate before your visit, with the final quote confirmed at consultation.",
  },
  {
    q: "Is laser hair removal permanent, and how many sessions are needed?",
    a: "Laser hair removal gives long-term hair reduction. Most people need around 6–8 sessions spaced a few weeks apart, followed by occasional maintenance. The number of sessions depends on the area, hair colour and hormones; we use settings that are safe for Pakistani skin tones.",
  },
  {
    q: "What does a HydraFacial do and how often should I get one?",
    a: "A HydraFacial deep-cleans, exfoliates and hydrates the skin in one session with no downtime. It helps with dullness, blackheads, open pores and dehydrated skin. Many patients have one every 4 weeks, or before an event such as a wedding.",
  },
  {
    q: "Are skin whitening (glutathione) injections safe?",
    a: "Glutathione can help brighten skin tone, but results vary and it is not suitable for everyone. It should only be given after a medical assessment, with a genuine product and in a clinic. Dr. Tasneem will tell you honestly whether it is right for you and what results to expect.",
  },
  {
    q: "What are the prices of Botox, fillers and other treatments?",
    a: "Prices depend on the treatment, the area and the amount of product needed. Message us on WhatsApp with the treatment you are interested in and we will share current pricing. Instalment plans are available for larger procedures.",
  },
  {
    q: "Is the clinic private, including for intimate treatments?",
    a: "Yes. Every consultation is by appointment and one-to-one with Dr. Tasneem Elahi. Your records and photos are never shared without your permission, and intimate wellness consultations are handled with complete confidentiality for both women and men.",
  },
  {
    q: "How long is recovery after rhinoplasty or liposuction?",
    a: "Most patients return to office work about 1–2 weeks after rhinoplasty and within a week after liposuction, with swelling settling gradually over the following months. Non-surgical treatments such as Botox, fillers and HydraFacial have little or no downtime. You will receive a written aftercare plan.",
  },
  {
    q: "Do you see patients from outside Islamabad?",
    a: "Yes. Many patients come from Rawalpindi, and others travel from Lahore, Peshawar, AJK and abroad (UAE, UK, Saudi Arabia). We can start with a WhatsApp video consultation so you only travel once your plan is clear. Consultations are in Urdu or English.",
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
