"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { benefits } from "../data"

export function BenefitsSection() {
  const benefitsRef = useRef<HTMLDivElement>(null)
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })

  return (
    <section ref={benefitsRef} className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Teams Choose Proddy</h2>
          <p className="text-gray-400 text-lg">Experience the benefits of a truly unified productivity platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: benefitsInView ? index * 0.1 : 0,
              }}
              className="flex p-6 rounded-xl bg-gray-900/50 border border-gray-800"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600">
                  <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
            >
              Start Your Free Trial
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
