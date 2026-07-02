import { Navigate, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import FeedbackPage from './pages/FeedbackPage';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
