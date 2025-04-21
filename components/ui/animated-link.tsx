"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedLinkProps {
  href: string
  children: ReactNode
  className?: string
  underlineHeight?: number
  underlineColor?: string
  activeClassName?: string
  isActive?: boolean
}

export function AnimatedLink({
  href,
  children,
  className,
  underlineHeight = 2,
  underlineColor = "bg-indigo-500",
  activeClassName,
  isActive = false,
}: AnimatedLinkProps) {
  return (
    <Link href={href} className={cn("relative group", className, isActive && activeClassName)}>
      {children}
      <motion.div
        className={cn("absolute bottom-0 left-0 right-0", underlineColor)}
        style={{ height: `${underlineHeight}px` }}
        initial={{ width: isActive ? "100%" : "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </Link>
  )
}
