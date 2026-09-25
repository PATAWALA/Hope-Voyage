import {
  Plane,
  GraduationCap,
  ShieldCheck,
  Hotel,
  FileText,
  Globe2,
  Users,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";
import type { Service, Stat, Testimonial } from "@/types";

export const WHATSAPP_NUMBER = "2250717291496";
export const WHATSAPP_DISPLAY = "+225 07 17 29 14 96";

export const stats: Stat[] = [
  { value: "+350", label: "Visas obtenus", icon: ShieldCheck },
  { value: "98%", label: "Clients satisfaits", icon: Star },
  { value: "13K+", label: "Abonnés TikTok", icon: TrendingUp },
  { value: "8 ans", label: "D'expérience", icon: Award },
];

export const services: Service[] = [
  {
    id: "visa",
    title: "Visas & Immigration",
    description:
      "Accompagnement complet : Canada (Express Entry, PEQ), Europe (Schengen, France), USA. Dossier monté par experts.",
    icon: Plane,
    accent: "cyan",
  },
  {
    id: "bourses",
    title: "Bourses d'Études",
    description:
      "Candidatures universitaires Canada, France, Belgique. Nous avons obtenu +120 bourses ces 3 dernières années.",
    icon: GraduationCap,
    accent: "navy",
  },
  {
    id: "billets",
    title: "Billets d'Avion",
    description:
      "Tarifs négociés avec Air France, Turkish Airlines, Ethiopian. Paiement en 2x possible. Bagages inclus.",
    icon: Globe2,
    accent: "green",
  },
  {
    id: "hotels",
    title: "Hôtels & Séjour",
    description:
      "Réservation d'hôtels et auberges pour votre arrivée. Partenariats directs à Montréal, Paris, Bruxelles.",
    icon: Hotel,
    accent: "cyan",
  },
  {
    id: "dossier",
    title: "Montage de Dossier",
    description:
      "Lettre de motivation, CV format international, traductions certifiées, légalisations.",
    icon: FileText,
    accent: "navy",
  },
  {
    id: "suivi",
    title: "Suivi Personnalisé",
    description:
      "Un conseiller dédié sur WhatsApp du dépôt à l'obtention. Aucune question sans réponse en 24h.",
    icon: Users,
    accent: "green",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aminata K.",
    city: "Abidjan",
    destination: "Canada",
    visaType: "Permis d'études",
    badge: "Visa Accordé",
    quote:
      "J'ai reçu mon visa pour Montréal en 3 mois. L'équipe a tout géré, du CAQ au permis. Merci Hope Voyage !",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "t2",
    name: "Ibrahim D.",
    city: "Bouaké",
    destination: "France",
    visaType: "Visa étudiant",
    badge: "Bourse Confirmée",
    quote:
      "Bourse de 8 000€ obtenue à Toulouse. Sans eux je n'aurais jamais osé candidater. Dossier béton.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "t3",
    name: "Fatou S.",
    city: "Yamoussoukro",
    destination: "Belgique",
    visaType: "Regroupement familial",
    badge: "Visa Accordé",
    quote:
      "Après 2 refus par moi-même, ils ont monté un dossier en 1 mois. Visa accordé du premier coup.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "t4",
    name: "Kofi M.",
    city: "Abidjan",
    destination: "USA",
    visaType: "Billet + Hôtel",
    badge: "Billet Réservé",
    quote:
      "Billet Abidjan–New York à -40% du prix normal. Paiement en 2 fois accepté. Service impeccable.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "t5",
    name: "Mariam T.",
    city: "San Pedro",
    destination: "Canada",
    visaType: "Express Entry",
    badge: "Visa Accordé",
    quote:
      "Résidence permanente validée. Leur expertise sur Express Entry a fait toute la différence.",
    image:
      "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&q=80&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: "t6",
    name: "Yao B.",
    city: "Abidjan",
    destination: "Allemagne",
    visaType: "Visa travail",
    badge: "Visa Accordé",
    quote:
      "Contrat de travail + visa en 4 mois. Ils connaissent vraiment les procédures européennes.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&auto=format&fit=crop",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80&auto=format&fit=crop",
    rating: 5,
  },
];