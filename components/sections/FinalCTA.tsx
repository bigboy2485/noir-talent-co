import Link from 'next/link'
import { INSTAGRAM_URL } from '@/lib/constants'

export default function FinalCTA() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C6A15B]/5 blur-[100px] rounded-full" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/15 to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
          Ready?
        </span>
        <span className="block w-8 h-px bg-[#C6A15B] mx-auto my-5" />
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your next level starts
          <br />
          <em className="text-[#C6A15B] not-italic">with one step.</em>
        </h2>
        <p className="text-[#A1A1A1] text-lg leading-relaxed mb-12 font-light">
          Apply now or message us directly on Instagram. Applications are reviewed personally and
          spaces are limited.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/apply"
            className="w-full sm:w-auto px-8 py-4 bg-[#C6A15B] text-black text-sm tracking-widest uppercase font-medium hover:bg-[#D4B47A] transition-all duration-300 active:scale-[0.98]"
          >
            Apply Now
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white text-sm tracking-widest uppercase font-light hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all duration-300"
          >
            DM on Instagram
          </a>
        </div>
        <p className="mt-8 text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
          Private · Selective · Strategic
        </p>
      </div>
    </section>
  )
}
