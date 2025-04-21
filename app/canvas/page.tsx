"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PenTool, Users, Bot, Layers, FileText, Download, Lock, Palette } from "lucide-react"
import useScrollReveal from "@/hooks/use-scroll-reveal"

export default function CanvasPage() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })

  const aiRef = useRef<HTMLDivElement>(null)
  const aiInView = useInView(aiRef, { once: true, amount: 0.2 })

  // Use the custom hook for scroll reveal animations
  useScrollReveal()

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/30 via-transparent to-yellow-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-yellow-900/30 text-yellow-400 text-sm font-medium mb-4">
                Proddy Canvas
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Visual collaboration{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  unleashed
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Infinite canvas for brainstorming, diagramming, and visual collaboration with AI-powered features to
                enhance your creativity.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white border-0"
                >
                  Get Started for Free
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden border border-yellow-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-yellow-500/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Canvas"
                  alt="Proddy Canvas Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Whiteboarding Features</h2>
            <p className="text-gray-400 text-lg">
              Everything you need for visual collaboration and creative brainstorming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Infinite Canvas",
                description: "Unlimited space for your ideas, diagrams, and visual thinking.",
                icon: PenTool,
                delay: 0,
              },
              {
                title: "Rich Drawing Tools",
                description: "Shapes, arrows, sticky notes, and freehand drawing tools.",
                icon: Palette,
                delay: 0.1,
              },
              {
                title: "Real-time Collaboration",
                description: "Work together with your team in real-time with presence indicators.",
                icon: Users,
                delay: 0.2,
              },
              {
                title: "Object Management",
                description: "Lock, group, and layer objects for precise control over your canvas.",
                icon: Layers,
                delay: 0.3,
              },
              {
                title: "Export Options",
                description: "Export your boards as PNG or PDF to share with stakeholders.",
                icon: Download,
                delay: 0.4,
              },
              {
                title: "Board Permissions",
                description: "Control who can view and edit your boards with granular permissions.",
                icon: Lock,
                delay: 0.5,
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: featuresInView ? feature.delay : 0,
                }}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-yellow-900/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-yellow-900/30 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Creativity</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                A clean, intuitive interface that helps your team visualize ideas and concepts.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl animate-reveal">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-yellow-500/10"></div>
              <Image
                src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Canvas%20Interface"
                alt="Proddy Canvas Interface"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Intuitive Tools</h3>
                <p className="text-gray-400">
                  Easy-to-use drawing tools that help you express your ideas visually without a learning curve.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Flexible Organization</h3>
                <p className="text-gray-400">
                  Organize your thoughts with frames, groups, and layers for structured visual thinking.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Accessible Everywhere</h3>
                <p className="text-gray-400">
                  Available on desktop, web, mobile, and tablet with real-time sync across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section ref={aiRef} className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/20 via-transparent to-yellow-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-yellow-900/30 text-yellow-400 text-sm font-medium mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Whiteboarding with{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proddy Canvas leverages cutting-edge AI to enhance your visual collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={aiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-yellow-900/30 mr-4 flex-shrink-0">
                    <Bot className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Layout Suggestions</h3>
                    <p className="text-gray-400">
                      AI suggests improved structure and layout for your diagrams and visual content.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-yellow-900/30 mr-4 flex-shrink-0">
                    <FileText className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Sketch to Text Conversion</h3>
                    <p className="text-gray-400">
                      AI converts hand-drawn sketches or mind maps into structured text-based notes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-yellow-900/30 mr-4 flex-shrink-0">
                    <Palette className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Theme Generation</h3>
                    <p className="text-gray-400">
                      AI creates beautiful, cohesive diagram themes based on your use case and content.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-yellow-900/30 mr-4 flex-shrink-0">
                    <Layers className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Content Categorization</h3>
                    <p className="text-gray-400">
                      AI automatically detects and categorizes sticky notes into groups like Ideas, Pain Points, and
                      Solutions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={aiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-black/50 rounded-xl p-6 border border-yellow-900/50">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">AI</span>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <p className="text-sm text-gray-300">
                      I've analyzed your brainstorming session and organized the sticky notes into categories:
                      <br />
                      <br />
                      <strong>Ideas (7):</strong> New feature concepts, UI improvements
                      <br />
                      <strong>Pain Points (5):</strong> User friction areas, technical limitations
                      <br />
                      <strong>Solutions (4):</strong> Proposed fixes and enhancements
                      <br />
                      <br />
                      Would you like me to create a structured diagram from these categories?
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">U</span>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <p className="text-sm text-gray-300">Yes, please organize them into a flowchart.</p>
                  </div>
                </div>
                <div className="mt-3 flex space-x-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse delay-100"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse delay-200"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Personas Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Uses Proddy Canvas?</h2>
            <p className="text-gray-400 text-lg">Designed for teams that think visually and collaborate creatively.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Product Teams",
                description:
                  "Map user journeys, create wireframes, and visualize product roadmaps collaboratively.",
                image: "/placeholder.svg?height=400&width=400&text=Product%20Teams",
              },
              {
                title: "Designers",
                description:
                  "Brainstorm design concepts, create mood boards, and gather visual feedback from stakeholders.",
                image: "/placeholder.svg?height=400&width=400&text=Designers",
              },
              {
                title: "Educators",
                description:
                  "Create visual learning materials, facilitate interactive workshops, and engage students remotely.",
                image: "/placeholder.svg?height=400&width=400&text=Educators",
              },
            ].map((persona) => (
              <div key={persona.title} className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src={persona.image || "/placeholder.svg"}
                    alt={persona.title}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{persona.title}</h3>
                <p className="text-gray-400">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-900/30 to-yellow-900/20 rounded-xl p-12 border border-yellow-900/50 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your visual collaboration?
            </h2>
            <p className="text-gray-300 text-xl mb-8">
              Join thousands of teams who use Proddy Canvas to bring their ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white border-0"
              >
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
