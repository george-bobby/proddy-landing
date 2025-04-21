"use client"

import React from "react"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Users,
  LineChart,
  Palette,
  Code,
  Rocket,
  GraduationCap,
  CheckCircle,
  MessageSquare,
  FileText,
  Video,
  PenTool,
  Calendar,
  CheckSquare,
  ArrowRight,
} from "lucide-react"
import useScrollReveal from "@/hooks/use-scroll-reveal"

const solutions = [
  {
    id: "remote-teams",
    title: "Remote Teams",
    description:
      "Keep your distributed team connected, aligned, and productive with Proddy's comprehensive suite of collaboration tools.",
    icon: Users,
    challenges: [
      "Communication across different time zones",
      "Maintaining team cohesion and culture",
      "Tracking project progress remotely",
      "Ensuring everyone stays aligned on goals",
      "Facilitating effective virtual meetings",
    ],
    solutions: [
      "Real-time and asynchronous communication channels",
      "Centralized project management and task tracking",
      "Collaborative document editing and whiteboarding",
      "Seamless video meetings with recordings and transcripts",
      "AI-powered meeting summaries and action items",
    ],
    products: [
      { name: "Ping", icon: MessageSquare, color: "indigo" },
      { name: "Huddle", icon: Video, color: "red" },
      { name: "Canvas", icon: PenTool, color: "yellow" },
      { name: "Notes", icon: FileText, color: "emerald" },
      { name: "Flow", icon: LineChart, color: "blue" },
    ],
    image: "/placeholder.svg?height=600&width=800&text=Remote%20Teams",
  },
  {
    id: "product-managers",
    title: "Product Managers",
    description:
      "Streamline your product development process from ideation to launch with tools designed for modern product management.",
    icon: LineChart,
    challenges: [
      "Balancing stakeholder expectations",
      "Prioritizing features and roadmap planning",
      "Tracking development progress across teams",
      "Gathering and organizing user feedback",
      "Maintaining clear documentation",
    ],
    solutions: [
      "Centralized roadmap planning and tracking",
      "Seamless stakeholder communication",
      "User feedback collection and organization",
      "Sprint planning and agile workflow management",
      "AI-powered prioritization and resource allocation",
    ],
    products: [
      { name: "Flow", icon: LineChart, color: "blue" },
      { name: "Notes", icon: FileText, color: "emerald" },
      { name: "Slots", icon: Calendar, color: "violet" },
      { name: "Ping", icon: MessageSquare, color: "indigo" },
      { name: "Canvas", icon: PenTool, color: "yellow" },
    ],
    image: "/placeholder.svg?height=600&width=800&text=Product%20Managers",
  },
  {
    id: "developers",
    title: "Developers",
    description:
      "Boost your development team's productivity with tools that streamline communication, planning, and collaboration.",
    icon: Code,
    challenges: [
      "Tracking issues and bugs efficiently",
      "Coordinating with design and product teams",
      "Managing technical documentation",
      "Balancing feature work with technical debt",
      "Effective sprint planning and execution",
    ],
    solutions: [
      "Technical documentation and knowledge sharing",
      "Sprint planning and task management",
      "Code review coordination and feedback",
      "Architecture planning and diagramming",
      "AI-powered meeting summaries and action items",
    ],
    products: [
      { name: "Flow", icon: LineChart, color: "blue" },
      { name: "Ping", icon: MessageSquare, color: "indigo" },
      { name: "Huddle", icon: Video, color: "red" },
      { name: "Canvas", icon: PenTool, color: "yellow" },
      { name: "Notes", icon: FileText, color: "emerald" },
    ],
    image: "/placeholder.svg?height=600&width=800&text=Developers",
  },
  {
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
  },
  {
    id: "founders",
    title: "Founders & Executives",
    description:
      "Manage your startup's operations efficiently with an all-in-one platform that grows with your business.",
    icon: Rocket,
    challenges: [
      "Maintaining visibility across all teams",
      "Efficient time management and scheduling",
      "Strategic planning and execution tracking",
      "Effective team communication",
      "Balancing multiple priorities",
    ],
    solutions: [
      "High-level summaries and dashboards",
      "Team coordination and communication",
      "Strategic planning and execution tracking",
      "Investor updates and documentation",
      "Meeting scheduling and management",
    ],
    products: [
      { name: "Slots", icon: Calendar, color: "violet" },
      { name: "Flow", icon: LineChart, color: "blue" },
      { name: "Huddle", icon: Video, color: "red" },
      { name: "Notes", icon: FileText, color: "emerald" },
      { name: "Ping", icon: MessageSquare, color: "indigo" },
    ],
    image: "/placeholder.svg?height=600&width=800&text=Founders",
  },
  {
    id: "students",
    title: "Students & Educators",
    description:
      "Enhance learning and teaching experiences with collaborative tools designed for educational environments.",
    icon: GraduationCap,
    challenges: [
      "Managing assignments and deadlines",
      "Collaborating on group projects",
      "Taking and organizing notes",
      "Scheduling study sessions and office hours",
      "Visualizing complex concepts",
    ],
    solutions: [
      "Group project coordination and task assignment",
      "Collaborative note-taking and study materials",
      "Virtual study sessions and discussions",
      "Assignment planning and deadline management",
      "Visual concept mapping and diagramming",
    ],
    products: [
      { name: "Notes", icon: FileText, color: "emerald" },
      { name: "Canvas", icon: PenTool, color: "yellow" },
      { name: "Huddle", icon: Video, color: "red" },
      { name: "Ticks", icon: CheckSquare, color: "orange" },
      { name: "Slots", icon: Calendar, color: "violet" },
    ],
    image: "/placeholder.svg?height=600&width=800&text=Students%20%26%20Educators",
  },
]

const allProducts = [
  { name: "Ping", icon: MessageSquare, color: "indigo", description: "Team Messaging" },
  { name: "Flow", icon: LineChart, color: "blue", description: "Task Management" },
  { name: "Notes", icon: FileText, color: "emerald", description: "Docs" },
  { name: "Huddle", icon: Video, color: "red", description: "Meetings" },
  { name: "Canvas", icon: PenTool, color: "yellow", description: "Whiteboarding" },
  { name: "Slots", icon: Calendar, color: "violet", description: "Scheduling" },
  { name: "Ticks", icon: CheckSquare, color: "orange", description: "To-dos" },
]

export default function SolutionsPage() {
  const solutionRefs = useRef<(HTMLDivElement | null)[]>(solutions.map(() => null))
  const [activeTab, setActiveTab] = useState<string>("challenges")

  // Use the custom hook for scroll reveal animations
  useScrollReveal()

  const solutionInView = solutions.map(() => useRef(null))
  const isInViewArray = solutions.map((_, index) => useInView(solutionInView[index], { once: true, amount: 0.2 }))

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Proddy Solutions for{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Every Team
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover how Proddy can transform productivity for your specific use case and team structure.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {solutions.map((solution, index) => {
              // const isInView = useInView(solutionRefs.current[index], { once: true, amount: 0.2 })

              return (
                <motion.div
                  key={solution.id}
                  ref={solutionInView[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInViewArray[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 card-hover"
                >
                  <Link href={`#${solution.id}`} className="block h-full" scroll={false}>
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 mr-4">
                        <solution.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{solution.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {solution.products.map((product) => (
                        <span
                          key={product.name}
                          className={`px-2 py-1 text-xs rounded-full bg-${product.color}-900/30 text-${product.color}-400`}
                        >
                          {product.name}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product-Persona Matrix */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Proddy Stack</h2>
            <p className="text-gray-400 text-lg">
              See which Proddy tools are most commonly used by different teams and roles.
            </p>
          </div>

          <div className="overflow-x-auto animate-reveal">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-8 gap-2 mb-4">
                <div className="col-span-1"></div>
                {allProducts.map((product) => (
                  <div key={product.name} className="col-span-1 p-3 text-center">
                    <div
                      className={`mx-auto w-10 h-10 rounded-lg bg-${product.color}-900/30 flex items-center justify-center mb-2`}
                    >
                      <product.icon className={`h-5 w-5 text-${product.color}-400`} />
                    </div>
                    <p className="text-sm font-medium text-white">{product.name}</p>
                    <p className="text-xs text-gray-400">{product.description}</p>
                  </div>
                ))}

                {solutions.map((solution) => (
                  <React.Fragment key={solution.id}>
                    <div className="col-span-1 p-3 flex items-center">
                      <div className="flex items-center">
                        <solution.icon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-white">{solution.title}</span>
                      </div>
                    </div>

                    {allProducts.map((product) => {
                      const isRecommended = solution.products.some((p) => p.name === product.name)
                      return (
                        <div
                          key={`${solution.id}-${product.name}`}
                          className="col-span-1 p-3 flex items-center justify-center"
                        >
                          {isRecommended ? (
                            <div
                              className={`w-6 h-6 rounded-full bg-${product.color}-900/30 flex items-center justify-center`}
                            >
                              <CheckCircle className={`h-4 w-4 text-${product.color}-400`} />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-gray-800/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      {solutions.map((solution, index) => {
        // const isInView = useInView(solutionRefs.current[index], { once: true, amount: 0.2 })
        const isEven = index % 2 === 0

        return (
          <section
            key={solution.id}
            id={solution.id}
            ref={solutionInView[index]}
            className={`py-20 ${
              isEven ? "bg-gradient-to-b from-black to-gray-950" : "bg-gradient-to-b from-gray-950 to-black"
            }`}
          >
            <div className="container mx-auto px-4">
              <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
                <motion.div
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  animate={isInViewArray[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-violet-500/10"></div>
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  animate={isInViewArray[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 20 : -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 mr-4">
                      <solution.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{solution.title}</h2>
                  </div>
                  <p className="text-xl text-gray-300 mb-8">{solution.description}</p>

                  <div className="mb-8">
                    <div className="flex border-b border-gray-800 mb-6">
                      <button
                        className={`px-4 py-2 text-sm font-medium ${
                          activeTab === "challenges"
                            ? "text-indigo-400 border-b-2 border-indigo-400"
                            : "text-gray-400 hover:text-gray-300"
                        }`}
                        onClick={() => setActiveTab("challenges")}
                      >
                        Challenges
                      </button>
                      <button
                        className={`px-4 py-2 text-sm font-medium ${
                          activeTab === "solutions"
                            ? "text-indigo-400 border-b-2 border-indigo-400"
                            : "text-gray-400 hover:text-gray-300"
                        }`}
                        onClick={() => setActiveTab("solutions")}
                      >
                        How Proddy Helps
                      </button>
                    </div>

                    {activeTab === "challenges" ? (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Key Challenges</h3>
                        <ul className="space-y-3 mb-8">
                          {solution.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                              </div>
                              <span className="text-gray-300">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">How Proddy Helps</h3>
                        <ul className="space-y-3 mb-8">
                          {solution.solutions.map((solutionItem) => (
                            <li key={solutionItem} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{solutionItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Recommended Products</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {solution.products.map((product) => (
                      <Link key={product.name} href={`/${product.name.toLowerCase()}`}>
                        <div
                          className={`p-4 rounded-lg bg-${product.color}-900/30 border border-${product.color}-900/50 hover:border-${product.color}-700/50 transition-colors group`}
                        >
                          <div className="flex items-center mb-2">
                            <product.icon className={`h-5 w-5 text-${product.color}-400 mr-2`} />
                            <span className={`font-medium text-${product.color}-400`}>Proddy {product.name}</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-400 group-hover:text-gray-300">
                            <span>Learn more</span>
                            <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-violet-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Team's Productivity?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the Proddy beta and experience the future of collaborative work today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
              >
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">No credit card required. Free during beta.</p>
          </div>
        </div>
      </section>
    </>
  )
}
