import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Case Studies — Noir Talent Co.',
  description:
    'How a Noir case study is built. Our 90-day framework, what we measure, and what a published case study will include.',
}

// What a Noir case study captures — the framework we apply to every partnership.
// Once founding cohort creators complete 90 days (with written consent), anonymised
// versions will replace this methodology view.
const framework = [
  {
    number: '01',
    title: 'Audit',
    window: 'Days 1–7',
    points: [
      'Platform analytics review across 90 days of historical data.',
      'Profile, pricing, and funnel audit.',
      'Content category breakdown and performance mapping.',
      'Competitor and niche positioning scan.',
    ],
  },
  {
    number: '02',
    title: 'Roadmap',
    window: 'Days 8–14',
    points: [
      'Custom 90-day strategic plan, written and signed off by the creator.',
      'Pricing architecture — subscription, PPV tiers, bundles, tips.',
      'Content calendar for the first 30 days.',
      'Messaging and DM conversion framework.',
    ],
  },
  {
    number: '03',
    title: 'Execute',
    window: 'Days 15–90',
    points: [
      'Chat and DM operations begin with full coverage.',
      'Weekly performance review with the creator every Monday.',
      'Iteration: we test, measure, and adjust weekly — not quarterly.',
      'Monthly strategic review on the last Friday of the month.',
    ],
  },
]

const caseStudyTemplate = [
  { label: 'Creator profile', detail: 'Niche, tenure, starting state — anonymised.' },
  { label: 'Starting state', detail: 'Net monthly revenue on day one, retention %, content cadence.' },
  { label: '30-day milestone', detail: 'What changed first, measured against starting state.' },
  { label: '60-day milestone', detail: 'Systems operating at full cadence — data we can now compare week-over-week.' },
  { label: '90-day outcome', detail: 'Net revenue change, retention %, time-saved, qualitative creator feedback.' },
  { label: 'What we would do differently', detail: 'The honest retrospective — what worked, what we changed mid-stream.' },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
            Case Studies
          </span>
          <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
          <h1
            className="text-5xl md:text-6xl text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How a Noir case study
            <br />
            <em className="text-[#C6A15B] not-italic">is built.</em>
          </h1>
          <p className="text-[#A1A1A1] text-lg leading-relaxed max-w-2xl mx-auto">
            We are a new, selective agency onboarding our founding cohort. Rather than publish
            outcomes we cannot yet verify, here is the framework every partnership follows — and
            what a published case study will contain when the first cohort completes ninety days.
          </p>
        </div>
      </section>

      <section className="bg-[#121212] border-y border-white/5 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
              The 90-Day Framework
            </span>
            <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
            <h2
              className="text-3xl md:text-4xl text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Three phases. One partnership.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {framework.map((phase, i) => (
              <div
                key={i}
                className="bg-[#0A0A0A] border border-white/5 p-8 lg:p-10 flex flex-col gap-6 hover:border-[#C6A15B]/20 transition-colors duration-300"
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className="text-[#C6A15B]/40 text-sm"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {phase.number}
                  </span>
                  <span className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                    {phase.window}
                  </span>
                </div>
                <h3
                  className="text-white text-2xl leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {phase.title}
                </h3>
                <ul className="flex flex-col gap-3 mt-2">
                  {phase.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-[#C6A15B] text-xs mt-1.5">◈</span>
                      <span className="text-[#A1A1A1] text-sm leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
              Published Case Study Structure
            </span>
            <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
            <h2
              className="text-3xl md:text-4xl text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What every published study will include.
            </h2>
            <p className="text-[#A1A1A1] text-base leading-relaxed max-w-2xl mx-auto mt-6">
              When founding cohort creators complete ninety days and consent in writing to share
              anonymised data, case studies will appear here in this format.
            </p>
          </div>

          <div className="flex flex-col gap-px bg-white/5">
            {caseStudyTemplate.map((row, i) => (
              <div
                key={i}
                className="bg-[#0A0A0A] p-6 lg:p-8 grid lg:grid-cols-5 gap-6 items-start"
              >
                <div className="lg:col-span-2">
                  <span
                    className="text-[#C6A15B] text-base"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {row.label}
                  </span>
                </div>
                <p className="lg:col-span-3 text-[#A1A1A1] text-sm leading-relaxed">
                  {row.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121212] border-y border-white/5 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#A1A1A1] text-sm leading-relaxed mb-8">
            Our first published case studies will appear here as founding cohort creators complete
            their first ninety days, with written consent. All outcomes will be verifiable against
            platform data. Individual results vary and are not guaranteed.
          </p>
          <Link
            href="/apply"
            className="inline-block px-8 py-4 border border-[#C6A15B] text-[#C6A15B] text-sm tracking-widest uppercase hover:bg-[#C6A15B] hover:text-black transition-all duration-300"
          >
            Apply to the Founding Cohort
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
