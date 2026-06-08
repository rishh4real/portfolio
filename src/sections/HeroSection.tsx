import { useEffect, useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { NAV_LINKS } from '../data/content';
import avatarImg from '../assets/avatar.png';

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [transparentAvatar, setTransparentAvatar] = useState<string | null>(null);

  // Dynamic background removal for avatar
  useEffect(() => {
    const img = new Image();
    img.src = avatarImg;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      // Make only pure black or extremely dark background pixels transparent.
      // A threshold of 5 ensures the hair remains fully opaque.
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        const maxVal = Math.max(r, g, b);
        
        if (maxVal < 5) {
          // Smooth edge for the outer pixels
          if (maxVal < 2) {
            data[i + 3] = 0;
          } else {
            const ratio = (maxVal - 2) / 3;
            data[i + 3] = Math.round(ratio * 255);
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setTransparentAvatar(canvas.toDataURL());
    };
  }, []);

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

      {/* ── MAIN CONTENT: left text + huge transparent avatar ── */}
      <div className="relative z-10 flex flex-1 items-stretch justify-between px-6 md:px-16 lg:px-24">
        {/* ── LEFT: Big heading + subtitle + CTA ── */}
        <div className="flex flex-1 flex-col justify-center">
          <FadeIn delay={0.1} y={30}>
            <p
              className="mb-1 font-light uppercase tracking-[0.25em] text-[#8B9DB8]"
              style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
            >
              About
            </p>
            <h1 className="hero-heading font-black uppercase leading-[0.88] tracking-tight">
              <span
                className="block"
                style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)' }}
              >
                Hi, I'm
              </span>
              <span
                className="block"
                style={{
                  fontSize: 'clamp(4.5rem, 12vw, 11.5rem)',
                  letterSpacing: '-0.04em',
                }}
              >
                Shaurya
              </span>
              <span
                className="block"
                style={{
                  fontSize: 'clamp(3rem, 7.5vw, 7rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                Sharma
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <p
              className="mt-5 max-w-[280px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[340px] md:max-w-[400px]"
              style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.25rem)' }}
            >
              A student founder &amp; AI engineer building impactful products
            </p>
          </FadeIn>

          <FadeIn delay={0.45} y={20}>
            <div className="mt-8">
              <ContactButton />
            </div>
          </FadeIn>
        </div>

        {/* ── RIGHT: Avatar (Massive size, fits fully on screen) ── */}
        <div className="relative z-20 hidden md:flex flex-1 items-end justify-end">
          <FadeIn
            delay={0.55}
            y={20}
            className="w-full max-w-[50vw] xl:max-w-[55vw] 2xl:max-w-[60vw]"
          >
            <Magnet
              padding={100}
              strength={2}
              activeTransition="transform 0.2s ease-out"
              inactiveTransition="transform 0.5s ease-in-out"
              className="flex justify-end items-end"
            >
              {/* Soft background glow for contrast */}
              <div
                className="absolute right-0 bottom-0 -z-10 rounded-full opacity-35"
                style={{
                  width: '100%',
                  height: '80%',
                  background:
                    'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.15) 50%, transparent 80%)',
                  filter: 'blur(60px)',
                }}
              />
              {transparentAvatar && (
                <img
                  src={transparentAvatar}
                  alt="Shaurya Sharma — cartoon avatar"
                  className="h-auto w-full object-contain object-bottom select-none pointer-events-none"
                  style={{
                    maxHeight: '80vh', // Reduced from 92vh to ensure the cap fits under the top viewport boundary
                    minHeight: '400px',
                    filter: 'drop-shadow(0 15px 50px rgba(139,92,246,0.2))',
                  }}
                  draggable={false}
                />
              )}
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Mobile avatar — shown below heading on small screens */}
      <FadeIn
        delay={0.55}
        y={20}
        className="relative z-20 mx-auto mt-4 w-[240px] pb-8 sm:w-[280px] md:hidden"
      >
        {transparentAvatar && (
          <img
            src={transparentAvatar}
            alt="Shaurya Sharma — cartoon avatar"
            className="h-auto w-full object-contain"
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(139,92,246,0.3))',
            }}
            draggable={false}
          />
        )}
      </FadeIn>
    </section>
  );
}
