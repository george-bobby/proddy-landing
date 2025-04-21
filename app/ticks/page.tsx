"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  CheckSquare,
  CheckCircle,
  Bot,
  Tag,
  ArrowRight,
  MessageSquare,
  FileText,
  Calendar,
  Layers,
  Clock,
  Filter,
  ListFilter,
  LineChart,
} from "lucide-react"
import useScrollReveal from "@/hooks/use-scroll-reveal"

export default function TicksPage() {
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
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/30 via-transparent to-orange-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-orange-900/30 text-orange-400 text-sm font-medium mb-4">
                Proddy Ticks
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Task management{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  reimagined
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Stay organized and focused with a smart task manager that adapts to your workflow and helps you prioritize what matters most.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white border-0"
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
              <div className="relative rounded-xl overflow-hidden border border-orange-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-orange-500/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Ticks"
                  alt="Proddy Ticks Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-gray-400">
              Everything you need to manage your tasks efficiently and stay on top of your to-do list.
            </p>
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Task Lists & Subtasks",
                description: "Create hierarchical task lists with subtasks and recurring tasks for better organization.",
                icon: CheckSquare,
                delay: 0,
              },
              {
                title: "Projects & Labels",
                description: "Organize tasks with projects, labels, and custom filters to find what you need quickly.",
                icon: Tag,
                delay: 0.1,
              },
              {
                title: "Planning Views",
                description: "Plan your day and week with dedicated views that help you focus on what's important.",
                icon: Calendar,
                delay: 0.2,
              },
              {
                title: "Priority Levels",
                description: "Set priority levels and due dates to ensure you tackle the most important tasks first.",
                icon: ListFilter,
                delay: 0.3,
              },
              {
                title: "Kanban View",
                description: "Visualize your workflow with a Kanban board or switch to a traditional list view.",
                icon: Layers,
                delay: 0.4,
              },
              {
                title: "Recurring Tasks",
                description: "Set up recurring tasks for habits and regular responsibilities that repeat automatically.",
                icon: Clock,
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
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-orange-900/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-orange-900/30 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-orange-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Intuitive Task Management</h2>
            <p className="text-xl text-gray-400">
              A clean, distraction-free interface that helps you focus on completing your tasks.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl animate-reveal">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-orange-500/10"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Ticks%20Interface"
              alt="Proddy Ticks Interface"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section ref={aiRef} className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-transparent to-orange-900/20"></div>
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-900/30 text-orange-400 text-sm font-medium mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Task Management with{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Let artificial intelligence help you prioritize, organize, and complete your tasks more efficiently.
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
                  <div className="p-3 rounded-lg bg-orange-900/30 mr-4 flex-shrink-0">
                    <Bot className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Smart Task Suggestions</h3>
                    <p className="text-gray-400">
                      AI suggests your next tasks based on urgency, deadlines, and your work patterns.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-orange-900/30 mr-4 flex-shrink-0">
                    <Filter className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Task Batching</h3>
                    <p className="text-gray-400">
                      Automatically groups similar tasks to help you work more efficiently through batching.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-orange-900/30 mr-4 flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cross-Tool Task Creation</h3>
                    <p className="text-gray-400">
                      Creates tasks from messages or notes in other Proddy tools for seamless workflow.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-orange-900/30 mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Daily Summaries</h3>
                    <p className="text-gray-400">
                      Summarizes your day and flags overdue items to keep you on track with your goals.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={aiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden border border-orange-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-orange-500/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=AI%20Task%20Assistant"
                  alt="AI Task Assistant"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For</h2>
            <p className="text-xl text-gray-400">
              Discover how Proddy Ticks can transform task management for different roles and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Busy Professionals",
                description:
                  "Stay on top of your professional and personal tasks with smart prioritization and reminders.",
                image: "/placeholder.svg?height=400&width=400&text=Professionals",
              },
              {
                title: "Project Managers",
                description:
                  "Track personal tasks alongside team projects with seamless integration to Proddy Flow.",
                image: "/placeholder.svg?height=400&width=400&text=Project%20Managers",
              },
              {
                title: "Students",
                description:
                  "Manage assignments, study sessions, and personal goals with customizable views and reminders.",
                image: "/placeholder.svg?height=400&width=400&text=Students",
              },
            ].map((useCase) => (
              <div key={useCase.title} className="animate-reveal">
                <div className="rounded-xl overflow-hidden mb-4">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Works With Your Favorite Tools</h2>
            <p className="text-xl text-gray-400">
              Proddy Ticks integrates seamlessly with other Proddy tools and popular third-party services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-reveal">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 flex items-start">
              <div className="p-3 rounded-lg bg-blue-900/30 mr-4 flex-shrink-0">
                <LineChart className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Proddy Flow</h3>
                <p className="text-gray-400">
                  Sync personal tasks with team projects and visualize your work in both tools.
                </p>
                <Link
                  href="/flow"
                  className="mt-4 inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 flex items-start">
              <div className="p-3 rounded-lg bg-emerald-900/30 mr-4 flex-shrink-0">
                <FileText className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Proddy Notes</h3>
                <p className="text-gray-400">
                  Convert action items from your notes into trackable tasks with a single click.
                </p>
                <Link
                  href="/notes"
                  className="mt-4 inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-transparent to-orange-900/20"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Things Done?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who have transformed their productivity with Proddy Ticks.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white border-0"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
