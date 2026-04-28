import { useEffect, useState } from "react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Mail, Clock, Check } from "lucide-react";
import { CONTACT, SERVICES } from "@/data/site";
import { toast } from "sonner";

type Errors = Partial<Record<"name" | "email" | "phone" | "padecimiento" | "message", string>>;

const Contacto = () => {
  useEffect(() => { document.title = "Contacto — ORTOPECTUS"; }, []);
  const [form, setForm] = useState({ name: "", email: "", phone: "", padecimiento: "", source: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    setErrors({ ...errors, [k]: undefined });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Errors = {};
    if (!form.name.trim()) er.name = "Ingrese su nombre completo";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = "Email inválido";
    if (form.phone.replace(/\D/g, "").length < 8) er.phone = "Teléfono inválido";
    if (!form.padecimiento) er.padecimiento = "Seleccione una opción";
    if (form.message.trim().length < 10) er.message = "Mensaje muy corto";
    if (Object.keys(er).length) { setErrors(er); return; }
    setSent(true);
    toast.success("Solicitud enviada. Le contactaremos en menos de 24 horas.");
    setForm({ name: "", email: "", phone: "", padecimiento: "", source: "", message: "" });
  };

  const fieldClass = (err?: string) =>
    `w-full bg-white border-[1.5px] rounded-lg px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary transition-colors ${
      err ? "border-destructive" : "border-border"
    }`;

  return (
    <Layout>
      <PageHero
        eyebrow="CONTACTO"
        title="Hablemos de su Caso"
        subtitle="Agende una consulta privada. Le responderemos en menos de 24 horas."
        image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=95"
      />

      <section className="bg-off-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[55fr_45fr] gap-10">
            <motion.form
              onSubmit={submit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-border-soft rounded-2xl p-8 md:p-12 shadow-card"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="block h-px w-10 bg-primary" />
                <span className="label-eyebrow text-primary">SOLICITUD DE CONSULTA</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight">Cuéntenos sobre su caso</h2>
              <p className="mt-3 text-[14px] text-ink-secondary leading-relaxed">
                Toda la información compartida es estrictamente confidencial.
              </p>

              <div className="mt-8 grid gap-5">
                <div>
                  <label className="text-[12px] font-semibold text-ink-secondary tracking-wide">Nombre completo *</label>
                  <input value={form.name} onChange={onChange("name")} className={`mt-1.5 ${fieldClass(errors.name)}`} placeholder="Su nombre" />
                  {errors.name && <p className="mt-1.5 text-[12px] text-destructive">{errors.name}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] font-semibold text-ink-secondary tracking-wide">Email *</label>
                    <input type="email" value={form.email} onChange={onChange("email")} className={`mt-1.5 ${fieldClass(errors.email)}`} placeholder="email@ejemplo.com" />
                    {errors.email && <p className="mt-1.5 text-[12px] text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold text-ink-secondary tracking-wide">Teléfono *</label>
                    <input value={form.phone} onChange={onChange("phone")} className={`mt-1.5 ${fieldClass(errors.phone)}`} placeholder="+52 ..." />
                    {errors.phone && <p className="mt-1.5 text-[12px] text-destructive">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-[12px] font-semibold text-ink-secondary tracking-wide">Padecimiento *</label>
                  <select value={form.padecimiento} onChange={onChange("padecimiento")} className={`mt-1.5 ${fieldClass(errors.padecimiento)}`}>
                    <option value="">Seleccione una especialidad</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                  </select>
                  {errors.padecimiento && <p className="mt-1.5 text-[12px] text-destructive">{errors.padecimiento}</p>}
                </div>
                <div>
                  <label className="text-[12px] font-semibold text-ink-secondary tracking-wide">¿Cómo nos conoció?</label>
                  <input value={form.source} onChange={onChange("source")} className={`mt-1.5 ${fieldClass()}`} placeholder="Google, recomendación, redes..." />
                </div>
                <div>
                  <label className="text-[12px] font-semibold text-ink-secondary tracking-wide">Mensaje *</label>
                  <textarea rows={5} value={form.message} onChange={onChange("message")} className={`mt-1.5 ${fieldClass(errors.message)} resize-none`} placeholder="Describa su caso brevemente" />
                  {errors.message && <p className="mt-1.5 text-[12px] text-destructive">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-primary text-white py-4 rounded-lg text-[14px] font-semibold hover:bg-primary-light hover:shadow-[0_8px_24px_hsl(var(--primary)/0.3)] transition-all"
                >
                  Enviar Solicitud de Consulta
                </button>
                {sent && (
                  <div className="flex items-center gap-2 text-[13px] text-success">
                    <Check className="w-4 h-4" /> Recibimos su solicitud.
                  </div>
                )}
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white border border-border-soft rounded-2xl p-8 shadow-card">
                <h3 className="font-display text-2xl text-ink">Datos de contacto</h3>
                <span className="block h-px w-10 bg-gold-light mt-4" />
                <ul className="mt-6 space-y-5 text-[14px]">
                  <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="text-ink-secondary">{CONTACT.address}</span></li>
                  <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary shrink-0" /><a href={`tel:${CONTACT.phoneRaw}`} className="text-ink hover:text-primary">{CONTACT.phone}</a></li>
                  <li className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-primary shrink-0" /><a href={`https://wa.me/${CONTACT.whatsapp}`} className="text-ink hover:text-primary">WhatsApp directo</a></li>
                  <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary shrink-0" /><a href={`mailto:${CONTACT.email}`} className="text-ink hover:text-primary">{CONTACT.email}</a></li>
                  <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary shrink-0" /><span className="text-ink-secondary">{CONTACT.hours}</span></li>
                </ul>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border-soft shadow-card bg-white">
                <iframe
                  title="Ubicación ORTOPECTUS"
                  src="https://www.google.com/maps?q=Av.%20Reforma%20250%2C%20CDMX&output=embed"
                  className="w-full h-[280px]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
