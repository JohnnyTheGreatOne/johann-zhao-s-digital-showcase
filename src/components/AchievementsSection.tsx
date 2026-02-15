import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const achievements = {
  en: [
    {
      year: "2026",
      title: "Mozartwoche Debut",
      detail: "Performed with Orquesta Iberacademy Medellín & Karim Zech at the Mozartwoche, Salzburg",
    },
    {
      year: "2023",
      title: "Tyrolean Classical Instrumentalist Prize",
      detail: "Awarded sponsorship prize",
    },
    {
      year: "2023",
      title: "Amazing Haydn Festival",
      detail: "Recital concert with Lupus Trio in Mechelen, Belgium",
    },
    {
      year: "2022",
      title: "Jugend Musiziert — Federal State Competition",
      detail: "Sparkasse Special Prize (duo with Fabian Egger)",
    },
    {
      year: "2020",
      title: "Prima La Musica — Federal State Winner",
      detail: "Austrian national competition",
    },
    {
      year: "2019",
      title: "Liszt Piano Concerto No. 1 at Berlin Philharmonic",
      detail: "With Berlin Symphony Orchestra, conducted by Christoph Koncz",
    },
    {
      year: "2019",
      title: "Schleswig-Holstein Music Festival",
      detail: "Festival Prize & Audience Award (duo with Fabian Egger)",
    },
    {
      year: "2016",
      title: "32nd Smetana International Piano Competition",
      detail: "First Prize — Pilsen, Czech Republic",
    },
    {
      year: "2016",
      title: "Rising Stars Competition, Berlin",
      detail: "Grand Prix",
    },
    {
      year: "2016",
      title: "Golden Classical Music Award, New York",
      detail: "First Prize",
    },
    {
      year: "2015",
      title: "AADGT Piano Competition, New York",
      detail: "Winner — Final concert at Carnegie Weill Recital Hall",
    },
    {
      year: "2014",
      title: "Salzburg Palace Concerts",
      detail: "First piano concerto performances (Mozart) with the Salzburger Solisten, age 11",
    },
    {
      year: "2013",
      title: "Mozarteum University Pre-College",
      detail: "Admitted at age 9",
    },
  ],
  de: [
    {
      year: "2026",
      title: "Debüt bei der Mozartwoche",
      detail: "Aufführung mit dem Orquesta Iberacademy Medellín & Karim Zech bei der Mozartwoche, Salzburg",
    },
    {
      year: "2023",
      title: "Tiroler Klassik Instrumentalistenpreis",
      detail: "Förderpreis erhalten",
    },
    {
      year: "2023",
      title: "Amazing Haydn Festival",
      detail: "Rezitalabend mit dem Lupus-Trio in Mechelen, Belgien",
    },
    {
      year: "2022",
      title: "Jugend Musiziert — Landeswettbewerb",
      detail: "Sparkassen-Sonderpreis (Duo mit Fabian Egger)",
    },
    {
      year: "2020",
      title: "Prima La Musica — Landessieger Salzburg",
      detail: "Österreichischer Bundeswettbewerb",
    },
    {
      year: "2019",
      title: "Liszt Klavierkonzert Nr. 1 in der Berliner Philharmonie",
      detail: "Mit den Berliner Symphonikern unter der Leitung von Christoph Koncz",
    },
    {
      year: "2019",
      title: "Schleswig-Holstein Musik Festival",
      detail: "Nachwuchsförderpreis & Publikumspreis (Duo mit Fabian Egger)",
    },
    {
      year: "2016",
      title: "32. Internationaler Smetana Klavierwettbewerb",
      detail: "1. Preis — Pilsen, Tschechien",
    },
    {
      year: "2016",
      title: "Rising Stars-Wettbewerb, Berlin",
      detail: "Grand Prix",
    },
    {
      year: "2016",
      title: "Golden Classical Music Award, New York",
      detail: "1. Preis",
    },
    {
      year: "2015",
      title: "AADGT Klavierwettbewerb, New York",
      detail: "Gewinner — Schlusskonzert in der Carnegie Weill Recital Hall",
    },
    {
      year: "2014",
      title: "Salzburger SchlossKonzerte",
      detail: "Erste Klavierkonzert-Aufführungen (Mozart) mit den Salzburger Solisten, im Alter von 11 Jahren",
    },
    {
      year: "2013",
      title: "Pre-College der Universität Mozarteum",
      detail: "Aufnahme im Alter von 9 Jahren",
    },
  ],
};

const AchievementsSection = () => {
  const { t, language } = useLanguage();
  const items = achievements[language];

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
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">{t("achievements.label")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            {t("achievements.title")}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {items.map((item, i) => (
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
