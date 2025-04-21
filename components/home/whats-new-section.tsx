"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function WhatsNewSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/10 via-transparent to-pink-700/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-pink-900/30 text-pink-400 text-sm font-medium mb-4">
              Just Launched
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Introducing{" "}
              <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                Proddy Input
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Our newest addition to the Proddy ecosystem - a powerful form builder for collecting data, conducting surveys, and managing applications.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="p-1 rounded-full bg-pink-900/30 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-300">Drag-and-drop form builder with customizable themes</span>
              </li>
              <li className="flex items-start">
                <div className="p-1 rounded-full bg-pink-900/30 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-300">Real-time response dashboard with powerful analytics</span>
              </li>
              <li className="flex items-start">
                <div className="p-1 rounded-full bg-pink-900/30 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-gray-300">AI-powered form generation and response insights</span>
              </li>
            </ul>
            <Link href="/input" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white border-0"
              >
                Explore Proddy Input
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2">
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
          </div>
        </div>
      </div>
    </section>
  )
}
