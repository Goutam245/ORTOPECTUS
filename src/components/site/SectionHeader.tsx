import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  accent?: "gold" | "blue";
};

const SectionHeader = ({ eyebrow, title, subtitle, align = "center", accent = "gold" }: Props) => {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={isCenter ? "text-center max-w-3xl mx-auto" : ""}
    >
      <div className={`flex items-center gap-4 mb-5 ${isCenter ? "justify-center" : ""}`}>
        <span className={`block h-px w-12 ${accent === "gold" ? "bg-gold-light" : "bg-primary"}`} />
        <span className={`label-eyebrow ${accent === "gold" ? "text-gold" : "text-primary"}`}>{eyebrow}</span>
        {isCenter && <span className={`block h-px w-12 ${accent === "gold" ? "bg-gold-light" : "bg-primary"}`} />}
      </div>
      <h2 className="font-display text-ink text-4xl md:text-5xl lg:text-[56px] leading-[1.1]">{title}</h2>
      {subtitle && (
        <p className={`mt-5 text-[17px] text-ink-secondary leading-relaxed ${isCenter ? "max-w-xl mx-auto" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
