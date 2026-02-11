import { motion } from "framer-motion";

const MediaSection = () => {
  return (
    <section id="media" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Watch</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Media
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="aspect-video rounded-sm overflow-hidden border border-border"
        >
          <iframe
            src="https://www.youtube.com/embed/Hz0jkQyVzU4"
            title="Johann Zhao – Cliburn Junior 2019 Profile"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-center mt-6 font-body text-sm"
        >
          Cliburn International Junior Piano Competition 2019 — Competitor Profile
        </motion.p>
      </div>
    </section>
  );
};

export default MediaSection;
