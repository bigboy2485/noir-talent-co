import SectionHeader from '@/components/ui/SectionHeader'

const services = [
  {
    icon: '◈',
    title: 'Growth Strategy',
    description:
      'Tailored roadmaps built around your audience, platform data, and long-term goals. No guesswork — only execution.',
  },
  {
    icon: '◉',
    title: 'Content Planning',
    description:
      'A structured content framework that keeps your audience engaged, your calendar full, and your brand consistent.',
  },
  {
    icon: '◇',
    title: 'Monetisation Systems',
    description:
      'We optimise every revenue stream — subscriptions, PPV, messaging, custom offers — so nothing is left on the table.',
  },
  {
    icon: '◈',
    title: 'Fan Engagement',
    description:
      'Retention and engagement systems designed to deepen loyalty, increase LTV, and reduce churn.',
  },
  {
    icon: '◉',
    title: 'Brand Direction',
    description:
      'Your image, tone, and positioning — refined, elevated, and protected. We build brands that command premium.',
  },
  {
    icon: '◇',
    title: 'Scaling Support',
    description:
      'As you grow, so does the complexity. We manage the operations so you can stay focused on creating.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title="Every system you need to grow."
          subtitle="We handle the strategy, structure, and execution — you focus on creating."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#0A0A0A] p-8 lg:p-10 group hover:bg-[#121212] transition-colors duration-300"
            >
              <span className="block text-[#C6A15B] text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </span>
              <h3
                className="text-white text-xl mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h3>
              <p className="text-[#A1A1A1] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
