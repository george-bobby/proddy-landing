import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Proddy
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              The unified productivity suite with AI-powered features for teams and individuals.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/ping" className="text-gray-400 hover:text-indigo-400 text-sm">
                  Proddy Ping
                </Link>
              </li>
              <li>
                <Link href="/flow" className="text-gray-400 hover:text-blue-400 text-sm">
                  Proddy Flow
                </Link>
              </li>
              <li>
                <Link href="/notes" className="text-gray-400 hover:text-emerald-400 text-sm">
                  Proddy Notes
                </Link>
              </li>
              <li>
                <Link href="/huddle" className="text-gray-400 hover:text-red-400 text-sm">
                  Proddy Huddle
                </Link>
              </li>
              <li>
                <Link href="/canvas" className="text-gray-400 hover:text-yellow-400 text-sm">
                  Proddy Canvas
                </Link>
              </li>
              <li>
                <Link href="/slots" className="text-gray-400 hover:text-violet-400 text-sm">
                  Proddy Slots
                </Link>
              </li>
              <li>
                <Link href="/ticks" className="text-gray-400 hover:text-orange-400 text-sm">
                  Proddy Ticks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/solutions#remote-teams" className="text-gray-400 hover:text-white text-sm">
                  Remote Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions#product-managers" className="text-gray-400 hover:text-white text-sm">
                  Product Managers
                </Link>
              </li>
              <li>
                <Link href="/solutions#designers" className="text-gray-400 hover:text-white text-sm">
                  Designers
                </Link>
              </li>
              <li>
                <Link href="/solutions#developers" className="text-gray-400 hover:text-white text-sm">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/solutions#founders" className="text-gray-400 hover:text-white text-sm">
                  Founders
                </Link>
              </li>
              <li>
                <Link href="/solutions#students" className="text-gray-400 hover:text-white text-sm">
                  Students & Educators
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Proddy. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
