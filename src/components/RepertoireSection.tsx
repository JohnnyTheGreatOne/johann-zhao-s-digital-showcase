import { motion } from "framer-motion";

const repertoire = [
  {
    composer: "J. S. Bach",
    works: ["Allemande from French Suite No. 2, BWV 813"],
  },
  {
    composer: "W. A. Mozart",
    works: ["Sonata K. 576, 1st movement"],
  },
  {
    composer: "L. van Beethoven",
    works: ["Sonata No. 23, Op. 57 \"Appassionata\", 3rd movement"],
  },
  {
    composer: "I. Stravinsky",
    works: ["Four Etudes, Op. 7, No. 4"],
  },
  {
    composer: "F. Mendelssohn",
    works: ["Concerto for Piano and Orchestra No. 1 in G minor, Op. 25, 1st movement"],
  },
  {
    composer: "F. Liszt",
    works: ["Piano Concerto No. 1"],
  },
];

const RepertoireSection = () => {
  return (
    <section id="repertoire" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Program</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Repertoire
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {repertoire.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 border border-border rounded-sm hover:border-gold/30 transition-colors"
            >
              <h3 className="font-display text-xl text-gold mb-3">{item.composer}</h3>
              {item.works.map((work, j) => (
                <p key={j} className="text-muted-foreground font-body text-sm leading-relaxed">
                  {work}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepertoireSection;
