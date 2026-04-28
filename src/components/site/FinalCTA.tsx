import { motion } from "framer-motion";
import { Phone, MessageCircle, Lock, Zap, CreditCard, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT } from "@/data/site";

const TRUST = [
  { icon: Lock, label: "Consulta Confidencial" },
  { icon: Zap, label: "Respuesta en 24h" },
  { icon: CreditCard, label: "Facilidades de Pago" },
  { icon: Check, label: "Sin Compromiso" },
];

const FinalCTA = () => {
  return (
    <section className="bg-white py-24 lg:py-[120px]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-[64px] leading-[1.05] text-ink">
            Dé el Primer Paso
            <br />
            <span className="italic text-primary">Hacia una Vida Plena</span>
          </h2>
          <p className="mt-6 text-[18px] text-ink-secondary max-w-xl mx-auto leading-relaxed">
            Agende una consulta privada con nuestro equipo. Le responderemos en menos de 24 horas con total discreción.
          </p>
          <span className="block h-px w-20 bg-gold-light mx-auto mt-10" />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-md text-[15px] font-semibold hover:bg-primary-light hover:shadow-[0_8px_28px_hsl(var(--primary)/0.35)] transition-all"
            >
              <Phone className="w-4 h-4" /> Agendar Consulta Ahora
            </Link>
            <a href={`tel:${CONTACT.phoneRaw}`} className="font-sans font-bold text-[20px] text-ink hover:text-primary transition-colors">
              {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              className="inline-flex items-center gap-2 bg-success text-white px-7 py-4 rounded-md text-[14px] font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUST.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.label} className="flex items-center gap-2 text-[13px] text-ink-secondary">
                  <Icon className="w-4 h-4 text-primary" /> {t.label}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
