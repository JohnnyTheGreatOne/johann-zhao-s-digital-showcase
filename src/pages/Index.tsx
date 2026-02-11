import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import GallerySection from "@/components/RepertoireSection";
import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <GallerySection />
      <MediaSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
