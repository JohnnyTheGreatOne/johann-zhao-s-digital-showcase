import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

interface Concert {
  title: { en: string; de: string };
  date: { en: string; de: string };
  dateObj: Date;
  time?: string;
  venue: { en: string; de: string };
  ticketUrl?: string;
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
    title: { en: "Duo Recital and Masterclass in Inzell", de: "Duo-Rezital und Masterclass in Inzell" },
    date: { en: "March 21, 2026", de: "21. März 2026" },
    dateObj: new Date(2026, 2, 22),
    time: "18:00",
    venue: { en: "Music School Inzell", de: "Musikschule Inzell" },
  },
  {
    title: { en: "Live Music Now Benefit Concert", de: "Live Music Now Benefizkonzert" },
    date: { en: "April 12, 2026", de: "12. April 2026" },
    dateObj: new Date(2026, 3, 13),
    time: "18:00",
    venue: { en: "Solitär, Mozarteum University", de: "Solitär, Universität Mozarteum" },
  },
  {
    title: { en: "Erika-Frieser-Chamber Music Days", de: "Erika-Frieser-Kammermusiktage" },
    date: { en: "May 9, 2026", de: "9. Mai 2026" },
    dateObj: new Date(2026, 4, 10),
    time: "19:00",
    venue: { en: "Solitär, Mozarteum University", de: "Solitär, Universität Mozarteum" },
  },
  {
    title: { en: "Straußiade Altenmarkt im Pongau", de: "Straußiade Altenmarkt im Pongau" },
    date: { en: "June 20, 2026", de: "20. Juni 2026" },
    dateObj: new Date(2026, 5, 21),
    venue: { en: "Kulturraum Pötzelberg", de: "Kulturraum Pötzelberg" },
  },
  {
    title: { en: "Salzburg University Weeks", de: "Salzburger Hochschulwochen" },
    date: { en: "August 9, 2026", de: "9. August 2026" },
    dateObj: new Date(2026, 7, 10),
    venue: { en: "University Hall Salzburg", de: "Universitätsaula Salzburg" },
  },
];

const CalendarSection = () => {
  const { t, language } = useLanguage();
  const now = new Date();
  const upcomingConcerts = concerts.filter((c) => c.dateObj > now);

  if (upcomingConcerts.length === 0) return null;

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
      </div>
    </section>
  );
};

export default CalendarSection;
