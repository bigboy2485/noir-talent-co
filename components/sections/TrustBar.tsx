const stats = [
  { value: 'Private', label: 'Application Only' },
  { value: 'Strategic', label: 'Data-Driven Growth' },
  { value: 'Discreet', label: 'Full Confidentiality' },
  { value: 'Results', label: 'The Only Metric' },
]

export default function TrustBar() {
  return (
    <section className="bg-[#121212] border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <span
                className="text-[#C6A15B] text-2xl md:text-3xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </span>
              <span className="text-[#A1A1A1] text-xs tracking-[0.2em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
