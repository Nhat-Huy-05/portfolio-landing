import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { portfolioConfig } from "@/config/portfolio"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.name} | ${portfolioConfig.personal.title}`,
  description: portfolioConfig.personal.shortBio,
  keywords: [
    "Portfolio",
    portfolioConfig.personal.name,
    "Full-stack Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui"
  ],
  authors: [{ name: portfolioConfig.personal.name }],
  creator: portfolioConfig.personal.name,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: `${portfolioConfig.personal.name} | ${portfolioConfig.personal.title}`,
    description: portfolioConfig.personal.shortBio,
    siteName: `${portfolioConfig.personal.name} Portfolio`
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.personal.name} | ${portfolioConfig.personal.title}`,
    description: portfolioConfig.personal.shortBio
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 px-4 pt-24 sm:px-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
