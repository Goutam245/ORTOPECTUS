import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "@/data/site";
import SectionHeader from "./SectionHeader";

const ServicesGrid = () => {
  // Show only the 6 most prominent on the homepage to keep it focused.
  const featured = SERVICES.slice(0, 6);
  return (
    <section id="servicios" className="bg-off-white py-24 lg:py-[120px]">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="NUESTRAS ESPECIALIDADES"
          title={<>Tratamientos <span className="italic text-primary">Especializados</span></>}
          subtitle="Una oferta integral de procedimientos de la más alta complejidad, ejecutados con técnica de vanguardia y el mejor equipo humano."
          accent="gold"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group bg-white border border-border-soft rounded-xl overflow-hidden shadow-card hover:-translate-y-1.5 hover:shadow-lift hover:border-primary transition-all duration-[350ms]"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-mono tracking-[0.2em] text-primary border border-white/60">
                    <span className="block w-1 h-1 rounded-full bg-gold-light" />
                    0{i + 1}
                  </span>
                </div>
                <div className="relative">
                  <span className="absolute top-0 inset-x-0 h-[3px] bg-primary" />
                  <div className="p-7">
                    <Icon className="w-[22px] h-[22px] text-primary mb-4" />
                    <h3 className="font-sans text-[18px] font-bold text-ink leading-snug">{s.title}</h3>
                    <p className="mt-3 text-[14px] text-ink-secondary leading-[1.6]">{s.short}</p>
                    <Link
                      to="/servicios"
                      className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:gap-2.5 transition-all"
                    >
                      Ver más <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 bg-white border-[1.5px] border-ink text-ink px-8 py-3.5 rounded-md text-[14px] font-semibold hover:bg-ink hover:text-white transition-colors"
          >
            Ver todas las especialidades <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
