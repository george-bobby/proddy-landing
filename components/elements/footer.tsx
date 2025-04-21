import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Globe,
  Shield,
  Clock
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-950 border-t border-gray-800/50 pt-16 pb-8">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/50 p-8 md:p-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:max-w-md">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Stay in the productivity loop
              </h3>
              <p className="text-gray-400">
                Get the latest Proddy updates, tips, and productivity insights delivered to your inbox.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative flex-grow">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-900/50 border-gray-700 h-12 pr-12 w-full"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <Button
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white border-0 h-12"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mb-12">
          {/* Logo and Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Proddy
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              The unified productivity suite with AI-powered features for teams and individuals.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  123 Productivity Lane<br />
                  San Francisco, CA 94107
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                <a href="mailto:hello@proddy.io" className="text-sm text-gray-400 hover:text-white transition-colors">
                  hello@proddy.io
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                <a href="tel:+1-555-123-4567" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <a
                href="https://twitter.com/proddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/company/proddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/proddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://instagram.com/proddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ping" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                  Proddy Ping
                </Link>
              </li>
              <li>
                <Link href="/flow" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Proddy Flow
                </Link>
              </li>
              <li>
                <Link href="/notes" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                  Proddy Notes
                </Link>
              </li>
              <li>
                <Link href="/huddle" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                  Proddy Huddle
                </Link>
              </li>
              <li>
                <Link href="/canvas" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                  Proddy Canvas
                </Link>
              </li>
              <li>
                <Link href="/input" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  Proddy Input
                </Link>
              </li>
              <li>
                <Link href="/slots" className="text-gray-400 hover:text-violet-400 text-sm transition-colors">
                  Proddy Slots
                </Link>
              </li>
              <li>
                <Link href="/ticks" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                  Proddy Ticks
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/remote-teams" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Remote Teams
                </Link>
              </li>
              <li>
                <Link href="/solutions/product-managers" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Product Managers
                </Link>
              </li>
              <li>
                <Link href="/solutions/designers" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Designers
                </Link>
              </li>
              <li>
                <Link href="/solutions/developers" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/solutions/founders" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Founders
                </Link>
              </li>
              <li>
                <Link href="/solutions/students" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Students & Educators
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-400 hover:text-white text-sm transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-400 hover:text-white text-sm transition-colors">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Trust & Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-gray-400 hover:text-white text-sm transition-colors">
                  GDPR Compliance
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-gray-800/50 mb-8">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-emerald-500 mr-2" />
            <span className="text-sm text-gray-400">SOC 2 Certified</span>
          </div>
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-emerald-500 mr-2" />
            <span className="text-sm text-gray-400">GDPR Compliant</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-5 w-5 text-emerald-500 mr-2" />
            <span className="text-sm text-gray-400">99.9% Uptime</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-emerald-500 mr-2" />
            <span className="text-sm text-gray-400">24/7 Support</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Proddy, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
            <div className="text-gray-500 text-sm">
              Made with ❤️ in Kerala
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
