import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import WhatWeDo from '@/components/sections/WhatWeDo'
import WhyUs from '@/components/sections/WhyUs'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import ResultsSection from '@/components/sections/ResultsSection'
import AboutPreview from '@/components/sections/AboutPreview'
import FAQPreview from '@/components/sections/FAQPreview'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhatWeDo />
      <WhyUs />
      <HowItWorksSection />
      <ResultsSection />
      <AboutPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  )
}
