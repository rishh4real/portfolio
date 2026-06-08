import FadeIn from '../components/FadeIn';
import { CONTACT } from '../data/content';
import { BriefcaseBusiness, Code2, Mail } from 'lucide-react';

function GitHubMark() {
  return (
    <svg
      viewBox="0 0 19 19"
      aria-hidden="true"
      className="h-6 w-6 flex-shrink-0 text-[#D7E2EA]"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InstagramMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 flex-shrink-0 text-[#D7E2EA]"
    >
      <path
        fill="currentColor"
        d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.5A3.25 3.25 0 0 0 4.5 7.75v8.5a3.25 3.25 0 0 0 3.25 3.25h8.5a3.25 3.25 0 0 0 3.25-3.25v-8.5a3.25 3.25 0 0 0-3.25-3.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 16a3.5 3.5 0 0 0 0-7Zm5.2-.95a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z"
      />
    </svg>
  );
}

const LINKS = [
  { icon: Mail, label: 'Email', href: `mailto:${CONTACT.email}`, text: CONTACT.email },
  { icon: Code2, label: 'GitHub', href: CONTACT.github, text: '@rishh4real' },
  { icon: GitHubMark, label: 'LinkedIn', href: CONTACT.linkedin, text: 'shaurya-sharma' },
  {
    icon: BriefcaseBusiness,
    label: 'NudgeHQ',
    href: CONTACT.nudgehqLinkedin,
    text: 'linkedin.com/company/nudgehq-web',
  },
  {
    icon: InstagramMark,
    label: 'NudgeHQ Instagram',
    href: CONTACT.nudgehqInstagram,
    text: '@hello.nudgehq',
  },
  {
    icon: InstagramMark,
    label: 'Personal Instagram',
    href: CONTACT.instagram,
    text: '@shauryaa.sh',
  },
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
            Continuously learning new technology + DSA + AI and LLM
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
