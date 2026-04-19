type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  titleClass?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  titleClass = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase font-light">
          {eyebrow}
        </span>
      )}
      <span className="block w-8 h-px bg-[#C6A15B]" />
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl text-white leading-tight ${titleClass}`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#A1A1A1] text-base md:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
