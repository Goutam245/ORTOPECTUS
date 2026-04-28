import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check, Star, Award, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Hero = () => {
  return (
    <section className="relative bg-white">
      <div className="grid lg:grid-cols-[55fr_45fr] min-h-[calc(100vh-5rem)]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center px-6 sm:px-10 lg:pl-[8vw] lg:pr-12 py-20"
        >
          <motion.div variants={item} className="flex items-center gap-4 mb-6">
            <span className="block h-px w-10 bg-primary" />
            <span className="label-eyebrow text-primary">
              ESPECIALISTAS EN CIRUGÍA TORÁCICA
            </span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-ink text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight">
            Excelencia en
            <br />
            Cirugía Torácica
            <br />
            <span className="italic text-primary">Transformamos Vidas</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 text-[17px] text-ink-secondary leading-[1.7] max-w-[460px]">
            Líderes en el manejo integral de deformidades torácicas y estética, con técnicas mínimamente invasivas y la más alta tecnología a nivel mundial.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-md text-[14px] font-semibold hover:bg-primary-light hover:shadow-[0_8px_24px_hsl(var(--primary)/0.3)] transition-all"
            >
              Agendar Consulta <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 bg-white text-ink border-[1.5px] border-ink px-7 py-3.5 rounded-md text-[14px] font-semibold hover:bg-ink hover:text-white transition-colors"
            >
              Conocer Servicios
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {["+2,000 Pacientes", "+15 Años", "98% Satisfacción"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-[13px] text-ink-secondary">
                <Check className="w-4 h-4 text-success" /> {t}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative min-h-[420px] lg:min-h-0"
        >
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&q=95"
            alt="Cirujano torácico ORTOPECTUS en quirófano de alta tecnología"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 via-primary/10 to-transparent" />

          {/* Top-right floating credential card */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute top-8 right-8 bg-white/95 backdrop-blur border border-border rounded-xl px-5 py-4 shadow-float flex items-center gap-3 max-w-[240px]"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-display text-[16px] text-ink leading-tight">Certificación Internacional</div>
              <div className="text-[11px] text-ink-muted mt-0.5">CHEST · ESTS · SCCT</div>
            </div>
          </motion.div>

          {/* Center floating quote / signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-8 bg-ink text-white rounded-xl px-5 py-4 shadow-float items-center gap-3 max-w-[260px]"
          >
            <ShieldCheck className="w-5 h-5 text-gold-light shrink-0" />
            <div className="text-[12px] leading-snug text-white/85">
              <span className="text-gold-light font-semibold">Cirugía mínimamente invasiva</span> con recuperación acelerada (ERAS)
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 110 }}
            className="absolute bottom-8 left-8 bg-white border border-border rounded-xl px-6 py-5 shadow-float max-w-[260px]"
          >
            <div className="flex items-center gap-1 text-gold-light mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="font-display text-[22px] text-ink leading-tight">98% de satisfacción</div>
            <div className="text-[12px] text-ink-muted mt-1">500+ cirugías exitosas</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
