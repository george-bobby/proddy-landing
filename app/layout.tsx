import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/elements/header"
import Footer from "@/components/elements/footer"
import { PageTransition } from "@/components/page-transition"
// CursorEffect removed
import { ScrollProgress } from "@/components/extras/scroll-progress"
import { FloatingElements } from "@/components/extras/floating-elements"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Proddy - Unified Productivity Suite",
  description: "All-in-one productivity suite with AI-powered features for teams and individuals",
  icons: {
    icon: "/favicon.ico",
  },
  generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased relative`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ScrollProgress
            height={10}
            position="bottom"
            gradient={true}
            shadow={true}
            showPercentage={false}
          />
          <FloatingElements />
          <Header />
          <PageTransition>
            <main className="min-h-screen">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
