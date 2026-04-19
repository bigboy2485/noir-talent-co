import Link from 'next/link'

const INSTAGRAM_URL = 'https://www.instagram.com/jbls_media/'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C6A15B]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A15B]/20 to-transparent" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.4) 80px, rgba(255,255,255,0.4) 81px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="block w-12 h-px bg-[#C6A15B]/60" />
          <span className="text-[#C6A15B] text-xs tracking-[0.4em] uppercase font-light">
            Private Creator Management
          </span>
          <span className="block w-12 h-px bg-[#C6A15B]/60" />
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Built for creators
          <br />
          <em className="text-[#C6A15B] not-italic">ready to scale.</em>
        </h1>

        <p className="text-[#A1A1A1] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light">
          Strategic management for creators who want structure, growth, and real results —
          without the guesswork.
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

        <div className="mt-20 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C6A15B]" />
          <span className="text-[10px] text-[#A1A1A1] tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}
