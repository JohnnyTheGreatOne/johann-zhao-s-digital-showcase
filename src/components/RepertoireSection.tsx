import { motion } from "framer-motion";
import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";
import gallery11 from "@/assets/gallery-11.jpeg";
import gallery12 from "@/assets/gallery-12.jpeg";
import gallery13 from "@/assets/gallery-13.jpeg";
import { useLanguage } from "@/context/LanguageContext";

const photos = [
  { src: gallery1, alt: "Johann Zhao – Portrait", credit: "Joanna Bergin" },
  { src: gallery2, alt: "Johann Zhao – Outdoors", credit: "Joanna Bergin" },
  { src: gallery3, alt: "Johann Zhao – At the Piano", credit: "Joanna Bergin" },
  { src: gallery4, alt: "Johann Zhao – Outdoors Portrait", credit: "Joanna Bergin" },
  { src: gallery5, alt: "Johann Zhao – Piano Reflection", credit: "Joanna Bergin" },
  { src: gallery6, alt: "Johann Zhao – At the Piano", credit: "Joanna Bergin" },
  { src: gallery9, alt: "Johann Zhao – Preisträgerkonzert", credit: "Michael Klimt" },
  { src: gallery10, alt: "Johann Zhao – Steinway Recital", credit: "Michael Klimt" },
  { src: gallery11, alt: "Johann Zhao – Concert Hall", credit: "Michael Klimt" },
  { src: gallery12, alt: "Johann Zhao – In Performance", credit: "Michael Klimt" },
  { src: gallery13, alt: "Johann Zhao – At the Grand Piano", credit: "Michael Klimt" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">{t("gallery.label")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            {t("gallery.title")}
          </h2>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-sm border border-border relative group"
              onClick={() => setSelected(index)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute bottom-2 right-2 text-[10px] text-white/60 font-body tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                © {photo.credit}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-foreground text-2xl font-body hover:text-gold transition-colors"
          >
            ✕
          </button>
          <div className="relative">
            <img
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
            />
            <span className="absolute bottom-3 right-3 text-xs text-white/70 font-body tracking-wide">
              © {photos[selected].credit}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
