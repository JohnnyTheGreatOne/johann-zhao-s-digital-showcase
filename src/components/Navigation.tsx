import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.calendar"), href: "#calendar" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.media"), href: "#media" },
    { label: t("nav.contact"), href: "#contact" },
    { label: t("nav.zaozech"), href: "https://www.zhao-zech.com/", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="font-display text-lg text-foreground tracking-wide">
            J<span className="text-gold">Z</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-muted-foreground font-body text-xs tracking-[0.2em] uppercase hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* Language toggle */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
              <button
                onClick={() => setLanguage("en")}
                className={`font-body text-xs tracking-[0.2em] uppercase transition-colors ${
                  language === "en" ? "text-gold" : "text-muted-foreground hover:text-gold"
                }`}
              >
                EN
              </button>
              <span className="text-muted-foreground text-xs">/</span>
              <button
                onClick={() => setLanguage("de")}
                className={`font-body text-xs tracking-[0.2em] uppercase transition-colors ${
                  language === "de" ? "text-gold" : "text-muted-foreground hover:text-gold"
                }`}
              >
                DE
              </button>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-px bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`block w-5 h-px bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => !link.external && setMenuOpen(false)}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-display text-2xl text-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {/* Mobile language toggle */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                <button
                  onClick={() => setLanguage("en")}
                  className={`font-body text-sm tracking-[0.2em] uppercase transition-colors ${
                    language === "en" ? "text-gold" : "text-muted-foreground hover:text-gold"
                  }`}
                >
                  EN
                </button>
                <span className="text-muted-foreground text-sm">/</span>
                <button
                  onClick={() => setLanguage("de")}
                  className={`font-body text-sm tracking-[0.2em] uppercase transition-colors ${
                    language === "de" ? "text-gold" : "text-muted-foreground hover:text-gold"
                  }`}
                >
                  DE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
