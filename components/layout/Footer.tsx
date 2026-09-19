"use client"

import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const { personal, navItems } = portfolioConfig

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="mt-auto border-t border-border bg-background/50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        {/* Left: Brand info & copyright */}
        <div className="flex flex-col gap-1">
          <p className="font-heading text-sm font-semibold text-foreground">
            {personal.name} • {personal.title}
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}.
          </p>
        </div>

        {/* Center: Quick navigation links */}
        <nav
          aria-label="Điều hướng chân trang"
          className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
