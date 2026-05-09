import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const phone = "919370147921";
  const message = encodeURIComponent("Hello Rekha Graphics, I'd like a quote for industrial stickers / labels.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white flex items-center justify-center shadow-glow animate-pulse-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
