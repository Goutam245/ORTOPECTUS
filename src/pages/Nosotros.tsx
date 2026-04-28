import { useEffect } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import SectionHeader from "@/components/site/SectionHeader";
import { motion } from "framer-motion";
import { Award, HeartPulse, Lightbulb, Users } from "lucide-react";
import FinalCTA from "@/components/site/FinalCTA";

const DOCTORS = [
  { name: "Dr. Alejandro Ruiz", role: "Director Médico · Cirugía Torácica", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=90" },
  { name: "Dra. Mariana Vega", role: "Especialista en Reconstrucción", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=90" },
  { name: "Dr. Eduardo Salinas", role: "Cirugía Mínimamente Invasiva", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=90" },
];

const TIMELINE = [
  { year: "2008", text: "Fundación de ORTOPECTUS" },
  { year: "2012", text: "Primer programa Pectus en LATAM" },
  { year: "2016", text: "Certificación ISO 9001" },
  { year: "2020", text: "Plataforma robótica integrada" },
  { year: "2024", text: "+2,000 pacientes atendidos" },
];

const VALUES = [
  { icon: Award, title: "Excelencia", text: "Estándares internacionales en cada procedimiento." },
  { icon: HeartPulse, title: "Humanidad", text: "Cuidado integral centrado en la persona." },
  { icon: Lightbulb, title: "Innovación", text: "Investigación y tecnología de vanguardia." },
  { icon: Users, title: "Equipo", text: "Multidisciplinario y altamente especializado." },
];

const Nosotros = () => {
  useEffect(() => { document.title = "Nosotros — ORTOPECTUS"; }, []);
  return (
    <Layout>
      <PageHero
        eyebrow="QUIÉNES SOMOS"
        title="Una Tradición de Excelencia"
        subtitle="Más de 15 años transformando vidas con cirugía torácica de clase mundial."
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=95"
      />

      {/* Mission */}
      <section className="bg-white py-24 lg:py-[120px]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-5">
              <span className="block h-px w-12 bg-primary" />
              <span className="label-eyebrow text-primary">MISIÓN Y VISIÓN</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.1]">Restaurar forma, función y confianza.</h2>
            <p className="mt-6 text-[16px] text-ink-secondary leading-[1.7]">
              En ORTOPECTUS combinamos tecnología quirúrgica de vanguardia con un trato profundamente humano.
              Cada paciente recibe un plan individualizado, ejecutado por un equipo de élite con resultados
              medibles y duraderos.
            </p>
            <p className="mt-4 text-[16px] text-ink-secondary leading-[1.7]">
              Aspiramos a ser el centro de referencia en cirugía torácica de Latinoamérica, formando a la próxima
              generación de cirujanos y elevando los estándares de atención.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden shadow-soft">
            <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=90" alt="Atención al paciente" loading="lazy" className="w-full h-[500px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-off-white py-24">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="EQUIPO MÉDICO" title="Especialistas de Clase Mundial" accent="gold" />
          <div className="mt-16 grid md:grid-cols-3 gap-7">
            {DOCTORS.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-border-soft rounded-xl overflow-hidden shadow-card hover:shadow-lift transition-shadow"
              >
                <img src={d.img} alt={d.name} loading="lazy" className="w-full h-[360px] object-cover" />
                <div className="p-7 text-center">
                  <h3 className="font-display text-2xl text-ink">{d.name}</h3>
                  <p className="mt-2 text-[13px] text-primary">{d.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="TRAYECTORIA" title="Nuestra Historia" accent="blue" />
          <div className="mt-16 overflow-x-auto pb-4">
            <div className="flex items-stretch gap-6 min-w-max">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="w-[220px] bg-off-white border border-border-soft rounded-xl p-6"
                >
                  <div className="font-display text-[40px] text-primary leading-none">{t.year}</div>
                  <span className="block h-px w-10 bg-gold-light my-4" />
                  <p className="text-[14px] text-ink-secondary leading-relaxed">{t.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-light-gray py-24">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="NUESTROS VALORES" title="Lo Que Nos Define" accent="gold" />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white border border-border-soft rounded-xl p-8 text-center shadow-card"
                >
                  <div className="w-14 h-14 mx-auto rounded-[12px] bg-[hsl(214_95%_96%)] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink">{v.title}</h3>
                  <p className="mt-2 text-[14px] text-ink-secondary leading-relaxed">{v.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </Layout>
  );
};

export default Nosotros;
