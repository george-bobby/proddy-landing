"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  FormInput,
  CheckCircle,
  Bot,
  ClipboardList,
  ArrowRight,
  MessageSquare,
  Video,
  Settings,
  Bell,
  Link2,
  FileText,
  BarChart,
  Layers,
  Sparkles,
  PieChart,
  Smile,
  Zap,
  Copy,
  ListFilter,
} from "lucide-react"
import useScrollReveal from "@/hooks/use-scroll-reveal"

export default function InputPage() {
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
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/30 via-transparent to-pink-700/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-pink-900/30 text-pink-400 text-sm font-medium mb-4">
                Proddy Input
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Forms{" "}
                <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                  reimagined
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Smart form builder for collecting data, conducting surveys, and managing applications — seamlessly within the Proddy ecosystem.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white border-0"
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
              <div className="relative rounded-xl overflow-hidden border border-pink-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-pink-400/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Input"
                  alt="Proddy Input Interface"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full blur-3xl opacity-20"></div>
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
              Everything you need to create powerful forms and collect data efficiently.
            </p>
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Drag-and-Drop Form Builder",
                description: "Create custom forms with text inputs, dropdowns, multiple choice, checkboxes, rating scales, and more.",
                icon: FormInput,
                delay: 0,
              },
              {
                title: "Custom Themes & Styling",
                description: "Brand your forms with theme options and prebuilt Proddy styles to match your organization.",
                icon: Settings,
                delay: 0.1,
              },
              {
                title: "Real-Time Response Capture",
                description: "Responses are saved instantly using a real-time backend, ensuring no data is ever lost.",
                icon: Zap,
                delay: 0.2,
              },
              {
                title: "Response Dashboard",
                description: "View, filter, and manage responses from a sleek dashboard with powerful analytics.",
                icon: BarChart,
                delay: 0.3,
              },
              {
                title: "Form Logic",
                description: "Conditional logic to show/hide questions based on responses for smarter data collection.",
                icon: ListFilter,
                delay: 0.4,
              },
              {
                title: "Multi-Page Forms",
                description: "Break long forms into multiple steps for better user experience and higher completion rates.",
                icon: Layers,
                delay: 0.5,
              },
              {
                title: "Form Embeds",
                description: "Embed forms into websites or other Proddy tools like Notes or Flow for seamless integration.",
                icon: Link2,
                delay: 0.6,
              },
              {
                title: "Response Export",
                description: "Export results to CSV or sync them with other Proddy tools for further analysis.",
                icon: FileText,
                delay: 0.7,
              },
              {
                title: "Team Collaboration",
                description: "Allow team members to co-create or analyze forms together with real-time collaboration.",
                icon: MessageSquare,
                delay: 0.8,
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
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-pink-900/50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-pink-900/30 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-pink-400" aria-hidden="true" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Intuitive Form Building</h2>
            <p className="text-xl text-gray-400">
              Create beautiful forms and collect responses with a powerful yet easy-to-use interface.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl animate-reveal">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-pink-400/10"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=Proddy%20Input%20Interface"
              alt="Proddy Input Interface"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section ref={aiRef} className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-pink-800/20"></div>
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <span className="inline-block px-3 py-1 rounded-full bg-pink-900/30 text-pink-400 text-sm font-medium mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smart Forms with{" "}
              <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Harness the power of AI to create better forms and gain deeper insights from your data.
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
                  <div className="p-3 rounded-lg bg-pink-900/30 mr-4 flex-shrink-0">
                    <Bot className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">AI Form Generation</h3>
                    <p className="text-gray-400">
                      Auto-generate entire forms based on a short prompt (e.g., "Create a customer feedback form").
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-pink-900/30 mr-4 flex-shrink-0">
                    <ClipboardList className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Auto-Summarized Responses</h3>
                    <p className="text-gray-400">
                      Get concise summaries of long-form text responses to quickly understand key themes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-pink-900/30 mr-4 flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Response Insights</h3>
                    <p className="text-gray-400">
                      AI detects trends and insights across user responses to help you make better decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-pink-900/30 mr-4 flex-shrink-0">
                    <Smile className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Sentiment Analysis</h3>
                    <p className="text-gray-400">
                      Understand the emotional tone of responses to gauge customer satisfaction and feelings.
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
              <div className="relative rounded-xl overflow-hidden border border-pink-900/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-pink-400/10"></div>
                <Image
                  src="/placeholder.svg?height=1080&width=1920&text=AI%20Form%20Assistant"
                  alt="AI Form Assistant"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-pink-500 to-pink-700 rounded-full blur-3xl opacity-20"></div>
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
              Discover how Proddy Input helps teams across various industries collect and analyze data effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Marketing Teams",
                description:
                  "Create customer surveys, lead generation forms, and event registrations with powerful analytics.",
                image: "/placeholder.svg?height=400&width=400&text=Marketing",
              },
              {
                title: "HR Departments",
                description:
                  "Streamline job applications, employee feedback, and internal surveys with customizable forms.",
                image: "/placeholder.svg?height=400&width=400&text=HR",
              },
              {
                title: "Product Teams",
                description:
                  "Collect user feedback, feature requests, and beta testing data to inform product decisions.",
                image: "/placeholder.svg?height=400&width=400&text=Product",
              },
            ].map((useCase) => (
              <div key={useCase.title} className="animate-reveal">
                <div className="rounded-xl overflow-hidden mb-4">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
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
              Proddy Input integrates seamlessly with other Proddy tools and popular third-party services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-reveal">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 flex items-start">
              <div className="p-3 rounded-lg bg-pink-900/30 mr-4 flex-shrink-0">
                <FileText className="h-6 w-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Proddy Notes</h3>
                <p className="text-gray-400">
                  Embed forms directly in your notes or create forms from note templates with a single click.
                </p>
                <Link
                  href="/notes"
                  className="mt-4 inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 flex items-start">
              <div className="p-3 rounded-lg bg-pink-900/30 mr-4 flex-shrink-0">
                <Video className="h-6 w-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Proddy Flow</h3>
                <p className="text-gray-400">
                  Connect form submissions to your workflow and automatically create tasks from responses.
                </p>
                <Link
                  href="/flow"
                  className="mt-4 inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-pink-800/20"></div>
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Powerful Forms?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams using Proddy Input to collect and analyze data more effectively.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white border-0"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
