"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  FileText,
  CheckCircle,
  Bot,
  Tag,
  ArrowRight,
  MessageSquare,
  Video,
  History,
  FolderTree,
  Upload,
  LineChart,
} from "lucide-react"
import useScrollReveal from "@/hooks/use-scroll-reveal"

export default function NotesPage() {
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
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 via-transparent to-emerald-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm font-medium mb-4">
                Proddy Notes
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Team documentation{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  reimagined
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Create, collaborate, and organize your team's knowledge with AI-powered documentation that evolves with
                your work.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white border-0"
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
              <div className="relative rounded-xl overflow-hidden border border-emerald-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-emerald-500/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Notes"
                  alt="Proddy Notes Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rich Documentation Features</h2>
            <p className="text-gray-400 text-lg">
              Everything you need to create, organize, and share knowledge within your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Collaborative Rich Text Editor",
                description: "Edit documents together in real-time with multiple team members.",
                icon: FileText,
                delay: 0,
              },
              {
                title: "Rich Formatting",
                description: "Support for headings, lists, tables, images, embeds, and more.",
                icon: Tag,
                delay: 0.1,
              },
              {
                title: "Document Templates",
                description: "Ready-made templates for meeting notes, specs, and documentation.",
                icon: FileText,
                delay: 0.2,
              },
              {
                title: "Version History",
                description: "Track document changes with complete version history and rollback options.",
                icon: History,
                delay: 0.3,
              },
              {
                title: "Tagging & Linking",
                description: "Organize content with tags and create links between related documents.",
                icon: Tag,
                delay: 0.4,
              },
              {
                title: "Shared Workspaces",
                description: "Organize documents in team folders with customizable permissions.",
                icon: FolderTree,
                delay: 0.5,
              },
              {
                title: "File Uploads",
                description: "Attach and embed files directly in your documents with EdgeStore support.",
                icon: Upload,
                delay: 0.6,
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
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-emerald-900/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-emerald-900/30 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-emerald-400" aria-hidden="true" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Clarity</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                A clean, intuitive interface that helps your team create and find information quickly.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl animate-reveal">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-emerald-500/10"></div>
              <Image
                src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Notes%20Interface"
                alt="Proddy Notes Interface"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Distraction-Free Editing</h3>
                <p className="text-gray-400">
                  Focus on your content with a clean, minimal interface that puts your writing first.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
                <h3 className="text-xl font-semibold text-white mb-2">Powerful Search</h3>
                <p className="text-gray-400">
                  Find any document or piece of information quickly with advanced search capabilities.
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
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-emerald-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 text-sm font-medium mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Documentation with{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Proddy Notes leverages cutting-edge AI to make your documentation more useful and actionable.
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
                  <div className="p-3 rounded-lg bg-emerald-900/30 mr-4 flex-shrink-0">
                    <Bot className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Automatic Summarization</h3>
                    <p className="text-gray-400">
                      AI automatically summarizes long documents to help team members quickly grasp key points.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-emerald-900/30 mr-4 flex-shrink-0">
                    <Tag className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Smart Tagging</h3>
                    <p className="text-gray-400">
                      AI suggests relevant tags and titles based on document content for better organization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-emerald-900/30 mr-4 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Action Item Extraction</h3>
                    <p className="text-gray-400">
                      AI identifies and extracts action items and decisions from meeting notes and documents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-emerald-900/30 mr-4 flex-shrink-0">
                    <Video className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Meeting Transcript Conversion</h3>
                    <p className="text-gray-400">
                      Convert meeting transcripts into structured, formatted notes with key points highlighted.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-emerald-900/30 mr-4 flex-shrink-0">
                    <FileText className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Content Enhancement</h3>
                    <p className="text-gray-400">
                      AI helps rewrite or improve the language and clarity of document sections on demand.
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
              <div className="bg-black/50 rounded-xl p-6 border border-emerald-900/50">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">AI</span>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <p className="text-sm text-gray-300">
                      I've analyzed your meeting notes and extracted the following action items:
                      <br />
                      <br />
                      1. @Sarah: Finalize the design mockups by Friday
                      <br />
                      2. @Michael: Set up the development environment
                      <br />
                      3. @Team: Review the project requirements doc
                      <br />
                      <br />
                      Would you like me to create these as tasks in Flow and notify the assignees?
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">U</span>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-lg p-3">
                    <p className="text-sm text-gray-300">Yes, please create the tasks and notify everyone.</p>
                  </div>
                </div>
                <div className="mt-3 flex space-x-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse delay-100"></div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse delay-200"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Uses Proddy Notes?</h2>
            <p className="text-gray-400 text-lg">Designed for teams that value knowledge sharing and documentation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Engineering Teams",
                description:
                  "Document technical specifications, architecture decisions, and knowledge bases for future reference.",
                image: "/placeholder.svg?height=400&width=400&text=Engineering%20Teams",
              },
              {
                title: "Product Teams",
                description:
                  "Create product requirements, user research findings, and feature specifications in one place.",
                image: "/placeholder.svg?height=400&width=400&text=Product%20Teams",
              },
              {
                title: "Remote Teams",
                description: "Keep distributed team members aligned with shared documentation and meeting notes.",
                image: "/placeholder.svg?height=400&width=400&text=Remote%20Teams",
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
                Proddy Notes works perfectly with other Proddy modules and your favorite tools.
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
                    Link documents to tasks, embed task boards in your notes, and convert action items into assignable
                    tasks.
                  </p>
                  <Link
                    href="/flow"
                    className="mt-4 inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 flex items-start">
                <div className="p-3 rounded-lg bg-indigo-900/30 mr-4 flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proddy Ping</h3>
                  <p className="text-gray-400">
                    Share documents in chat, reference conversations in your notes, and get notifications about document
                    updates.
                  </p>
                  <Link
                    href="/ping"
                    className="mt-4 inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-emerald-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Team Documentation?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the Proddy beta and experience Notes along with the entire Proddy ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white border-0"
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
