"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Video,
  CheckCircle,
  Bot,
  MessageSquare,
  Calendar,
  ArrowRight,
  FileText,
  Mic,
  Share2,
  UserPlus,
} from "lucide-react"
import useScrollReveal from "@/hooks/use-scroll-reveal"

export default function HuddlePage() {
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
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/30 via-transparent to-red-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-red-900/30 text-red-400 text-sm font-medium mb-4">
                Proddy Huddle
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Video meetings{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  that matter
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Seamless video meetings with AI-powered features that make your conversations more productive and
                actionable.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0"
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
              <div className="relative rounded-xl overflow-hidden border border-red-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Huddle"
                  alt="Proddy Huddle Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-red-500 to-red-700 rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Meeting Features</h2>
            <p className="text-gray-400 text-lg">
              Everything you need for seamless video meetings and productive conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "One-Click Video Calls",
                description: "Start or join meetings instantly with a single click, no downloads required.",
                icon: Video,
                delay: 0,
              },
              {
                title: "Screen Sharing",
                description: "Share your entire screen, application window, or browser tab with participants.",
                icon: Share2,
                delay: 0.1,
              },
              {
                title: "In-Call Chat",
                description: "Send messages and share links without interrupting the speaker.",
                icon: MessageSquare,
                delay: 0.2,
              },
              {
                title: "Shared Notes",
                description: "Collaborate on meeting notes in real-time during your call.",
                icon: FileText,
                delay: 0.3,
              },
              {
                title: "Scheduled Meetings",
                description: "Plan ahead with scheduled meetings or start instant calls when needed.",
                icon: Calendar,
                delay: 0.4,
              },
              {
                title: "Attendee Management",
                description: "See real-time attendee status and assign meeting roles.",
                icon: UserPlus,
                delay: 0.5,
              },
              {
                title: "Call Recording",
                description: "Record meetings for team members who couldn't attend (coming soon).",
                icon: Mic,
                delay: 0.6,
              },
              {
                title: "Calendar Integration",
                description: "Sync with Proddy Slots for seamless calendar-based scheduling.",
                icon: Calendar,
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
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-red-900/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-red-900/30 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-red-400" aria-hidden="true" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Collaboration</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                A clean, intuitive interface that helps your team communicate effectively.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl animate-reveal">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/10"></div>
              <Image
                src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Huddle%20Interface"
                alt="Proddy Huddle Interface"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Crystal Clear Audio & Video</h3>
                <p className="text-gray-400">
                  High-quality video and audio that adapts to your network conditions for smooth meetings.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Intuitive Controls</h3>
                <p className="text-gray-400">Easy-to-use controls for microphone, camera, screen sharing, and more.</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Accessible Everywhere</h3>
                <p className="text-gray-400">
                  Join meetings from any device - desktop, mobile, or tablet - with no downloads required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section ref={aiRef} className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-red-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-red-900/30 text-red-400 text-sm font-medium mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Meetings with{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proddy Huddle leverages cutting-edge AI to make your meetings more productive and actionable.
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
                  <div className="p-3 rounded-lg bg-red-900/30 mr-4 flex-shrink-0">
                    <Bot className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Meeting Summaries</h3>
                    <p className="text-gray-400">
                      AI generates comprehensive meeting summaries with key points and decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-red-900/30 mr-4 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Automatic Agenda Generation</h3>
                    <p className="text-gray-400">
                      AI creates meeting agendas based on calendar titles, descriptions, or previous discussions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-red-900/30 mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Action Item Extraction</h3>
                    <p className="text-gray-400">
                      AI identifies action items during meetings and can assign them to team members automatically.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-red-900/30 mr-4 flex-shrink-0">
                    <Mic className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Meeting Transcription</h3>
                    <p className="text-gray-400">
                      AI transcribes meetings in real-time for later reference and searchability.
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
              <div className="bg-black/50 rounded-xl p-6 border border-red-900/50">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">AI</span>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <p className="text-sm text-gray-300">
                      Here's a summary of today's product planning meeting:
                      <br />
                      <br />
                      <strong>Key Points:</strong>
                      <br />• New feature prioritization for Q3
                      <br />• User research findings from recent interviews
                      <br />• Timeline adjustments for the mobile app release
                      <br />
                      <br />
                      <strong>Action Items:</strong>
                      <br />• @Sarah: Update roadmap with new priorities
                      <br />• @Michael: Schedule follow-up user testing
                      <br />• @Team: Review updated timeline by Friday
                      <br />
                      <br />
                      Would you like me to create these action items in Flow?
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">U</span>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <p className="text-sm text-gray-300">Yes, please create the tasks and notify the team.</p>
                  </div>
                </div>
                <div className="mt-3 flex space-x-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse delay-100"></div>
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse delay-200"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Uses Proddy Huddle?</h2>
            <p className="text-gray-400 text-lg">Designed for teams that need effective virtual communication.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Remote Teams",
                description:
                  "Connect team members across different locations with high-quality video meetings and AI-powered summaries.",
                image: "/placeholder.svg?height=400&width=400&text=Remote%20Teams",
              },
              {
                title: "Project Managers",
                description:
                  "Run efficient meetings with automatic agenda generation, action item tracking, and meeting summaries.",
                image: "/placeholder.svg?height=400&width=400&text=Project%20Managers",
              },
              {
                title: "Client-Facing Teams",
                description:
                  "Impress clients with professional video meetings, shared notes, and comprehensive follow-ups.",
                image: "/placeholder.svg?height=400&width=400&text=Client%20Teams",
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
                Proddy Huddle works perfectly with other Proddy modules for a complete workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-reveal">
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 flex items-start">
                <div className="p-3 rounded-lg bg-violet-900/30 mr-4 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proddy Slots</h3>
                  <p className="text-gray-400">
                    Schedule meetings with automatic calendar integration, join with one click, and get AI-generated
                    agendas.
                  </p>
                  <Link
                    href="/slots"
                    className="mt-4 inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
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
                    Take collaborative notes during meetings, convert transcripts to structured documents, and share
                    with the team.
                  </p>
                  <Link
                    href="/notes"
                    className="mt-4 inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-transparent to-red-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Team Meetings?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the Proddy beta and experience Huddle along with the entire Proddy ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0"
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
