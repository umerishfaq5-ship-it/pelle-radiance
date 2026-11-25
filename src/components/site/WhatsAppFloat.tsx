import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export const WhatsAppFloat = () => (
  <a
    href={whatsappLink("Hello, I would like to book a consultation at Pelle.")}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-105"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);
