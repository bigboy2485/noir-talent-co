'use client'

import { useState } from 'react'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'
import { INSTAGRAM_URL, CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/constants'

const faqs = [
  {
    category: 'Pricing & Structure',
    questions: [
      {
        q: 'How much do I pay upfront?',
        a: "Nothing. We do not charge upfront fees, retainers, or setup costs. We operate on a pure revenue-share model, which means we only earn when you earn. If you do not make money, neither do we.",
      },
      {
        q: 'How does the revenue share work?',
        a: "Our share is a percentage of your net OnlyFans earnings — calculated after the platform\u2019s own 20% fee is deducted. The exact rate depends on your tier and is locked in your contract, so there are never surprise changes. Founding cohort creators receive a reduced rate, held for the duration of the partnership.",
      },
      {
        q: 'Are there any hidden fees?',
        a: "No. Every payout statement shows your gross earnings, the OnlyFans fee, our share, and your net take-home. If you ever see a line you do not understand, we will walk you through it until it makes sense.",
      },
    ],
  },
  {
    category: 'Eligibility',
    questions: [
      {
        q: "I'm new to OnlyFans. Would you still work with me?",
        a: "Yes, in the right cases. We work with both new creators who have not launched yet and established creators looking to scale. What matters more than your current numbers is your commitment, your content output, and whether we can see a clear path to growth for you. If you are ready to treat this as a business, we want to talk.",
      },
      {
        q: 'Who is this for?',
        a: "Creators who are serious about growing their career on OnlyFans. Whether you are just starting or already earning and want to scale, if you are committed, coachable, and ready to follow through on a strategy, we want to hear from you.",
      },
      {
        q: 'Do you accept everyone who applies?',
        a: "No. We are selective and work with a limited number of creators at a time. Every application is reviewed personally and we only move forward where we see a strong fit and genuine potential. If we do not think we can deliver value, we will tell you honestly.",
      },
      {
        q: 'What kind of creators do you work best with?',
        a: "Creators who are serious, consistent, and ready to follow through on a plan. We work best with people who are coachable and open to direction — not those looking for validation for doing things the way they already do them.",
      },
    ],
  },
  {
    category: 'Privacy & Discretion',
    questions: [
      {
        q: 'Is the protection of my privacy and confidentiality assured?',
        a: "Completely. Discretion is the foundation of how we work. Your identity, income figures, content, and the existence of our partnership remain private. We do not share client information with third parties. We do not disclose who we work with. We do not use your details for marketing without explicit written permission. A signed confidentiality agreement is in place before any account access is shared.",
      },
      {
        q: 'How do you handle sensitive information?',
        a: "Every piece of information shared with us — whether through your application, calls, or the day-to-day partnership — is treated as strictly confidential. Account credentials are held in an enterprise password manager, never passed through chat or email. Two-factor authentication is enforced on every account. Chat and document access is limited to the people who strictly need it.",
      },
    ],
  },
  {
    category: 'The Process',
    questions: [
      {
        q: 'How do I apply?',
        a: "Fill out the application form on our Apply page. It takes around 5 to 10 minutes. Tell us where you are, what your goals are, and what has been holding you back. We review it personally and will be in touch within 48–72 hours.",
      },
      {
        q: 'What happens after I apply?',
        a: "If we see a potential fit, we invite you to a private assessment call. This is a no-pressure conversation — we want to understand your situation before anyone commits. If we move forward, we begin building your strategy.",
      },
      {
        q: 'How quickly can I get started?',
        a: "Once your application is reviewed, we aim to respond within 48–72 hours. If we move to an assessment call and decide to partner, we can typically begin within one to two weeks.",
      },
      {
        q: 'What does the onboarding process look like?',
        a: "After your assessment call, we conduct a full audit of your profile, analytics, content, and monetisation. From there, we build your custom 90-day roadmap. The entire onboarding phase typically takes one to two weeks before active management begins.",
      },
    ],
  },
  {
    category: 'The Partnership',
    questions: [
      {
        q: "What does working with Noir actually look like day-to-day?",
        a: "You continue creating. We handle strategy, messaging operations, posting cadence, and ongoing optimisation. Depending on your tier, this includes regular check-in calls, performance reviews, content direction, and monetisation management. You are supported, not micromanaged.",
      },
      {
        q: 'How often will I communicate with my account manager?',
        a: "During onboarding, we speak several times a week while we build your systems and roadmap. Once active management begins, your dedicated strategist will hold a weekly check-in with you every Monday and a full strategic review on the last Friday of each month. Outside of scheduled calls, your strategist is reachable through your private channel for anything time-sensitive.",
      },
      {
        q: "Do I have to change everything I'm doing?",
        a: "Not necessarily. We audit what is working and what is not. Some creators need significant changes; others need refinement. We build around your strengths, not against them.",
      },
      {
        q: 'How long are the partnerships?',
        a: "We work on a rolling basis with a minimum 90-day commitment — the time it takes for the systems we build to compound. Most of our creators stay for 6–12+ months because the relationship keeps delivering. There is a 30-day exit either way after month three.",
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-white/5 last:border-b last:border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-6 text-left gap-6 group"
      >
        <span
          className="text-white text-base leading-snug group-hover:text-[#C6A15B] transition-colors duration-200"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {q}
        </span>
        <span
          className="text-[#C6A15B] text-xl shrink-0 mt-0.5 transition-transform duration-300 leading-none"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '600px' : '0' }}
      >
        <p className="text-[#A1A1A1] text-sm leading-relaxed pb-6 pr-10">{a}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">FAQ</span>
          <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
          <h1
            className="text-5xl md:text-6xl text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Questions answered.
          </h1>
          <p className="text-[#A1A1A1] text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know before applying. If your question is not here,
            email us directly and we will answer in a business day.
          </p>
        </div>
      </section>

      <section className="bg-[#0A0A0A] pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {faqs.map((section, i) => (
            <div key={i} className="mb-16 last:mb-0">
              <p className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase mb-8">
                {section.category}
              </p>
              <div>
                {section.questions.map((faq, j) => (
                  <FAQItem key={j} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 p-8 bg-[#121212] border border-white/5 text-center">
            <p
              className="text-white text-xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Still have a question?
            </p>
            <p className="text-[#A1A1A1] text-sm mb-8">
              Reach out directly. We are happy to answer anything before you apply.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/apply"
                className="w-full sm:w-auto px-6 py-3 border border-[#C6A15B] text-[#C6A15B] text-sm tracking-widest uppercase hover:bg-[#C6A15B] hover:text-black transition-all duration-300"
              >
                Apply Now
              </Link>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 border border-white/10 text-[#A1A1A1] text-sm tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300"
              >
                DM on Instagram
              </a>
              <a
                href={CONTACT_EMAIL_HREF}
                className="w-full sm:w-auto px-6 py-3 border border-white/10 text-[#A1A1A1] text-sm tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
