import { motion } from "framer-motion";
import { Video, Bot, Compass, Wrench } from "lucide-react";

const TECH = [
  { icon: Video, title: "VATS", desc: "Cirugía Torácica Video-Asistida con instrumental de última generación." },
  { icon: Bot, title: "Cirugía Robótica", desc: "Sistema da Vinci para precisión milimétrica y mínimo trauma quirúrgico." },
  { icon: Compass, title: "Navegación 3D Intraoperatoria", desc: "Planeación virtual y guías personalizadas para cada paciente." },
  { icon: Wrench, title: "Sistema Bar Modificado", desc: "Técnica Nuss optimizada para corrección de Pectus Excavatum." },
];

const Technology = () => {
  return (
    <section className="bg-ink text-white py-24 lg:py-[100px]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="block h-px w-12 bg-gold-light" />
            <span className="label-eyebrow text-gold-light">TECNOLOGÍA</span>
            <span className="block h-px w-12 bg-gold-light" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] leading-[1.1] text-white">
            Innovación al Servicio de la Salud
          </h2>
          <p className="mt-5 text-[17px] text-white/70 leading-relaxed">
            Equipamiento de última generación operado por especialistas con formación internacional.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {TECH.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-white/10 bg-white/[0.04] rounded-xl p-10 hover:bg-white/[0.07] transition-colors"
              >
                <Icon className="w-7 h-7 text-gold-light mb-5" />
                <h3 className="font-sans text-[18px] font-bold text-white">{t.title}</h3>
                <p className="mt-3 text-[14px] text-white/65 leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technology;
