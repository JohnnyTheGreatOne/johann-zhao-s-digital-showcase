import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">{t("contact.label")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 leading-relaxed">
            For concert bookings, collaborations, and press inquiries, please reach out.
          </p>

          <a
            href="mailto:johannzhaopiano@gmail.com"
            className="inline-block px-10 py-4 border border-gold text-gold font-body text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-300"
          >
            {t("contact.button")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
