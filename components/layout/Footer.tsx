import Link from 'next/link'

const INSTAGRAM_URL = 'https://www.instagram.com/jbls_media/'

const footerLinks = {
  company: [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/results', label: 'Results' },
    { href: '/faq', label: 'FAQ' },
  ],
  legal: [
    { href: '/apply', label: 'Apply' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span
                className="block text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Noir
              </span>
              <span
                className="block text-white text-xl tracking-[0.15em] uppercase"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Talent Co.
              </span>
            </div>
            <p className="text-[#A1A1A1] text-sm leading-relaxed max-w-xs">
              Private creator management agency. We partner with serious creators to build
              sustainable, scalable careers.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#A1A1A1] hover:text-[#C6A15B] text-sm tracking-wide transition-colors duration-200 group w-fit"
              >
                <span className="w-8 h-px bg-[#A1A1A1] group-hover:bg-[#C6A15B] transition-colors" />
                Instagram
              </a>
              <a
                href="mailto:NoirTalentCo@proton.me"
                className="flex items-center gap-2 text-[#A1A1A1] hover:text-[#C6A15B] text-sm tracking-wide transition-colors duration-200 group w-fit"
              >
                <span className="w-8 h-px bg-[#A1A1A1] group-hover:bg-[#C6A15B] transition-colors" />
                NoirTalentCo@proton.me
              </a>
            </div>
          </div>

          <div>
            <p className="text-[#C6A15B] text-xs tracking-[0.2em] uppercase mb-6">Company</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#A1A1A1] hover:text-white text-sm tracking-wide transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#C6A15B] text-xs tracking-[0.2em] uppercase mb-6">Get Started</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#A1A1A1] hover:text-white text-sm tracking-wide transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/apply"
                className="inline-block px-5 py-3 border border-[#C6A15B] text-[#C6A15B] text-xs tracking-widest uppercase hover:bg-[#C6A15B] hover:text-black transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A1A1A1] text-xs tracking-wide">
            © {new Date().getFullYear()} Noir Talent Co. All rights reserved.
          </p>
          <p className="text-[#A1A1A1] text-xs tracking-wide">
            Private. Selective. Strategic.
          </p>
        </div>
      </div>
    </footer>
  )
}
