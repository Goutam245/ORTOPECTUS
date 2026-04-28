import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Stethoscope, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

const CREDENTIALS = [
  { icon: GraduationCap, label: "Universidad Nacional", sub: "Cirugía Torácica" },
  { icon: Stethoscope, label: "Mayo Clinic, USA", sub: "Fellowship Internacional" },
  { icon: Globe2, label: "Sociedad Europea", sub: "Miembro Activo ESTS" },
];

const DoctorPreview = () => (
  <section className="bg-white py-24 lg:py-[120px]">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[5fr_6fr] gap-16 lg:gap-20 items-center">
        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=95"
              alt="Director médico ORTOPECTUS"
              loading="lazy"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>

          <div className="hidden md:block absolute -bottom-10 -right-8 w-[220px] h-[280px] rounded-2xl overflow-hidden shadow-float border-[6px] border-white">
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=95"
              alt="Equipo quirúrgico"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -top-6 -left-6 bg-white border border-border rounded-xl px-5 py-4 shadow-float">
            <div className="font-display text-[34px] leading-none text-primary">15+</div>
            <div className="text-[11px] text-ink-muted tracking-wide mt-1">AÑOS DE EXPERIENCIA</div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="block h-px w-12 bg-gold-light" />
            <span className="label-eyebrow text-gold">DIRECCIÓN MÉDICA</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] text-ink">
            Manos Expertas.
            <br />
            <span className="italic text-primary">Visión Quirúrgica.</span>
          </h2>
          <span className="block h-px w-20 bg-gold-light mt-8" />
          <p className="mt-8 text-[17px] text-ink-secondary leading-[1.75] max-w-[520px]">
            Liderada por cirujanos torácicos con formación en los centros más prestigiosos del mundo,
            ORTOPECTUS combina la precisión de la técnica avanzada con un trato humano impecable.
            Cada paciente es acompañado en un proceso integral, diseñado a la medida de su anatomía y
            sus expectativas de vida.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {CREDENTIALS.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="border-l-2 border-gold-light pl-4">
                  <Icon className="w-5 h-5 text-primary mb-2" />
                  <div className="font-sans text-[14px] font-bold text-ink leading-tight">{c.label}</div>
                  <div className="text-[12px] text-ink-muted mt-1">{c.sub}</div>
                </div>
              );
            })}
          </div>

          <Link
            to="/nosotros"
            className="mt-12 inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:gap-3 transition-all"
          >
            Conocer al equipo médico <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DoctorPreview;