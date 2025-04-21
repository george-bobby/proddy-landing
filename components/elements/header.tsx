"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, FormInput } from "lucide-react"
import MegaMenu from "./products-mega-menu"
import SolutionsMegaMenu from "./solutions-mega-menu"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false)
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Close other menu when one is opened
  useEffect(() => {
    if (isProductsMenuOpen) setIsSolutionsMenuOpen(false)
  }, [isProductsMenuOpen])

  useEffect(() => {
    if (isSolutionsMenuOpen) setIsProductsMenuOpen(false)
  }, [isSolutionsMenuOpen])

  // Close all menus when scrolling
  useEffect(() => {
    const handleScrollForMenus = () => {
      setIsProductsMenuOpen(false)
      setIsSolutionsMenuOpen(false)
    }

    window.addEventListener("scroll", handleScrollForMenus)
    return () => window.removeEventListener("scroll", handleScrollForMenus)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Proddy
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              className="text-sm"
              onMouseEnter={() => setIsProductsMenuOpen(true)}
              onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
            >
              Products
            </Button>
            <Button
              variant="ghost"
              className="text-sm"
              onMouseEnter={() => setIsSolutionsMenuOpen(true)}
              onClick={() => setIsSolutionsMenuOpen(!isSolutionsMenuOpen)}
            >
              Solutions
            </Button>
            <Link href="/pricing" passHref>
              <Button variant="ghost" className="text-sm">
                Pricing
              </Button>
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Log in
            </Button>
            <Button
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
              size="sm"
            >
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => {
              setIsProductsMenuOpen(!isProductsMenuOpen)
              setIsSolutionsMenuOpen(false)
            }}>
              {isProductsMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      <MegaMenu isOpen={isProductsMenuOpen} onClose={() => setIsProductsMenuOpen(false)} />
      <SolutionsMegaMenu isOpen={isSolutionsMenuOpen} onClose={() => setIsSolutionsMenuOpen(false)} />

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isProductsMenuOpen ? "block" : "hidden"} bg-black/95 backdrop-blur-md border-t border-gray-800`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            {/* Flow is now col-span-2 and appears first */}
            <Link href="/flow" className="p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border-2 border-blue-600/50 relative col-span-2">
              <div className="absolute top-0 right-0 bg-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-bl-md">
                Most Popular
              </div>
              <div className="font-medium text-blue-400 text-lg">Flow</div>
              <div className="text-xs text-gray-300">Our flagship task & project management tool</div>
            </Link>
            <Link href="/ping" className="p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800">
              <div className="font-medium text-indigo-400">Ping</div>
              <div className="text-xs text-gray-400">Messaging</div>
            </Link>
            <Link href="/notes" className="p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800">
              <div className="font-medium text-emerald-400">Notes</div>
              <div className="text-xs text-gray-400">Docs</div>
            </Link>
            <Link href="/huddle" className="p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800">
              <div className="font-medium text-red-400">Huddle</div>
              <div className="text-xs text-gray-400">Meetings</div>
            </Link>
            <Link href="/canvas" className="p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800">
              <div className="font-medium text-yellow-400">Canvas</div>
              <div className="text-xs text-gray-400">Whiteboarding</div>
            </Link>
            <Link href="/slots" className="p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800">
              <div className="font-medium text-violet-400">Slots</div>
              <div className="text-xs text-gray-400">Scheduling</div>
            </Link>
            <Link href="/input" className="p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800">
              <div className="font-medium text-pink-400">Input</div>
              <div className="text-xs text-gray-400">Forms & Surveys</div>
            </Link>
            <Link
              href="/ticks"
              className="p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800"
            >
              <div className="font-medium text-orange-400">Ticks</div>
              <div className="text-xs text-gray-400">To-dos</div>
            </Link>
          </div>
          <div className="space-y-2">
            <div className="space-y-2 pl-4 pr-2 py-2 rounded-md bg-gray-900/30">
              <div className="font-medium text-gray-300 mb-1">Solutions:</div>
              <Link href="/solutions" className="block px-3 py-1 text-sm rounded-md hover:bg-gray-800 text-indigo-400">
                View All Solutions
              </Link>
              <Link href="/solutions/remote-teams" className="block px-3 py-1 text-sm rounded-md hover:bg-gray-800">
                Remote Teams
              </Link>
              <Link href="/solutions/product-managers" className="block px-3 py-1 text-sm rounded-md hover:bg-gray-800">
                Product Managers
              </Link>
              <Link href="/solutions/developers" className="block px-3 py-1 text-sm rounded-md hover:bg-gray-800">
                Developers
              </Link>
              <Link href="/solutions/designers" className="block px-3 py-1 text-sm rounded-md hover:bg-gray-800">
                Designers
              </Link>
              <Link href="/solutions/founders" className="block px-3 py-1 text-sm rounded-md hover:bg-gray-800">
                Founders & Executives
              </Link>
              <Link href="/solutions/students" className="block px-3 py-1 text-sm rounded-md hover:bg-gray-800">
                Students & Educators
              </Link>
            </div>
            <Link href="/pricing" className="block px-4 py-2 rounded-md hover:bg-gray-800">
              Pricing
            </Link>
            <Link href="/login" className="block px-4 py-2 rounded-md hover:bg-gray-800">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
