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
    <>
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <AIFeaturesSection />
      <WhyProddySection />
      <CTASection />
    </>
  )
}
