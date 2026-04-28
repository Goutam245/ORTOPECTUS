import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/site";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 backdrop-blur ${
        scrolled
          ? "h-16 bg-white border-b border-border shadow-soft"
          : "h-20 bg-white/95 border-b border-border-soft"
      }`}
    >
      <div className="container mx-auto h-full px-6 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-sans font-extrabold text-[20px] tracking-[0.06em] text-ink">
            ORTOPECTUS
          </span>
          <span className="font-sans text-[9px] font-medium tracking-[0.2em] text-primary mt-0.5">
            CLÍNICA INTEGRAL Y ESTÉTICA TORÁCICA
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md px-6 py-2.5 text-[13px] font-semibold hover:bg-primary-light hover:shadow-[0_4px_15px_hsl(var(--primary)/0.3)] transition-all duration-250"
          >
            Agendar Consulta
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-ink"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-border shadow-soft"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `text-[16px] font-medium ${isActive ? "text-primary" : "text-ink-secondary"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contacto"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-md px-6 py-3 text-[14px] font-semibold"
              >
                Agendar Consulta <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
