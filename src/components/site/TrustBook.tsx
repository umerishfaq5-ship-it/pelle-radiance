import { FormEvent, useState } from "react";
import { Award, HeartHandshake, ShieldCheck } from "lucide-react";
import { categories } from "@/data/services";
import { whatsappLink } from "@/data/site";

const stats = [
  ["12+", "Years of Practice"],
  ["5K+", "Happy Patients"],
  ["20+", "Treatments"],
  ["98%", "Satisfaction"],
];

const badges = [
  { icon: Award, label: "MBBS Certified" },
  { icon: HeartHandshake, label: "Female-Led" },
  { icon: ShieldCheck, label: "Medical-Grade Safety" },
];

export const BookingForm = ({ title = "Book a Consultation" }: { title?: string }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState(categories[0].name);
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello, I would like to book a consultation.\nName: ${name}\nPhone: ${phone}\nTreatment: ${treatment}${message ? `\nMessage: ${message}` : ""}`;
    window.open(whatsappLink(msg), "_blank", "noopener");
  };

  const field = "h-12 w-full rounded-full border border-border bg-background px-5 font-body text-sm outline-none focus:border-primary";

  return (
    <form onSubmit={submit} className="space-y-3">
      <h3 className="font-display text-4xl leading-tight">{title}</h3>
      <p className="pb-2 font-body text-sm text-muted-foreground">Send your details and our team will reply on WhatsApp.</p>
      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className={field} />
      <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" inputMode="tel" className={field} />
      <select value={treatment} onChange={(e) => setTreatment(e.target.value)} className={field}>
        {categories.map((c) => (
          <option key={c.slug}>{c.name}</option>
        ))}
      </select>
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message (optional)" className={field} />
      <button type="submit" className="h-12 w-full rounded-full bg-primary font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground">
        Book An Appointment
      </button>
    </form>
  );
};

export const TrustBook = () => (
  <section className="bg-background py-20 md:py-24">
    <div className="container-luxe grid gap-8 lg:grid-cols-12">
      <div className="rounded-3xl bg-secondary/50 p-8 md:p-10 lg:col-span-7">
        <h2 className="font-display text-5xl leading-none md:text-6xl">
          Our <em className="text-primary">Trust</em>
        </h2>
        <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-muted-foreground">
          Over a decade of personal, doctor-led aesthetic care in Islamabad.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-y-8 border-y border-dashed border-primary/30 py-8 sm:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-5xl text-primary">{n}</div>
              <div className="mt-1 font-body text-sm text-foreground/70">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2.5 font-body text-sm text-foreground/80">
              <Icon className="h-4 w-4 text-primary" /> {label}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10 lg:col-span-5">
        <BookingForm />
      </div>
    </div>
  </section>
);
