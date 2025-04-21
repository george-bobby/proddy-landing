"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export function WhyProddySection() {
  const whyRef = useRef<HTMLDivElement>(null)
  const whyInView = useInView(whyRef, { once: true, amount: 0.2 })

  return (
    <section ref={whyRef} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Proddy?</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Stop juggling between disconnected tools. From messaging to forms, Proddy brings everything together in one seamless experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={whyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-4">Before Proddy</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Multiple disconnected tools and subscriptions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Constant context switching between apps</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Information silos and duplicated work</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Limited or no AI capabilities</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">High total cost of ownership</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={whyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-4">With Proddy</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">One unified platform for everything</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Seamless workflow between all tools</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Shared context across all modules</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Advanced AI features throughout</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-500"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Single affordable subscription</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <Link href="/solutions" passHref>
              <Button size="lg" variant="outline" className="mr-4">
                Explore Solutions
              </Button>
            </Link>
            <Link href="/pricing" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
              >
                View Pricing
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
