"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { pageTransition } from "@/lib/animations"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageTransition}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}
