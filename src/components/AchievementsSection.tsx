import { motion } from "framer-motion";

const achievements = [
  {
    year: "2019",
    title: "Cliburn International Junior Piano Competition",
    detail: "Selected competitor, Dallas, Texas",
  },
  {
    year: "2016",
    title: "Austrian National Competition Prima La Musica",
    detail: "Two First Prizes",
  },
  {
    year: "2016",
    title: "XXXII Smetana International Piano Competition",
    detail: "First Prize — Plzeň, Czech Republic",
  },
  {
    year: "2013",
    title: "University Mozarteum Salzburg",
    detail: "Admitted to Pre-College Program, age 9",
  },
  {
    year: "2013",
    title: "Prima La Musica Salzburg",
    detail: "First Prize with Excellence",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">Honors</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Achievements
          </h2>
        </motion.div>

        <div className="space-y-0">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex gap-8 py-8 border-b border-border hover:border-gold/30 transition-colors"
            >
              <span className="text-gold font-display text-2xl md:text-3xl font-medium min-w-[80px]">
                {item.year}
              </span>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-gold-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body mt-1">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
