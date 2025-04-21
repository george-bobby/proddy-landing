"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  ListTodo,
  FileText,
  Video,
  PenTool,
  Calendar,
  CheckSquare,
  Sparkles,
  Zap,
  Lock,
  Globe,
  Layers,
  RefreshCw,
} from "lucide-react"

const products = [
  {
    name: "Ping",
    description: "Team messaging and collaboration",
    href: "/ping",
    icon: MessageSquare,
    color: "indigo",
    gradient: "from-indigo-500 to-indigo-400",
  },
  {
    name: "Flow",
    description: "Task and project management",
    href: "/flow",
    icon: ListTodo,
    color: "blue",
    gradient: "from-blue-500 to-blue-400",
  },
  {
    name: "Notes",
    description: "Collaborative documents",
    href: "/notes",
    icon: FileText,
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-400",
  },
  {
    name: "Huddle",
    description: "Video meetings and recordings",
    href: "/huddle",
    icon: Video,
    color: "red",
    gradient: "from-red-500 to-red-400",
  },
  {
    name: "Canvas",
    description: "Visual whiteboarding",
    href: "/canvas",
    icon: PenTool,
    color: "yellow",
    gradient: "from-yellow-500 to-yellow-400",
  },
  {
    name: "Slots",
    description: "Smart scheduling",
    href: "/slots",
    icon: Calendar,
    color: "violet",
    gradient: "from-violet-500 to-violet-400",
  },
  {
    name: "Ticks",
    description: "Personal to-do lists",
    href: "/ticks",
    icon: CheckSquare,
    color: "orange",
    gradient: "from-orange-500 to-orange-400",
  },
]

const aiFeatures = [
  {
    title: "Auto-summarization",
    description: "Automatically summarize chats, meetings, tasks, and notes to save time and improve focus.",
    icon: Sparkles,
  },
  {
    title: "Smart replies",
    description: "Get intelligent reply suggestions in chat based on context and conversation history.",
    icon: MessageSquare,
  },
  {
    title: "Task prioritization",
    description:
      "AI analyzes your tasks and suggests the optimal order based on deadlines, dependencies, and importance.",
    icon: ListTodo,
  },
  {
    title: "Diagram suggestions",
    description: "Get intelligent diagram and visualization suggestions while whiteboarding.",
    icon: PenTool,
  },
  {
    title: "Meeting optimization",
    description: "AI suggests the best meeting times based on participants' schedules and preferences.",
    icon: Calendar,
  },
  {
    title: "Task recommendations",
    description: "Receive personalized task suggestions based on your work patterns and goals.",
    icon: Zap,
  },
]

const benefits = [
  {
    title: "All-in-one solution",
    description:
      "Replace multiple disconnected tools with one unified platform that handles all your productivity needs.",
    icon: Layers,
  },
  {
    title: "Seamless integration",
    description: "All Proddy modules work together perfectly, sharing data and context across your entire workflow.",
    icon: RefreshCw,
  },
  {
    title: "Global accessibility",
    description: "Access your work from anywhere, on any device, with real-time synchronization.",
    icon: Globe,
  },
  {
    title: "Enterprise-grade security",
    description: "Your data is protected with end-to-end encryption and advanced security features.",
    icon: Lock,
  },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  const productsRef = useRef<HTMLDivElement>(null)
  const productsInView = useInView(productsRef, { once: true, amount: 0.2 })

  const benefitsRef = useRef<HTMLDivElement>(null)
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })

  const aiRef = useRef<HTMLDivElement>(null)
  const aiInView = useInView(aiRef, { once: true, amount: 0.2 })

  const whyRef = useRef<HTMLDivElement>(null)
  const whyInView = useInView(whyRef, { once: true, amount: 0.2 })

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
      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              One Suite for All Your{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Productivity Needs
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Proddy unifies messaging, tasks, docs, meetings, whiteboards, scheduling, and to-dos in one AI-powered
              platform.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
              >
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-violet-500/10"></div>
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Proddy Dashboard"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section */}
      <section ref={productsRef} className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Complete Productivity Ecosystem</h2>
            <p className="text-gray-400 text-lg">
              Seven powerful tools, one seamless experience, infinite possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: productsInView ? index * 0.1 : 0,
                }}
              >
                <Link
                  href={product.href}
                  className={`block h-full p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 product-card glow glow-${product.color}`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${product.gradient} mr-4`}>
                      <product.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                      >
                        Proddy {product.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{product.description}</p>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-gray-800 h-40">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Proddy%20${product.name}`}
                      alt={`Proddy ${product.name}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-400">Learn more about {product.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-${product.color}-400`}
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* AI Features Section */}
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

      {/* Why Proddy Section */}
      <section ref={whyRef} className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Proddy?</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Stop juggling between disconnected tools. Proddy brings everything together in one seamless experience.
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

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-violet-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the Proddy beta and experience the future of productivity today.
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
