import { services } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const accentMap = {
  cyan: "bg-cyan-50 text-cyan-brand",
  navy: "bg-slate-100 text-navy",
  green: "bg-green-50 text-whatsapp",
} as const;

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge-info mb-4">Nos services</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Tout ce qu'il faut pour réussir votre projet
          </h2>
          <p className="mt-4 text-navy-soft">
            Une agence, tous les services. Plus besoin de courir à droite et à
            gauche.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.id}
              className="card group p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div
                className={cn(
                  "mb-4 flex h-11 w-11 items-center justify-center rounded-xl",
                  accentMap[s.accent]
                )}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-soft">
                {s.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-cyan-brand opacity-0 transition-opacity group-hover:opacity-100">
                En savoir plus
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}