'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Route-level transition. Next.js re-mounts this on every navigation, so each
 * page fades and rises in gently. Respects prefers-reduced-motion.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()

  if (reduce) return <>{children}</>

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
