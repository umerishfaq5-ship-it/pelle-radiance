import { useState } from "react";
import { MessageCircle, Send, Lock } from "lucide-react";
import { categories } from "@/data/services";
import { useToast } from "@/hooks/use-toast";
import { submitToSheet } from "@/lib/submitToSheet";

export const AppointmentForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    date: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.category) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      // Submit to both Google Sheets AND Formspree simultaneously
      await Promise.allSettled([
        submitToSheet({
          name: form.name,
          phone: form.phone,
          category: form.category,
          date: form.date,
          message: form.message,
          source: "Main Appointment Form",
        }),
        fetch("https://formspree.io/f/xanynvjk", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            category: form.category,
            preferred_date: form.date || "Flexible",
            message: form.message || "No additional message.",
            _subject: `New Appointment — ${form.category} — Pelle Aesthetic`,
          }),
        }),
      ]);
      setSubmitted(true);
    } catch {
      toast({ title: "Network error. Please try WhatsApp instead.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const waMessage = encodeURIComponent(
    `Hi, I would like to book an appointment at Pelle Aesthetic & Cosmetic.\n\nName: ${form.name || "[your name]"}\nPhone: ${form.phone || "[your number]"}\nTreatment: ${form.category || "[treatment]"}\n\nPlease advise on availability.`
  );

  return (
    <section id="appointment" className="relative overflow-hidden py-24 md:py-36">
      {/* Rose gradient background */}
      <div className="absolute inset-0 bg-gradient-rose opacity-10" />
      <div className="absolute inset-0 bg-secondary/60" />

      <div className="container-luxe relative z-10 grid gap-16 md:grid-cols-12">
        {/* Left info column */}
        <div className="md:col-span-5">
          <div className="eyebrow">Book an Appointment</div>
          <h2 className="mt-5 font-display text-5xl leading-[1.03] md:text-6xl text-balance">
            Start your{" "}
            <em className="text-accent">journey</em>{" "}
            today.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            Fill in the form and Dr. Tasneem's team will get back to you on WhatsApp
            within 2 hours. Alternatively, message us directly below.
          </p>

          {/* Privacy notice */}
          <div className="mt-8 flex items-start gap-3 bg-background/70 border border-border rounded-sm p-5">
            <Lock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <div className="font-body text-sm font-semibold text-foreground">100% Private &amp; Confidential</div>
              <div className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">
                Your personal information and medical enquiries are treated with complete discretion.
                We never share your data with any third party.
              </div>
            </div>
          </div>

          {/* Direct WhatsApp CTA */}
          <div className="mt-6">
            <a
              href={`https://wa.me/923335100650?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-4 text-xs uppercase tracking-[0.2em] font-body transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30 w-full justify-center md:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Book Directly via WhatsApp
            </a>
          </div>

          {/* Clinic hours */}
          <div className="mt-8 space-y-2">
            <div className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">Clinic Hours</div>
            {[
              ["Mon – Fri", "3:00 PM – 8:00 PM"],
              ["Saturday", "3:00 PM – 8:00 PM"],
              ["Sunday", "Closed"],
            ].map(([day, hrs]) => (
              <div key={day} className="flex items-center justify-between font-body text-sm text-foreground/80 py-1.5 border-b border-border/40">
                <span>{day}</span>
                <span className="text-muted-foreground">{hrs}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form column */}
        <div className="md:col-span-7">
          {submitted ? (
            <div className="bg-background shadow-elegant border border-border p-10 flex flex-col items-center text-center gap-6">
              <div className="text-4xl">✓</div>
              <h3 className="font-display text-3xl">Thank You, {form.name || "Patient"}!</h3>
              <p className="font-body text-base text-muted-foreground max-w-sm">
                Your appointment request has been received. Dr. Tasneem's team will contact you on WhatsApp within <strong>2 hours</strong>.
              </p>
              <a
                href={`https://wa.me/923335100650?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-7 py-4 text-xs uppercase tracking-[0.2em] font-body transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Also Message Us on WhatsApp
              </a>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", category: "", date: "", message: "" }); }}
                className="font-body text-xs text-muted-foreground underline underline-offset-2"
              >
                Submit another request
              </button>
            </div>
          ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-background shadow-elegant border border-border p-8 md:p-10 space-y-6"
          >
            <div className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
              Appointment Request Form
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="appt-name" className="font-body text-xs uppercase tracking-[0.2em] text-foreground/70">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="appt-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                  className="w-full border border-border bg-secondary/30 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="appt-phone" className="font-body text-xs uppercase tracking-[0.2em] text-foreground/70">
                  WhatsApp Number <span className="text-accent">*</span>
                </label>
                <input
                  id="appt-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 0000000"
                  required
                  className="w-full border border-border bg-secondary/30 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Treatment */}
              <div className="space-y-2">
                <label htmlFor="appt-category" className="font-body text-xs uppercase tracking-[0.2em] text-foreground/70">
                  Treatment Category <span className="text-accent">*</span>
                </label>
                <select
                  id="appt-category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full border border-border bg-secondary/30 px-4 py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a Category</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.name}>{c.icon} {c.name}</option>
                  ))}
                  <option value="Not Sure / General Consultation">Not Sure — General Consultation</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <label htmlFor="appt-date" className="font-body text-xs uppercase tracking-[0.2em] text-foreground/70">
                  Preferred Date
                </label>
                <input
                  id="appt-date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-border bg-secondary/30 px-4 py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors cursor-pointer"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="appt-message" className="font-body text-xs uppercase tracking-[0.2em] text-foreground/70">
                Anything Else? (Optional)
              </label>
              <textarea
                id="appt-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us more about your concerns or what you'd like to discuss..."
                className="w-full border border-border bg-secondary/30 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group w-full flex items-center justify-center gap-3 bg-foreground py-4 text-xs uppercase tracking-[0.25em] text-background transition-all hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>Sending Request...</>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Appointment Request
                </>
              )}
            </button>

            <p className="font-body text-xs text-center text-muted-foreground">
              We will contact you on WhatsApp within 2 hours · Mon–Sat
            </p>
          </form>
          )}
        </div>
      </div>
    </section>
  );
};
