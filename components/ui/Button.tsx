import Link from 'next/link'

type ButtonProps = {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  external = false,
  children,
  className = '',
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center tracking-widest uppercase text-sm font-light transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]'

  const variants = {
    primary: 'bg-[#C6A15B] text-black hover:bg-[#D4B47A] active:scale-[0.98]',
    outline:
      'border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-black active:scale-[0.98]',
    ghost: 'text-[#A1A1A1] hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
