import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    n: "01",
    title: "Consulta Inicial",
    text: "Evaluación clínica detallada, historia médica y estudios de imagen para un diagnóstico preciso y personalizado.",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=90",
  },
  {
    n: "02",
    title: "Plan Quirúrgico",
    text: "Diseño del procedimiento con planeación 3D, simulación virtual y elección de la técnica menos invasiva posible.",
    img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=90",
  },
  {
    n: "03",
    title: "Cirugía de Alta Precisión",
    text: "Procedimiento ejecutado en quirófano de última generación con monitoreo continuo y equipo multidisciplinario.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=90",
  },
  {
    n: "04",
    title: "Seguimiento Personalizado",
    text: "Protocolos ERAS, fisioterapia y acompañamiento clínico estrecho hasta una recuperación completa.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=90",
  },
];

const Process = () => (
  <section className="bg-off-white py-24 lg:py-[120px]">
    <div className="container mx-auto px-6">
      <SectionHeader
        eyebrow="EL PROCESO ORTOPECTUS"
        title={<>Cuatro Pasos hacia una <span className="italic text-primary">Vida Plena</span></>}
        subtitle="Un protocolo riguroso, transparente y profundamente humano. Cada etapa diseñada para ofrecer seguridad, claridad y resultados extraordinarios."
        accent="gold"
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="group bg-white border border-border-soft rounded-xl overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
          >
            <div className="relative h-[200px] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink/40" />
              <span className="absolute top-5 left-5 font-display text-[44px] leading-none text-white drop-shadow-md">
                {s.n}
              </span>
            </div>
            <div className="p-7">
              <h3 className="font-sans text-[17px] font-bold text-ink leading-snug">{s.title}</h3>
              <span className="block h-px w-10 bg-gold-light mt-3" />
              <p className="mt-4 text-[14px] text-ink-secondary leading-[1.65]">{s.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;