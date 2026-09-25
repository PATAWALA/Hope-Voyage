import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hope Voyage — Visa, Bourse, Billet | Accompagnement Canada & Europe",
  description:
    "Agence N°1 en Côte d'Ivoire. +350 visas obtenus, 98% de satisfaction. Déposez votre projet en 2 minutes et recevez une réponse WhatsApp sous 24h.",
  keywords: ["visa Canada", "bourse études", "billet avion Abidjan", "immigration Côte d'Ivoire"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="pb-24 md:pb-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBottomBar />
      </body>
    </html>
  );
}