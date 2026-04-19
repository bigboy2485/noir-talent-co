'use client'

import { useState } from 'react'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'

const INSTAGRAM_URL = 'https://www.instagram.com/jbls_media/'

const faqs = [
  {
    category: 'Eligibility',
    questions: [
      {
        q: 'Who is this for?',
        a: "Noir Talent Co. works with female creators who are serious about growing their career on OnlyFans. Whether you are just starting out or already earning and want to scale — if you are committed, coachable, and ready to treat your career like a business, we want to hear from you.",
      },
      {
        q: 'Do I need experience to apply?',
        a: "No. We work with both aspiring creators who haven't launched yet and experienced creators who are looking to scale. What matters more than your current level is your mindset, your commitment, and your goals.",
      },
      {
        q: 'Do you accept everyone who applies?',
        a: "No. We are selective and work with a limited number of creators at any given time. Every application is reviewed personally and we only move forward where we see genuine potential and a strong fit. If we don't think we can deliver value for you, we will be honest about that.",
      },
      {
        q: 'What kind of creators do you work best with?',
        a: "Creators who are serious, consistent, and ready to follow through on a strategy. We work best with people who are coachable and open to direction — not those who want validation for doing things the same way they always have.",
      },
    ],
  },
  {
    category: 'Privacy & Discretion',
    questions: [
      {
        q: 'Is everything confidential?',
        a: 'Completely. We operate with full discretion at every stage. Your identity, income figures, content, and our working relationship remain private. We do not share client information with third parties, we do not disclose who we work with, and we do not use your details for marketing without explicit permission.',
      },
      {
        q: 'How do you handle sensitive information?',
        a: 'All information shared with us — via application, calls, or ongoing partnership — is treated as strictly confidential. We have clear agreements in place to protect both parties.',
      },
    ],
  },
  {
    category: 'The Process',
    questions: [
      {
        q: 'How do I apply?',
        a: 'Fill out the application form on our Apply page. It takes around 5–10 minutes. Tell us about where you are now, your goals, and what has been holding you back. We will review it personally and be in touch within 48–72 hours.',
      },
      {
        q: 'What happens after I apply?',
        a: "If we see a potential fit, we'll invite you to a private assessment call. This is a no-pressure conversation — we want to understand your situation in full before making any decisions. If we move forward, we begin building your strategy.",
      },
      {
        q: 'How quickly can I get started?',
        a: "Once your application is submitted, we aim to respond within 48–72 hours. If we move to an assessment call and decide to partner, we can typically begin within 1–2 weeks.",
      },
      {
        q: 'What does the onboarding process look like?',
        a: 'After your assessment call, we conduct a full audit of your profile, analytics, content, and monetisation. From there we build your custom strategy. The entire onboarding phase typically takes 1–2 weeks before active management begins.',
      },
    ],
  },
  {
    category: 'The Partnership',
    questions: [
      {
        q: 'What does working with Noir actually look like day-to-day?',
        a: "You continue creating. We handle strategy, systems, and ongoing optimisation. Depending on your tier, this includes regular check-in calls, performance reviews, content direction, monetisation management, and more. You are supported — not micromanaged.",
      },
      {
        q: 'Do I have to change everything I am doing?',
        a: "Not necessarily. We audit what is working and what is not. Some creators need significant changes; others need refinement and optimisation. We build around your strengths, not against them.",
      },
      {
        q: 'How long are the partnerships?',
        a: "We work on a rolling basis. There are no rigid long-term contracts — but growth takes time and we ask for a minimum commitment to see results. Most of our creators stay for 6–12+ months because the relationship delivers consistent value.",
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
        style={{ maxHeight: open ? '400px' : '0' }}
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
            reach out via the contact form or Instagram.
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
                href="mailto:NoirTalentCo@proton.me"
                className="w-full sm:w-auto px-6 py-3 border border-white/10 text-[#A1A1A1] text-sm tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
