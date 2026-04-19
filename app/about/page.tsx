import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'About — Noir Talent Co.',
  description: 'A private, selective creator management agency built on strategy, discretion, and results.',
}

const values = [
  {
    title: 'Discretion',
    description:
      'Everything we do together remains private. Your identity, income, and strategy are protected at every level.',
  },
  {
    title: 'Strategy First',
    description:
      'We do not act on instinct. Every decision is informed by data, experience, and a clear understanding of where you want to go.',
  },
  {
    title: 'Long-Term Thinking',
    description:
      "We're not here for a short-term spike. We build careers — structures and systems that sustain growth over time.",
  },
  {
    title: 'Selective Partnership',
    description:
      'We work with a limited number of creators. This is by design. Quality of support matters more than volume of clients.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
            About
          </span>
          <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Private by design.
            <br />
            <em className="text-[#C6A15B] not-italic">Serious by nature.</em>
          </h1>
          <p className="text-[#A1A1A1] text-lg leading-relaxed max-w-2xl mx-auto">
            Noir Talent Co. is a private creator management agency. We exist to help serious
            creators build sustainable, profitable careers — with structure, strategy, and
            full discretion.
          </p>
        </div>
      </section>

      <section className="bg-[#121212] border-y border-white/5 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light block mb-5">
              Our Philosophy
            </span>
            <span className="block w-8 h-px bg-[#C6A15B] mb-6" />
            <h2
              className="text-3xl md:text-4xl text-white leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We treat your career like the business it is.
            </h2>
            <div className="flex flex-col gap-5 text-[#A1A1A1] text-base leading-relaxed">
              <p>
                Most creators operate without a real system. They post, they hope, they react. The
                ones who build lasting careers do something different — they treat what they do as a
                business, with strategy, structure, and intentionality.
              </p>
              <p>
                That is exactly what we bring to every partnership. We come in, assess where you
                are, understand where you want to go, and build the roadmap that gets you there.
              </p>
              <p>
                We are not a course. We are not a template. We are not a social media manager. We
                are a management partner — and that distinction matters.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 bg-[#0A0A0A] border border-white/5 hover:border-[#C6A15B]/20 transition-colors duration-300">
                <h3
                  className="text-[#C6A15B] text-lg mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-[#A1A1A1] text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
            Why Creators Choose Noir
          </span>
          <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
          <h2
            className="text-3xl md:text-4xl text-white leading-tight mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Because results matter more than promises.
          </h2>
          <div className="flex flex-col gap-6 text-left">
            {[
              'Creators come to us when they are serious about growth and tired of doing it alone.',
              'They come when they have tried everything and still feel stuck.',
              'They come when they want a real partner — not just advice, but execution.',
              'And they stay because the results speak for themselves.',
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-[#C6A15B] text-xs mt-1.5">◈</span>
                <p className="text-[#A1A1A1] text-base leading-relaxed">{line}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/apply"
              className="inline-block px-8 py-4 bg-[#C6A15B] text-black text-sm tracking-widest uppercase font-medium hover:bg-[#D4B47A] transition-all duration-300"
            >
              Apply to Work With Us
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
