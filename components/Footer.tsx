import { Plane, MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy text-white">
      <div className="container-x grid gap-10 py-12 md:grid-cols-3 md:py-16">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-navy">
              <Plane className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">
              Hope<span className="text-cyan-light">Voyage</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">
            Votre partenaire de confiance pour vos projets d'immigration,
            d'études et de voyage vers le Canada, l'Europe et les USA.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3 text-slate-200">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-light" />
              Abidjan, Côte d'Ivoire
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-slate-200 hover:text-white"
              >
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-whatsapp-bright" />
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-3 text-slate-200">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-light" />
              contact@hopevoyage.ci
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Nos services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>Visas & Immigration</li>
            <li>Bourses d'études</li>
            <li>Billets d'avion</li>
            <li>Hôtels & séjours</li>
            <li>Montage de dossier</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Hope Voyage. Tous droits réservés.</p>
          <p>Fait avec soin à Abidjan · Démo CRO</p>
        </div>
      </div>
    </footer>
  );
}