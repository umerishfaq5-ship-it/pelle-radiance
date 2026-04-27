import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Repeat, Wallet, Check, MessageCircle } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLight } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { findCategory, findTreatment } from "@/data/services";
import { useEffect } from "react";

const Treatment = () => {
  const { catSlug = "", slug = "" } = useParams();
  const cat = findCategory(catSlug);
  const t = findTreatment(catSlug, slug);

  useEffect(() => {
    if (!t) return;
    const ld = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(ld);
    document.head.appendChild(s);
    return () => { document.head.removeChild(s); };
  }, [t]);

  if (!t || !cat) {
    return (
      <div className="min-h-screen bg-background">
        <NavLight />
        <div className="container-luxe py-40 text-center">
          <h1 className="font-display text-5xl">Treatment not found</h1>
          <Link to="/" className="link-underline mt-8 inline-block">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavLight />

      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="container-luxe grid gap-16 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <Link to={`/category/${cat.slug}`} className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-3 w-3" /> {cat.name}
            </Link>
            <div className="eyebrow mt-10">Treatment</div>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl text-balance">{t.name}</h1>
            <p className="mt-6 max-w-xl font-display text-2xl italic leading-snug text-accent">{t.tagline}</p>
            <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">{t.description}</p>

            <div className="mt-10 grid grid-cols-3 gap-px bg-border max-w-lg">
              <div className="bg-background p-5">
                <Clock className="h-4 w-4 text-primary" />
                <div className="mt-3 font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Duration</div>
                <div className="mt-1 font-display text-lg">{t.duration}</div>
              </div>
              <div className="bg-background p-5">
                <Repeat className="h-4 w-4 text-primary" />
                <div className="mt-3 font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Sessions</div>
                <div className="mt-1 font-display text-lg">{t.sessions}</div>
              </div>
              <div className="bg-background p-5">
                <Wallet className="h-4 w-4 text-primary" />
                <div className="mt-3 font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">From</div>
                <div className="mt-1 font-display text-lg">{t.priceFrom}</div>
              </div>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="bg-foreground p-8 text-background shadow-elegant md:p-10">
              <div className="eyebrow !text-accent">Book this treatment</div>
              <h3 className="mt-4 font-display text-3xl leading-tight">A consultation, on the house.</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-background/70">
                Share a few details and Dr. Tasneem’s team will schedule your private consultation.
              </p>
              <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you — our team will be in touch shortly."); }}>
                <input required placeholder="Full name" className="w-full border border-background/20 bg-transparent px-4 py-3 font-body text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none" />
                <input required type="tel" placeholder="Phone / WhatsApp" className="w-full border border-background/20 bg-transparent px-4 py-3 font-body text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none" />
                <input type="email" placeholder="Email (optional)" className="w-full border border-background/20 bg-transparent px-4 py-3 font-body text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none" />
                <textarea rows={3} placeholder="Anything we should know?" className="w-full resize-none border border-background/20 bg-transparent px-4 py-3 font-body text-sm text-background placeholder:text-background/50 focus:border-accent focus:outline-none" />
                <button type="submit" className="w-full bg-accent py-4 font-body text-xs uppercase tracking-[0.25em] text-accent-foreground transition-opacity hover:opacity-90">
                  Request Consultation
                </button>
                <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border border-background/20 py-3.5 font-body text-xs uppercase tracking-[0.22em] text-background hover:bg-background hover:text-foreground transition-colors">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </form>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-luxe py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">Benefits</div>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">Why patients choose it.</h2>
          </div>
          <ul className="md:col-span-7 divide-y divide-border border-y border-border">
            {t.benefits.map((b) => (
              <li key={b} className="flex items-start gap-5 py-6">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-body text-lg text-foreground/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-luxe grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">FAQs</div>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">Asked & answered.</h2>
            <p className="mt-6 font-body text-muted-foreground">
              Still have questions? Message us on WhatsApp and a member of Dr. Tasneem’s team will personally respond.
            </p>
          </div>
          <div className="md:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {t.faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-xl hover:no-underline md:text-2xl">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Treatment;