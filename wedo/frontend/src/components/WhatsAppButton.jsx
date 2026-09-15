import { MessageCircle } from "lucide-react";
import { contact } from "../data/branches";

export default function WhatsAppButton() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan bize yazın"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-mint text-white pl-4 pr-5 py-3.5 shadow-card hover:bg-mint-dark active:scale-95 transition-all"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
      <span className="hidden sm:inline font-display font-semibold text-sm">Bilgi Al</span>
    </a>
  );
}
