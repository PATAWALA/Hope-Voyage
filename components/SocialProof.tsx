import Image from "next/image";
import { Star, CheckCircle2, Award, Play } from "lucide-react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

const badgeStyles = {
  "Visa Accordé": "bg-green-50 text-whatsapp ring-green-200",
  "Bourse Confirmée": "bg-cyan-50 text-cyan-brand ring-cyan-200",
  "Billet Réservé": "bg-slate-100 text-navy ring-slate-200",
} as const;

export default function SocialProof() {
  return (
    <section id="temoignages" className="bg-slate-50 py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge-success mb-4">
            <Award className="h-3.5 w-3.5" />
            +350 réussites vérifiées
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Ils ont obtenu leur visa avec nous
          </h2>
          <p className="mt-4 text-navy-soft">
            Des résultats concrets, des clients qui témoignent. Votre tour
            arrive.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="card group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Image avec badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={t.image}
                  alt={`${t.name} — ${t.destination}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <span
                  className={cn(
                    "absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
                    badgeStyles[t.badge]
                  )}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {t.badge}
                </span>
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur">
                  <Play className="h-4 w-4 fill-current" />
                </span>
              </div>

              {/* Contenu */}
              <div className="p-5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-navy-soft">
                  « {t.quote} »
                </p>

                <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-navy">
                      {t.name}
                    </p>
                    <p className="truncate text-xs text-navy-soft">
                      {t.city} → {t.destination}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}