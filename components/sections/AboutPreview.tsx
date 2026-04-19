import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative hidden lg:block">
            <div className="aspect-square bg-[#121212] border border-white/5 flex items-center justify-center">
              <div className="text-center px-12">
                <span
                  className="block text-[#C6A15B] text-7xl leading-none mb-6 opacity-20"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  N
                </span>
                <span className="block w-12 h-px bg-[#C6A15B]/40 mx-auto mb-6" />
                <p className="text-[#A1A1A1] text-sm tracking-[0.3em] uppercase">
                  Noir Talent Co.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-[#C6A15B]/30" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[#C6A15B]/30" />
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
              About Noir
            </span>
            <span className="block w-8 h-px bg-[#C6A15B]" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Selective by design.
            </h2>
            <p className="text-[#A1A1A1] text-base leading-relaxed">
              Noir Talent Co. is a private management agency. We don&apos;t work with everyone —
              and that&apos;s intentional. We partner with a small number of creators at a time to
              ensure every client receives focused, high-quality attention.
            </p>
            <p className="text-[#A1A1A1] text-base leading-relaxed">
              Our approach is strategic, data-informed, and built for the long term. We don&apos;t
              offer quick fixes or empty promises. We build real systems and deliver real results.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[#C6A15B] text-sm tracking-widest uppercase group"
              >
                Learn More
                <span className="block w-8 h-px bg-[#C6A15B] group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
