"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  MessageSquare,
  ListTodo,
  FileText,
  Video,
  PenTool,
  Calendar,
  CheckSquare,
  FormInput,
  Sparkles,
  Zap,
  Clock,
  Users,
  BarChart,
  Briefcase,
  Layers
} from "lucide-react"

interface FloatingIcon {
  id: number
  icon: React.ReactNode
  color: string
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  rotate: number
}

export function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    // All available icons with their colors
    const iconComponents = [
      { icon: <MessageSquare size={32} />, color: "text-indigo-500" },
      { icon: <ListTodo size={32} />, color: "text-blue-500" },
      { icon: <FileText size={32} />, color: "text-emerald-500" },
      { icon: <Video size={32} />, color: "text-red-500" },
      { icon: <PenTool size={32} />, color: "text-yellow-500" },
      { icon: <Calendar size={32} />, color: "text-violet-500" },
      { icon: <CheckSquare size={32} />, color: "text-orange-500" },
      { icon: <FormInput size={32} />, color: "text-pink-500" },
      { icon: <Sparkles size={32} />, color: "text-blue-400" },
      { icon: <Zap size={32} />, color: "text-yellow-400" },
      { icon: <Clock size={32} />, color: "text-purple-400" },
      { icon: <Users size={32} />, color: "text-green-400" },
      { icon: <BarChart size={32} />, color: "text-cyan-400" },
      { icon: <Briefcase size={32} />, color: "text-amber-400" },
      { icon: <Layers size={32} />, color: "text-rose-400" }
    ]

    // Generate random floating icons
    const newIcons: FloatingIcon[] = []

    // Ensure we have a good distribution across the screen
    const screenDivisions = 4; // Divide screen into a 4x4 grid
    const iconsPerDivision = 1; // Just 1 icon per division for better performance

    let iconId = 0;
    for (let x = 0; x < screenDivisions; x++) {
      for (let y = 0; y < screenDivisions; y++) {
        // Add 1-2 icons per screen division
        for (let i = 0; i < Math.floor(Math.random() * iconsPerDivision) + 1; i++) {
          if (iconId >= 12) break; // Limit to 12 icons total for better performance

          const randomIcon = iconComponents[Math.floor(Math.random() * iconComponents.length)];

          newIcons.push({
            id: iconId++,
            icon: randomIcon.icon,
            color: randomIcon.color,
            x: (x * (100 / screenDivisions)) + (Math.random() * (100 / screenDivisions)),
            y: (y * (100 / screenDivisions)) + (Math.random() * (100 / screenDivisions)),
            size: Math.random() * 0.3 + 1.0, // Scale between 1.0 and 1.3
            duration: Math.random() * 10 + 50, // Between 50-60 seconds for slower, more gentle movement
            delay: Math.random() * 2,
            opacity: Math.random() * 0.25 + 0.35, // Between 0.35 and 0.6 for higher visibility
            rotate: Math.random() * 360
          })
        }
      }
    }

    setIcons(newIcons)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Center highlight removed for better performance */}

      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute p-2 rounded-full bg-gray-900/30"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            opacity: icon.opacity,
            scale: icon.size,
            filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))',
            WebkitFilter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))'
          }}
          animate={{
            y: [0, Math.random() * 30 - 15, 0], // Gentle vertical floating only
            scale: [icon.size, icon.size * 1.05, icon.size], // Subtle scale change
            opacity: [icon.opacity, icon.opacity * 1.3, icon.opacity], // Less dramatic opacity change
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: icon.delay,
          }}
        >
          <div className={`${icon.color} opacity-70 hover:opacity-90 transition-all duration-500 drop-shadow-md`}>
            {icon.icon}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
