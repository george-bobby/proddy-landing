"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/home/hero-section"
// WhatsNewSection removed as Input is no longer new
import { ProductsSection } from "@/components/home/products-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { AIFeaturesSection } from "@/components/home/ai-features-section"
import { WhyProddySection } from "@/components/home/why-proddy-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  // Initialize scroll reveal animation
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

  return (
    <div className="relative">
      {/* Unified global background with pattern */}
      <div className="fixed inset-0 bg-black pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 opacity-80"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}>
        </div>

        {/* Central glow */}
        <div className="absolute top-0 left-1/4 right-1/4 h-full bg-gradient-to-b from-indigo-900/20 via-violet-900/10 to-indigo-900/20 blur-3xl opacity-30"></div>

        {/* Accent glows */}
        <div className="absolute -top-1/4 right-1/4 w-1/2 h-1/2 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 right-1/3 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <AIFeaturesSection />
        <WhyProddySection />
        <CTASection />
      </div>
    </div>
  )
}
