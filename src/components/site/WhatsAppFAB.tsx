import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppFAB = () => {
  const [show, setShow] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const a = setTimeout(() => setTooltipVisible(true), 3000);
    // Show FAB after 500ms
    const b = setTimeout(() => setShow(true), 500);
    // Hide tooltip after 8 seconds
    const c = setTimeout(() => setTooltipVisible(false), 8000);
    return () => { clearTimeout(a); clearTimeout(b); clearTimeout(c); };
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Tooltip bubble */}
      {tooltipVisible && (
        <div className="relative flex items-start gap-2 bg-background border border-border shadow-elegant rounded-sm p-4 max-w-[240px] animate-fade-up">
          <button
            onClick={() => setTooltipVisible(false)}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <div>
            <div className="font-body text-sm font-medium text-foreground">Book via WhatsApp</div>
            <div className="font-body text-xs text-muted-foreground mt-0.5">
              We reply within 2 hours · Mon–Sat
            </div>
          </div>
        </div>
      )}

      {/* FAB button group */}
      <div className="flex items-center gap-3">
        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          className="h-8 w-8 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss WhatsApp button"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Main WhatsApp FAB */}
        <a
          href="https://wa.me/923335100650?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Pelle%20Aesthetic%20%26%20Cosmetic."
          target="_blank"
          rel="noreferrer"
          aria-label="Book appointment via WhatsApp"
          className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-500/40 transition-all hover:scale-110 hover:shadow-xl hover:shadow-green-500/50"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          <MessageCircle className="h-7 w-7 text-white" />
        </a>
      </div>
    </div>
  );
};
