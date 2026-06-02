import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CalendarDays, MapPin, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Concert {
  title: { en: string; de: string };
  date: { en: string; de: string };
  dateObj: Date;
  time?: string;
  venue: { en: string; de: string };
  ticketUrl?: string;
  duo?: boolean;
}

const concerts: Concert[] = [
  {
    title: { en: "Benefit Concert COPE", de: "Benefizkonzert COPE" },
    date: { en: "March 7, 2026", de: "7. März 2026" },
    dateObj: new Date(2026, 2, 8),
    time: "19:00",
    venue: { en: "Solitär, Mozarteum University", de: "Solitär, Universität Mozarteum" },
    ticketUrl: "https://kupfticket.com/en/events/cope",
  },
  {
    title: { en: "Duo Recital and Workshop in Inzell", de: "Duo-Rezital und Workshop in Inzell" },
    date: { en: "March 21, 2026", de: "21. März 2026" },
    dateObj: new Date(2026, 2, 22),
    time: "18:00",
    venue: { en: "Music School Inzell", de: "Musikschule Inzell" },
    ticketUrl: "https://www.inzell.de/klavier-1",
    duo: true,
  },
  {
    title: { en: "Live Music Now Benefit Concert", de: "Live Music Now Benefizkonzert" },
    date: { en: "April 12, 2026", de: "12. April 2026" },
    dateObj: new Date(2026, 3, 13),
    time: "18:00",
    venue: { en: "Solitär, Mozarteum University", de: "Solitär, Universität Mozarteum" },
    duo: true,
  },
  {
    title: { en: "Erika-Frieser-Chamber Music Days", de: "Erika-Frieser-Kammermusiktage" },
    date: { en: "May 9, 2026", de: "9. Mai 2026" },
    dateObj: new Date(2026, 4, 10),
    time: "19:00",
    venue: { en: "Solitär, Mozarteum University", de: "Solitär, Universität Mozarteum" },
    ticketUrl: "https://shop.eventjet.at/de/mozarteum/event/03c90afd-f3e2-40f0-9005-f6f0281f8b41",
  },
  {
    title: { en: "Woelfl Tag Oberhofen", de: "Woelfl Tag Oberhofen" },
    date: { en: "May 16, 2026", de: "16. Mai 2026" },
    dateObj: new Date(2026, 4, 17),
    time: "19:00",
    venue: { en: "Kulturraum Oberhofen", de: "Kulturraum Oberhofen" },
    duo: true,
  },
  {
    title: { en: "Straussiade Altenmarkt im Pongau", de: "Straussiade Altenmarkt im Pongau" },
    date: { en: "June 20, 2026", de: "20. Juni 2026" },
    dateObj: new Date(2026, 5, 21),
    time: "18:00",
    venue: { en: "Kulturraum Pötzelberg", de: "Kulturraum Pötzelberg" },
    duo: true,
  },
  {
    title: {
      en: "György Kurtág 100-year Celebration Concert",
      de: "György Kurtág 100-Jahr-Jubiläumskonzert",
    },
    date: { en: "June 6, 2026", de: "6. Juni 2026" },
    dateObj: new Date(2026, 5, 7),
    time: "16:30",
    venue: {
      en: "Bösendorfersaal, Mozarteum University",
      de: "Bösendorfersaal, Universität Mozarteum",
    },
  },
  {
    title: { en: "Salzburg University Weeks", de: "Salzburger Hochschulwochen" },
    date: { en: "August 9, 2026", de: "9. August 2026" },
    dateObj: new Date(2026, 7, 10),
    venue: { en: "University Hall Salzburg", de: "Universitätsaula Salzburg" },
  },
  // Past duo concerts (Zhao & Zech)
  {
    title: { en: "Recital at Schloss Goldegg", de: "Rezital im Schloss Goldegg" },
    date: { en: "January 29, 2026", de: "29. Januar 2026" },
    dateObj: new Date(2026, 0, 29),
    time: "20:00",
    venue: { en: "Schloss Goldegg", de: "Schloss Goldegg" },
    duo: true,
  },
  {
    title: { en: "Concert at Mozartwoche 2026", de: "Konzert bei der Mozartwoche 2026" },
    date: { en: "January 24, 2026", de: "24. Januar 2026" },
    dateObj: new Date(2026, 0, 24),
    time: "15:00",
    venue: {
      en: "DomQuartier Salzburg, Rittersaal der Residenz",
      de: "DomQuartier Salzburg, Rittersaal der Residenz",
    },
    duo: true,
  },
  {
    title: { en: "Concert in Salzburg", de: "Konzert in Salzburg" },
    date: { en: "December 21, 2025", de: "21. Dezember 2025" },
    dateObj: new Date(2025, 11, 21),
    time: "17:00",
    venue: {
      en: "Musikum Salzburg Stadt, Steinway Hall",
      de: "Musikum Salzburg Stadt, Steinway Saal",
    },
    duo: true,
  },
  {
    title: { en: "Performance in Siegsdorf", de: "Auftritt in Siegsdorf" },
    date: { en: "December 20, 2025", de: "20. Dezember 2025" },
    dateObj: new Date(2025, 11, 20),
    time: "19:00",
    venue: { en: "Restaurant Papillon", de: "Restaurant Papillon" },
    duo: true,
  },
  {
    title: { en: "Recital in Salzburg", de: "Rezital in Salzburg" },
    date: { en: "November 14, 2025", de: "14. November 2025" },
    dateObj: new Date(2025, 10, 14),
    time: "19:30",
    venue: {
      en: "Musikum Salzburg Stadt, Steinway Hall",
      de: "Musikum Salzburg Stadt, Steinway Saal",
    },
    duo: true,
  },
  {
    title: { en: "Concert in Istanbul", de: "Konzert in Istanbul" },
    date: { en: "September 18, 2025", de: "18. September 2025" },
    dateObj: new Date(2025, 8, 18),
    venue: { en: "Renaissance Polat Istanbul Hotel", de: "Renaissance Polat Istanbul Hotel" },
    duo: true,
  },
  {
    title: { en: "Recital in Ruhpolding", de: "Rezital in Ruhpolding" },
    date: { en: "August 29, 2025", de: "29. August 2025" },
    dateObj: new Date(2025, 7, 29),
    venue: {
      en: "Protestant Parish, Parish Centre",
      de: "Evangelische Kirchengemeinde, Pfarrzentrum",
    },
    duo: true,
  },
  {
    title: { en: "Performance in Siegsdorf", de: "Auftritt in Siegsdorf" },
    date: { en: "June 7, 2025", de: "7. Juni 2025" },
    dateObj: new Date(2025, 5, 7),
    time: "21:00",
    venue: { en: "Restaurant Papillon", de: "Restaurant Papillon" },
    duo: true,
  },
  {
    title: { en: "Recital in Salzburg", de: "Rezital in Salzburg" },
    date: { en: "May 10, 2025", de: "10. Mai 2025" },
    dateObj: new Date(2025, 4, 10),
    time: "19:30",
    venue: {
      en: "Musikum Salzburg Stadt, Small Hall",
      de: "Musikum Salzburg Stadt, Kleiner Saal",
    },
    duo: true,
  },
  {
    title: {
      en: "Live Music Now Benefit Concert in Salzburg",
      de: "Live Music Now Benefizkonzert in Salzburg",
    },
    date: { en: "April 27, 2025", de: "27. April 2025" },
    dateObj: new Date(2025, 3, 27),
    time: "18:00",
    venue: { en: "Solitär, Mozarteum University", de: "Solitär, Universität Mozarteum" },
    duo: true,
  },
  {
    title: { en: "Concert in Hallein", de: "Konzert in Hallein" },
    date: { en: "December 14, 2024", de: "14. Dezember 2024" },
    dateObj: new Date(2024, 11, 14),
    time: "19:30",
    venue: { en: "Pernerinsel, Salinenbühne", de: "Pernerinsel, Salinenbühne" },
    duo: true,
  },
  {
    title: { en: "Fauré Festival 2024", de: "Fauré Festival 2024" },
    date: { en: "November 2, 2024", de: "2. November 2024" },
    dateObj: new Date(2024, 10, 2),
    time: "18:00",
    venue: { en: "Solitär, Mozarteum University", de: "Solitär, Universität Mozarteum" },
    duo: true,
  },
  {
    title: { en: "Recital in Vienna", de: "Rezital in Wien" },
    date: { en: "February 12, 2024", de: "12. Februar 2024" },
    dateObj: new Date(2024, 1, 12),
    time: "19:00",
    venue: { en: "Gesellschaft für Musiktheater", de: "Gesellschaft für Musiktheater" },
    duo: true,
  },
];

const CalendarSection = () => {
  const { t, language } = useLanguage();
  const [showPast, setShowPast] = useState(false);
  const now = new Date();
  const upcomingConcerts = concerts
    .filter((c) => c.dateObj > now)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
  const pastConcerts = concerts
    .filter((c) => c.dateObj <= now)
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

  if (upcomingConcerts.length === 0 && pastConcerts.length === 0) return null;

  return (
    <section id="calendar" className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs mb-4">{t("calendar.label")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            {t("calendar.title")}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {upcomingConcerts.map((concert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 border-b border-border hover:border-gold/30 transition-colors"
            >
              <div className="min-w-[160px]">
                <div className="flex items-center gap-2 text-gold font-display text-lg md:text-xl font-medium">
                  <CalendarDays className="w-4 h-4" />
                  {concert.date[language]}
                </div>
                {concert.time && (
                  <p className="text-muted-foreground font-body text-sm mt-1 ml-6">
                    {concert.time} {language === "de" ? "Uhr" : ""}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-gold-light transition-colors">
                  {concert.title[language]}
                </h3>
                <div className="flex items-center gap-1.5 text-muted-foreground font-body mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {concert.venue[language]}
                </div>
                {concert.duo && (
                  <p className="text-xs text-gold/70 font-body mt-1 italic">
                    {t("past.duoNote")}
                  </p>
                )}
              </div>
              {concert.ticketUrl && (
                <a
                  href={concert.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light font-body text-sm tracking-[0.15em] uppercase transition-colors"
                >
                  Tickets
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {pastConcerts.length > 0 && (
          <div className="mt-16">
            <button
              onClick={() => setShowPast((v) => !v)}
              className="group w-full flex items-center justify-center gap-3 text-gold hover:text-gold-light font-body text-sm tracking-[0.25em] uppercase transition-colors py-4 border-t border-border"
            >
              {showPast ? t("past.hide") : t("past.toggle")}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showPast ? "rotate-180" : ""}`}
              />
            </button>

            {showPast && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="space-y-0 opacity-70">
                  {pastConcerts.map((concert, i) => (
                    <div
                      key={`past-${i}`}
                      className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 border-b border-border"
                    >
                      <div className="min-w-[160px]">
                        <div className="flex items-center gap-2 text-muted-foreground font-display text-base md:text-lg">
                          <CalendarDays className="w-4 h-4" />
                          {concert.date[language]}
                        </div>
                        {concert.time && (
                          <p className="text-muted-foreground/70 font-body text-sm mt-1 ml-6">
                            {concert.time} {language === "de" ? "Uhr" : ""}
                          </p>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg md:text-xl text-foreground/80">
                          {concert.title[language]}
                        </h3>
                        <div className="flex items-center gap-1.5 text-muted-foreground font-body mt-1 text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          {concert.venue[language]}
                        </div>
                        {concert.duo && (
                          <p className="text-xs text-gold/60 font-body mt-1 italic">
                            {t("past.duoNote")}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CalendarSection;
