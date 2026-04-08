"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  scale?: number
  blur?: number
  once?: boolean
  className?: string
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 60,
  scale = 0.96,
  blur = 8,
  once = true,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        scale,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
