"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, MessageSquare } from "lucide-react"
import { products } from "../data"

export function ProductsSection() {
  const productsRef = useRef<HTMLDivElement>(null)
  const productsInView = useInView(productsRef, { once: true, amount: 0.2 })

  // Separate featured products from others
  const featuredProducts = products.filter(product => product.featured)
  const flowProduct = featuredProducts.find(product => product.name === "Flow")
  const pingProduct = featuredProducts.find(product => product.name === "Ping")
  const otherProducts = products.filter(product => !product.featured)

  return (
    <section ref={productsRef} className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            The Complete Productivity Ecosystem
          </h2>
          <p className="text-xl text-gray-400">
            Eight powerful tools, one seamless experience, infinite possibilities.
          </p>
        </div>

        {/* Featured Products - Flow and Ping */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Flow Card */}
          {flowProduct && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7 }}
              className="h-full"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-blue-600/30 shadow-xl shadow-blue-900/10 h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-blue-800/10"></div>
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg font-medium flex items-center">
                  <Star className="h-4 w-4 mr-1.5" />
                  Flagship Product
                </div>

                <div className="flex flex-col h-full p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 mr-4 flex-shrink-0">
                      <flowProduct.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                        Proddy {flowProduct.name}
                      </h3>
                      <p className="text-gray-300">{flowProduct.description}</p>
                    </div>
                  </div>

                  <p className="text-xl text-gray-200 mb-4 font-medium">
                    {flowProduct.tagline}
                  </p>

                  <div className="relative rounded-xl overflow-hidden border border-blue-900/50 shadow-2xl h-40 mb-6 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-blue-400/10"></div>
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Proddy%20Flow"
                      alt="Proddy Flow"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {flowProduct.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="p-1 rounded-full bg-blue-900/30 mr-3 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link href={flowProduct.href}>
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border-0"
                      >
                        Explore Proddy Flow
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Ping Card */}
          {pingProduct && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="h-full"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-indigo-600/30 shadow-xl shadow-indigo-900/10 h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-indigo-800/10"></div>
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-2 rounded-bl-lg font-medium flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1.5" />
                  Communication Hub
                </div>

                <div className="flex flex-col h-full p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 mr-4 flex-shrink-0">
                      <pingProduct.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                        Proddy {pingProduct.name}
                      </h3>
                      <p className="text-gray-300">{pingProduct.description}</p>
                    </div>
                  </div>

                  <p className="text-xl text-gray-200 mb-4 font-medium">
                    {pingProduct.tagline}
                  </p>

                  <div className="relative rounded-xl overflow-hidden border border-indigo-900/50 shadow-2xl h-40 mb-6 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-indigo-400/10"></div>
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Proddy%20Ping"
                      alt="Proddy Ping"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {pingProduct.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="p-1 rounded-full bg-indigo-900/30 mr-3 mt-1 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link href={pingProduct.href}>
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white border-0"
                      >
                        Explore Proddy Ping
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Other Products */}
        <h3 className="text-2xl font-bold mb-8 text-center">More Powerful Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={productsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: productsInView ? 0.2 + index * 0.1 : 0,
              }}
              className="group h-full"
            >
              <Link
                href={product.href}
                className={`flex flex-col h-full p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-${product.color}-600/40 hover:bg-gray-800/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-${product.color}-900/10`}
              >
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${product.gradient} mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3
                        className={`text-xl font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                      >
                        Proddy {product.name}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm">{product.description}</p>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden border border-gray-800 h-40 mb-4 group-hover:border-gray-700 transition-colors duration-300 flex-shrink-0">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Proddy%20${product.name}`}
                    alt={`Proddy ${product.name}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr from-${product.color}-500/10 via-transparent to-${product.color}-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
                <div className="flex justify-between items-center mt-auto pt-2">
                  <span className={`text-sm text-gray-400 group-hover:text-${product.color}-400 transition-colors duration-300`}>
                    Learn more
                  </span>
                  <div className={`p-2 rounded-full bg-gray-800 group-hover:bg-${product.color}-900/30 transition-colors duration-300`}>
                    <ArrowRight className={`h-4 w-4 text-gray-400 group-hover:text-${product.color}-400 transition-colors duration-300`} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
