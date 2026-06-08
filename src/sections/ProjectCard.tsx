import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Project } from '../data/content';

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

export default function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const hasGallery = Boolean(project.gallery?.length);
  const heroImageHeight = hasGallery
    ? project.gallery!.length > 5
      ? 'clamp(150px, 18vw, 220px)'
      : 'clamp(165px, 20vw, 250px)'
    : 'clamp(130px, 16vw, 230px)';
  const thumbImageHeight = hasGallery
    ? project.gallery!.length > 5
      ? 'clamp(88px, 9.5vw, 118px)'
      : 'clamp(96px, 10vw, 130px)'
    : 'clamp(160px, 22vw, 340px)';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        className="sticky top-24 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:top-32 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{ scale, top: `${index * 28}px` }}
      >
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div>
              <p className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </p>
              <h3
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          {project.status ? (
            <span className="inline-flex w-fit rounded-full border border-[#D7E2EA]/20 px-5 py-2 text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/80 sm:px-6 sm:py-2.5 sm:text-base">
              {project.status}
            </span>
          ) : (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
            >
              Live Project
            </a>
          )}
        </div>

        {project.blurb ? (
          <p className="mb-4 rounded-[22px] border border-white/10 bg-white/5 px-4 py-3 text-sm leading-relaxed text-[#D7E2EA]/75 sm:px-5 sm:py-4">
            {project.blurb}
          </p>
        ) : null}

        {project.gallery ? (
          <div className="space-y-2 sm:space-y-3">
            <button
              type="button"
              onClick={() => setActiveImage(project.gallery?.[0] ?? null)}
              className="block w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#111] transition-transform hover:scale-[1.01]"
            >
              <img
                src={project.gallery[0]}
                alt={`${project.name} screenshot 1`}
                className="h-auto w-full cursor-zoom-in object-cover"
                style={{ height: heroImageHeight }}
              />
            </button>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {project.gallery.slice(1).map((image, imageIndex) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111] transition-transform hover:scale-[1.02] sm:rounded-[32px]"
                >
                  <img
                    src={image}
                    alt={`${project.name} screenshot ${imageIndex + 2}`}
                    className="h-auto w-full cursor-zoom-in object-cover"
                    style={{ height: thumbImageHeight }}
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex gap-3 sm:gap-4">
            <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
              <img
                src={project.images.col1Top}
                alt={`${project.name} preview 1`}
                className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} preview 2`}
                className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <img
              src={project.images.col2}
              alt={`${project.name} preview 3`}
              className="w-[60%] rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        )}

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} screenshot viewer`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="flex aspect-square w-[min(82vw,760px)] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[#111] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={`${project.name} full screenshot`}
              className="h-full w-full rounded-[20px] object-contain"
            />
          </div>
        </div>
      ) : null}

      </motion.div>
    </div>
  );
}
