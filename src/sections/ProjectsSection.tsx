import FadeIn from '../components/FadeIn';
import ProjectCard from './ProjectCard';
import { PROJECTS, OTHER_PROJECTS } from '../data/content';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
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

      <div className="mx-auto mt-20 max-w-5xl">
        <FadeIn delay={0.2}>
          <h3
            className="mb-10 text-center font-black uppercase text-[#D7E2EA]/60"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
          >
            More Work
          </h3>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-3">
          {OTHER_PROJECTS.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[2rem] border border-[#D7E2EA]/20 p-6 transition-colors hover:border-[#D7E2EA]/50"
              >
                <h4 className="mb-2 font-medium uppercase text-[#D7E2EA]">
                  {project.name}
                </h4>
                <p className="text-sm font-light text-[#D7E2EA]/60">
                  {project.description}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
