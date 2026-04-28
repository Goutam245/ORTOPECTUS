import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT } from "@/data/site";

const FloatingButtons = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-success text-white flex items-center justify-center shadow-float hover:scale-105 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-success animate-pulse-ring" />
        <MessageCircle className="w-6 h-6 relative" />
      </a>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Volver arriba"
            className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-white border border-border text-primary flex items-center justify-center shadow-soft hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
