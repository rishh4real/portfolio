import { ArrowUpRight, Check, Sparkles, Wrench } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const BUILD_PACKAGES = [
  {
    label: 'Starter',
    title: 'Basic Site',
    price: '₹12K',
    note: 'Simple business presence',
    description: 'A clean, responsive website for founders, freelancers, and local businesses that need to look credible fast.',
    features: ['Responsive pages', 'Clean section structure', 'Fast turnaround', 'Basic content polish'],
  },
  {
    label: 'Most Picked',
    title: 'Animated Experience',
    price: '₹18K',
    note: 'Premium presentation site',
    description: 'A richer visual website with motion, custom sections, and stronger storytelling for brands that need more impact.',
    features: ['Motion and transitions', 'Custom visual direction', 'Interactive UI moments', 'Launch-ready polish'],
    featured: true,
  },
  {
    label: 'Custom',
    title: 'AI / Full Stack Build',
    price: '₹10K-20K',
    note: 'Scoped to requirement',
    description: 'Custom websites, dashboards, AI integrations, bots, and automations built around the exact workflow.',
    features: ['AI integrations', 'Backend/API work', 'Workflow automation', 'Requirement-based scope'],
  },
];

const ADD_ONS = [
  { title: 'WP Catalog', price: '₹8K-20K', detail: 'Product or service catalog setup with clean navigation.' },
  { title: 'Canva Editing', price: '₹1K-2K', detail: 'Per-template edits for branded social or business visuals.' },
  { title: 'Canva Video Editing', price: '₹1.5K-5K', detail: 'Short-form or campaign edits with better pacing and polish.' },
  { title: 'Email Marketing', price: '₹7K-10K', detail: 'Campaign structure, setup, hosting support, and clean outreach flow.' },
  { title: 'Monthly Maintenance', price: '₹4K-5K', detail: 'Content updates, small fixes, improvements, and priority support.' },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#0c0711] text-white">
      <div className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(124,58,237,0.28),transparent_30%),radial-gradient(circle_at_80%_8%,rgba(168,85,247,0.26),transparent_34%),linear-gradient(180deg,#160b1d_0%,#0c0711_58%,#0c0c0c_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <FadeIn y={30}>
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#C084FC]">
              <Sparkles className="h-4 w-4" />
              Prices
            </p>
            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
              Build Menu
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/66 sm:text-lg">
              Pick a starting point. Final pricing depends on pages, integrations, content, revisions, and how fast we need to ship.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} y={24}>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
              <img
                src="/images/shaurya-webdesign-shop.png"
                alt="Shaurya web design shop preview"
                className="aspect-[16/9] w-full object-cover"
                draggable={false}
              />
            </div>
          </FadeIn>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-4 lg:grid-cols-3">
          {BUILD_PACKAGES.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08} y={24}>
              <article
                className={[
                  'relative h-full rounded-lg border p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)]',
                  item.featured
                    ? 'border-[#A855F7]/55 bg-[linear-gradient(155deg,rgba(124,58,237,0.22),rgba(168,85,247,0.16),rgba(255,255,255,0.06))]'
                    : 'border-white/10 bg-white/[0.045]',
                ].join(' ')}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C084FC]">
                    {item.label}
                  </p>
                  {item.featured ? (
                    <span className="rounded-full bg-white px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#160b1d]">
                      Popular
                    </span>
                  ) : null}
                </div>

                <h2 className="mt-5 text-3xl font-black uppercase leading-none tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl">
                  {item.price}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/42">
                  {item.note}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-white/68">
                  {item.description}
                </p>

                <ul className="mt-7 grid gap-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/78">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-[#C084FC]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <FadeIn y={24}>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/54">
                <Wrench className="h-4 w-4 text-[#C084FC]" />
                Add-ons
              </p>
              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">
                Extra shop services
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/62">
                Use these when the site needs content support, design edits, campaigns, or ongoing care after launch.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-[#A855F7]/60 hover:bg-white/15"
              >
                Start a build
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>

          <div className="grid gap-3 sm:grid-cols-2">
            {ADD_ONS.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06} y={20}>
                <article className="h-full rounded-lg border border-white/10 bg-[#151019] p-5 transition hover:border-[#A855F7]/45">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="whitespace-nowrap text-sm font-black text-[#C084FC]">
                      {item.price}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/58">
                    {item.detail}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
