import FadeIn from '../components/FadeIn';

const AVATAR_IMAGE = '/images/avatar_face.jpg';

export default function ProfileBannerSection() {
  return (
    <section className="-mt-16 bg-[#0C0C0C] px-5 pb-10 pt-0 sm:-mt-20 sm:px-8 md:-mt-28 md:px-10 md:pb-16">
      <div className="mx-auto flex max-w-6xl justify-center md:justify-end">
        <FadeIn delay={0.15} y={30} className="w-full max-w-[360px] md:max-w-[400px] lg:w-[min(31vw,400px)]">
          <div className="rounded-[34px] border border-white/10 bg-[#f7f7f7] p-2.5 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="overflow-hidden rounded-[24px] bg-white">
              <img
                src={AVATAR_IMAGE}
                alt="Shaurya Sharma portrait"
                className="h-auto w-full select-none object-cover object-top"
                draggable={false}
              />
            </div>

            <div className="px-2 pb-1 pt-3 text-slate-900">
              <div className="flex items-center gap-3">
                <img
                  src="/images/nudgehq-logo.jpg"
                  alt="NudgeHQ logo"
                  className="h-10 w-10 rounded-xl object-cover shadow-sm"
                  draggable={false}
                />
                <div>
                  <p className="text-[0.95rem] font-black uppercase tracking-[0.12em] text-slate-900">
                    NudgeHQ
                  </p>
                  <p className="text-[0.82rem] font-medium text-slate-500">
                    Founder + Product Lead
                  </p>
                </div>
              </div>
              <p className="mt-3 max-w-[28rem] text-[0.88rem] leading-relaxed text-slate-600">
                Building practical AI products for real-world teams and
                operations.
              </p>
              <p className="mt-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Student Founder • Developer • AI / LLM Specialist
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Founder • NudgeHQ',
                  'Shipped 10+ sites',
                  'Trusted & recognised developer',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
