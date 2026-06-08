import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import PricingSection from './sections/PricingSection';
import ProjectsSection from './sections/ProjectsSection';
import ProfileBannerSection from './sections/ProfileBannerSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <main className="overflow-x-clip font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <PricingSection />
      <ProfileBannerSection />
      <ContactSection />
    </main>
  );
}
