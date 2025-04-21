"use client"

import { useEffect } from "react"

export function useScrollReveal() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-reveal")
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight
        if (rect.top < windowHeight * 0.85) {
          element.classList.add("revealed")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
}

export default useScrollReveal
