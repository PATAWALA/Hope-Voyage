"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plane,
  GraduationCap,
  Globe2,
  Hotel,
  FileText,
  Users,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageSquare,
  Loader2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { cn, WHATSAPP_NUMBER } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

const destinations = [
  { id: "canada", label: "Canada" },
  { id: "france", label: "France" },
  { id: "usa", label: "USA" },
  { id: "belgique", label: "Belgique" },
  { id: "allemagne", label: "Allemagne" },
  { id: "autre", label: "Autre destination" },
];

const servicesList = [
  { id: "visa", label: "Visa / Immigration", icon: Plane },
  { id: "bourse", label: "Bourse d'études", icon: GraduationCap },
  { id: "billet", label: "Billet d'avion", icon: Globe2 },
  { id: "hotel", label: "Hôtel / Séjour", icon: Hotel },
  { id: "dossier", label: "Montage de dossier", icon: FileText },
  { id: "suivi", label: "Suivi personnalisé", icon: Users },
];

type Step = 1 | 2 | 3;

/* -------------------------------------------------------------------------- */
/*                              COMPONENT                                     */
/* -------------------------------------------------------------------------- */

export default function ProjectForm() {
  const [step, setStep] = useState<Step>(1);
  const [destination, setDestination] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const canNext1 = destination !== "";
  const canNext2 = service !== "";
  const canSubmit = name.trim().length >= 2 && phone.trim().length >= 8;

  /* ------------------------------ WhatsApp URL ------------------------------ */
  const buildWhatsAppMessage = () => {
    const destLabel =
      destinations.find((d) => d.id === destination)?.label ?? destination;
    const servLabel =
      servicesList.find((s) => s.id === service)?.label ?? service;

    const message = `Bonjour Hope Voyage,

Je souhaite déposer mon projet :

- Destination : ${destLabel}
- Service souhaité : ${servLabel}
- Nom : ${name}
- Téléphone : ${phone}

Merci de me recontacter rapidement pour étudier mon dossier.`;

    return encodeURIComponent(message);
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSending(true);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setSending(false);
      setSent(true);
    }, 600);
  };

  const reset = () => {
    setStep(1);
    setDestination("");
    setService("");
    setName("");
    setPhone("");
    setSent(false);
  };

  /* -------------------------------- SUCCESS -------------------------------- */
  if (sent) {
    return (
      <section id="projet" className="bg-white py-16 md:py-24">
        <div className="container-x max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8 text-center md:p-12"
          >
            <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
              <CheckCircle2 className="h-8 w-8 text-whatsapp" />
            </span>

            <h3 className="text-2xl font-extrabold text-navy">
              Votre demande est prête !
            </h3>
            <p className="mt-3 text-navy-soft">
              WhatsApp s'est ouvert avec votre message pré-rempli. Envoyez-le
              pour qu'un conseiller traite votre dossier immédiatement.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageSquare className="h-5 w-5" />
                Rouvrir WhatsApp
              </a>
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-slate-50"
              >
                Nouveau projet
              </button>
            </div>

            <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-navy-soft">
              <Sparkles className="h-3.5 w-3.5 text-cyan-brand" />
              Réponse garantie sous 24h ouvrées
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  /* --------------------------------- FORM ---------------------------------- */
  return (
    <section id="projet" className="bg-white py-16 md:py-24">
      <div className="container-x max-w-2xl">
        {/* Header */}
        <div className="text-center">
          <span className="badge-success mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            Gratuit & sans engagement
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Déposez votre projet en 2 minutes
          </h2>
          <p className="mt-4 text-navy-soft">
            Répondez à 3 questions, nous vous envoyons sur WhatsApp avec votre
            dossier pré-qualifié.
          </p>
        </div>

        {/* Step indicator */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors",
                  step >= n
                    ? "bg-cyan-brand text-white"
                    : "bg-slate-100 text-navy-soft"
                )}
              >
                {n}
              </div>
              {n < 3 && (
                <div
                  className={cn(
                    "h-0.5 w-8 rounded-full transition-colors sm:w-16",
                    step > n ? "bg-cyan-brand" : "bg-slate-200"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="card mt-8 overflow-hidden p-6 md:p-8">
          <AnimatePresence mode="wait">
            {/* -------------------------- STEP 1 : DESTINATION -------------------------- */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-lg font-bold text-navy">
                  Quelle est votre destination ?
                </h3>
                <p className="mt-1 text-sm text-navy-soft">
                  Choisissez le pays qui vous intéresse.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {destinations.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDestination(d.id)}
                      className={cn(
                        "rounded-xl border px-4 py-3 text-sm font-semibold transition-all",
                        destination === d.id
                          ? "border-cyan-brand bg-cyan-50 text-cyan-brand ring-1 ring-cyan-brand"
                          : "border-slate-200 bg-white text-navy hover:border-slate-300 hover:bg-slate-50"
                      )}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    disabled={!canNext1}
                    onClick={() => setStep(2)}
                    className={cn(
                      "btn-primary",
                      !canNext1 && "cursor-not-allowed opacity-50"
                    )}
                  >
                    Continuer
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* --------------------------- STEP 2 : SERVICE --------------------------- */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-lg font-bold text-navy">
                  De quoi avez-vous besoin ?
                </h3>
                <p className="mt-1 text-sm text-navy-soft">
                  Sélectionnez le service principal.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {servicesList.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setService(s.id)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition-all",
                        service === s.id
                          ? "border-cyan-brand bg-cyan-50 text-cyan-brand ring-1 ring-cyan-brand"
                          : "border-slate-200 bg-white text-navy hover:border-slate-300 hover:bg-slate-50"
                      )}
                    >
                      <s.icon className="h-5 w-5 shrink-0" />
                      {s.label}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-soft transition-colors hover:text-navy"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Retour
                  </button>
                  <button
                    type="button"
                    disabled={!canNext2}
                    onClick={() => setStep(3)}
                    className={cn(
                      "btn-primary",
                      !canNext2 && "cursor-not-allowed opacity-50"
                    )}
                  >
                    Continuer
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ------------------------- STEP 3 : COORDONNÉES ------------------------- */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-lg font-bold text-navy">
                  Vos coordonnées
                </h3>
                <p className="mt-1 text-sm text-navy-soft">
                  Pour qu'un conseiller vous recontacte sur WhatsApp.
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-navy"
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex : Aminata Koné"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-colors focus:border-cyan-brand focus:outline-none focus:ring-2 focus:ring-cyan-brand/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-semibold text-navy"
                    >
                      Numéro WhatsApp
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex : +225 07 00 00 00 00"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-colors focus:border-cyan-brand focus:outline-none focus:ring-2 focus:ring-cyan-brand/20"
                    />
                  </div>
                </div>

                {/* Récap */}
                <div className="mt-6 rounded-xl bg-slate-50 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-soft">
                    Récapitulatif
                  </p>
                  <div className="space-y-1.5 text-sm text-navy">
                    <p>
                      <span className="text-navy-soft">Destination :</span>{" "}
                      <span className="font-semibold">
                        {destinations.find((d) => d.id === destination)?.label}
                      </span>
                    </p>
                    <p>
                      <span className="text-navy-soft">Service :</span>{" "}
                      <span className="font-semibold">
                        {servicesList.find((s) => s.id === service)?.label}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-navy-soft transition-colors hover:text-navy"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Retour
                  </button>

                  <button
                    type="button"
                    disabled={!canSubmit || sending}
                    onClick={handleSubmit}
                    className={cn(
                      "btn-whatsapp w-full sm:w-auto",
                      (!canSubmit || sending) &&
                        "cursor-not-allowed opacity-60"
                    )}
                  >
                    {sending ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="h-5 w-5" />
                        Envoyer sur WhatsApp
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Micro-rassurance */}
        <p className="mt-4 text-center text-xs text-navy-soft">
          Vos informations restent confidentielles. Aucun spam, promis.
        </p>
      </div>
    </section>
  );
}