import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Biography</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            About Johann
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg text-center"
        >
          <p>
            Johann Zhao began learning keyboard at Musikum Salzburg at the age of five. At eight, he received a grand piano as a gift from his father, marking the beginning of his formal piano studies.
          </p>
          <p>
            In 2013, the nine-year-old entered the pre-college education program at the{" "}
            <span className="text-gold-light">University Mozarteum Salzburg</span>, studying under the guidance of{" "}
            <span className="text-foreground">Prof. Cordelia Höfer-Teutsch</span>. That same year, he competed in the national piano competition Prima La Musica Salzburg, winning first prize with excellence in his age group.
          </p>
          <p>
            Johann's artistry combines technical brilliance with deep musical sensitivity, drawing from a rich repertoire spanning Bach, Mozart, Beethoven, Stravinsky, Mendelssohn, and Liszt.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
