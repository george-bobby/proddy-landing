"use client"

import { motion, Variants } from "framer-motion"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { revealOnScroll } from "@/lib/animations"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
  threshold?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollReveal({
  children,
  className,
  variants = revealOnScroll,
  delay = 0,
  once = true,
  threshold = 0.1,
  direction,
}: ScrollRevealProps) {
  // Apply direction-based variants if specified
  const finalVariants = direction
    ? {
        hidden: {
          opacity: 0,
          x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
          y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            delay,
          },
        },
      }
    : variants

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={finalVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
