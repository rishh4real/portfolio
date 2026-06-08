import FadeIn from '../components/FadeIn';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/content';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-4 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-6 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-8 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Top Projects
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-4xl px-4 text-center sm:mt-20">
        <FadeIn delay={0.15} y={20}>
          <p
            className="font-light uppercase tracking-[0.3em] text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.75rem, 1.6vw, 1rem)' }}
          >
            Delivered 15+ high-quality projects
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
