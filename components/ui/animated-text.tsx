"use client"

import { motion } from "framer-motion"
import { staggeredText, textCharacter } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  once = true,
  tag = "p",
}: AnimatedTextProps) {
  // Split the text into words and then characters
  const words = text.split(" ")
  
  // Create a component based on the tag prop
  const Component = motion[tag] as any

  return (
    <Component
      className={cn("flex flex-wrap", className)}
      variants={staggeredText(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="mr-1.5 inline-block">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={textCharacter}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Component>
  )
}
