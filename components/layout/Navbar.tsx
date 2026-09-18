"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Send } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <Link
          href="#hero"
          className="group flex items-center gap-2 text-base font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold shadow-sm transition-transform group-hover:scale-105">
            {portfolioConfig.personal.name.charAt(0)}
          </span>
          <span className="font-heading font-bold text-foreground">
            {portfolioConfig.personal.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden md:flex md:items-center md:gap-1 lg:gap-2"
        >
          {portfolioConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions: Theme toggle, CTA, Mobile Menu */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex gap-1.5"
            )}
          >
            <Send className="size-3.5" />
            <span>Liên hệ</span>
          </Link>

          {/* Mobile Menu Drawer via Sheet */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Mở menu điều hướng"
                  >
                    <Menu className="size-5" />
                  </Button>
                }
              />
              <SheetContent side="right" className="flex flex-col gap-6 p-6">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-sm">
                      {portfolioConfig.personal.name.charAt(0)}
                    </span>
                    <span>{portfolioConfig.personal.name}</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-3 py-2">
                  {portfolioConfig.navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4">
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className={cn(buttonVariants(), "w-full justify-center gap-2")}
                  >
                    <Send className="size-4" />
                    <span>Liên hệ ngay</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
