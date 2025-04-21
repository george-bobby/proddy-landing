"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FloatingIcons } from "@/components/ui/floating-icons"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  // Micro-interactions removed for better performance

  return (
    <motion.section
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      {/* Using global background - only floating icons remain */}
      <FloatingIcons />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10">
              <span className="text-white">One Suite for All Your</span>{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Productivity Needs
              </span>
            </div>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Proddy unifies messaging, tasks, docs, meetings, whiteboards, forms, scheduling, and to-dos in one AI-powered
            platform.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0 group"
              >
                <span className="mr-2">Get Started for Free</span>
                <ArrowRight className="h-4 w-4 inline-block" />
              </Button>
            </Link>

            <Link href="/demo">
              <Button size="lg" variant="outline" className="group">
                <Play className="h-4 w-4 mr-2 group-hover:text-indigo-400 transition-colors" />
                Watch Demo
              </Button>
            </Link>
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

            {/* Badge */}
            <div className="absolute top-4 right-4 bg-indigo-600/80 text-white px-3 py-1.5 rounded-full text-sm font-medium">
              New Features Available
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-3xl opacity-20" />
        </motion.div>
      </div>
    </motion.section>
  )
}
