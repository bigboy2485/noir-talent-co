import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Noir Talent Co.',
}

export default function TermsPage() {
  return (
    <section className="pt-40 pb-32 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">Legal</span>
        <span className="block w-8 h-px bg-[#C6A15B] my-5" />
        <h1
          className="text-4xl md:text-5xl text-white leading-tight mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Terms of Service
        </h1>

        <div className="flex flex-col gap-10 text-[#A1A1A1] text-sm leading-relaxed">
          <div>
            <p className="text-[#A1A1A1]/60 text-xs mb-6">Last updated: {new Date().getFullYear()}</p>
            <p>
              These Terms of Service govern your use of the Noir Talent Co. website and
              any services we provide. By accessing our website or submitting an application,
              you agree to these terms.
            </p>
          </div>

          {[
            {
              title: '1. Services',
              content:
                'Noir Talent Co. provides creator management consultancy and strategy services. The scope, terms, and conditions of any active management partnership are governed by separate agreements entered into between Noir Talent Co. and individual clients.',
            },
            {
              title: '2. Website Use',
              content:
                'This website is intended for use by adult creators and individuals interested in creator management services. You may not use this website for any unlawful purpose. The content on this website is for informational purposes only.',
            },
            {
              title: '3. Application Process',
              content:
                'Submitting an application does not create any obligation or guarantee of partnership. We review all applications at our sole discretion and reserve the right to decline any application without providing a reason.',
            },
            {
              title: '4. Intellectual Property',
              content:
                'All content on this website, including text, design, graphics, and branding, is the property of Noir Talent Co. and may not be reproduced, distributed, or used without express written permission.',
            },
            {
              title: '5. Confidentiality',
              content:
                'Any information shared through the application process or during a client relationship is treated as confidential by both parties. We expect the same discretion from applicants and clients regarding the nature of our partnership.',
            },
            {
              title: '6. Limitation of Liability',
              content:
                'Noir Talent Co. makes no guarantees of specific income outcomes or results. Results referenced on this website represent the experiences of individual clients and are not guaranteed. We will not be liable for any indirect, incidental, or consequential damages arising from the use of our services.',
            },
            {
              title: '7. Testimonials & Results',
              content:
                "Testimonials published on this website are from real clients and are shared with permission. They are representative of individual experiences and are not a guarantee of results. Individual outcomes will vary based on many factors outside of our control.",
            },
            {
              title: '8. Changes to Terms',
              content:
                'We reserve the right to update these Terms of Service at any time. Continued use of the website following changes constitutes acceptance of the updated terms.',
            },
            {
              title: '9. Governing Law',
              content:
                'These terms are governed by applicable law. Any disputes will be resolved through appropriate legal channels.',
            },
            {
              title: '10. Contact',
              content:
                'For questions about these terms, please contact us via our Apply page or through Instagram.',
            },
          ].map((section, i) => (
            <div key={i}>
              <h2
                className="text-white text-lg mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {section.title}
              </h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
