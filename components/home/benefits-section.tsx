"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/extras/animated-button"
import { AnimatedCard } from "@/components/extras/animated-card"
import { AnimatedIcon } from "@/components/extras/animated-icon"
import { SectionHeading } from "@/components/extras/section-heading"
import { ScrollReveal } from "@/components/extras/scroll-reveal"
import { staggerContainer } from "@/lib/animations"
import { benefits } from "../data"

export function BenefitsSection() {
  const benefitsRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={benefitsRef} className="py-24 relative overflow-hidden">
      {/* Using global background - no local background elements */}

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Why Teams Choose Proddy"
          subtitle="Experience the benefits of a truly unified productivity platform."
          gradient="from-white via-gray-300 to-gray-400"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit: any, index: number) => (
            <AnimatedCard
              key={benefit.title}
              delay={0.1 * index}
              direction={index % 2 === 0 ? "left" : "right"}
              hoverEffect={true}
            >
              <div className="flex p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/50 shadow-lg h-full group relative overflow-hidden">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/0 to-violet-900/0 group-hover:from-indigo-900/10 group-hover:to-violet-900/5 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100"></div>

                <div className="flex-shrink-0 mr-5 relative z-10">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <AnimatedIcon icon={benefit.icon} className="h-6 w-6 text-white" hoverEffect={false} />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{benefit.description}</p>
                </div>

                {/* Animated corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/20 group-hover:to-transparent transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 rounded-tl-3xl"></div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <AnimatedButton
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
              withRipple
            >
              Start Your Free Trial
            </AnimatedButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
