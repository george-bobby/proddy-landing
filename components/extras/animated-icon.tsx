"use client"

import { motion } from "framer-motion"
import { iconHover } from "@/lib/animations"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  size?: number
  color?: string
  strokeWidth?: number
  hoverEffect?: boolean
}

export function AnimatedIcon({
  icon: Icon,
  className,
  size = 24,
  color,
  strokeWidth = 2,
  hoverEffect = true,
}: AnimatedIconProps) {
  return (
    <motion.div
      className={cn("inline-flex", className)}
      {...(hoverEffect && {
        initial: "rest",
        whileHover: "hover",
        variants: iconHover,
      })}
    >
      <Icon size={size} color={color} strokeWidth={strokeWidth} />
    </motion.div>
  )
}
