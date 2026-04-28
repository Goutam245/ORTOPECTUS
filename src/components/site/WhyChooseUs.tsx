import { motion } from "framer-motion";
import { Microscope, Zap, Users, Gem, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: Microscope, title: "Técnicas Mínimamente Invasivas", text: "Cirugía VATS, robótica y abordajes percutáneos para máxima precisión y mínima cicatriz." },
  { icon: Zap, title: "Tecnología de Vanguardia", text: "Quirófanos inteligentes, navegación 3D intraoperatoria y planeación virtual." },
  { icon: Users, title: "Equipo Multidisciplinario", text: "Cirujanos torácicos, anestesiólogos, fisioterapia y psicología en un solo equipo." },
  { icon: Gem, title: "Atención 100% Personalizada", text: "Un plan único para cada paciente, con seguimiento estrecho antes y después." },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24 lg:py-[120px]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="block h-px w-12 bg-primary" />
              <span className="label-eyebrow text-primary">POR QUÉ ELEGIRNOS</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] leading-[1.1] text-ink">
              ¿Por Qué Elegir <span className="italic">ORTOPECTUS</span>?
            </h2>
            <span className="block h-px w-20 bg-gold-light mt-8" />

            <div className="mt-10 grid gap-8">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-[10px] bg-[hsl(214_95%_96%)] flex items-center justify-center">
                      <Icon className="w-[22px] h-[22px] text-primary" />
                    </div>
                    <div>
                      <h3 className="font-sans text-[16px] font-bold text-ink">{f.title}</h3>
                      <p className="mt-1.5 text-[14px] text-ink-secondary leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=95"
                alt="Interior moderno de la clínica"
                loading="lazy"
                className="w-full h-[560px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-border rounded-xl px-5 py-4 shadow-float flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-success" />
              <div>
                <div className="text-[13px] font-bold text-ink leading-tight">ISO 9001 Certificado</div>
                <div className="text-[11px] text-ink-muted">Calidad asistencial verificada</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
