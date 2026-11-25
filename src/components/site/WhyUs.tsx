import { ShieldCheck, Award, Clock, Microscope, MessageCircle, Heart, Star, Lock } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Expert Cosmetologist",
    description:
      "Dr. Tasneem Elahi is a certified cosmetologist specialising in aesthetic medicine — combining 30+ years of clinical expertise with artistic precision for safe, exceptional results.",
  },
  {
    icon: <Lock className="h-7 w-7" />,
    title: "100% Private & Confidential",
    description:
      "Your privacy is our absolute priority. All consultations and procedures are handled with complete discretion. Your records are never shared with anyone.",
  },
  {
    icon: <Heart className="h-7 w-7" />,
    title: "Safe, Private & Dignified",
    description:
      "Dr. Tasneem maintains a fully private, respectful clinical environment. Consultations are by appointment only, with complete confidentiality for all patients — especially for intimate procedures.",
  },
  {
    icon: <Clock className="h-7 w-7" />,
    title: "30+ Years of Experience",
    description:
      "Over 30 years of clinical practice in cosmetic medicine — with thousands of successful procedures across surgery, laser, injectables and beyond.",
  },
  {
    icon: <Microscope className="h-7 w-7" />,
    title: "State-of-the-Art Equipment",
    description:
      "Pelle is equipped with the latest medical-grade technology — PICO laser, HIFU, Dermapen, DHI implant pens — so you receive the most advanced treatments available.",
  },
  {
    icon: <Award className="h-7 w-7" />,
    title: "Affordable, Transparent Pricing",
    description:
      "Quality aesthetic medicine shouldn't break the bank. We offer competitive pricing, flexible packages and WhatsApp consultations to help you plan your treatment budget.",
  },
  {
    icon: <MessageCircle className="h-7 w-7" />,
    title: "WhatsApp Booking & Support",
    description:
      "Book your appointment, ask questions or follow up — all via WhatsApp. We respond promptly and in Urdu or English, whichever you prefer.",
  },
  {
    icon: <Star className="h-7 w-7" />,
    title: "5-Star Patient Reviews",
    description:
      "5,000+ patients and consistently 5-star reviewed. Our results speak for themselves — natural-looking, long-lasting outcomes you'll love.",
  },
];

export const WhyUs = () => (
  <section className="bg-foreground text-background py-24 md:py-36">
    <div className="container-luxe">
      <div className="grid gap-10 md:grid-cols-12 mb-16">
        <div className="md:col-span-5">
          <div className="font-body text-[10px] uppercase tracking-[0.28em] text-accent mb-5">Why Choose Pelle</div>
          <h2 className="font-display text-5xl leading-[1.03] md:text-7xl text-balance">
            Islamabad's most{" "}
            <em className="text-accent">trusted</em>{" "}
            clinic.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-4">
          <p className="font-body text-base leading-relaxed text-background/70 md:text-lg">
            Choosing the right doctor for aesthetic procedures is one of the most important
            decisions you'll make. Here's why thousands of patients across Islamabad,
            Rawalpindi and beyond choose Pelle.
          </p>
          <a
            href="https://wa.me/923335100650?text=Hi%2C%20I%20would%20like%20to%20consult%20with%20Dr.%20Tasneem."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-accent-foreground transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Free WhatsApp Consultation
          </a>
        </div>
      </div>

      <div className="grid gap-px bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="group flex flex-col gap-4 bg-foreground p-8 transition-colors hover:bg-background/5"
          >
            <div className="text-accent transition-transform group-hover:scale-110 transition-transform duration-300 w-fit">
              {r.icon}
            </div>
            <h3 className="font-display text-xl leading-tight text-background md:text-2xl">{r.title}</h3>
            <p className="font-body text-sm leading-relaxed text-background/60">{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
