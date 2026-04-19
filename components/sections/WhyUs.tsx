import SectionHeader from '@/components/ui/SectionHeader'

const reasons = [
  {
    number: '01',
    title: 'More time for what matters',
    description:
      'Stop spending hours on strategy, analytics, and operations. We carry the load — you create.',
  },
  {
    number: '02',
    title: 'Income that reflects your worth',
    description:
      'Optimised pricing, better offers, smarter monetisation. Every improvement compounds over time.',
  },
  {
    number: '03',
    title: 'Clarity over chaos',
    description:
      'A structured plan, a clear direction, and a team behind you. No more second-guessing every decision.',
  },
  {
    number: '04',
    title: 'Structured, sustainable growth',
    description:
      "We don't chase viral moments. We build foundations. Consistent growth you can rely on month after month.",
  },
]

export default function WhyUs() {
  return (
    <section className="bg-[#121212] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <SectionHeader
              eyebrow="Why Creators Choose Us"
              title="We don't guess. We execute."
              subtitle="Noir Talent Co. is not a marketing service. We are a private growth partner — and we treat your career like the business it is."
              align="left"
            />

            <div className="mt-10 pt-10 border-t border-white/5">
              <p
                className="text-[#C6A15B] text-4xl leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "We work with creators who are serious. If that's you — we should talk."
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-6 group">
                <span
                  className="text-[#C6A15B]/40 text-sm font-light mt-1 shrink-0 group-hover:text-[#C6A15B] transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {reason.number}
                </span>
                <div>
                  <h3
                    className="text-white text-lg mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
