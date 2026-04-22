import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

// What we commit to — principles, not manufactured testimonials.
// See app/results/page.tsx for the longer version.
const commitments = [
  {
    title: 'A strategy built from your data.',
    body:
      'Every partnership starts with a full audit of your analytics, audience, content, and pricing. Your 90-day plan is built from what we find — not from a template.',
  },
  {
    title: 'Systems that keep running when you rest.',
    body:
      'Messaging, upsells, onboarding, renewals — we build the systems that compound income in the background so you can focus on creating.',
  },
  {
    title: 'Earnings aligned to yours.',
    body:
      'We only earn when you earn. No upfront fees. No flat retainers that punish you in slow months. Your growth and ours are the same number.',
  },
]

export default function ResultsSection() {
  return (
    <section className="bg-[#121212] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Commit To"
          title="No inflated numbers. No manufactured hype."
          subtitle="We are early, selective, and building our founding cohort. Here is what every partnership includes from day one."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {commitments.map((c, i) => (
            <div
              key={i}
              className="bg-[#0A0A0A] border border-white/5 p-8 lg:p-10 flex flex-col gap-6 hover:border-[#C6A15B]/20 transition-colors duration-300"
            >
              <span
                className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="text-white text-xl leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {c.title}
              </h3>
              <p className="text-[#A1A1A1] text-sm leading-relaxed flex-1">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/results"
            className="inline-flex items-center gap-3 text-[#C6A15B] text-sm tracking-widest uppercase group"
          >
            See our approach in detail
            <span className="block w-8 h-px bg-[#C6A15B] group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
