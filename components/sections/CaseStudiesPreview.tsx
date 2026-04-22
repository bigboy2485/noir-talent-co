import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

// 3-column case-study preview, matching the structural pattern of a mature
// agency site (e.g. headline number + short descriptor + link). While the
// founding cohort is in-flight we surface the *phases* of every partnership
// instead of fabricated dollar outcomes. Phase cards link to the full
// /case-studies page where the methodology and published-study template live.
const phases = [
  {
    index: '01',
    headline: 'Audit',
    window: 'Days 1–7',
    detail:
      'Full review of analytics, profile, pricing, funnel, and content performance — grounded in the creator\'s own data.',
  },
  {
    index: '02',
    headline: 'Roadmap',
    window: 'Days 8–14',
    detail:
      'A written 90-day plan, built from the audit. Pricing architecture, content calendar, and DM conversion framework.',
  },
  {
    index: '03',
    headline: 'Execute',
    window: 'Days 15–90',
    detail:
      'Chat and DM operations begin. Weekly reviews. We test, measure, and adjust every week — not every quarter.',
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="How every partnership is built."
          subtitle="Our founding cohort is in-flight. While first outcomes are underway, here is the three-phase framework every Noir case study is built on."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.index}
              className="bg-[#121212] border border-white/5 p-8 lg:p-10 flex flex-col gap-6 hover:border-[#C6A15B]/20 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="text-[#C6A15B]/40 text-sm"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {phase.index}
                </span>
                <span className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                  {phase.window}
                </span>
              </div>
              <h3
                className="text-white text-2xl leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {phase.headline}
              </h3>
              <p className="text-[#A1A1A1] text-sm leading-relaxed flex-1">{phase.detail}</p>
              <div className="pt-4 border-t border-white/5">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-3 text-[#C6A15B] text-xs tracking-widest uppercase group"
                >
                  See the framework
                  <span className="block w-6 h-px bg-[#C6A15B] group-hover:w-10 transition-all duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-3 text-[#C6A15B] text-sm tracking-widest uppercase group"
          >
            View the full framework & case study template
            <span className="block w-8 h-px bg-[#C6A15B] group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
