"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { AnimatedButton } from "@/components/extras/animated-button"
import { ScrollReveal } from "@/components/extras/scroll-reveal"
import { AnimatedText } from "@/components/extras/animated-text"
import { staggerContainer } from "@/lib/animations"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Using global background - no local background elements */}

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-2xl p-8 md:p-12 border border-gray-800/50 text-center backdrop-blur-sm shadow-2xl relative overflow-hidden">
            {/* Animated accent elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 animate-shimmer"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl animate-pulse"></div>

            <AnimatedText
              text="Ready to Transform Your Workflow?"
              className="text-3xl md:text-4xl font-bold mb-4 text-center self-center"
              tag="h2"
            />

            <ScrollReveal delay={0.1}>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in">
                Join the Proddy beta and experience the future of productivity today.
              </p>
            </ScrollReveal>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href="/signup">
                <AnimatedButton
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
                  withRipple
                >
                  Get Started for Free
                </AnimatedButton>
              </Link>
              <Link href="/demo">
                <AnimatedButton size="lg" variant="outline" withRipple>
                  Schedule a Demo
                </AnimatedButton>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-400">No credit card required. Free during beta.</p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-xs text-gray-500">Secure & Encrypted</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-gray-500">24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-xs text-gray-500">Cancel Anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
