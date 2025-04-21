"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { aiFeatures } from "../data"

export function AIFeaturesSection() {
  const aiRef = useRef<HTMLDivElement>(null)
  const aiInView = useInView(aiRef, { once: true, amount: 0.2 })

  return (
    <section ref={aiRef} className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-transparent to-violet-900/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm font-medium mb-4">
            AI-Powered
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supercharged with{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Proddy leverages cutting-edge AI to make your work smarter, faster, and more efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={aiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: aiInView ? index * 0.1 : 0,
              }}
              className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-900/50 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-indigo-900/30 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-indigo-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 border border-gray-800">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Powered by Leading AI Models</h3>
              <p className="text-gray-400 mb-4">
                Proddy integrates with Gemini and OpenAI to provide state-of-the-art AI capabilities across all
                modules.
              </p>
              <div className="flex space-x-4">
                <div className="p-2 rounded-md bg-gray-800">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=G"
                    alt="Gemini"
                    width={40}
                    height={40}
                    className="h-8 w-8"
                  />
                </div>
                <div className="p-2 rounded-md bg-gray-800">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=O"
                    alt="OpenAI"
                    width={40}
                    height={40}
                    className="h-8 w-8"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-black/50 rounded-lg p-4 border border-gray-800">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium">AI</span>
                </div>
                <div className="flex-1 bg-gray-800 rounded-lg p-3">
                  <p className="text-sm text-gray-300">
                    I've analyzed your meeting notes and created a summary with 3 key action items. Would you like me
                    to schedule follow-up tasks in Flow?
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium">U</span>
                </div>
                <div className="flex-1 bg-gray-800 rounded-lg p-3">
                  <p className="text-sm text-gray-300">
                    Yes, please schedule those tasks and assign them to the team.
                  </p>
                </div>
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse delay-100"></div>
                <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
