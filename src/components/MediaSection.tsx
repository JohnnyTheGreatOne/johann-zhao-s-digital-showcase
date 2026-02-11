import { motion } from "framer-motion";

const videos = [
  { src: "https://www.youtube.com/embed/6PsgyFTFKYY", title: "Johann Zhao – Performance 1" },
  { src: "https://www.youtube.com/embed/wIdcxHYDgOA", title: "Johann Zhao – Performance 2" },
  { src: "https://www.youtube.com/embed/vT4pfv8D-lw", title: "Johann Zhao – Performance 3" },
  { src: "https://www.youtube.com/embed/6ZxbwE0Z_hc", title: "Johann Zhao – Performance 4" },
  { src: "https://www.youtube.com/embed/_DamGQoBgAQ", title: "Johann Zhao – Performance 5" },
  { src: "https://www.youtube.com/embed/JgmEUkz47LY", title: "Johann Zhao – Performance 6" },
];

const MediaSection = () => {
  return (
    <section id="media" className="py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="aspect-video rounded-sm overflow-hidden border border-border"
            >
              <iframe
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
