import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: number; prefix?: string; suffix?: string; label: string };
const STATS: Stat[] = [
  { value: 2000, prefix: "+", label: "Pacientes Atendidos" },
  { value: 15, prefix: "+", label: "Años de Experiencia" },
  { value: 500, prefix: "+", label: "Cirugías Exitosas" },
  { value: 98, suffix: "%", label: "Satisfacción" },
];

const Counter = ({ value, prefix, suffix, active }: { value: number; prefix?: string; suffix?: string; active: boolean }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);
  return (
    <span>
      {prefix}
      {n.toLocaleString("es-MX")}
      {suffix}
    </span>
  );
};

const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="bg-primary text-white">
      <div className="container mx-auto px-6 py-10 md:py-0 md:h-[120px] grid grid-cols-2 md:grid-cols-4 items-center">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`text-center px-4 py-4 ${i > 0 ? "md:border-l md:border-white/20" : ""}`}
          >
            <div className="font-display text-[40px] md:text-[52px] leading-none text-white">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} active={inView} />
            </div>
            <div className="font-sans text-[12px] text-white/75 mt-2 tracking-wide">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
