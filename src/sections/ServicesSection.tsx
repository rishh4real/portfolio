import FadeIn from '../components/FadeIn';

const SERVICES = [
  'Basic business websites',
  'Animated experience websites',
  'Custom websites with AI integrations',
  'AI bots and LLM workflows',
  'n8n automation systems',
  'WhatsApp catalog setup',
  'WhatsApp business automation',
  'Email marketing and campaign setup',
  'Campaign hosting support',
  'Canva template editing',
  'Canva video editing',
  'Monthly website maintenance',
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#0c0c0c] px-5 pb-20 text-white sm:px-8 sm:pb-24 md:px-10 md:pb-32">
      <FadeIn delay={0} y={32}>
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.38em] text-[#FF4D8D]/80">
              Services I offer
            </p>
            <h2
              className="hero-heading mt-4 font-black uppercase leading-[0.86] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 9vw, 110px)' }}
            >
              Build support for real work
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#D7E2EA]/62 sm:text-base">
              From clean portfolio sites to AI automations, I build practical
              digital systems that help brands launch faster and look sharper.
            </p>
            <a
              href="/pricing"
              className="mt-7 inline-flex rounded-full border border-[#FF4D8D]/35 bg-[#FF4D8D] px-6 py-3 text-xs font-black uppercase tracking-[0.24em] text-white shadow-[0_14px_38px_rgba(255,77,141,0.26)] transition-transform hover:-translate-y-0.5"
            >
              View pricing
            </a>
          </div>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div
                  key={service}
                  className="group flex items-center gap-3 border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#D7E2EA]/78 transition-colors hover:border-[#FF4D8D]/35 hover:text-white"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF4D8D] shadow-[0_0_18px_rgba(255,77,141,0.7)] transition-transform group-hover:scale-125" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <p className="mt-7 max-w-2xl text-sm leading-relaxed text-[#D7E2EA]/50">
              Prices can be customized according to scope, timeline, and exact
              business requirements.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
