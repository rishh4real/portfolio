import { useEffect, useRef, useState } from 'react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data/content';

function MarqueeRow({
  images,
  direction,
  offset,
}: {
  images: string[];
  direction: 'left' | 'right';
  offset: number;
}) {
  const tripled = [...images, ...images, ...images];
  const translateX =
    direction === 'right' ? offset - 200 : -(offset - 200);

  return (
    <div
      className="flex gap-4"
      style={{
        transform: `translateX(${translateX}px)`,
        willChange: 'transform',
      }}
    >
      {tripled.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="flex-shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          style={{
            width: 'clamp(260px, 32vw, 470px)',
            height: 'clamp(170px, 20vw, 300px)',
          }}
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const newOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(newOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-[#0C0C0C] pb-10 pt-20 sm:pt-28 md:pt-36"
    >
      <div className="flex flex-col gap-3 overflow-hidden">
        <MarqueeRow images={MARQUEE_ROW_1} direction="right" offset={offset} />
        <MarqueeRow images={MARQUEE_ROW_2} direction="left" offset={offset} />
      </div>
    </section>
  );
}
