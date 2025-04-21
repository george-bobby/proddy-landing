"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Users,
  LineChart,
  Palette,
  Code,
  Rocket,
  GraduationCap,
  CheckCircle,
} from "lucide-react"

interface SolutionsMegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

const solutions = [
  {
    id: "remote-teams",
    title: "Remote Teams",
    description:
      "Keep your distributed team connected, aligned, and productive with Proddy's comprehensive suite of collaboration tools.",
    icon: Users,
    color: "indigo",
    gradient: "from-indigo-500 to-indigo-400",
    preview: "Overcome time zone challenges and maintain team cohesion with integrated collaboration tools.",
  },
  {
    id: "product-managers",
    title: "Product Managers",
    description:
      "Streamline your product development process from ideation to launch with tools designed for modern product management.",
    icon: LineChart,
    color: "blue",
    gradient: "from-blue-500 to-blue-400",
    preview: "Manage roadmaps, gather feedback, and coordinate cross-functional teams seamlessly.",
  },
  {
    id: "developers",
    title: "Developers",
    description:
      "Boost your development team's productivity with tools that streamline communication, planning, and collaboration.",
    icon: Code,
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-400",
    preview: "Track issues, manage sprints, and collaborate on technical documentation efficiently.",
  },
  {
    id: "designers",
    title: "Designers",
    description:
      "Enhance your design workflow with collaborative tools that help you ideate, create, and gather feedback efficiently.",
    icon: Palette,
    color: "yellow",
    gradient: "from-yellow-500 to-yellow-400",
    preview: "Collaborate on visual concepts, manage design systems, and gather stakeholder feedback.",
  },
  {
    id: "founders",
    title: "Founders & Executives",
    description:
      "Manage your startup's operations efficiently with an all-in-one platform that grows with your business.",
    icon: Rocket,
    color: "violet",
    gradient: "from-violet-500 to-violet-400",
    preview: "Maintain visibility across teams, manage time efficiently, and track strategic initiatives.",
  },
  {
    id: "students",
    title: "Students & Educators",
    description:
      "Enhance learning and teaching experiences with collaborative tools designed for educational environments.",
    icon: GraduationCap,
    color: "orange",
    gradient: "from-orange-500 to-orange-400",
    preview: "Manage assignments, collaborate on projects, and organize study materials effectively.",
  },
]

export default function SolutionsMegaMenu({ isOpen, onClose }: SolutionsMegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        onClose()
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 md:top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-2xl z-50 hidden md:block"
          ref={menuRef}
          onMouseLeave={onClose}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                {solutions.map((solution) => (
                  <Link
                    key={solution.id}
                    href={`/solutions/${solution.id}`}
                    className={cn(
                      "group p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 transition-all duration-300 card-hover glow",
                      `glow-${solution.color}`,
                    )}
                    onClick={onClose}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={cn("p-2 rounded-md bg-gradient-to-r", solution.gradient)}>
                        <solution.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <div
                        className={cn("font-medium bg-gradient-to-r bg-clip-text text-transparent", solution.gradient)}
                      >
                        {solution.title}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">{solution.description}</p>
                    <div className="mt-3 text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                      {solution.preview}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="col-span-1 bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-medium text-white mb-2">Why Proddy for Teams?</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Proddy adapts to your team's unique needs with specialized solutions for every role and workflow.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                    </div>
                    <span className="text-gray-300">Role-specific workflows</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-gray-300">Cross-functional collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-gray-300">Seamless information sharing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-violet-500/20 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-violet-500"></div>
                    </div>
                    <span className="text-gray-300">AI-powered team insights</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/solutions"
                    className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
                    onClick={onClose}
                  >
                    View all solutions
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}