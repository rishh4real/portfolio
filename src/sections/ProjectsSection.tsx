import FadeIn from '../components/FadeIn';
import { OTHER_PROJECTS, PROJECTS, type Project } from '../data/content';

function ProjectImageGrid({ project }: { project: Project }) {
  const gallery = project.gallery ?? [
    project.images.col1Top,
    project.images.col1Bottom,
    project.images.col2,
  ];

  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
      {gallery.map((image, index) => (
        <button
          key={`${project.name}-${image}`}
          type="button"
          className={`group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-2 shadow-[0_22px_70px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:-translate-y-1 hover:border-white/20 ${
            index === 0 ? 'md:col-span-2' : ''
          }`}
          aria-label={`Preview ${project.name} screenshot ${index + 1}`}
        >
          <span className="flex min-h-[220px] items-center justify-center overflow-hidden rounded-[18px] bg-[#050507] sm:min-h-[260px] lg:min-h-[300px]">
            <img
              src={image}
              alt={`${project.name} screenshot ${index + 1}`}
              className="h-full max-h-[520px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
              loading="lazy"
            />
          </span>
        </button>
      ))}
    </div>
  );
}

function ProjectLink({ project }: { project: Project }) {
  if (!project.url) {
    return (
      <span className="inline-flex rounded-full border border-[#FF4D8D]/25 bg-[#FF4D8D]/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#FF9FC2]">
        No live link yet
      </span>
    );
  }

  return (
    <a
      href={project.url}
      target={project.url.startsWith('http') ? '_blank' : undefined}
      rel={project.url.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="inline-flex rounded-full border border-white/12 bg-white px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-black transition-transform hover:-translate-y-0.5"
    >
      View project
    </a>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-4 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-6 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-8 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <div className="mx-auto mb-14 max-w-5xl text-center sm:mb-20 md:mb-24">
          <p className="text-xs font-black uppercase tracking-[0.42em] text-[#FF4D8D]/80">
            Hand-made projects
          </p>
          <p className="mt-3 text-[0.68rem] font-black uppercase tracking-[0.3em] text-[#D7E2EA]/42">
            Updated on 2 July 2026
          </p>
          <h2
            className="hero-heading mt-4 font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.2rem, 12vw, 150px)' }}
          >
            Projects
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#D7E2EA]/58 sm:text-base">
            Numbered builds with clean context on the left and full visual previews on the right.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-[1440px] space-y-20 md:space-y-28">
        {PROJECTS.map((project, index) => (
          <FadeIn key={project.name} delay={index * 0.04} y={32}>
            <article className="grid gap-8 border-t border-white/10 pt-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 xl:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex items-start gap-5">
                  <span className="hero-heading text-6xl font-black leading-none sm:text-7xl md:text-8xl">
                    {project.number}
                  </span>
                  <div className="pt-2">
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-[#FF4D8D]/75">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-4xl font-black uppercase leading-none tracking-tight text-[#D7E2EA] sm:text-5xl md:text-6xl">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-7 max-w-xl text-base leading-relaxed text-[#D7E2EA]/68 sm:text-lg">
                  {project.blurb ?? 'A carefully built project from the portfolio archive.'}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {project.status ? (
                    <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#D7E2EA]/70">
                      {project.status}
                    </span>
                  ) : null}
                  <ProjectLink project={project} />
                </div>
              </div>

              <ProjectImageGrid project={project} />
            </article>
          </FadeIn>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-[1440px] border-t border-white/10 pt-10 sm:mt-24">
        <FadeIn delay={0.1} y={20}>
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-[#D7E2EA]/38">
                Archive
              </p>
              <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-[#D7E2EA] sm:text-3xl">
                More delivered work
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#D7E2EA]/52 sm:text-right">
              Delivered 15+ high-quality projects across web, AI, and content-led builds.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          {OTHER_PROJECTS.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.06} y={18}>
              <a
                href={project.url}
                className="block h-full rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition-transform hover:-translate-y-1 hover:border-white/20"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D7E2EA]/40">
                  Project
                </p>
                <h4 className="mt-2 text-xl font-black uppercase tracking-tight text-[#D7E2EA]">
                  {project.name}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-[#D7E2EA]/65">
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
