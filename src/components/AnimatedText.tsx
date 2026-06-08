import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p
      ref={ref}
      className={`text-center font-medium leading-relaxed text-[#D7E2EA] ${className}`}
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
        maxWidth: '560px',
      }}
    >
      {words.map((word, wordIndex) => {
        const start = wordIndex / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={wordIndex} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const chars = children.split('');
  const amount = range[1] - range[0];
  const step = amount / chars.length;

  return (
    <span className="inline">
      {chars.map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;

        return (
          <Char key={i} range={[start, end]} progress={progress}>
            {char}
          </Char>
        );
      })}
      <span>&nbsp;</span>
    </span>
  );
}

function Char({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{children}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
}
