import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4 md:py-12">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <s.icon className="mx-auto mb-3 h-6 w-6 text-cyan-brand" />
            <p className="font-display text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs font-medium text-navy-soft md:text-sm">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}