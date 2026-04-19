'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const INSTAGRAM_URL = 'https://www.instagram.com/jbls_media/'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/results', label: 'Results' },
  { href: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group flex flex-col leading-none">
            <span
              className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Noir
            </span>
            <span
              className="text-white text-lg tracking-[0.15em] uppercase font-medium"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Talent Co.
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#A1A1A1] hover:text-white text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1A1] hover:text-[#C6A15B] text-sm tracking-wide transition-colors duration-200"
            >
              Instagram
            </a>
            <Link
              href="/apply"
              className="px-5 py-2.5 border border-[#C6A15B] text-[#C6A15B] text-sm tracking-widest uppercase hover:bg-[#C6A15B] hover:text-black transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-[#0A0A0A] border-t border-white/5 overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#A1A1A1] hover:text-white text-base tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1A1] hover:text-[#C6A15B] text-sm tracking-wide transition-colors"
            >
              Instagram
            </a>
            <Link
              href="/apply"
              onClick={() => setMenuOpen(false)}
              className="inline-block px-5 py-3 border border-[#C6A15B] text-[#C6A15B] text-sm tracking-widest uppercase text-center hover:bg-[#C6A15B] hover:text-black transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
