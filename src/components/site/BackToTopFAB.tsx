import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTopFAB = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      id="back-to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-5 z-50 flex h-11 w-11 items-center justify-center bg-foreground text-background shadow-elegant transition-all hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground md:bottom-28 md:right-8"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
