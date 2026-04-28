const ITEMS = [
  "MAYO CLINIC",
  "CHEST",
  "ESTS",
  "SCCT",
  "AMERICAN COLLEGE OF SURGEONS",
  "JOHNS HOPKINS",
];

const PressStrip = () => (
  <section className="bg-white border-y border-border-soft">
    <div className="container mx-auto px-6 py-10">
      <div className="text-center label-eyebrow text-ink-muted mb-6">
        FORMACIÓN Y AFILIACIONES INTERNACIONALES
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
        {ITEMS.map((it) => (
          <span
            key={it}
            className="font-mono text-[12px] tracking-[0.25em] text-ink-muted/80 hover:text-ink transition-colors"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default PressStrip;