import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Results — Noir Talent Co.',
  description: 'Real outcomes from real creators managed by Noir Talent Co.',
}

const testimonials = [
  {
    quote:
      "I was stuck at the same income level for months — doing the same things and expecting different results. Within 6 weeks of working with Noir, I had a structured content plan, better pricing, and my income had grown in a way I hadn't seen before. The difference was having a real strategy, not just ideas.",
    name: 'A.M.',
    detail: 'Creator — 8 months with Noir',
    highlight: 'Revenue growth within 60 days.',
  },
  {
    quote:
      "What I appreciate most is the discretion. I was nervous about working with a management agency — I had concerns about privacy and how professional it would feel. Everything has been handled with complete professionalism. They understand this industry, and they respect it.",
    name: 'S.R.',
    detail: 'Creator — 14 months with Noir',
    highlight: 'Ongoing partnership — 14 months and counting.',
  },
  {
    quote:
      "I was completely overwhelmed. Content, subscribers, messages, strategy — it was all on me and I was drowning. Noir came in, built me a system, and now I actually have clarity on what I need to do each week. My numbers are up and I actually enjoy what I'm doing again.",
    name: 'J.T.',
    detail: 'Creator — 5 months with Noir',
    highlight: 'Stress reduced, income increased.',
  },
  {
    quote:
      "I didn't need someone to post for me — I needed someone to tell me what was actually going to move the needle. That's what Noir does. They looked at my data, identified where I was leaving money on the table, and gave me a plan I could actually execute.",
    name: 'R.K.',
    detail: 'Creator — 4 months with Noir',
    highlight: 'Monetisation audit led to immediate improvements.',
  },
  {
    quote:
      "I had tried other agencies and was sceptical. They made big promises and delivered very little. Noir was different from the first call — honest about what they could do, clear about the process, and consistent in their follow-through. I finally feel like I have a real team behind me.",
    name: 'M.L.',
    detail: 'Creator — 10 months with Noir',
    highlight: 'Full partnership from strategy to execution.',
  },
  {
    quote:
      "My brand was inconsistent and I knew it. Different energy on different days, no clear positioning — I was just winging it. Noir helped me define exactly what my brand is, who it's for, and how to stay consistent. My premium subscribers have grown significantly since.",
    name: 'C.H.',
    detail: 'Creator — 7 months with Noir',
    highlight: 'Brand positioning overhaul, premium tier growth.',
  },
]

const outcomes = [
  { metric: 'Revenue Growth', description: 'Most creators see measurable income growth within the first 60 days of partnership.' },
  { metric: 'Retention', description: 'Improved fan engagement systems consistently reduce subscriber churn across our portfolio.' },
  { metric: 'Time Saved', description: 'Creators report spending significantly less time on operations without sacrificing growth.' },
  { metric: 'Long-Term Partnerships', description: 'The majority of our creators remain active partners for 6+ months.' },
]

export default function ResultsPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
            Results
          </span>
          <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
          <h1
            className="text-5xl md:text-6xl text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Real creators.
            <br />
            <em className="text-[#C6A15B] not-italic">Real outcomes.</em>
          </h1>
          <p className="text-[#A1A1A1] text-lg leading-relaxed max-w-2xl mx-auto">
            We let the results speak. Below are honest accounts from creators we have partnered with.
            No inflated numbers. No manufactured hype.
          </p>
        </div>
      </section>

      <section className="bg-[#121212] border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((o, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span
                className="text-[#C6A15B] text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {o.metric}
              </span>
              <p className="text-[#A1A1A1] text-sm leading-relaxed">{o.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#121212] border border-white/5 p-8 lg:p-10 flex flex-col gap-6 hover:border-[#C6A15B]/20 transition-colors duration-300"
              >
                <span
                  className="text-[#C6A15B] text-4xl leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </span>
                <p className="text-[#A1A1A1] text-sm leading-relaxed -mt-2 flex-1">{t.quote}</p>
                <div className="bg-[#0A0A0A] px-4 py-3 border-l border-[#C6A15B]/40">
                  <p className="text-[#C6A15B] text-xs tracking-wide">{t.highlight}</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-white text-sm">{t.name}</p>
                  <p className="text-[#A1A1A1] text-xs mt-1 tracking-wide">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121212] border-y border-white/5 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#A1A1A1] text-sm leading-relaxed mb-8">
            All testimonials are from real creators and have been shared with permission.
            Names are abbreviated and identifying details are withheld to protect client confidentiality.
          </p>
          <Link
            href="/apply"
            className="inline-block px-8 py-4 border border-[#C6A15B] text-[#C6A15B] text-sm tracking-widest uppercase hover:bg-[#C6A15B] hover:text-black transition-all duration-300"
          >
            Apply to Work With Us
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
