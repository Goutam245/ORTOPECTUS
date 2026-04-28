import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=1000&q=90", span: "row-span-2", alt: "Quirófano de alta tecnología" },
  { src: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=90", span: "", alt: "Equipo médico en cirugía" },
  { src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=900&q=90", span: "", alt: "Recepción de la clínica" },
  { src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1000&q=90", span: "col-span-2", alt: "Sala de consulta médica" },
];

const GalleryPreview = () => (
  <section className="bg-white py-24 lg:py-[120px]">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[4fr_8fr] gap-12 lg:gap-16 items-end mb-14">
        <div>
          <div className="flex items-center gap-4 mb-5">
            <span className="block h-px w-12 bg-gold-light" />
            <span className="label-eyebrow text-gold">NUESTRAS INSTALACIONES</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] leading-[1.05] text-ink">
            Un Entorno
            <br />
            <span className="italic text-primary">Diseñado para Sanar.</span>
          </h2>
        </div>
        <p className="text-[16px] text-ink-secondary leading-[1.75] max-w-xl lg:justify-self-end">
          Quirófanos de tecnología avanzada, espacios privados pensados para la comodidad del paciente
          y un ambiente clínico que inspira confianza desde el primer momento.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 lg:gap-6 h-[420px] lg:h-[560px]">
        {IMAGES.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`relative overflow-hidden rounded-xl shadow-card group ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/casos"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary border-b border-gold-light pb-1 hover:gap-3 transition-all"
        >
          Ver casos clínicos y resultados <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default GalleryPreview;