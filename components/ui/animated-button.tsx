"use client"

import { motion } from "framer-motion"
import { buttonHover } from "@/lib/animations"
import { Button, ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  className?: string
  withRipple?: boolean
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, withRipple = false, ...props }, ref) => {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={buttonHover}
        className="relative"
      >
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden transition-all duration-300",
            withRipple && "group",
            className
          )}
          {...props}
        >
          {children}
          {withRipple && (
            <span className="absolute inset-0 pointer-events-none">
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-10 bg-white/20 transition-opacity duration-300"></span>
              <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 group-hover:h-[300%] group-hover:w-[300%] group-active:opacity-0 transition-all duration-500"></span>
            </span>
          )}
        </Button>
      </motion.div>
    )
  }
)
