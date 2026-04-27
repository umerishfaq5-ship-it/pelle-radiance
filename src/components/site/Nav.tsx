import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const links = [
  { to: "/#services", label: "Treatments" },
  { to: "/#doctor", label: "The Doctor" },
  { to: "/#results", label: "Results" },
  { to: "/#contact", label: "Contact" },
];

export const Nav = () => (
  <header className="absolute top-0 z-30 w-full">
    <div className="container-luxe flex items-center justify-between py-7">
      <Link to="/" className="group">
        <div className="font-display text-2xl leading-none text-primary-foreground drop-shadow-sm">
          Pelle
        </div>
        <div className="eyebrow mt-1 !text-[10px] !text-primary-foreground/80">
          Aesthetic & Cosmetic
        </div>
      </Link>
      <nav className="hidden items-center gap-10 md:flex">
        {links.map((l) => (
          <a
            key={l.to}
            href={l.to}
            className="link-underline font-body text-sm tracking-wide text-primary-foreground/90"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="https://wa.me/923000000000"
        target="_blank"
        rel="noreferrer"
        className="hidden items-center gap-2 border border-primary-foreground/40 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-foreground md:inline-flex"
      >
        <MessageCircle className="h-3.5 w-3.5" /> Book
      </a>
    </div>
  </header>
);

export const NavLight = () => (
  <header className="sticky top-0 z-30 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
    <div className="container-luxe flex items-center justify-between py-5">
      <Link to="/" className="group">
        <div className="font-display text-2xl leading-none text-foreground">Pelle</div>
        <div className="eyebrow mt-1 !text-[10px]">Aesthetic & Cosmetic</div>
      </Link>
      <nav className="hidden items-center gap-10 md:flex">
        {links.map((l) => (
          <a key={l.to} href={l.to} className="link-underline font-body text-sm tracking-wide text-foreground/80">
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="https://wa.me/923000000000"
        target="_blank"
        rel="noreferrer"
        className="hidden items-center gap-2 bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-background transition-opacity hover:opacity-90 md:inline-flex"
      >
        <MessageCircle className="h-3.5 w-3.5" /> Book
      </a>
    </div>
  </header>
);