'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Delay before the reveal begins (seconds). Use for stagger. */
  delay?: number
  /** Distance (px) the element rises from. */
  y?: number
  className?: string
}

/**
 * Premium-subtle scroll reveal: content fades and rises gently as it enters
 * the viewport, once. Respects prefers-reduced-motion (renders static).
 */
export default function Reveal({ children, delay = 0, y = 22, className }: RevealProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
