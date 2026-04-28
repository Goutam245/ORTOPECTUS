import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
};

const PageHero = ({ eyebrow, title, subtitle, image }: Props) => {
  return (
    <section
      className="relative h-[55vh] min-h-[420px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(10,15,30,0.7), rgba(10,15,30,0.5)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        <div className="label-eyebrow text-gold-light mb-5">{eyebrow}</div>
        <h1 className="font-display text-5xl md:text-6xl lg:text-[64px] leading-[1.05] text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-[18px] text-white/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default PageHero;
