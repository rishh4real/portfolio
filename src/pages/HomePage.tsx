import PageShell from '../components/PageShell';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';

export default function HomePage() {
  return (
    <PageShell>
      <div className="overflow-x-clip font-kanit">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </div>
    </PageShell>
  );
}
