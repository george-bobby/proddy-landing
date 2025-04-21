"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

interface ScrollProgressProps {
  height?: number
  color?: string
  gradient?: boolean
  shadow?: boolean
  position?: "top" | "bottom"
  showPercentage?: boolean
}

export function ScrollProgress({
  height = 4,
  color = "bg-indigo-600",
  gradient = true,
  shadow = true,
  position = "top",
  showPercentage = false,
}: ScrollProgressProps) {
  // Track scroll progress for the entire document
  const { scrollYProgress } = useScroll()

  // Transform scrollYProgress (0 to 1) to a percentage width (0% to 100%)
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // For the percentage display
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    // Update percentage for display
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollPercentage(Math.round(latest * 100))
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 z-[100] overflow-hidden"
        style={{
          top: position === "top" ? 0 : "auto",
          bottom: position === "bottom" ? 0 : "auto",
          height: `${height}px`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Background track with subtle pattern */}
        <div className="absolute inset-0 bg-gray-800/50">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(90deg, transparent, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05))`,
              backgroundSize: '4px 100%'
            }}
          />
        </div>

        {/* Progress bar */}
        <motion.div
          className={`absolute top-0 left-0 bottom-0 origin-left ${shadow ? "shadow-lg" : ""} ${gradient ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500" : color}`}
          style={{ width: progressWidth }}
          initial={{ width: "0%" }}
          transition={{ ease: "easeOut" }}
        >
          {/* Animated glow effect */}
          <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white/30 to-transparent animate-pulse" />

          {/* Leading edge highlight */}
          <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/50" />
        </motion.div>
      </motion.div>

      {showPercentage && (
        <motion.div
          className={`fixed ${position === "top" ? "top-2" : "bottom-2"} right-2 z-50 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-full border border-gray-700/50 backdrop-blur-sm`}
          initial={{ opacity: 0, y: position === "top" ? -10 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {scrollPercentage}%
        </motion.div>
      )}
    </>
  )
}
