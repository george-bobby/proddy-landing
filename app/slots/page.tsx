"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  CheckCircle,
  Bot,
  Clock,
  ArrowRight,
  MessageSquare,
  Video,
  Settings,
  Bell,
  Link2,
  FileText,
} from "lucide-react"
import useScrollReveal from "@/hooks/use-scroll-reveal"

export default function SlotsPage() {
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
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/30 via-transparent to-violet-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-violet-900/30 text-violet-400 text-sm font-medium mb-4">
                Proddy Slots
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Scheduling{" "}
                <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                  simplified
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Streamline your scheduling process with intelligent calendar management, automated meeting coordination,
                and AI-powered optimization.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white border-0"
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
              <div className="relative rounded-xl overflow-hidden border border-violet-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-violet-500/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Slots"
                  alt="Proddy Slots Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-violet-500 to-violet-700 rounded-full blur-3xl opacity-20"></div>
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
              Everything you need to streamline your scheduling process and eliminate back-and-forth emails.
            </p>
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Google Calendar Sync",
                description: "Seamlessly sync with your Google Calendar to avoid double-booking and scheduling conflicts.",
                icon: Calendar,
                delay: 0,
              },
              {
                title: "Custom Availability",
                description: "Set your availability preferences, buffer times between meetings, and scheduling rules.",
                icon: Settings,
                delay: 0.1,
              },
              {
                title: "Shareable Links",
                description: "Create personalized booking links to share with clients, colleagues, and team members.",
                icon: Link2,
                delay: 0.2,
              },
              {
                title: "Event Reminders",
                description: "Automated reminders and confirmations for all participants to reduce no-shows.",
                icon: Bell,
                delay: 0.3,
              },
              {
                title: "Conflict Prevention",
                description: "Automatically detects and prevents scheduling conflicts across all your calendars.",
                icon: CheckCircle,
                delay: 0.4,
              },
              {
                title: "Buffer Times",
                description: "Add breathing room between meetings with customizable buffer times before and after events.",
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
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-violet-900/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-violet-900/30 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-violet-400" aria-hidden="true" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Streamlined Scheduling Experience</h2>
            <p className="text-xl text-gray-400">
              Eliminate the back-and-forth emails and streamline your meeting coordination process.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl animate-reveal">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-violet-500/10"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Slots%20Interface"
              alt="Proddy Slots Interface"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section ref={aiRef} className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 via-transparent to-violet-900/20"></div>
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-violet-900/30 text-violet-400 text-sm font-medium mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Scheduling with{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Leverage artificial intelligence to optimize your scheduling process and enhance productivity.
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
                  <div className="p-3 rounded-lg bg-violet-900/30 mr-4 flex-shrink-0">
                    <Bot className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Optimal Meeting Times</h3>
                    <p className="text-gray-400">
                      AI suggests the best meeting times based on team availability and individual preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-violet-900/30 mr-4 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Overbooked Day Detection</h3>
                    <p className="text-gray-400">
                      Identifies when your schedule is too packed and suggests rescheduling options.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-violet-900/30 mr-4 flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Personalized Agendas</h3>
                    <p className="text-gray-400">
                      Creates meeting agendas automatically based on the meeting title and context.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-violet-900/30 mr-4 flex-shrink-0">
                    <Video className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Meeting Summaries</h3>
                    <p className="text-gray-400">
                      Provides post-meeting summaries when integrated with Proddy Huddle.
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
              <div className="relative rounded-xl overflow-hidden border border-violet-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-violet-500/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=AI%20Scheduling%20Assistant"
                  alt="AI Scheduling Assistant"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-violet-500 to-violet-700 rounded-full blur-3xl opacity-20"></div>
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
              Discover how Proddy Slots can transform scheduling for different teams and roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Consultants & Freelancers",
                description:
                  "Streamline client bookings with professional scheduling links and automated reminders.",
                image: "/placeholder.svg?height=400&width=400&text=Consultants",
              },
              {
                title: "Team Leaders",
                description:
                  "Coordinate team meetings efficiently with AI-suggested times that work for everyone.",
                image: "/placeholder.svg?height=400&width=400&text=Team%20Leaders",
              },
              {
                title: "Customer Success Teams",
                description:
                  "Schedule client check-ins and demos without the back-and-forth emails.",
                image: "/placeholder.svg?height=400&width=400&text=Customer%20Success",
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
              Proddy Slots integrates seamlessly with other Proddy tools and popular third-party services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-reveal">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 flex items-start">
              <div className="p-3 rounded-lg bg-red-900/30 mr-4 flex-shrink-0">
                <Video className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Proddy Huddle</h3>
                <p className="text-gray-400">
                  Schedule video meetings that automatically generate meeting links and post-meeting summaries.
                </p>
                <Link
                  href="/huddle"
                  className="mt-4 inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
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
                  Automatically create meeting notes templates for scheduled meetings with agenda items.
                </p>
                <Link
                  href="/notes"
                  className="mt-4 inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 via-transparent to-violet-900/20"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Streamline Your Scheduling?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who have simplified their scheduling process with Proddy Slots.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-700 hover:to-violet-600 text-white border-0"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
