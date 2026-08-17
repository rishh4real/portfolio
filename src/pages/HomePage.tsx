import PageShell from '../components/PageShell';
import HeroSection from '../sections/HeroSection';
import FeedbackSection from '../sections/FeedbackSection';
import SkillsSection from '../sections/SkillsSection';

export default function HomePage() {
  return (
    <PageShell>
      <div className="overflow-x-clip font-kanit">
        <HeroSection />
        <SkillsSection />
        <FeedbackSection />
      </div>
    </PageShell>
  );
}
