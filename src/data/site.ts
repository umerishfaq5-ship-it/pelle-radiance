// Clinic contact details used across the site. Update once here.
export const site = {
  name: "Pelle Aesthetic & Cosmetic",
  doctor: "Dr. Tasneem Elahi",
  phoneDisplay: "+92 300 000 0000",
  phoneHref: "tel:+923000000000",
  whatsappNumber: "923000000000",
  email: "care@pelleaesthetic.pk",
  hours: "Mon – Sat · 11:00 to 20:00",
  location: "I-8/3, Islamabad",
  instagram: "#",
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
