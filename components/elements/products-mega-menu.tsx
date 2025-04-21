"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { MessageSquare, ListTodo, FileText, Video, PenTool, Calendar, CheckSquare, FormInput } from "lucide-react"

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
}

// Order is important for layout - Flow must be first for proper grid layout
const products = [
  {
    name: "Flow",
    description: "Task and project management - Our flagship product",
    href: "/flow",
    icon: ListTodo,
    color: "blue",
    gradient: "from-blue-500 to-blue-400",
    preview: "The core of Proddy's ecosystem. Visualize workflows, track progress across teams, automate task prioritization, and connect all your work in one powerful hub.",
    featured: true,
  },
  {
    name: "Ping",
    description: "Team messaging and collaboration",
    href: "/ping",
    icon: MessageSquare,
    color: "indigo",
    gradient: "from-indigo-500 to-indigo-400",
    preview: "Real-time messaging with threads, reactions, and AI-powered summaries",
  },
  {
    name: "Notes",
    description: "Collaborative documents",
    href: "/notes",
    icon: FileText,
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-400",
    preview: "Create, share, and collaborate on rich documents with AI enhancements",
  },
  {
    name: "Huddle",
    description: "Video meetings and recordings",
    href: "/huddle",
    icon: Video,
    color: "red",
    gradient: "from-red-500 to-red-400",
    preview: "Seamless video meetings with transcription, recording, and summaries",
  },
  {
    name: "Canvas",
    description: "Visual whiteboarding",
    href: "/canvas",
    icon: PenTool,
    color: "yellow",
    gradient: "from-yellow-500 to-yellow-400",
    preview: "Collaborative visual workspace with AI-powered diagram suggestions",
  },
  {
    name: "Input",
    description: "Smart form builder and data collection",
    href: "/input",
    icon: FormInput,
    color: "pink",
    gradient: "from-pink-500 to-pink-400",
    preview: "Create custom forms, surveys, and applications with AI-powered insights and analytics",
  },
  {
    name: "Slots",
    description: "Smart scheduling",
    href: "/slots",
    icon: Calendar,
    color: "violet",
    gradient: "from-violet-500 to-violet-400",
    preview: "Intelligent meeting scheduling with AI-optimized time suggestions",
  },
  {
    name: "Ticks",
    description: "Personal to-do lists",
    href: "/ticks",
    icon: CheckSquare,
    color: "orange",
    gradient: "from-orange-500 to-orange-400",
    preview: "Smart to-do lists with personalized task recommendations and reminders",
  },
]

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
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
              <div className="col-span-2 grid grid-cols-3 grid-rows-3 gap-4">
                {products.map((product) => {
                  return product.name === "Flow" ? (
                    <Link
                      key={product.name}
                      href={product.href}
                      className={cn(
                        "group p-5 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border-2 border-blue-600/50 transition-all duration-300 card-hover glow col-span-2 row-span-1 relative overflow-hidden h-full flex flex-col",
                        `glow-${product.color}`,
                      )}
                      onClick={onClose}
                    >
                      <div className="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-2 py-1 rounded-bl-md">
                        Most Popular
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={cn("p-2 rounded-md bg-gradient-to-r", product.gradient)}>
                          <product.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <div
                          className={cn("text-lg font-medium bg-gradient-to-r bg-clip-text text-transparent", product.gradient)}
                        >
                          {product.name}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-300 font-medium">{product.description}</p>
                      <div className="mt-auto pt-3 text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                        {product.preview}
                      </div>
                    </Link>
                  ) : (
                    <Link
                      key={product.name}
                      href={product.href}
                      className={cn(
                        "group p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 transition-all duration-300 card-hover glow h-full flex flex-col",
                        `glow-${product.color}`,
                      )}
                      onClick={onClose}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={cn("p-2 rounded-md bg-gradient-to-r", product.gradient)}>
                          <product.icon className="h-5 w-5 text-white" aria-hidden="true" />
                        </div>
                        <div
                          className={cn("font-medium bg-gradient-to-r bg-clip-text text-transparent", product.gradient)}
                        >
                          {product.name}
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-400">{product.description}</p>
                      <div className="mt-auto pt-3 text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                        {product.preview}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="col-span-1 bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg p-6 border border-gray-800">
                <h3 className="text-lg font-medium text-white mb-2">Why Proddy?</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Proddy brings all your productivity tools into one unified platform with deep AI integration.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-500/20 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                    </div>
                    <span className="text-gray-300">All tools seamlessly integrated with <span className="text-blue-400 font-medium">Flow</span> at the center</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-gray-300">AI-powered features throughout</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <span className="text-gray-300">Consistent experience across all modules</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-violet-500/20 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-violet-500"></div>
                    </div>
                    <span className="text-gray-300">Currently in free beta</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
