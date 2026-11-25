import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export const CtaBanner = () => (
  <section className="bg-background py-20">
    <div className="container-luxe">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-rose px-8 py-14 text-center md:px-16 md:py-20">
        <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[1.05] text-background md:text-6xl text-balance">
          Your consultation is the first step to a more confident you.
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base text-background/85">
          Speak with our team today — we will guide you to the right treatment.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={whatsappLink("Hello, I would like to book a consultation at Pelle.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 font-body text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-background/60 px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-background hover:text-foreground"
          >
            <Phone className="h-4 w-4" /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  </section>
);
