/**
 * AppointmentPopup.tsx
 * A premium modal popup that appears after 8 seconds or when the user
 * tries to leave the page (exit intent). Submits to Google Sheets.
 */
import { useState, useEffect, useCallback } from "react";
import { X, MessageCircle, Send, Lock, Calendar } from "lucide-react";
import { categories } from "@/data/services";
import { submitToSheet } from "@/lib/submitToSheet";

const DISMISSED_KEY = "pelle_popup_dismissed";

export const AppointmentPopup = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", category: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Open popup after 8 seconds (if not already dismissed this session)
  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Exit-intent: open popup when mouse leaves the viewport (desktop only)
  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return;
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !open) setOpen(true);
    };
    document.addEventListener("mouseleave", handleMouseOut);
    return () => document.removeEventListener("mouseleave", handleMouseOut);
  }, [open]);

  const dismiss = useCallback(() => {
    setOpen(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") dismiss(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [dismiss]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.category) return;
    setSubmitting(true);
    try {
      await Promise.allSettled([
        submitToSheet({
          name: form.name,
          phone: form.phone,
          category: form.category,
          source: "Popup Form",
        }),
        fetch("https://formspree.io/f/xanynvjk", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            category: form.category,
            _subject: `[POPUP] Appointment — ${form.category} — Pelle Aesthetic`,
          }),
        }),
      ]);
      setSubmitted(true);
      // Auto-close after 4s on success
      setTimeout(() => dismiss(), 4000);
    } catch {
      // Silent fail — user can still book via WhatsApp
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Book an Appointment"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-background shadow-[0_32px_80px_rgba(0,0,0,0.35)] border border-border animate-fade-up overflow-hidden">
        {/* Gold top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-accent/40 via-accent to-accent/40" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            <div className="font-body text-[10px] uppercase tracking-[0.28em] text-accent mb-2">
              ✦ Limited Consultations Available
            </div>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Book Your Free{" "}
              <em className="text-accent">Consultation</em>
            </h2>
            <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
              With Dr. Tasneem Elahi — Islamabad's trusted Cosmetologist.
              Response within 2 hours on WhatsApp.
            </p>
          </div>
          <button
            onClick={dismiss}
            className="ml-4 mt-1 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-sm hover:bg-secondary shrink-0"
            aria-label="Close popup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 pt-4">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-6 gap-4">
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-accent text-2xl">✓</span>
              </div>
              <div>
                <div className="font-display text-2xl">Request Received!</div>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  Dr. Tasneem's team will WhatsApp you within 2 hours.
                </p>
              </div>
              <a
                href="https://wa.me/923335100650?text=Hi%2C%20I%20just%20submitted%20an%20appointment%20request%20on%20your%20website."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-body"
              >
                <MessageCircle className="h-4 w-4" />
                Also WhatsApp Us
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="popup-name" className="font-body text-xs uppercase tracking-[0.2em] text-foreground/70">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="popup-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-border bg-secondary/40 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label htmlFor="popup-phone" className="font-body text-xs uppercase tracking-[0.2em] text-foreground/70">
                  WhatsApp Number <span className="text-accent">*</span>
                </label>
                <input
                  id="popup-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 0000000"
                  required
                  className="w-full border border-border bg-secondary/40 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>

              {/* Category */}
              <div className="space-y-1.5">
                <label htmlFor="popup-category" className="font-body text-xs uppercase tracking-[0.2em] text-foreground/70">
                  I'm Interested In <span className="text-accent">*</span>
                </label>
                <select
                  id="popup-category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full border border-border bg-secondary/40 px-4 py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a Treatment</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.name}>{c.icon} {c.name}</option>
                  ))}
                  <option value="General Consultation">Not Sure — General Consultation</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-3 bg-foreground py-4 text-xs uppercase tracking-[0.25em] text-background transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {submitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Calendar className="h-4 w-4" />
                    Request Free Consultation
                  </>
                )}
              </button>

              {/* OR WhatsApp */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <span className="font-body text-xs text-muted-foreground">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <a
                href="https://wa.me/923335100650?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Pelle%20Aesthetic."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-body transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Book via WhatsApp
              </a>

              {/* Privacy */}
              <div className="flex items-center gap-2 pt-1">
                <Lock className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <p className="font-body text-[11px] text-muted-foreground">
                  100% private & confidential. Your data is never shared.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
