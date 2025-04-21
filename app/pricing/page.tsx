"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import useScrollReveal from "@/hooks/use-scroll-reveal"

export default function PricingPage() {
  // Use the custom hook for scroll reveal animations
  useScrollReveal()

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get access to all Proddy modules with one simple subscription.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Beta Announcement */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-900/30 to-violet-900/30 rounded-xl p-8 md:p-12 border border-indigo-800/50 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-3 rounded-full bg-indigo-900/50 mb-6">
              <Sparkles className="h-6 w-6 text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Proddy is in Beta</h2>
            <p className="text-2xl text-indigo-200 mb-6">Proddy is currently 100% free to use.</p>
            <p className="text-xl text-gray-300 mb-8">
              Enjoy all features without limits while we improve the platform for public release.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
              >
                Join the Beta
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">No credit card required. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Everything you need to know about Proddy.</p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
              <h3 className="text-xl font-semibold text-white mb-3">How long will the beta period last?</h3>
              <p className="text-gray-300">
                We expect the beta period to last approximately 3-6 months. Beta users will receive advance notice
                before we transition to paid plans.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
              <h3 className="text-xl font-semibold text-white mb-3">Are there any limitations during the beta?</h3>
              <p className="text-gray-300">
                No, during the beta you have access to all features without any limitations. We want you to experience
                the full power of Proddy while we gather feedback to improve the platform.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
              <h3 className="text-xl font-semibold text-white mb-3">Will my data be preserved after the beta?</h3>
              <p className="text-gray-300">
                Yes, all your data and content created during the beta will be preserved when we transition to the full
                release. Your workflows and team setups will remain intact.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
              <h3 className="text-xl font-semibold text-white mb-3">
                Do you offer special programs for nonprofits or educational institutions?
              </h3>
              <p className="text-gray-300">
                Yes, we plan to offer special programs for nonprofits, educational institutions, and open-source
                projects after our beta period. Please contact our team for more information.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 animate-reveal">
              <h3 className="text-xl font-semibold text-white mb-3">How can I provide feedback during the beta?</h3>
              <p className="text-gray-300">
                We welcome your feedback! You can submit suggestions, report bugs, or request features directly through
                the feedback button in the app or by emailing our support team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-violet-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-gray-900/80 rounded-xl p-8 md:p-12 border border-gray-800 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Proddy Beta Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience all premium features completely free during our beta period.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0"
              >
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>
    </>
  )
}
