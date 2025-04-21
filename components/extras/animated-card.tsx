"use client"

import { motion } from "framer-motion"
import { cardHover, fadeIn } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  hoverEffect?: boolean
  once?: boolean
}

export function AnimatedCard({
  children,
  className,
  direction = "up",
  delay = 0,
  hoverEffect = true,
  once = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      {...(hoverEffect && {
        whileHover: "hover",
        initial: "rest",
        animate: "rest",
        variants: cardHover,
      })}
    >
      {children}
    </motion.div>
  )
}
