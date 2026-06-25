import type { Metadata } from 'next'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Application Received — Noir Talent Co.',
  description: 'Thank you for your application to Noir Talent Co.',
  robots: { index: false, follow: false },
}

export default function ThanksPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <span className="gold-line mx-auto mb-8" />
        <h1
          className="text-4xl sm:text-5xl text-white leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Application <em className="text-[#C6A15B] not-italic">received.</em>
        </h1>
        <p className="text-[#A1A1A1] text-lg leading-relaxed mb-10 font-light">
          Thank you for reaching out to Noir Talent Co. Every application is
          reviewed personally. If it&apos;s a fit, we&apos;ll be in touch
          directly — discreetly, and on your terms.
        </p>
        <Button href="/" variant="outline" size="md">
          Return home
        </Button>
      </div>
    </section>
  )
}
