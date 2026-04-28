import { useEffect, useState } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import SectionHeader from "@/components/site/SectionHeader";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldAlert, X } from "lucide-react";
import FinalCTA from "@/components/site/FinalCTA";

const CASES = [
  { id: 1, type: "Pectus Excavatum", recovery: "4 semanas", img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=90" },
  { id: 2, type: "Reconstrucción", recovery: "8 semanas", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=90" },
  { id: 3, type: "Mínima Invasión", recovery: "2 semanas", img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=900&q=90" },
  { id: 4, type: "Trauma Torácico", recovery: "6 semanas", img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=900&q=90" },
  { id: 5, type: "Remodelación Costal", recovery: "5 semanas", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=90" },
  { id: 6, type: "Hiperhidrosis", recovery: "1 semana", img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&q=90" },
  { id: 7, type: "Tumoración de Pared", recovery: "7 semanas", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=90" },
  { id: 8, type: "Injerto Costal", recovery: "5 semanas", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=900&q=90" },
];

const FILTERS = ["Todos", ...Array.from(new Set(CASES.map((c) => c.type)))];

const Casos = () => {
  const [filter, setFilter] = useState("Todos");
  const [open, setOpen] = useState<typeof CASES[number] | null>(null);
  useEffect(() => { document.title = "Casos Clínicos — ORTOPECTUS"; }, []);
  const list = filter === "Todos" ? CASES : CASES.filter((c) => c.type === filter);

  return (
    <Layout>
      <PageHero
        eyebrow="RESULTADOS"
        title="Casos Clínicos"
        subtitle="Resultados reales de nuestros pacientes. Imágenes representativas con consentimiento."
        image="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=90"
      />

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="GALERÍA" title="Procedimientos Recientes" accent="blue" />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold border transition-all ${
                  filter === f
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-ink-secondary border-border hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-6 mb-10 mx-auto max-w-3xl flex items-start gap-3 bg-off-white border border-border-soft rounded-lg px-5 py-4">
            <ShieldAlert className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="text-[13px] text-ink-secondary leading-relaxed">
              Las imágenes mostradas son representativas y publicadas con consentimiento informado de los pacientes.
              Los resultados varían según cada caso particular.
            </p>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {list.map((c, i) => (
                <motion.button
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  onClick={() => setOpen(c)}
                  className="group bg-white border border-border-soft rounded-xl overflow-hidden shadow-card hover:shadow-lift transition-all text-left"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <img src={c.img} alt={c.type} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="text-[13px] text-primary font-semibold uppercase tracking-wider">{c.type}</div>
                    <div className="mt-2 font-display text-xl text-ink">Recuperación: {c.recovery}</div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full"
            >
              <div className="relative">
                <button
                  onClick={() => setOpen(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-ink hover:bg-white"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
                <img src={open.img} alt={open.type} className="w-full h-[480px] object-cover" />
              </div>
              <div className="p-8">
                <div className="text-[13px] text-primary font-semibold uppercase tracking-wider">{open.type}</div>
                <h3 className="mt-2 font-display text-3xl text-ink">Recuperación estimada: {open.recovery}</h3>
                <p className="mt-3 text-[14px] text-ink-secondary leading-relaxed">
                  Caso representativo. La evolución y los resultados específicos dependen de cada paciente y se discuten en consulta.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FinalCTA />
    </Layout>
  );
};

export default Casos;
