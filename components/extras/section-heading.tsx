"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "./scroll-reveal"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  subtitleClassName?: string
  gradient?: string
  delay?: number
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  subtitleClassName,
  gradient = "from-white to-gray-400",
  delay = 0,
}: SectionHeadingProps) {
  return (
    <ScrollReveal delay={delay} className={cn("mb-12", centered && "text-center", className)}>
      <h2 className={cn(
        "text-3xl md:text-5xl font-bold mb-4",
        `bg-gradient-to-r ${gradient} bg-clip-text text-transparent animate-fade-in`
      )}>
        {title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: delay + i * 0.1,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className={cn("text-lg md:text-xl text-gray-400 max-w-3xl", centered && "mx-auto", subtitleClassName)}
        >
          {subtitle}
        </motion.p>
      )}
    </ScrollReveal>
  )
}
