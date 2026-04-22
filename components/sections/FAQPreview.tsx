'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    q: 'How much do I pay upfront?',
    a: "Nothing. We do not charge upfront fees, retainers, or setup costs. We operate on a pure revenue-share model — we only earn when you earn.",
  },
  {
    q: 'Is everything confidential?',
    a: "Completely. Your identity, income, and the existence of our partnership remain private. A signed confidentiality agreement is in place before any account access is shared.",
  },
  {
    q: 'Do you accept everyone who applies?',
    a: "No. We are selective. Every application is reviewed personally and we only partner with creators where we see a strong fit and genuine potential.",
  },
  {
    q: 'How quickly can I get started?',
    a: "Once your application is reviewed, we aim to respond within 48–72 hours. If we move forward, an assessment call is scheduled and we can begin from there.",
  },
]

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-[#121212] py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">FAQ</span>
          <span className="block w-8 h-px bg-[#C6A15B] mx-auto mt-4 mb-6" />
          <h2
            className="text-3xl md:text-4xl text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Common questions.
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-t border-white/5 last:border-b last:border-white/5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left gap-4 group"
              >
                <span
                  className="text-white text-base group-hover:text-[#C6A15B] transition-colors duration-200"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {faq.q}
                </span>
                <span className="text-[#C6A15B] text-xl shrink-0 transition-transform duration-300 leading-none" style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0' }}
              >
                <p className="text-[#A1A1A1] text-sm leading-relaxed pb-6">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-3 text-[#C6A15B] text-sm tracking-widest uppercase group"
          >
            View All Questions
            <span className="block w-8 h-px bg-[#C6A15B] group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
