import FadeIn from '../components/FadeIn';

const PACKAGES = [
  {
    title: 'Basic Site',
    price: '₹12K',
    subtitle: 'Simple business presence',
    description:
      'A clean website for businesses, freelancers, or personal brands that need a strong online presence.',
    features: ['Responsive build', 'Clean sections', 'Fast turnaround', 'Easy updates'],
  },
  {
    title: 'Animated Experience',
    price: '₹18K',
    subtitle: 'Premium motion-heavy site',
    description:
      'A more cinematic website with motion, transitions, and richer presentation for stronger visual impact.',
    features: ['Motion effects', 'Interactive UI', 'Premium visuals', 'Custom storytelling'],
    featured: true,
  },
  {
    title: 'Custom Site / AI Build',
    price: '₹10K–20K',
    subtitle: 'According to the site',
    description:
      'Custom websites, AI integrations, bots, and workflows built around your exact requirements.',
    features: ['AI integrations', 'AI bots', 'Workflow automation', 'Requirement-based scope'],
  },
  {
    title: 'WP Catalog',
    price: '₹8K–20K',
    subtitle: 'Catalog setup and structure',
    description:
      'Catalog-style website support for businesses that need a simple, organized product or service showcase.',
    features: ['Catalog structure', 'Product sections', 'Clean layout', 'Easy navigation'],
  },
  {
    title: 'Canva Editing',
    price: '₹1K–2K',
    subtitle: 'Per template',
    description:
      'Template-based Canva edits for visuals that need quick polish, consistency, and brand alignment.',
    features: ['Per-template pricing', 'Social media creatives', 'Brand consistency', 'Fast revisions'],
  },
  {
    title: 'Canva Video Editing',
    price: '₹1.5K–5K',
    subtitle: 'Per video',
    description:
      'Short-form or campaign video editing with cleaner motion, pacing, and branded presentation.',
    features: ['Per-video pricing', 'Social reels', 'Campaign edits', 'Polished delivery'],
  },
  {
    title: 'Email Marketing',
    price: '₹7K–10K',
    subtitle: 'Campaign setup + hosting',
    description:
      'Email marketing setup, campaign structuring, and hosting support for businesses that want cleaner outreach.',
    features: ['Campaign setup', 'Hosting support', 'Mail structure', 'Requirement-based scope'],
  },
  {
    title: 'Monthly Maintenance',
    price: '₹4K–5K',
    subtitle: 'Per month',
    description:
      'Ongoing site support, small fixes, content updates, and maintenance so the site keeps running smoothly.',
    features: ['Content updates', 'Bug fixes', 'Small improvements', 'Priority support'],
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="rounded-t-[40px] bg-[#0f0f10] px-5 py-20 text-white sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={30}>
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.35em] text-white/55">
          Pricing
        </p>
        <h2
          className="mx-auto max-w-5xl text-center font-black uppercase leading-[0.9] tracking-tight text-white"
          style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
        >
          Build from me something like this
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/60 sm:text-base">
          Prices can be adjusted or customized according to requirements, scope,
          and features.
        </p>
      </FadeIn>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:mt-20 md:grid-cols-2">
        {PACKAGES.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.08} y={24}>
            <div
              className={`relative h-full rounded-[28px] border p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] ${
                item.featured
                  ? 'border-[#b45cff]/55 bg-gradient-to-b from-[#1d102c] to-[#111113]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {item.featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-white/70">
                  Popular
                </span>
              ) : null}

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/55">
                {item.subtitle}
              </p>
              <h3 className="mt-4 text-3xl font-black uppercase tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-5xl font-black tracking-tight text-white">
                {item.price}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
                {item.description}
              </p>

              <ul className="mt-6 space-y-3">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#b45cff]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
