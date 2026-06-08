import { useEffect, useRef } from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { NAV_LINKS } from '../data/content';

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);

  // Subtle mouse-follow glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      glowRef.current.style.transform = `translate(${clientX - 300}px, ${clientY - 300}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative flex h-screen flex-col overflow-hidden">
      {/* Ambient glow that follows the mouse */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute z-0 h-[600px] w-[600px] rounded-full opacity-20 transition-transform duration-700 ease-out"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.1) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Static background accent orbs */}
      <div
        className="pointer-events-none absolute left-[70%] top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 z-0 h-[400px] w-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* ── NAV ── */}
      <FadeIn delay={0} y={-20}>
        <nav className="relative z-30 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* ── MAIN CONTENT: text + profile card ── */}
      <div className="relative z-10 flex flex-1 items-center px-6 pb-10 md:px-16 md:pb-14 lg:px-24">
        {/* ── LEFT: Big heading + subtitle + CTA ── */}
        <div className="relative z-10 flex max-w-4xl flex-1 flex-col justify-center">
          <FadeIn delay={0.1} y={30}>
            <h1 className="hero-heading font-black uppercase leading-[0.84] tracking-tight">
              <span
                className="block"
                style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}
              >
                Hi, I'm
              </span>
              <span
                className="block"
                style={{
                  fontSize: 'clamp(5rem, 13vw, 13rem)',
                  letterSpacing: '-0.055em',
                }}
              >
                Shaurya Sharma
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <p
              className="mt-5 max-w-[340px] font-semibold uppercase leading-snug tracking-[0.18em] text-[#D7E2EA] sm:max-w-[420px]"
              style={{ fontSize: 'clamp(0.7rem, 1.2vw, 1rem)' }}
            >
              Student Founder • Developer • AI / LLM Specialist
            </p>
          </FadeIn>

          <FadeIn delay={0.4} y={20}>
            <p
              className="mt-3 max-w-[280px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[340px] md:max-w-[400px]"
              style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.25rem)' }}
            >
              Building practical AI products for real-world teams and
              operations
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <div className="mt-8">
              <ContactButton label="My Skills" href="#skills" />
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
