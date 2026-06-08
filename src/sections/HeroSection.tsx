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
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden lg:min-h-screen">
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
        <nav className="relative z-30 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 pt-5 md:flex-nowrap md:justify-between md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-xs md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* ── MAIN CONTENT: text + profile card ── */}
      <div className="relative z-10 flex flex-1 items-center px-6 pb-10 md:px-12 md:pb-14 lg:px-14 xl:px-16">
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

        <FadeIn
          delay={0.25}
          y={30}
          className="relative ml-auto hidden w-[min(32vw,430px)] self-center md:block lg:ml-16 lg:w-[min(30vw,410px)] lg:translate-x-8 xl:translate-x-16"
        >
          <div className="rounded-[34px] border border-white/10 bg-[#f7f7f7] p-2.5 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-[24px] bg-white">
              <img
                src="/images/avatar_face.jpg"
                alt="Shaurya Sharma portrait"
                className="h-auto w-full select-none object-cover object-top"
                draggable={false}
              />
            </div>

            <div className="px-2 pb-1 pt-3 text-slate-900">
              <div className="flex items-center gap-3">
                <img
                  src="/images/nudgehq-logo.jpg"
                  alt="NudgeHQ logo"
                  className="h-10 w-10 rounded-xl object-cover shadow-sm"
                  draggable={false}
                />
                <div>
                  <p className="text-[0.95rem] font-black uppercase tracking-[0.12em] text-slate-900">
                    NudgeHQ
                  </p>
                  <p className="text-[0.82rem] font-medium text-slate-500">
                    Founder + Product Lead
                  </p>
                </div>
              </div>
              <p className="mt-3 max-w-[28rem] text-[0.88rem] leading-relaxed text-slate-600">
                Building practical AI products for real-world teams and
                operations.
              </p>
              <p className="mt-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Student Founder • Developer • AI / LLM Specialist
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Founder • NudgeHQ',
                  'Shipped 10+ sites',
                  'Trusted & recognised developer',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
