import Link from "next/link"
import {
  Download,
  Send,
  ArrowDown,
  Mail,
  MessageSquare
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
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden py-20 lg:py-28"
    >
      {/* Decorative background glow using theme tokens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="mb-6 animate-fade-in">
          <Badge
            variant="secondary"
            className="gap-2 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-secondary/80"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span>{personal.status}</span>
          </Badge>
        </div>

        {/* Heading & Job Title */}
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Xin chào, tôi là{" "}
          <span className="text-primary underline decoration-primary/40 underline-offset-8">
            {personal.name}
          </span>
        </h1>

        <p className="mt-4 font-heading text-xl font-semibold tracking-tight text-muted-foreground sm:text-2xl">
          {personal.title}
        </p>

        {/* Tagline / Short Bio */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {personal.shortBio}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#contact"
            className={cn(buttonVariants({ size: "lg" }), "gap-2 shadow-sm")}
          >
            <Send className="size-4" />
            <span>Liên hệ hợp tác</span>
          </Link>

          <Link
            href={personal.resumeUrl}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2"
            )}
          >
            <Download className="size-4" />
            <span>Tải CV (Resume)</span>
          </Link>

          <Link
            href="#projects"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "gap-2"
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
                  "transition-transform hover:-translate-y-0.5"
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
