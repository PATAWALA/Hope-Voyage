import { LucideIcon } from "lucide-react";

export type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "cyan" | "navy" | "green";
};

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  destination: string;
  visaType: string;
  badge: "Visa Accordé" | "Bourse Confirmée" | "Billet Réservé";
  quote: string;
  image: string;
  avatar: string;
  rating: number;
};