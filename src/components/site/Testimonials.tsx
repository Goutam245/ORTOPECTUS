import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "./SectionHeader";

const TESTIMONIALS = [
  {
    quote: "Después de años con Pectus Excavatum, ORTOPECTUS cambió mi vida completamente. Técnica impecable y recuperación increíblemente rápida.",
    name: "Carlos M.",
    age: "28 años",
    procedure: "Pectus Excavatum",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=90",
  },
  {
    quote: "El equipo es excepcional. Me sentí en las mejores manos desde la primera consulta. Resultados que superaron todas mis expectativas.",
    name: "Ana L.",
    age: "35 años",
    procedure: "Remodelación Costal",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=90",
  },
  {
    quote: "Profesionalismo, precisión y humanidad. ORTOPECTUS no solo trata, transforma vidas. Los recomiendo con absoluta confianza.",
    name: "Roberto S.",
    age: "42 años",
    procedure: "Reconstrucción Torácica",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=90",
  },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-light-gray py-24 lg:py-[120px]">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="TESTIMONIOS"
          title={<>Historias que <span className="italic text-primary">Inspiran</span></>}
          subtitle="La confianza de nuestros pacientes es el mayor reconocimiento a un trabajo realizado con precisión y profundo respeto humano."
          accent="gold"
        />

        <div className="mt-16 hidden md:grid md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white border border-border-soft rounded-xl p-10 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-light/30" />
              <div className="flex gap-1 text-gold-light mb-5">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-display italic text-[20px] text-ink leading-[1.55]">"{t.quote}"</p>
              <div className="mt-7 pt-6 border-t border-border-soft flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-light/40"
                />
                <div>
                  <div className="text-[14px] font-bold text-ink">{t.name} <span className="font-normal text-ink-muted">· {t.age}</span></div>
                  <div className="text-[12px] text-primary mt-0.5 font-mono tracking-wider uppercase">{t.procedure}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 md:hidden relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-border-soft rounded-xl p-8 shadow-card"
            >
              <div className="flex gap-1 text-gold-light mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-display italic text-[18px] text-ink leading-[1.6]">"{TESTIMONIALS[idx].quote}"</p>
              <div className="mt-5 pt-5 border-t border-border-soft flex items-center gap-3">
                <img
                  src={TESTIMONIALS[idx].avatar}
                  alt={TESTIMONIALS[idx].name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-gold-light/40"
                />
                <div>
                  <div className="text-[14px] font-bold text-ink">{TESTIMONIALS[idx].name} <span className="font-normal text-ink-muted">· {TESTIMONIALS[idx].age}</span></div>
                  <div className="text-[11px] text-primary mt-0.5 font-mono tracking-wider uppercase">{TESTIMONIALS[idx].procedure}</div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Testimonio ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-1.5 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
