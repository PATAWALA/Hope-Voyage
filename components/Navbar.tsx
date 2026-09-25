"use client";

import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Résultats", href: "#temoignages" },
  { label: "Déposer un projet", href: "#projet" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-lg">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white">
            <Plane className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-navy">
            Hope<span className="text-cyan-brand">Voyage</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy-soft transition-colors hover:text-cyan-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#projet"
          className="hidden rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light md:inline-flex"
        >
          Démarrer
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-slate-200 bg-white transition-all md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-navy-soft hover:bg-slate-50"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}