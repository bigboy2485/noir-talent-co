import SectionHeader from '@/components/ui/SectionHeader'

const testimonials = [
  {
    quote:
      "I was stuck at the same income level for months. Within 6 weeks of working with Noir, I had a proper content structure, better pricing, and my revenue had grown significantly. The difference was having a real strategy.",
    name: 'A.M.',
    detail: 'Creator — 8 months with Noir',
  },
  {
    quote:
      "What I appreciate most is the discretion. Everything is handled professionally and privately. They understand the nature of this industry and treat it — and me — with respect.",
    name: 'S.R.',
    detail: 'Creator — 14 months with Noir',
  },
  {
    quote:
      "I was completely overwhelmed trying to manage content, subscribers, and strategy all at once. Noir came in, built a system, and now I actually have clarity. My numbers are up and my stress is down.",
    name: 'J.T.',
    detail: 'Creator — 5 months with Noir',
  },
]

export default function ResultsSection() {
  return (
    <section className="bg-[#121212] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Results"
          title="Creators who are growing."
          subtitle="Real outcomes. Real creators. No inflated claims."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#0A0A0A] border border-white/5 p-8 lg:p-10 flex flex-col gap-8 hover:border-[#C6A15B]/20 transition-colors duration-300"
            >
              <span
                className="text-[#C6A15B] text-4xl leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "
              </span>
              <p className="text-[#A1A1A1] text-sm leading-relaxed flex-1 -mt-4">{t.quote}</p>
              <div className="pt-6 border-t border-white/5">
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-[#A1A1A1] text-xs tracking-wide mt-1">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
