import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const achievements = {
  en: [
    { year: "2026", title: "Mozartwoche Debut", detail: "Performed with Orquesta Iberacademy Medellín & Karim Zech at the Mozartwoche, Salzburg" },
    { year: "2023", title: "Tyrolean Classical Instrumentalist Prize", detail: "Awarded sponsorship prize" },
    { year: "2023", title: "Amazing Haydn Festival", detail: "Recital concert with Lupus Trio in Mechelen, Belgium" },
    { year: "2022", title: "Jugend Musiziert — Federal State Competition", detail: "Sparkasse Special Prize (duo with Fabian Egger)" },
    { year: "2020", title: "Prima La Musica — Federal State Winner", detail: "Austrian national competition" },
    { year: "2019", title: "Liszt Piano Concerto No. 1 at Berlin Philharmonic", detail: "With Berlin Symphony Orchestra, conducted by Christoph Koncz" },
    { year: "2019", title: "Schleswig-Holstein Music Festival", detail: "Festival Prize & Audience Award (duo with Fabian Egger)" },
    { year: "2016", title: "32nd Smetana International Piano Competition", detail: "First Prize — Pilsen, Czech Republic" },
    { year: "2016", title: "Rising Stars Competition, Berlin", detail: "Grand Prix" },
    { year: "2016", title: "Golden Classical Music Award, New York", detail: "First Prize" },
    { year: "2015", title: "AADGT Piano Competition, New York", detail: "Winner — Final concert at Carnegie Weill Recital Hall" },
    { year: "2014", title: "Salzburg Palace Concerts", detail: "First piano concerto performances (Mozart) with the Salzburger Solisten, age 11" },
    { year: "2013", title: "Mozarteum University Pre-College", detail: "Admitted at age 9" },
  ],
  de: [
    { year: "2026", title: "Debüt bei der Mozartwoche", detail: "Aufführung mit dem Orquesta Iberacademy Medellín & Karim Zech bei der Mozartwoche, Salzburg" },
    { year: "2023", title: "Tiroler Klassik Instrumentalistenpreis", detail: "Förderpreis erhalten" },
    { year: "2023", title: "Amazing Haydn Festival", detail: "Rezitalabend mit dem Lupus-Trio in Mechelen, Belgien" },
    { year: "2022", title: "Jugend Musiziert — Landeswettbewerb", detail: "Sparkassen-Sonderpreis (Duo mit Fabian Egger)" },
    { year: "2020", title: "Prima La Musica — Landessieger Salzburg", detail: "Österreichischer Bundeswettbewerb" },
    { year: "2019", title: "Liszt Klavierkonzert Nr. 1 in der Berliner Philharmonie", detail: "Mit den Berliner Symphonikern unter der Leitung von Christoph Koncz" },
    { year: "2019", title: "Schleswig-Holstein Musik Festival", detail: "Nachwuchsförderpreis & Publikumspreis (Duo mit Fabian Egger)" },
    { year: "2016", title: "32. Internationaler Smetana Klavierwettbewerb", detail: "1. Preis — Pilsen, Tschechien" },
    { year: "2016", title: "Rising Stars-Wettbewerb, Berlin", detail: "Grand Prix" },
    { year: "2016", title: "Golden Classical Music Award, New York", detail: "1. Preis" },
    { year: "2015", title: "AADGT Klavierwettbewerb, New York", detail: "Gewinner — Schlusskonzert in der Carnegie Weill Recital Hall" },
    { year: "2014", title: "Salzburger SchlossKonzerte", detail: "Erste Klavierkonzert-Aufführungen (Mozart) mit den Salzburger Solisten, im Alter von 11 Jahren" },
    { year: "2013", title: "Pre-College der Universität Mozarteum", detail: "Aufnahme im Alter von 9 Jahren" },
  ],
};

const AboutSection = () => {
  const { t, language } = useLanguage();
  const items = achievements[language];

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
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">{t("about.label")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            {t("about.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg text-center"
        >
          {language === "de" ? (
            <>
              <p>
                Johann Zhao wurde am 25.11.2003 in Salzburg, Österreich geboren. Er erhielt seinen ersten Klavierunterricht mit 5 Jahren und wurde im Alter von 9 Jahren in das Pre-College der{" "}
                <span className="text-gold-light">Universität Mozarteum</span> aufgenommen. Dort studierte er zunächst langjährig bei{" "}
                <span className="text-foreground">Prof. Cordelia Höfer-Teutsch</span> und schließt seit 2023 sein Bachelorstudium bei{" "}
                <span className="text-foreground">Prof. Connie Shih</span> ab.
              </p>
              <p>
                Seine ersten Klavierkonzerte von W. A. Mozart spielte er als 11-Jähriger bei den „Salzburger SchlossKonzerten" gemeinsam mit den Salzburger Solisten. Als 12-Jähriger gewann er einen New Yorker Klavierwettbewerb (AADGT) und spielte beim Schlusskonzert in der{" "}
                <span className="text-gold-light">Carnegie Weill Recital Hall</span>.
              </p>
              <p>
                Mit 13 Jahren feierte er sein Debut als Solist mit den Bad Reichenhaller Philharmonikern unter der Leitung von Christian Simonis mit dem Klavierkonzert Nr. 1 von F. Mendelssohn und wurde sofort wieder engagiert. Johann ist zudem Preisträger diverser nationaler und internationaler Wettbewerbe, darunter{" "}
                <span className="text-gold-light">1. Preis</span> beim 32. internationalen Smetana Klavierwettbewerb in Pilsen (Tschechien), 2. Preis beim internationalen Klavierwettbewerb Jugend in Essen (DE),{" "}
                <span className="text-gold-light">1. Preis</span> beim Golden Classical Music Award in New York (USA),{" "}
                <span className="text-gold-light">Grand Prix</span> beim "Rising Stars"-Wettbewerb in Berlin (DE), 3. Preis beim internationalen Jenö Takács Wettbewerb in Oberschützen (AT), mehrfache 1. Preise mit Höchstpunktzahl beim deutschen „Jugend Musiziert"-Bundeswettbewerb (Duowertung) und seit 2016 mehrfache 1. Preise auf Bundesebene sowie Landessieger Salzburg 2020 beim österreichischen "prima la musica"-Wettbewerb.
              </p>
              <p>
                Im April 2019 spielte Johann gemeinsam mit den{" "}
                <span className="text-gold-light">Berliner Symphonikern</span> unter der Leitung von Christoph Koncz das Liszt Klavierkonzert Nr. 1 in der{" "}
                <span className="text-gold-light">Berliner Philharmonie</span>. Im selben Jahr gewann er sowohl den Nachwuchsförderpreis als auch den Publikumspreis der Sparkassen-Finanzgruppe beim{" "}
                <span className="text-gold-light">Schleswig-Holstein Musik Festival</span> im Duo mit Fabian Egger. In derselben Formation gewann er 2022 den Sparkassen-Sonderpreis anlässlich des Landeswettbewerbs "Jugend musiziert".
              </p>
              <p>
                Im Herbst 2023 erhielt er eine Konzerteinladung vom Amazing Haydn Festival, wo er mit seinem Lupus-Trio in Mechelen (Belgien) einen Rezitalabend gestaltete. Zudem gewann er im selben Jahr den Förderpreis des Tiroler Klassik Instrumentalistenpreises. Johann wirkte des Öfteren bei den Operncamps der{" "}
                <span className="text-gold-light">Salzburger Festspiele</span> mit, wo er mit Dirigentinnen wie Anna Handler und Daniela Ivanova arbeitete und zusammen mit Mitgliedern der{" "}
                <span className="text-gold-light">Wiener Philharmoniker</span> im Orchester musizierte.
              </p>
              <p>
                Gegen Ende des Jahres 2023 gründeten er und der Salzburger Komponist und Pianist Karim Zech das Klavierduo{" "}
                <span className="text-foreground">"Zhao & Zech"</span>. Gemeinsam konzertieren sie regelmäßig in Form von Duorezitalen und Gastauftritten im In- und Ausland. Bisherige Auftritte fanden bereits in Wien, Salzburg (Schloss Goldegg, Pernerinsel), Japan, Deutschland und in der Türkei statt. Im Frühjahr 2026 gab Johann sein Debüt bei der{" "}
                <span className="text-gold-light">Mozartwoche</span> und führte mit dem Orquesta Iberacademy Medellín (Leitung: Álvaro Julca) und Karim Zech dessen Konzert für Klavier zu 4 Händen und Ensemble auf.
              </p>
              <p>
                Er erhielt wichtige künstlerische Impulse u.a. von{" "}
                <span className="text-foreground">Elisabeth Leonskaja</span>,{" "}
                <span className="text-foreground">Tatiana Zelikman</span>,{" "}
                <span className="text-foreground">Thomas Riebl</span>,{" "}
                <span className="text-foreground">Kit Armstrong</span>,{" "}
                <span className="text-foreground">Claudio Martinéz Mehner</span>,{" "}
                <span className="text-foreground">Kristian Bezuidenhout</span>,{" "}
                <span className="text-foreground">Arnulf von Arnim</span>,{" "}
                <span className="text-foreground">Leonhard Roczek</span> (<span className="text-foreground">Minetti Quartett</span>),{" "}
                <span className="text-foreground">Cibrán Sierra Vázquez</span> (<span className="text-foreground">Cuarteto Quiroga</span>),{" "}
                <span className="text-foreground">Gilbert Kalish</span>,{" "}
                <span className="text-foreground">Réka Szilvay</span> und{" "}
                <span className="text-foreground">Benedicte Palko</span>. Johann ist Stipendiat der{" "}
                <span className="text-foreground">Deutschen Stiftung Musikleben</span>, des{" "}
                <span className="text-foreground">Rotary Clubs Salzburg-St. Rupert</span> und der{" "}
                <span className="text-foreground">Yehudi Menuhin Stiftung Live Music Now Salzburg</span>.
              </p>
            </>
          ) : (
            <>
              <p>
                Johann Zhao (*25.11.2003) began learning keyboard at Musikum Salzburg at the age of five. At eight, he received a grand piano as a gift from his father, marking the beginning of his formal piano studies. He was admitted to the Pre-College of the{" "}
                <span className="text-gold-light">Mozarteum University</span> at the age of 9, where he initially studied for many years with{" "}
                <span className="text-foreground">Prof. Cordelia Höfer-Teutsch</span> and has been completing his Bachelor's degree under{" "}
                <span className="text-foreground">Prof. Connie Shih</span> since 2023.
              </p>
              <p>
                At the age of 11, Johann performed his first piano concertos by W. A. Mozart at the "Salzburg Palace Concerts" together with the Salzburger Solisten. A year later, he won a piano competition in New York (AADGT) and performed at the final concert in the prestigious{" "}
                <span className="text-gold-light">Carnegie Weill Recital Hall</span>.
              </p>
              <p>
                At 13, he made his debut as a soloist with the Bad Reichenhall Philharmonic Orchestra under the baton of Christian Simonis, performing Mendelssohn's Piano Concerto No. 1 — and was immediately re-engaged. Johann is the first prize winner of numerous national and international competitions, including the{" "}
                <span className="text-gold-light">1st prize</span> at the 32nd Smetana International Piano Competition in Pilsen, 2nd prize at the Youth International Piano Competition in Essen,{" "}
                <span className="text-gold-light">1st prize</span> at the "Golden Classical Music Award" in New York,{" "}
                <span className="text-gold-light">Grand Prix</span> at the "Rising Stars" competition in Berlin, 3rd prize at the International Jenő Takács Competition in Oberschützen, multiple 1st prizes with top scores at the German national competition "Jugend Musiziert", and since 2016, multiple 1st prizes as well as federal state winner 2020 of the Austrian "prima la musica" competition.
              </p>
              <p>
                In April 2019, Johann performed the Liszt Piano Concerto No. 1 with the{" "}
                <span className="text-gold-light">Berlin Symphony Orchestra</span> under the baton of Christoph Koncz at the{" "}
                <span className="text-gold-light">Berlin Philharmonic</span>. That same year, he won both the Festival Prize and the Audience Award of the Sparkassen Finance Group at the{" "}
                <span className="text-gold-light">Schleswig-Holstein Music Festival</span> in a duo with Fabian Egger. In 2022, the same duo won the Sparkasse Special Prize at the federal state competition "Jugend musiziert".
              </p>
              <p>
                In autumn 2023, he received an invitation from the Amazing Haydn Festival, where he and his Lupus Trio performed a recital concert in Mechelen, Belgium. That same year, he was awarded the sponsorship prize of the Tyrolean Classical Instrumentalist Prize. Johann has frequently participated in the{" "}
                <span className="text-gold-light">Salzburg Festival</span>'s opera camps, working with conductors such as Anna Handler and Daniela Ivanova, and performing alongside members of the{" "}
                <span className="text-gold-light">Vienna Philharmonic</span>.
              </p>
              <p>
                In late 2023, he founded the piano duo{" "}
                <span className="text-foreground">"Zhao & Zech"</span> with the Salzburg-based composer and pianist Karim Zech. Together they have been performing an expanding series of recitals and international engagements in Vienna, Salzburg, Japan, Germany, and Turkey. In the spring of 2026, Johann gave his debut at the{" "}
                <span className="text-gold-light">Mozartwoche</span>, performing together with the Orquesta Iberacademy Medellín (conducted by Álvaro Julca) and Karim Zech the latter's Concerto for Piano Four-Hands and Ensemble.
              </p>
              <p>
                His artistic development has been enriched by inspiration from{" "}
                <span className="text-foreground">Elisabeth Leonskaja</span>,{" "}
                <span className="text-foreground">Tatiana Zelikman</span>,{" "}
                <span className="text-foreground">Thomas Riebl</span>,{" "}
                <span className="text-foreground">Kit Armstrong</span>,{" "}
                <span className="text-foreground">Claudio Martinéz Mehner</span>,{" "}
                <span className="text-foreground">Kristian Bezuidenhout</span>,{" "}
                <span className="text-foreground">Arnulf von Arnim</span>,{" "}
                <span className="text-foreground">Leonhard Roczek</span> (<span className="text-foreground">Minetti Quartett</span>),{" "}
                <span className="text-foreground">Cibrán Sierra Vázquez</span> (<span className="text-foreground">Cuarteto Quiroga</span>),{" "}
                <span className="text-foreground">Gilbert Kalish</span>,{" "}
                <span className="text-foreground">Réka Szilvay</span>, and{" "}
                <span className="text-foreground">Benedicte Palko</span>, among others. Johann is a scholarship holder of the{" "}
                <span className="text-foreground">Deutsche Stiftung Musikleben</span>, the{" "}
                <span className="text-foreground">Rotary Club Salzburg-St. Rupert</span>, and the{" "}
                <span className="text-foreground">Yehudi Menuhin Foundation Live Music Now Salzburg</span>. Upcoming concerts include performances in Inzell (Bavaria), at the benefit concert COPE, and at the Salzburg University Weeks.
              </p>
            </>
          )}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32 mb-20"
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

export default AboutSection;
