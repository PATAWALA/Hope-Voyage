import Image from "next/image";
import {
  ShieldCheck,
  Star,
  MessageSquare,
  CheckCircle2,
  MapPin,
  ArrowRight,
} from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, label: "Dossier 100% sécurisé" },
  { icon: CheckCircle2, label: "Suivi WhatsApp 24/7" },
  { icon: Star, label: "98% de satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Halos décoratifs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-green-100/40 blur-3xl" />

      <div className="container-x relative grid gap-12 py-14 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Colonne texte */}
        <div className="animate-fade-in">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-whatsapp" />
            <span className="text-xs font-semibold text-navy-soft">
              Agence N°1 en Côte d'Ivoire · +350 visas obtenus
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Réservez votre accompagnement{" "}
            <span className="bg-gradient-to-r from-cyan-brand to-cyan-light bg-clip-text text-transparent">
              Canada / Europe
            </span>{" "}
            en 2 minutes.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-soft sm:text-lg">
            Visa, bourse d'études, billet d'avion ou hôtel : un conseiller
            dédié prend en charge votre projet de A à Z. Réponse en moins de
            24h sur WhatsApp.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projet"
              className="btn-primary group w-full sm:w-auto"
            >
              <MessageSquare className="h-5 w-5" />
              Déposer mon projet gratuitement
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#temoignages"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              Voir les résultats
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 text-sm font-medium text-navy-soft"
              >
                <b.icon className="h-4 w-4 text-whatsapp" />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Colonne visuelle */}
        <div className="relative animate-slide-up">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-card-hover sm:aspect-[5/6]">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80&auto=format&fit=crop"
              alt="Étudiante souriante à l'aéroport avec son passeport"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

            {/* Carte flottante : visa accordé */}
            <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-lg backdrop-blur-md sm:left-6 sm:right-auto sm:max-w-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2 className="h-5 w-5 text-whatsapp" />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy">
                    Visa Canada accordé
                  </p>
                  <p className="text-xs text-navy-soft">
                    Aminata · Montréal · 3 mois
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Carte flottante : destination */}
          <div className="absolute -top-4 -right-2 hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-card sm:block">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-brand" />
              <span className="text-xs font-semibold text-navy">
                Canada · France · USA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}