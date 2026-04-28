import {
  Activity, Shield, Layers, Zap, Scissors, Sparkles, Heart, Droplets, Target,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Casos", to: "/casos" },
  { label: "Contacto", to: "/contacto" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "deformidades-toracicas",
    title: "Deformidades Torácicas",
    short: "Pectus Excavatum, Carinatum y otras correcciones.",
    description:
      "Tratamiento integral de Pectus Excavatum, Pectus Carinatum y deformidades complejas mediante técnicas mínimamente invasivas como Nuss y Ravitch modificada.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=90",
  },
  {
    slug: "tumoraciones-de-pared",
    title: "Tumoraciones de Pared",
    short: "Diagnóstico y resección de tumores torácicos.",
    description:
      "Manejo oncológico y reconstructivo de tumores benignos y malignos de la pared torácica con enfoque multidisciplinario.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=90",
  },
  {
    slug: "reconstruccion-toracica",
    title: "Reconstrucción Torácica",
    short: "Reconstrucción funcional y estética.",
    description:
      "Reconstrucción de defectos complejos con prótesis a medida, mallas biológicas y colgajos para restaurar forma y función.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=90",
  },
  {
    slug: "trauma-toracico",
    title: "Trauma Torácico",
    short: "Atención de urgencias y secuelas.",
    description:
      "Manejo agudo y tardío de trauma torácico, fracturas costales múltiples y tórax inestable con osteosíntesis especializada.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=90",
  },
  {
    slug: "injertos-costales",
    title: "Injertos Costales",
    short: "Injertos autólogos y aloinjertos.",
    description:
      "Toma y aplicación de injertos costales para reconstrucciones craneofaciales, ortopédicas y torácicas.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&q=90",
  },
  {
    slug: "remodelacion-costal",
    title: "Remodelación Costal",
    short: "Estética torácica avanzada.",
    description:
      "Remodelación costal estética para armonización de la silueta torácica con técnicas seguras y resultados naturales.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=90",
  },
  {
    slug: "manejo-del-dolor",
    title: "Manejo del Dolor",
    short: "Programas multimodales de analgesia.",
    description:
      "Bloqueos avanzados, crioanalgesia y protocolos ERAS para una recuperación cómoda y acelerada.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=90",
  },
  {
    slug: "hiperhidrosis",
    title: "Hiperhidrosis",
    short: "Simpaticotomía videotoracoscópica.",
    description:
      "Tratamiento definitivo de la sudoración excesiva mediante cirugía mínimamente invasiva con resultados inmediatos.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=90",
  },
  {
    slug: "minima-invasion",
    title: "Mínima Invasión",
    short: "VATS y cirugía robótica.",
    description:
      "Procedimientos torácicos mínimamente invasivos asistidos por video y robótica para máxima precisión y mínimo trauma.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=90",
  },
];

export const CONTACT = {
  phone: "+52 (55) 1234-5678",
  phoneRaw: "+525512345678",
  whatsapp: "525512345678",
  email: "contacto@ortopectus.com",
  address: "Av. Reforma 250, Piso 12, Col. Juárez, Ciudad de México",
  hours: "Lun – Vie · 9:00 – 19:00 hrs",
};
