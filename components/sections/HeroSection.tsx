import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const { personal } = portfolioConfig;

  return (
    <section
      id="hero"
      className="relative grid min-h-[calc(100svh-6rem)] scroll-mt-24 items-center overflow-hidden py-16 sm:py-20"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="animate-rise-in relative z-10 max-w-2xl">
          <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase text-muted-foreground">
            <span className="size-2 bg-primary" aria-hidden="true" />
            {personal.status}
          </p>
          <p className="mb-4 font-mono text-xs uppercase text-muted-foreground">
            {personal.title} <span className="px-2 text-accent">/</span>{" "}
            {personal.location}
          </p>
          <h1 className="font-heading text-6xl font-medium leading-[0.94] sm:text-8xl lg:text-9xl">
            Nguyễn
            <br />
            <span className="font-serif italic text-accent">Huy.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-foreground sm:text-2xl">
            {personal.tagline}
          </p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            {personal.shortBio}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 rounded-none px-5",
              )}
            >
              Bắt đầu một cuộc trò chuyện
              <ArrowUpRight className="size-4" />
            </a>
            <Link
              href="#about"
              className="inline-flex h-10 items-center gap-2 px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Xem góc nhìn của tôi
              <ArrowDown className="size-4" />
            </Link>
          </div>
        </div>

        <div className="animate-rise-in animation-delay-150 relative mx-auto flex min-h-[19rem] w-full max-w-md items-center justify-center sm:min-h-[25rem] lg:min-h-[32rem]">
          <div
            aria-hidden="true"
            className="absolute inset-[8%] rotate-3 border border-foreground/25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[12%] -rotate-3 bg-primary"
          />
          <div className="relative flex size-full min-h-[19rem] items-center justify-center sm:min-h-[25rem] lg:min-h-[32rem]">
            <span
              aria-hidden="true"
              className="select-none font-serif text-[15rem] leading-none text-foreground sm:text-[20rem]"
            >
              H
            </span>
            <span className="absolute bottom-[18%] right-[8%] max-w-36 border-l-2 border-accent pl-3 font-mono text-[10px] uppercase leading-5 text-foreground">
              Làm rõ điều phức tạp.
              <br />
              Chăm chút điều nhỏ.
            </span>
            <span className="absolute left-[7%] top-[17%] font-mono text-[10px] uppercase text-foreground/70">
              H / 01
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
