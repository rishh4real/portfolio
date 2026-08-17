import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = '/images/shaurya-webdesign-shop.png';

export default function HeroSection() {
  return (
    <section className="relative bg-[#110817]">
      <img
        src={HERO_IMAGE}
        alt="Shaurya web design shop storefront"
        className="h-[calc(100svh-61px)] min-h-[560px] w-full object-cover"
        draggable={false}
      />
      <a
        href="#skills"
        className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-white shadow-[0_14px_34px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:border-[#A855F7]/60 hover:bg-black/55 sm:bottom-8"
        aria-label="Scroll down to skills"
      >
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
