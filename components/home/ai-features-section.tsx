"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import { aiFeatures } from "../data"
import { Sparkles, Brain, Bot, Lightbulb, ArrowRight, ExternalLink } from "lucide-react"

export function AIFeaturesSection() {
  const aiRef = useRef<HTMLDivElement>(null)
  const [activeDemo, setActiveDemo] = useState(0)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section ref={aiRef} className="py-24 relative overflow-hidden">
      {/* Using global background - no local background elements */}

      {/* Floating AI elements */}
      <motion.div
        className="absolute top-1/4 right-10 text-indigo-500/20 hidden lg:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Brain size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-10 text-violet-500/20 hidden lg:block"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Bot size={70} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/30 text-indigo-400 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="inline-block w-4 h-4 mr-2" />
              AI-Powered
            </motion.span>

            <SectionHeading
              title="Supercharged with Artificial Intelligence"
              subtitle="Proddy leverages cutting-edge AI to make your work smarter, faster, and more efficient."
              gradient="from-indigo-400 via-violet-400 to-indigo-300"
            />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 group"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-violet-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              {/* Animated corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/20 group-hover:to-transparent transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 rounded-tl-3xl"></div>

              <div className="relative z-10">
                <motion.div
                  className="p-3 rounded-lg bg-indigo-900/30 w-fit mb-4 group-hover:bg-indigo-900/50 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <feature.icon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" aria-hidden="true" />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Learn more link that appears on hover */}
                <AnimatePresence>
                  {hoveredFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4"
                    >
                      <a href="#" className="text-indigo-400 text-sm font-medium flex items-center hover:text-indigo-300 transition-colors">
                        Learn more
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal>
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 via-gray-900/90 to-gray-950 rounded-2xl p-8 md:p-10 border border-gray-800/50 shadow-xl relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>

            {/* Subtle animated border top */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600/0 via-indigo-600/50 to-indigo-600/0"></div>

            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-6 w-6 text-indigo-400 mr-2" />
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                      Powered by Leading AI Models
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Proddy integrates with Gemini and OpenAI to provide state-of-the-art AI capabilities across all
                    modules, enabling intelligent automation and insights throughout your workflow.
                  </p>

                  <div className="flex space-x-6 mb-8">
                    <motion.div
                      className="p-3 rounded-lg bg-gray-800/80 hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-3 border border-gray-700/50"
                      whileHover={{ scale: 1.05, y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Image
                        src="/placeholder.svg?height=40&width=40&text=G"
                        alt="Gemini"
                        width={40}
                        height={40}
                        className="h-8 w-8"
                      />
                      <span className="text-gray-300 font-medium">Gemini</span>
                    </motion.div>

                    <motion.div
                      className="p-3 rounded-lg bg-gray-800/80 hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-3 border border-gray-700/50"
                      whileHover={{ scale: 1.05, y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Image
                        src="/placeholder.svg?height=40&width=40&text=O"
                        alt="OpenAI"
                        width={40}
                        height={40}
                        className="h-8 w-8"
                      />
                      <span className="text-gray-300 font-medium">OpenAI</span>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white group">
                      <span>Explore AI capabilities</span>
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              <div className="md:w-1/2">
                <motion.div
                  className="bg-black/50 rounded-xl p-5 border border-gray-800/80 shadow-lg relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Chat demo tabs */}
                  <div className="flex mb-4 border-b border-gray-800/50 pb-2">
                    {['Meeting Assistant', 'Task Planner', 'Content Creator'].map((tab, index) => (
                      <button
                        key={tab}
                        className={`px-3 py-1.5 text-sm font-medium rounded-t-lg transition-colors ${activeDemo === index ? 'text-indigo-400 border-b-2 border-indigo-500' : 'text-gray-400 hover:text-gray-300'}`}
                        onClick={() => setActiveDemo(index)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Demo content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDemo}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeDemo === 0 && (
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-medium">AI</span>
                            </div>
                            <div className="flex-1 bg-gray-800/80 rounded-lg p-3 shadow-sm">
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
                            <div className="flex-1 bg-gray-800/80 rounded-lg p-3 shadow-sm">
                              <p className="text-sm text-gray-300">
                                Yes, please schedule those tasks and assign them to the team.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-medium">AI</span>
                            </div>
                            <div className="flex-1 bg-gray-800/80 rounded-lg p-3 shadow-sm">
                              <p className="text-sm text-gray-300">
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                  Done! I've created 3 tasks in Flow and assigned them to the appropriate team members based on the discussion. You can view them in your dashboard now.
                                </motion.span>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeDemo === 1 && (
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-medium">U</span>
                            </div>
                            <div className="flex-1 bg-gray-800/80 rounded-lg p-3 shadow-sm">
                              <p className="text-sm text-gray-300">
                                I need to plan our product launch for next month. Can you help me organize the tasks?
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-medium">AI</span>
                            </div>
                            <div className="flex-1 bg-gray-800/80 rounded-lg p-3 shadow-sm">
                              <p className="text-sm text-gray-300">
                                I'll help you plan the product launch. Based on your previous launches, I recommend breaking this into 4 phases: Pre-launch marketing, Technical preparation, Launch day activities, and Post-launch follow-up. Would you like me to create a project with these phases and suggest specific tasks for each?
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 flex space-x-2">
                            <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></div>
                            <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse delay-100"></div>
                            <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse delay-200"></div>
                          </div>
                        </div>
                      )}

                      {activeDemo === 2 && (
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-medium">U</span>
                            </div>
                            <div className="flex-1 bg-gray-800/80 rounded-lg p-3 shadow-sm">
                              <p className="text-sm text-gray-300">
                                Draft an email announcing our new feature to our customers.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-medium">AI</span>
                            </div>
                            <div className="flex-1 bg-gray-800/80 rounded-lg p-3 shadow-sm">
                              <p className="text-sm text-gray-300">
                                Here's a draft email announcement for the new feature. I've used our brand voice and included key benefits based on our previous marketing materials:
                                <br /><br />
                                <strong>Subject:</strong> Exciting News: Introducing [Feature Name] - Now Available in Proddy!
                                <br /><br />
                                <strong>Preview:</strong> Would you like me to personalize this for different customer segments?
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
