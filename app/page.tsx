import Hero from '@/components/sections/Hero'
import WhatWeDo from '@/components/sections/WhatWeDo'
import AboutPreview from '@/components/sections/AboutPreview'
import CaseStudiesPreview from '@/components/sections/CaseStudiesPreview'
import FAQPreview from '@/components/sections/FAQPreview'
import FinalCTA from '@/components/sections/FinalCTA'

// Homepage section order mirrors a mature agency-site flow:
//   Hero -> Services grid -> About strip -> Case studies preview -> FAQ -> Final CTA
//
// Sections intentionally omitted (no data to populate honestly yet):
//   - Press-logo carousel (awaiting media mentions / tool partnerships)
//   - Stats counters (no real portfolio metrics yet)
//   - Testimonials slider (no creator results on file yet)
// See docs/SITE_POLISH_NOTES.md for the reasoning.
export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <AboutPreview />
      <CaseStudiesPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  )
}
