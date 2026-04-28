import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { NAV_LINKS, SERVICES, CONTACT } from "@/data/site";

const Footer = () => {
  return (
    <footer className="bg-ink text-white border-t-[3px] border-gold">
      <div className="container mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="font-sans font-extrabold text-[20px] tracking-[0.06em]">ORTOPECTUS</div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-gold-light mt-1">
              CLÍNICA INTEGRAL Y ESTÉTICA TORÁCICA
            </div>
            <p className="text-[14px] text-white/60 mt-5 max-w-[260px] leading-relaxed">
              Excelencia en cirugía torácica con técnicas mínimamente invasivas y la más alta tecnología.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="text-white/50 hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-gold-light mb-5">NAVEGACIÓN</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[14px] text-white/65 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-gold-light mb-5">ESPECIALIDADES</div>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to="/servicios" className="text-[14px] text-white/65 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] text-gold-light mb-5">CONTACTO</div>
            <ul className="space-y-4 text-[14px] text-white/70">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold-light shrink-0" /><span>{CONTACT.address}</span></li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold-light shrink-0" /><a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">{CONTACT.phone}</a></li>
              <li className="flex items-center gap-3"><MessageCircle className="w-4 h-4 text-gold-light shrink-0" /><a href={`https://wa.me/${CONTACT.whatsapp}`} className="hover:text-white">WhatsApp</a></li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-gold-light shrink-0" /><a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a></li>
              <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-gold-light shrink-0" />{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/40">
          <div>© {new Date().getFullYear()} ORTOPECTUS. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">Privacidad</a>
            <a href="#" className="hover:text-white/70">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
