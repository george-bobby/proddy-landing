"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Palette,
  CheckCircle,
  MessageSquare,
  FileText,
  Video,
  PenTool,
  LineChart,
  ArrowRight,
} from "lucide-react"
import useScrollReveal from "@/hooks/use-scroll-reveal"

// Solution data
const solution = {
  id: "designers",
  title: "Designers",
  description:
    "Enhance your design workflow with collaborative tools that help you ideate, create, and gather feedback efficiently.",
  icon: Palette,
  challenges: [
    "Collaborating with stakeholders on visual concepts",
    "Managing design systems and assets",
    "Gathering and implementing feedback",
    "Aligning with development timelines",
    "Documenting design decisions",
  ],
  solutions: [
    "Visual collaboration with clients and stakeholders",
    "Design system documentation and management",
    "Feedback collection and organization",
    "Design sprint planning and execution",
    "AI-enhanced whiteboarding and diagramming",
  ],
  products: [
    { name: "Canvas", icon: PenTool, color: "yellow" },
    { name: "Flow", icon: LineChart, color: "blue" },
    { name: "Notes", icon: FileText, color: "emerald" },
    { name: "Ping", icon: MessageSquare, color: "indigo" },
    { name: "Huddle", icon: Video, color: "red" },
  ],
  image: "/placeholder.svg?height=600&width=800&text=Designers",
}

export default function DesignersPage() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })

  const productsRef = useRef<HTMLDivElement>(null)
  const productsInView = useInView(productsRef, { once: true, amount: 0.2 })

  // Use the custom hook for scroll reveal animations
  useScrollReveal()

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/30 via-transparent to-yellow-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-600 mr-4">
                <solution.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {solution.title}
              </motion.h1>
            </div>
            <motion.p
              className="text-xl text-gray-300 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {solution.description}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white border-0"
              >
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-xl animate-reveal">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 via-transparent to-amber-500/10"></div>
            <Image
              src={solution.image}
              alt={solution.title}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Challenges & Solutions</h2>
            <p className="text-gray-400 text-lg">
              Design teams face unique challenges. Here's how Proddy helps overcome them.
            </p>
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="p-2 rounded-lg bg-red-900/30 mr-3">
                  <CheckCircle className="h-5 w-5 text-red-400" />
                </span>
                Common Challenges
              </h3>
              <ul className="space-y-4">
                {solution.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="p-1 rounded-full bg-red-900/30 mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </span>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="p-2 rounded-lg bg-green-900/30 mr-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </span>
                Proddy Solutions
              </h3>
              <ul className="space-y-4">
                {solution.solutions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="p-1 rounded-full bg-green-900/30 mr-3 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Products Section */}
      <section ref={productsRef} className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended Proddy Tools</h2>
            <p className="text-gray-400 text-lg">
              These tools work together seamlessly to address the unique needs of designers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: productsInView ? index * 0.1 : 0 }}
                className={`p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-${product.color}-900/50 transition-all duration-300`}
              >
                <div className={`p-3 rounded-lg bg-${product.color}-900/30 w-fit mb-4`}>
                  <product.icon className={`h-6 w-6 text-${product.color}-400`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proddy {product.name}</h3>
                <p className="text-gray-400 mb-4">
                  {getProductDescription(product.name)}
                </p>
                <Link
                  href={`/${product.name.toLowerCase()}`}
                  className={`inline-flex items-center text-${product.color}-400 hover:text-${product.color}-300 transition-colors`}
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/20 via-transparent to-yellow-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Design Workflow?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of designers who have improved their creativity and collaboration with Proddy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white border-0"
              >
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Helper function to get product descriptions
function getProductDescription(productName: string): string {
  switch (productName) {
    case "Canvas":
      return "Create wireframes, mockups, and visual designs with a powerful collaborative whiteboarding tool."
    case "Flow":
      return "Track design tasks, manage sprints, and visualize progress with customizable workflows."
    case "Notes":
      return "Document design systems, create style guides, and maintain design documentation."
    case "Ping":
      return "Communicate with stakeholders and team members, share designs, and collect feedback."
    case "Huddle":
      return "Run effective design reviews, presentations, and brainstorming sessions with video meetings."
    case "Slots":
      return "Schedule design reviews, stakeholder meetings, and team sessions with smart calendar management."
    case "Ticks":
      return "Manage your personal design tasks and to-dos alongside your team responsibilities."
    default:
      return "Seamlessly integrated with the entire Proddy ecosystem."
  }
}
