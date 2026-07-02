import { useEffect, useRef, type CSSProperties } from 'react';
import { Code2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  siChatbot,
  siClaude,
  siDeepseek,
  siFirebase,
  siGodaddy,
  siGithub,
  siJavascript,
  siOpencode,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
} from 'simple-icons';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const HERO_IMAGE = '/images/avatar_face_clean.png';

type SimpleIcon = { svg: string; title: string; hex?: string };

type FlutterItem = {
  label: string;
  icon: SimpleIcon | 'vscode';
  glow: string;
  side: 'left' | 'right';
  className: string;
};

const FLUTTER_ITEMS: FlutterItem[] = [
  { label: 'VS Code', icon: 'vscode', glow: '#4FA3FF', side: 'left', className: 'left-[7%] top-[16%]' },
  { label: 'React', icon: siReact as SimpleIcon, glow: `#${siReact.hex}`, side: 'left', className: 'left-[1%] top-[31%]' },
  { label: 'Claude', icon: siClaude as SimpleIcon, glow: `#${siClaude.hex}`, side: 'left', className: 'left-[5%] top-[49%]' },
  { label: 'Python', icon: siPython as SimpleIcon, glow: `#${siPython.hex}`, side: 'left', className: 'left-[17%] top-[63%]' },
  { label: 'Codex / OpenAI', icon: siOpencode as SimpleIcon, glow: `#${siOpencode.hex}`, side: 'left', className: 'left-[10%] bottom-[11%]' },
  { label: 'Tailwind', icon: siTailwindcss as SimpleIcon, glow: `#${siTailwindcss.hex}`, side: 'left', className: 'left-[24%] top-[22%]' },
  { label: 'ChatGPT', icon: siChatbot as SimpleIcon, glow: `#${siChatbot.hex}`, side: 'right', className: 'right-[9%] top-[14%]' },
  { label: 'TypeScript', icon: siTypescript as SimpleIcon, glow: `#${siTypescript.hex}`, side: 'right', className: 'right-[1%] top-[29%]' },
  { label: 'DeepSeek', icon: siDeepseek as SimpleIcon, glow: `#${siDeepseek.hex}`, side: 'right', className: 'right-[4%] top-[48%]' },
  { label: 'Firebase', icon: siFirebase as SimpleIcon, glow: `#${siFirebase.hex}`, side: 'right', className: 'right-[13%] bottom-[16%]' },
  { label: 'GoDaddy', icon: siGodaddy as SimpleIcon, glow: `#${siGodaddy.hex}`, side: 'right', className: 'right-[28%] top-[28%]' },
  { label: 'JavaScript', icon: siJavascript as SimpleIcon, glow: `#${siJavascript.hex}`, side: 'right', className: 'right-[27%] bottom-[7%]' },
  { label: 'Vite', icon: siVite as SimpleIcon, glow: `#${siVite.hex}`, side: 'left', className: 'left-[30%] bottom-[24%]' },
  { label: 'GitHub', icon: siGithub as SimpleIcon, glow: '#FFFFFF', side: 'right', className: 'right-[20%] top-[62%]' },
  { label: 'Vercel', icon: siVercel as SimpleIcon, glow: '#FFFFFF', side: 'left', className: 'left-[22%] top-[43%]' },
];

function SimpleIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <span
      className="block h-6 w-6 [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
}

function FlutterChip({ item, index }: { item: FlutterItem; index: number }) {
  const direction = item.side === 'left' ? -1 : 1;
  const distance = 34 + (index % 4) * 8;
  const verticalDistance = 20 + (index % 5) * 6;
  const duration = 4.2 + (index % 5) * 0.55;

  return (
    <motion.div
      className={`hero-flutter-chip hero-flutter-${item.side} group ${item.className}`}
      animate={{
        x: [0, direction * distance, direction * -distance * 0.72, direction * distance * 0.38, 0],
        y: [0, -verticalDistance, verticalDistance * 0.9, -verticalDistance * 0.35, 0],
        rotate: [0, direction * 8, direction * -7, direction * 4, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay: index * 0.16,
      }}
      whileHover={{ scale: 1.18, zIndex: 70 }}
      style={
        {
          '--pulse-duration': `${3.2 + (index % 5) * 0.35}s`,
          '--chip-glow': item.glow,
        } as CSSProperties
      }
      aria-label={item.label}
      title={item.label}
    >
      <div className="hero-flutter-face">
        <span className="hero-flutter-core" style={{ color: item.glow }}>
          {item.icon === 'vscode' ? <Code2 className="h-6 w-6" /> : <SimpleIcon icon={item.icon} />}
        </span>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 46]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate(${event.clientX - 320}px, ${event.clientY - 320}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#0b0c10] text-white"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute z-0 h-[640px] w-[640px] rounded-full opacity-25 transition-transform duration-700 ease-out"
        style={{
          background:
            'radial-gradient(circle, rgba(255,77,141,0.42) 0%, rgba(255,77,141,0.18) 24%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.26]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 18% 24%, rgba(255,255,255,0.06) 0, transparent 18%),
            radial-gradient(circle at 78% 34%, rgba(255,255,255,0.05) 0, transparent 15%),
            radial-gradient(circle at 50% 72%, rgba(255,77,141,0.11) 0, transparent 24%),
            linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: 'cover, cover, cover, 100% 44px, 44px 100%',
          mixBlendMode: 'screen',
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045),transparent_42%),radial-gradient(circle_at_center,rgba(255,77,141,0.09),transparent_62%)] opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-28 bg-gradient-to-t from-[#0b0c10] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-5 py-7 sm:px-8 md:px-10 lg:px-12">
        <nav className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-xs">
          <a href="/" className="flex items-center gap-3 transition-colors hover:text-[#FF4D8D]">
            <span className="inline-flex h-3 w-3 rounded-sm bg-white" />
            Shaurya Sharma
          </a>
          <div className="flex items-center gap-5 sm:gap-8">
            <a href="/about" className="transition-colors hover:text-[#FF4D8D]">
              About
            </a>
            <a href="/projects" className="hidden transition-colors hover:text-[#FF4D8D] sm:inline">
              Projects
            </a>
          </div>
        </nav>

        <div className="relative flex flex-1 flex-col items-center justify-center gap-5 pb-8 pt-12 text-center sm:gap-6 lg:pt-8">
          <FadeIn y={18} className="relative z-40">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-white/62 sm:text-sm">
              Student Founder • Web Developer • AI/Automation Specialist
            </p>
          </FadeIn>

          <div className="relative isolate flex w-full max-w-[980px] items-center justify-center py-2 sm:py-4 lg:py-0">
            <div className="absolute left-1/2 top-1/2 z-0 h-[min(82vw,760px)] w-[min(82vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,77,141,0.28)_0%,rgba(130,81,255,0.14)_30%,rgba(255,255,255,0.045)_48%,transparent_72%)] blur-2xl" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-[min(92vw,860px)] w-[min(96vw,1120px)] -translate-x-1/2 -translate-y-1/2 md:block">
              {FLUTTER_ITEMS.map((item, index) => (
                <FlutterChip key={item.label} item={item} index={index} />
              ))}
            </div>

            <motion.img
              src={HERO_IMAGE}
              alt="Shaurya Sharma portrait"
              className="relative z-20 block max-h-[58svh] w-[min(78vw,590px)] select-none object-contain opacity-[0.72] drop-shadow-[0_32px_90px_rgba(0,0,0,0.58)] sm:max-h-[64svh] md:w-[min(66vw,610px)]"
              style={{ y: photoY }}
              draggable={false}
            />

            <h1
              className="pointer-events-none absolute left-1/2 top-1/2 z-30 w-full -translate-x-1/2 -translate-y-1/2 font-black uppercase tracking-[-0.105em] drop-shadow-[0_14px_48px_rgba(0,0,0,0.68)]"
              style={{ fontSize: 'clamp(4.1rem, 14.8vw, 14.4rem)', lineHeight: 0.78 }}
            >
              <span className="hero-name-line hero-name-line-top">Shaurya</span>
              <span className="hero-name-line hero-name-line-bottom">Sharma</span>
            </h1>
          </div>

          <FadeIn delay={0.08} y={18} className="relative z-40 max-w-3xl">
            <p className="mx-auto text-base leading-relaxed text-white/68 sm:text-lg md:text-xl">
              Building websites, AI integrations, and automation systems for real-world businesses.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ContactButton label="View Skills" href="/skills" className="scale-95 sm:scale-100" />
              <a
                href="/projects"
                className="rounded-full border border-white/12 bg-white/5 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur-sm transition-colors hover:border-[#FF4D8D]/40 hover:text-white"
              >
                View Projects
              </a>
            </div>
          </FadeIn>

          <div className="pointer-events-none absolute inset-x-0 bottom-2 z-0 hidden justify-center overflow-hidden opacity-80 lg:flex">
            <div className="hero-ticker text-[0.62rem] font-semibold uppercase tracking-[0.48em] text-white/16">
              React • Vite • Tailwind • n8n • Firebase • AI Automation • React • Vite • Tailwind • n8n • Firebase • AI Automation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
