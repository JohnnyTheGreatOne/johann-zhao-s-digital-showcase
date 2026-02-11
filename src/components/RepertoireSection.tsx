import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Moments</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Gallery
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center py-20 border border-border rounded-sm"
        >
          <ImageIcon className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground font-body text-lg">Photos coming soon</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
