"use client";

import { MessageSquare, Phone, FileText } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "@/lib/utils";

const whatsappMessage = encodeURIComponent(
  "Bonjour Hope Voyage 👋 Je viens du site et je souhaite des informations sur vos services (visa, bourse, billet)."
);

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="border-t border-slate-200 bg-white/95 px-3 py-3 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur-lg">
        <div className="flex items-center gap-2">
          <a
            href="#projet"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-navy"
          >
            <FileText className="h-4 w-4" />
            Mon projet
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex-1 py-3 text-sm"
            aria-label={`Contacter sur WhatsApp au ${WHATSAPP_DISPLAY}`}
          >
            <MessageSquare className="h-4 w-4" />
            WhatsApp
          </a>

          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white"
            aria-label="Appeler"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}