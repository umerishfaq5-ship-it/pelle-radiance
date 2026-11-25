import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { site } from "@/data/site";

const faqs = [
  {
    q: "How do I book a consultation at Pelle?",
    a: `Send us a message on WhatsApp, call ${site.phoneDisplay}, or use the booking form on this page. Our team will confirm a time that suits you.`,
  },
  {
    q: "Who performs the treatments?",
    a: "Treatments are planned and overseen by Dr. Tasneem Elahi, MBBS cosmetologist and aesthetic physician.",
  },
  {
    q: "Is the clinic suitable for intimate and sensitive treatments?",
    a: "Yes. Pelle is a female-led practice, and every consultation is private and discreet.",
  },
  {
    q: "What should I expect during my first consultation?",
    a: "The doctor will assess your concerns, discuss your goals and medical history, and recommend a treatment plan with sessions and expected results.",
  },
  {
    q: "Where is the clinic located and when is it open?",
    a: `We are in ${site.location}. Opening hours: ${site.hours}.`,
  },
];

export const Faq = () => (
  <section className="bg-background py-24">
    <div className="container-luxe max-w-4xl">
      <h2 className="text-center font-display text-5xl leading-[1.05] md:text-6xl">
        Frequently Asked <em className="text-primary">Questions</em>
      </h2>
      <Accordion type="single" collapsible defaultValue="0" className="mt-12 space-y-3">
        {faqs.map((f, idx) => (
          <AccordionItem key={idx} value={String(idx)} className="rounded-2xl border-none bg-secondary/50 px-6 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
            <AccordionTrigger className="font-body text-base hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="font-body text-sm leading-relaxed opacity-85">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
