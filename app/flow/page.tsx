"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  CheckCircle,
  Users,
  Bot,
  Clock,
  Tag,
  Layers,
  ArrowRight,
  MessageSquare,
  FileText,
} from "lucide-react"
import useScrollReveal from "@/hooks/use-scroll-reveal"

export default function FlowPage() {
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
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-blue-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
                Proddy Flow
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Task management{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  that flows
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Streamline your product development process from ideation to launch with AI-powered task management
                designed for modern teams.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0"
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
              <div className="relative rounded-xl overflow-hidden border border-blue-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-blue-500/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Flow"
                  alt="Proddy Flow Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Task Management Features</h2>
            <p className="text-gray-400 text-lg">
              Everything you need to manage projects, track progress, and deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Sprint Planning & Task Boards",
                description: "Organize work with flexible Kanban-style boards that adapt to your workflow.",
                icon: Layers,
                delay: 0,
              },
              {
                title: "Epics, Stories & Tasks",
                description: "Structure work hierarchically with epics, stories, tasks, and subtasks.",
                icon: LineChart,
                delay: 0.1,
              },
              {
                title: "Backlog & Roadmap Views",
                description: "Plan ahead with backlog grooming and visualize your product roadmap.",
                icon: Clock,
                delay: 0.2,
              },
              {
                title: "Status Updates & Priorities",
                description: "Track progress with customizable statuses, deadlines, and priority levels.",
                icon: Tag,
                delay: 0.3,
              },
              {
                title: "Custom Workflows",
                description: "Create project folders, labels, and custom workflows that fit your team's needs.",
                icon: Layers,
                delay: 0.4,
              },
              {
                title: "Team Assignment",
                description: "Assign tasks to individuals or teams with real-time updates and notifications.",
                icon: Users,
                delay: 0.5,
              },
              {
                title: "Real-time Updates",
                description: "Stay in sync with real-time updates, filters, and team views.",
                icon: Clock,
                delay: 0.6,
              },
              {
                title: "Seamless Integration",
                description: "Integrates with Ping and Notes for complete context across your workflow.",
                icon: ArrowRight,
                delay: 0.7,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: featuresInView ? feature.delay : 0,
                }}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-900/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-blue-900/30 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Productivity</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                A clean, intuitive interface that helps your team stay focused and deliver results.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl animate-reveal">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-blue-500/10"></div>
              <Image
                src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Flow%20Interface"
                alt="Proddy Flow Interface"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Flexible Views</h3>
                <p className="text-gray-400">
                  Switch between Kanban boards, list views, and timeline views to visualize your work.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Customizable Workflows</h3>
                <p className="text-gray-400">
                  Create custom workflows that match your team's unique processes and methodologies.
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
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Task Management with{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proddy Flow leverages cutting-edge AI to make your task management more efficient and effective.
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
                  <div className="p-3 rounded-lg bg-blue-900/30 mr-4 flex-shrink-0">
                    <Bot className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Smart Task Prioritization</h3>
                    <p className="text-gray-400">
                      AI suggests task priorities based on deadlines, dependencies, team workload, and historical data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-900/30 mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Automatic Blocker Detection</h3>
                    <p className="text-gray-400">
                      AI automatically detects blockers from status updates or chat logs to prevent project delays.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-900/30 mr-4 flex-shrink-0">
                    <LineChart className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Progress Summarization</h3>
                    <p className="text-gray-400">
                      Get AI-generated summaries of task or epic progress to quickly understand project status.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-900/30 mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Intelligent Assignee Suggestions</h3>
                    <p className="text-gray-400">
                      AI suggests the best team member for a task based on skills, workload, and past performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-blue-900/30 mr-4 flex-shrink-0">
                    <FileText className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Automated Status Reports</h3>
                    <p className="text-gray-400">
                      AI drafts comprehensive status reports for sprint reviews, saving time and ensuring consistency.
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
              <div className="bg-black/50 rounded-xl p-6 border border-blue-900/50">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">AI</span>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <p className="text-sm text-gray-300">
                      I've analyzed your team's current workload and upcoming deadlines. Here's my suggested priority
                      order for this sprint:
                      <br />
                      <br />
                      1. Fix authentication bug (High priority, blocking other tasks)
                      <br />
                      2. Complete user profile feature (Due in 3 days)
                      <br />
                      3. Start API integration (Dependencies ready)
                      <br />
                      <br />
                      Would you like me to assign these tasks based on team member availability?
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">U</span>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <p className="text-sm text-gray-300">Yes, please assign them and notify the team.</p>
                  </div>
                </div>
                <div className="mt-3 flex space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse delay-100"></div>
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse delay-200"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Uses Proddy Flow?</h2>
            <p className="text-gray-400 text-lg">Designed for teams of all sizes across various industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Product Managers",
                description:
                  "Plan roadmaps, manage sprints, and keep stakeholders informed with comprehensive project tracking.",
                image: "/placeholder.svg?height=400&width=400&text=Product%20Managers",
              },
              {
                title: "Development Teams",
                description:
                  "Track issues, manage sprints, and collaborate efficiently with designers and product teams.",
                image: "/placeholder.svg?height=400&width=400&text=Development%20Teams",
              },
              {
                title: "Agile Teams",
                description:
                  "Implement Scrum, Kanban, or hybrid methodologies with customizable workflows and sprint planning.",
                image: "/placeholder.svg?height=400&width=400&text=Agile%20Teams",
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

      {/* Integration Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integration</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Proddy Flow works perfectly with other Proddy modules and your favorite tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-reveal">
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 flex items-start">
                <div className="p-3 rounded-lg bg-indigo-900/30 mr-4 flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proddy Ping</h3>
                  <p className="text-gray-400">
                    Convert chat messages into tasks, link discussions to issues, and get notifications about task
                    updates directly in your team channels.
                  </p>
                  <Link
                    href="/ping"
                    className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
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
                    Link tasks to documentation, automatically create tasks from meeting notes, and embed task boards
                    directly in your documents.
                  </p>
                  <Link
                    href="/notes"
                    className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Task Management?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the Proddy beta and experience Flow along with the entire Proddy ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0"
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
