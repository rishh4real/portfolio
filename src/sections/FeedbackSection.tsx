import FadeIn from '../components/FadeIn';

const REVIEWS = [
  {
    name: 'Svetleena Choudhary',
    role: 'Ikehu & The Protein Drop',
    project: 'Web Design · Full Stack · AI & Automation',
    services: 'Web Design · Full Stack · AI & Automation',
    rating: '5/5 · Verified Client',
    review:
      'Shaurya is hugely enthusiastic, bursting with energy and ideas, and extremely high on execution. He’s a solution provider and truly a one-stop shop.\n\nWhat I particularly love is the ownership he brings — he even puts reverse pressure on the client to move faster! Energetic, proactive, and always focused on getting things done.',
  },
  {
    name: 'Aadishree Arora',
    role: 'Freelance Graphic Designer',
    project: 'Freelance Portfolio Website',
    services: 'Web Design',
    rating: '5/5 · Verified Client',
    review:
      'Working with Shaurya was an excellent experience from start to finish. The website was delivered incredibly fast, and every change I requested was made promptly without any hassle. He paid close attention to every detail and translated my vision exactly the way I had imagined it. The final portfolio looks clean, professional, and perfectly reflects what I wanted. Highly recommend them to anyone looking for someone who is efficient, responsive, and genuinely committed to delivering quality work.',
  },
];

export default function FeedbackSection() {
  return (
    <section
      id="feedback"
      className="rounded-t-[40px] bg-[#0f0f10] px-5 py-20 text-white sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={30}>
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.35em] text-[#C084FC]/80">
          Feedback
        </p>
        <h2
          className="mx-auto max-w-5xl text-center font-black uppercase leading-[0.9] tracking-tight text-white"
          style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
        >
          Client words that matter
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/60 sm:text-base">
          Real feedback from live builds and client collaborations. I’ll keep
          adding more testimonials here as projects go live.
        </p>
      </FadeIn>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
        {REVIEWS.map((item, index) => (
          <FadeIn key={`${item.name}-${item.project}`} delay={index * 0.08} y={20}>
            <article className="h-full rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1 hover:border-[#A855F7]/35">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C084FC]/75">
                    {item.project}
                  </p>
                  <p className="client-signature mt-3 text-3xl font-semibold text-white sm:text-4xl">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/40">
                    {item.role}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                  Verified
                </span>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#C084FC]/70">
                {item.services}
              </p>
              <p className="mt-3 text-sm font-semibold text-white/82">
                ★★★★★ <span className="text-white/52">{item.rating}</span>
              </p>
              {item.review.split('\n\n').map((paragraph) => (
                <p key={paragraph} className="mt-5 text-sm leading-relaxed text-white/72">
                  {paragraph}
                </p>
              ))}
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
