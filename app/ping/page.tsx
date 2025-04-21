"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Bot, Search, FileText, Zap, Shield, Clock } from "lucide-react"

export default function PingPage() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })

  const aiRef = useRef<HTMLDivElement>(null)
  const aiInView = useInView(aiRef, { once: true, amount: 0.2 })

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
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 via-transparent to-indigo-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm font-medium mb-4">
                Proddy Ping
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Team messaging{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                  reimagined
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Proddy Ping brings your team communication to the next level with AI-powered features, seamless
                integrations, and a delightful user experience.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white border-0"
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
              <div className="relative rounded-xl overflow-hidden border border-indigo-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-indigo-500/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Ping"
                  alt="Proddy Ping Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Team Communication</h2>
            <p className="text-gray-400 text-lg">
              Proddy Ping combines the best messaging features with powerful AI capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-time Messaging",
                description: "Instant messaging with read receipts, reactions, and threaded conversations.",
                icon: MessageSquare,
                delay: 0,
              },
              {
                title: "Team Channels",
                description: "Organize conversations by team, project, or topic with public and private channels.",
                icon: Users,
                delay: 0.1,
              },
              {
                title: "AI Assistance",
                description: "Get smart reply suggestions and automatic message summaries.",
                icon: Bot,
                delay: 0.2,
              },
              {
                title: "Powerful Search",
                description: "Find any message, file, or conversation with advanced search capabilities.",
                icon: Search,
                delay: 0.3,
              },
              {
                title: "Rich Media Sharing",
                description: "Share files, images, videos, and documents with inline previews.",
                icon: FileText,
                delay: 0.4,
              },
              {
                title: "Seamless Integration",
                description: "Connect with all other Proddy modules and third-party tools.",
                icon: Zap,
                delay: 0.5,
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
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Productivity</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                A clean, intuitive interface that helps your team stay focused and communicate effectively.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl animate-reveal">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-indigo-500/10"></div>
              <Image
                src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Ping%20Interface"
                alt="Proddy Ping Interface"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Intuitive Design</h3>
                <p className="text-gray-400">
                  Clean, modern interface that's easy to navigate and reduces cognitive load.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Customizable Workspace</h3>
                <p className="text-gray-400">
                  Personalize your experience with themes, layouts, and notification preferences.
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
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-indigo-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm font-medium mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Communication with{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proddy Ping leverages cutting-edge AI to make your team communication more efficient and effective.
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
                  <div className="p-3 rounded-lg bg-indigo-900/30 mr-4 flex-shrink-0">
                    <Bot className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Smart Reply Suggestions</h3>
                    <p className="text-gray-400">
                      AI analyzes conversation context to suggest relevant, personalized responses, saving you time and
                      effort.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-indigo-900/30 mr-4 flex-shrink-0">
                    <FileText className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Automatic Summarization</h3>
                    <p className="text-gray-400">
                      Get AI-generated summaries of long conversations, channels, or threads to quickly catch up on
                      discussions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-indigo-900/30 mr-4 flex-shrink-0">
                    <Search className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Semantic Search</h3>
                    <p className="text-gray-400">
                      Find exactly what you're looking for with AI-powered search that understands the meaning behind
                      your queries, not just matching keywords.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-indigo-900/30 mr-4 flex-shrink-0">
                    <Zap className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Smart Notifications</h3>
                    <p className="text-gray-400">
                      AI learns your communication patterns to prioritize notifications and reduce interruptions for
                      focused work.
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
              <div className="bg-black/50 rounded-xl p-6 border border-indigo-900/50">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">AI</span>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <p className="text-sm text-gray-300">
                      I've analyzed the conversation and here's a summary of the key points discussed:
                      <br />
                      <br />
                      1. The team agreed on the new design direction
                      <br />
                      2. Marketing needs assets by Friday
                      <br />
                      3. Development will start implementation next week
                      <br />
                      <br />
                      Would you like me to create tasks in Flow for these action items?
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">U</span>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <p className="text-sm text-gray-300">
                      Yes, please create those tasks and assign them to the respective team members.
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex space-x-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse delay-100"></div>
                  <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse delay-200"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Uses Proddy Ping?</h2>
            <p className="text-gray-400 text-lg">Designed for teams of all sizes and across various industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Remote Teams",
                description:
                  "Stay connected and aligned across time zones with real-time messaging and AI-powered summaries.",
                image: "/placeholder.svg?height=400&width=400&text=Remote%20Teams",
              },
              {
                title: "Project Managers",
                description:
                  "Coordinate projects, share updates, and keep stakeholders informed with organized communication channels.",
                image: "/placeholder.svg?height=400&width=400&text=Project%20Managers",
              },
              {
                title: "Customer Support",
                description:
                  "Collaborate on customer issues, share knowledge, and provide faster, more accurate responses.",
                image: "/placeholder.svg?height=400&width=400&text=Customer%20Support",
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Proddy Ping?</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Experience the benefits of a messaging platform designed for the modern workplace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Enhanced Security",
                  description: "Enterprise-grade security with end-to-end encryption and advanced access controls.",
                  icon: Shield,
                },
                {
                  title: "Seamless Integration",
                  description: "Works perfectly with all other Proddy modules and integrates with your favorite tools.",
                  icon: Zap,
                },
                {
                  title: "Time-Saving AI",
                  description: "AI features that help reduce busywork and focus on meaningful communication.",
                  icon: Bot,
                },
                {
                  title: "Improved Productivity",
                  description: "Organized communication that reduces interruptions and keeps teams focused.",
                  icon: Clock,
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500">
                      <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-indigo-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Team Communication?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the Proddy beta and experience Ping along with the entire Proddy ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white border-0"
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
