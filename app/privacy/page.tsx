import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Noir Talent Co.',
}

export default function PrivacyPage() {
  return (
    <section className="pt-40 pb-32 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">Legal</span>
        <span className="block w-8 h-px bg-[#C6A15B] my-5" />
        <h1
          className="text-4xl md:text-5xl text-white leading-tight mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Privacy Policy
        </h1>

        <div className="flex flex-col gap-10 text-[#A1A1A1] text-sm leading-relaxed">
          <div>
            <p className="text-[#A1A1A1]/60 text-xs mb-6">Last updated: {new Date().getFullYear()}</p>
            <p>
              Noir Talent Co. (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, and protect
              your personal information when you interact with our website or services.
            </p>
          </div>

          {[
            {
              title: '1. Information We Collect',
              content:
                'We collect information you provide directly, including your name, email address, Instagram handle, and any other details you submit through our application form or contact forms. We may also collect technical information such as browser type, IP address, and pages visited through standard web analytics.',
            },
            {
              title: '2. How We Use Your Information',
              content:
                'We use the information collected to review your application, communicate with you about our services, and manage our business relationship. We do not sell, rent, or trade your personal information to third parties.',
            },
            {
              title: '3. Confidentiality',
              content:
                'We treat all client and applicant information with strict confidentiality. Your identity, financial information, and any details shared during the application or management process will not be disclosed to any third parties without your explicit consent.',
            },
            {
              title: '4. Data Security',
              content:
                'We take reasonable measures to protect your personal information from unauthorised access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.',
            },
            {
              title: '5. Cookies',
              content:
                'Our website may use cookies and similar technologies to improve user experience and analyse site traffic. You can control cookie settings through your browser.',
            },
            {
              title: '6. Third-Party Services',
              content:
                'We may use trusted third-party services (such as email providers or analytics platforms) to operate our business. These providers are bound by their own privacy policies and are only given access to information necessary to perform their functions.',
            },
            {
              title: '7. Your Rights',
              content:
                'You have the right to access, correct, or request deletion of your personal information at any time. To exercise these rights, please contact us via our website.',
            },
            {
              title: '8. Changes to This Policy',
              content:
                'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.',
            },
            {
              title: '9. Contact',
              content:
                'If you have any questions about this Privacy Policy or how we handle your data, please contact us through the Apply page or via Instagram.',
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
