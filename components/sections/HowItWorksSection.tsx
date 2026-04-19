import SectionHeader from '@/components/ui/SectionHeader'
import Link from 'next/link'

const steps = [
  {
    step: '01',
    title: 'Apply',
    description:
      'Submit your application. We review every submission personally — no automated filters, no generic responses.',
  },
  {
    step: '02',
    title: 'Assessment',
    description:
      'If there is potential for a partnership, we schedule a private assessment call to understand your goals, challenges, and where you are right now.',
  },
  {
    step: '03',
    title: 'Strategy',
    description:
      'We build your custom growth strategy — content direction, monetisation plan, engagement systems, and a clear roadmap.',
  },
  {
    step: '04',
    title: 'Scale',
    description:
      'We execute alongside you. Ongoing support, weekly reviews, and continuous optimisation as your career grows.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="From application to growth."
          subtitle="A simple, private process designed to be as frictionless as possible."
        />

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#C6A15B]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center lg:px-4">
                <div className="relative z-10 w-16 h-16 rounded-full border border-[#C6A15B]/40 bg-[#0A0A0A] flex items-center justify-center mb-6">
                  <span
                    className="text-[#C6A15B] text-sm"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.step}
                  </span>
                </div>
                <h3
                  className="text-white text-xl mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#A1A1A1] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/apply"
            className="px-8 py-4 border border-[#C6A15B] text-[#C6A15B] text-sm tracking-widest uppercase hover:bg-[#C6A15B] hover:text-black transition-all duration-300"
          >
            Start Your Application
          </Link>
        </div>
      </div>
    </section>
  )
}
