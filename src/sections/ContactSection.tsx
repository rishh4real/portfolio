import FadeIn from '../components/FadeIn';
import { CONTACT } from '../data/content';
import { Mail, Phone, Code2, UserRound } from 'lucide-react';

const LINKS = [
  { icon: Mail, label: 'Email', href: `mailto:${CONTACT.email}`, text: CONTACT.email },
  { icon: Phone, label: 'Phone', href: `tel:${CONTACT.phone}`, text: CONTACT.phone },
  { icon: Code2, label: 'GitHub', href: CONTACT.github, text: '@rishh4real' },
  { icon: UserRound, label: 'LinkedIn', href: CONTACT.linkedin, text: 'shaurya-sharma' },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading mb-16 font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 120px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {LINKS.map((link, i) => (
            <FadeIn key={link.label} delay={i * 0.1}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 rounded-[2rem] border border-[#D7E2EA]/20 p-6 text-left transition-colors hover:border-[#D7E2EA]/50"
              >
                <link.icon className="h-6 w-6 flex-shrink-0 text-[#D7E2EA]" />
                <div>
                  <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50">
                    {link.label}
                  </p>
                  <p className="font-medium text-[#D7E2EA]">{link.text}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-16">
          <p className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/40">
            Continuously learning DSA &amp; algorithms
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
