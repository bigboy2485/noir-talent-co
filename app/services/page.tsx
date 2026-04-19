import type { Metadata } from 'next'
import Link from 'next/link'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Services — Noir Talent Co.',
  description: 'Full-service creator management including growth strategy, content direction, monetisation, and brand development.',
}

const services = [
  {
    number: '01',
    title: 'Growth Strategy',
    subtitle: 'Direction over guesswork.',
    description:
      'We analyse your current position — platform data, audience behaviour, content performance, and revenue streams — and build a custom growth roadmap. Every strategy is specific to you, your niche, and your goals.',
    points: [
      'Platform analytics review',
      'Audience profiling',
      'Revenue stream audit',
      'Custom 90-day roadmap',
      'Monthly strategy reviews',
    ],
  },
  {
    number: '02',
    title: 'Profile Optimisation',
    subtitle: 'First impressions convert.',
    description:
      'Your profile is your shop front. We audit every element — bio, pricing, pinned content, messaging, and subscription funnel — and optimise for conversion. Small changes here create significant income shifts.',
    points: [
      'Bio and positioning audit',
      'Pricing structure review',
      'Subscription funnel optimisation',
      'Welcome message systems',
      'Profile conversion testing',
    ],
  },
  {
    number: '03',
    title: 'Content Direction',
    subtitle: 'Structure behind the creativity.',
    description:
      'A content calendar that works with your schedule, not against it. We build a strategic content framework that keeps your audience engaged, your posting consistent, and your brand identity strong.',
    points: [
      'Monthly content calendars',
      'Content category framework',
      'Posting schedule optimisation',
      'Batch content strategy',
      'Performance review and iteration',
    ],
  },
  {
    number: '04',
    title: 'Monetisation Systems',
    subtitle: 'Every revenue stream, maximised.',
    description:
      'Most creators undermonetise. We audit your full revenue potential across subscriptions, PPV, messages, custom content, and more — then build systems to capture it. Income growth without working more hours.',
    points: [
      'Revenue stream audit',
      'PPV strategy and pricing',
      'Custom content systems',
      'Upsell and cross-sell frameworks',
      'Long-term subscriber retention',
    ],
  },
  {
    number: '05',
    title: 'Fan Engagement',
    subtitle: 'Loyalty compounds over time.',
    description:
      'The difference between a one-month subscriber and a long-term fan is engagement. We build systems that deepen connection, increase lifetime value, and reduce churn — all without consuming your time.',
    points: [
      'Messaging frameworks',
      'Engagement automation strategy',
      'Fan tier and loyalty systems',
      'Renewal and win-back systems',
      'High-value subscriber identification',
    ],
  },
  {
    number: '06',
    title: 'Brand Development',
    subtitle: 'Premium positioning attracts premium subscribers.',
    description:
      'Your brand is more than an aesthetic. It is the feeling, the promise, and the expectation you set with every piece of content. We help you define, refine, and consistently deliver a brand that commands premium.',
    points: [
      'Brand identity and positioning',
      'Tone of voice development',
      'Visual identity direction',
      'Cross-platform consistency',
      'Brand protection strategy',
    ],
  },
  {
    number: '07',
    title: 'Scaling Support',
    subtitle: 'Growth managed, not overwhelming.',
    description:
      'As your income and audience grow, so does complexity. We manage the operational demands of a growing creator business — so you can scale without burning out or dropping the quality that got you here.',
    points: [
      'Growth milestone planning',
      'Operational systems design',
      'Team and collaboration management',
      'Platform diversification strategy',
      'Ongoing performance optimisation',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
            Services
          </span>
          <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
          <h1
            className="text-5xl md:text-6xl text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Everything you need
            <br />
            <em className="text-[#C6A15B] not-italic">to build and scale.</em>
          </h1>
          <p className="text-[#A1A1A1] text-lg leading-relaxed max-w-2xl mx-auto">
            A complete management service covering every dimension of your creator career.
            Strategy, systems, and support — all in one partnership.
          </p>
        </div>
      </section>

      <section className="bg-[#0A0A0A] pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-px bg-white/5">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-[#0A0A0A] hover:bg-[#121212] transition-colors duration-300"
              >
                <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-10 lg:gap-16">
                  <div>
                    <div className="flex items-start gap-5 mb-6">
                      <span
                        className="text-[#C6A15B]/40 text-sm pt-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h2
                          className="text-white text-2xl md:text-3xl leading-tight"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {service.title}
                        </h2>
                        <p className="text-[#C6A15B] text-sm mt-1">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-[#A1A1A1] text-sm leading-relaxed">{service.description}</p>
                  </div>

                  <div>
                    <p className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase mb-4">
                      Includes
                    </p>
                    <ul className="flex flex-col gap-3">
                      {service.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-[#C6A15B] text-xs mt-0.5">◈</span>
                          <span className="text-[#A1A1A1] text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121212] border-y border-white/5 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p
            className="text-[#C6A15B] text-3xl mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "We don&apos;t offer services. We build partnerships."
          </p>
          <Link
            href="/apply"
            className="inline-block px-8 py-4 border border-[#C6A15B] text-[#C6A15B] text-sm tracking-widest uppercase hover:bg-[#C6A15B] hover:text-black transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
