import { useEffect } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { SERVICES } from "@/data/site";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import FinalCTA from "@/components/site/FinalCTA";

const Servicios = () => {
  useEffect(() => {
    document.title = "Servicios — ORTOPECTUS";
  }, []);
  return (
    <Layout>
      <PageHero
        eyebrow="ESPECIALIDADES"
        title="Tratamientos de Excelencia Torácica"
        subtitle="Conozca nuestro portafolio integral de procedimientos especializados."
        image="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=95"
      />
      <section className="bg-white">
        {SERVICES.map((s, i) => {
          const reverse = i % 2 === 1;
          const Icon = s.icon;
          return (
            <article key={s.slug} className={`${i % 2 === 0 ? "bg-white" : "bg-off-white"}`}>
              <div className="container mx-auto px-6 py-20 lg:py-[100px]">
                <div className={`grid lg:grid-cols-2 gap-14 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl overflow-hidden shadow-soft"
                  >
                    <img src={s.image} alt={s.title} loading="lazy" className="w-full h-[420px] object-cover" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="block h-px w-10 bg-primary" />
                      <span className="label-eyebrow text-primary">ESPECIALIDAD {String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.1]">{s.title}</h2>
                    <p className="mt-5 text-[16px] text-ink-secondary leading-[1.7]">{s.description}</p>
                    <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                      {["Diagnóstico avanzado", "Equipo certificado", "Recuperación rápida", "Seguimiento integral"].map((b) => (
                        <li key={b} className="flex items-center gap-2 text-[14px] text-ink-secondary">
                          <Check className="w-4 h-4 text-success" /> {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contacto"
                      className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md text-[14px] font-semibold hover:bg-primary-light transition-colors"
                    >
                      Solicitar evaluación <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <FinalCTA />
    </Layout>
  );
};

export default Servicios;
