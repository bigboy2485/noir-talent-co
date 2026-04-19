import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'How It Works — Noir Talent Co.',
  description: 'Our simple, private four-step process from application to growth.',
}

const steps = [
  {
    step: '01',
    title: 'Apply',
    headline: 'It starts with your application.',
    description:
      'Submit your application through our secure form. Tell us about where you are now, where you want to go, and what has been holding you back. There are no wrong answers — we want to understand your situation fully.',
    detail:
      'Every application is reviewed personally by our team. We do not use automated filters or rejection scripts. We take the time to understand each creator who applies.',
  },
  {
    step: '02',
    title: 'Assessment',
    headline: 'A private, one-on-one conversation.',
    description:
      'If we see a strong potential fit, we will invite you to a private assessment call. This is not a sales pitch. It is a genuine conversation about your goals, your challenges, and whether a partnership makes sense.',
    detail:
      'We review your platform, your content, your monetisation, and your audience. We identify the biggest opportunities and the fastest paths to improvement. This is where strategy begins.',
  },
  {
    step: '03',
    title: 'Strategy',
    headline: 'Your custom growth plan.',
    description:
      'If we move forward together, we build your custom strategy. This covers every dimension — content direction, monetisation optimisation, fan engagement, branding, and a clear roadmap with milestones.',
    detail:
      'You will leave this phase with complete clarity on what needs to happen and in what order. No vague advice. No generic templates. A real strategy built specifically for you.',
  },
  {
    step: '04',
    title: 'Scale',
    headline: 'We execute alongside you.',
    description:
      'This is where the work happens. We work with you week by week — reviewing performance, adjusting strategy, managing systems, and keeping you on track. You create. We handle the rest.',
    detail:
      'Monthly reviews ensure we are always moving in the right direction. As your income and audience grow, we evolve the strategy to match. Your growth is our mandate.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
            How It Works
          </span>
          <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
          <h1
            className="text-5xl md:text-6xl text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A simple process.
            <br />
            <em className="text-[#C6A15B] not-italic">A serious commitment.</em>
          </h1>
          <p className="text-[#A1A1A1] text-lg leading-relaxed max-w-2xl mx-auto">
            From application to active partnership — here is exactly what working with Noir
            Talent Co. looks like.
          </p>
        </div>
      </section>

      <section className="bg-[#0A0A0A] pb-24 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={i} className="relative grid lg:grid-cols-[100px_1fr] gap-8 py-16 border-b border-white/5 last:border-b-0">
                <div className="flex flex-col items-start lg:items-center">
                  <div className="w-14 h-14 rounded-full border border-[#C6A15B]/30 flex items-center justify-center">
                    <span
                      className="text-[#C6A15B] text-sm"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {step.step}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block w-px flex-1 mt-4 bg-gradient-to-b from-[#C6A15B]/20 to-transparent" />
                  )}
                </div>

                <div className="pb-4">
                  <p className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase mb-3">
                    Step {step.step} — {step.title}
                  </p>
                  <h2
                    className="text-white text-3xl md:text-4xl leading-tight mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.headline}
                  </h2>
                  <p className="text-[#A1A1A1] text-base leading-relaxed mb-5">
                    {step.description}
                  </p>
                  <p className="text-[#A1A1A1]/70 text-sm leading-relaxed border-l border-[#C6A15B]/30 pl-5">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121212] border-y border-white/5 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-[#A1A1A1] text-base leading-relaxed mb-8">
            The first step costs nothing but a few minutes of your time. If there is a fit,
            we will find it. If there is not, we will tell you honestly.
          </p>
          <Link
            href="/apply"
            className="inline-block px-8 py-4 bg-[#C6A15B] text-black text-sm tracking-widest uppercase font-medium hover:bg-[#D4B47A] transition-all duration-300"
          >
            Submit Your Application
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
