import Link from "next/link"
import {
  Download,
  Send,
  ArrowDown,
  Mail,
  MessageSquare,
  Code2,
  Zap
} from "lucide-react"
import { portfolioConfig, type SocialLink } from "@/config/portfolio"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

function getSocialIcon(icon: SocialLink["icon"]) {
  switch (icon) {
    case "github":
      return <Icons.gitHub className="size-4" />
    case "linkedin":
      return <Icons.linkedIn className="size-4" />
    case "twitter":
      return <Icons.twitter className="size-4" />
    case "mail":
      return <Mail className="size-4" />
    case "telegram":
      return <MessageSquare className="size-4" />
    default:
      return <Mail className="size-4" />
  }
}

export default function HeroSection() {
  const { personal, socialLinks } = portfolioConfig

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden py-20 lg:py-28"
    >
      {/* 1. High-tech Grid Pattern with Radial Vignette (Vercel / Linear Style) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
      >
        <svg
          className="absolute inset-0 h-full w-full stroke-foreground/[0.05] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_50%,transparent_100%)] dark:stroke-foreground/[0.08]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-grid-pattern"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="-1"
            >
              <path d="M.5 44V.5H44" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#hero-grid-pattern)"
          />
        </svg>
      </div>

      {/* 2. Multi-layer Ambient Aurora Glows (Raycast / Stripe Style) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Top Center Spotlight Glow */}
        <div className="animate-pulse-slow absolute -top-32 left-1/2 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/25 via-primary/10 to-transparent blur-[120px]" />

        {/* Left Secondary Glow */}
        <div className="absolute top-1/4 -left-28 h-80 w-80 rounded-full bg-primary/15 blur-[130px]" />

        {/* Right Secondary Glow */}
        <div className="absolute top-1/3 -right-28 h-88 w-88 rounded-full bg-primary/15 blur-[140px]" />
      </div>

      {/* 3. Floating Glassmorphism Tech Accents (Desktop only - frames the hero cleanly) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto hidden max-w-6xl -translate-y-1/2 justify-between px-4 lg:flex"
      >
        {/* Left Floating Card */}
        <div className="animate-float flex items-center gap-3 rounded-2xl border border-border/70 bg-card/60 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md transition-transform">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Code2 className="size-4" />
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-foreground">Clean Architecture</p>
            <p className="text-[11px] text-muted-foreground">TypeScript & Next.js</p>
          </div>
        </div>

        {/* Right Floating Card */}
        <div className="animate-float-delayed flex items-center gap-3 rounded-2xl border border-border/70 bg-card/60 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-md transition-transform">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Zap className="size-4" />
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-foreground">Performance 100%</p>
            <p className="text-[11px] text-muted-foreground">Core Web Vitals</p>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="mb-6">
          <Badge
            variant="secondary"
            className="gap-2 border border-border/60 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-xs backdrop-blur-md transition-all hover:bg-muted"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span>{personal.status}</span>
          </Badge>
        </div>

        {/* Heading & Name */}
        <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-foreground">Xin chào, tôi là </span>
          <span className="inline-block text-primary">
            {personal.name}
          </span>
        </h1>

        {/* Subtitle / Job Title */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <p className="font-heading text-xl font-semibold tracking-tight text-foreground/85 sm:text-2xl">
            {personal.title}
          </p>
        </div>

        {/* Tagline / Short Bio */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {personal.shortBio}
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 shadow-md shadow-primary/10 transition-all hover:shadow-lg hover:shadow-primary/20"
            )}
          >
            <Send className="size-4" />
            <span>Liên hệ hợp tác</span>
          </Link>

          <Link
            href={personal.resumeUrl}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 border-border/80 bg-background/70 backdrop-blur-xs hover:bg-muted/80"
            )}
          >
            <Download className="size-4" />
            <span>Tải CV (Resume)</span>
          </Link>

          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "gap-2 hover:bg-secondary/80"
            )}
          >
            <ArrowDown className="size-4" />
            <span>Xem dự án</span>
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Kết nối trực tiếp qua mạng xã hội
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.ariaLabel}
                title={social.name}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "border-border/70 bg-background/60 backdrop-blur-xs transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-muted"
                )}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
