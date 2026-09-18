import { ExternalLink, CheckCircle2, Layers } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function ProjectsSection() {
  const { projects } = portfolioConfig

  return (
    <section id="projects" className="scroll-mt-20 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-3">
            Dự án tiêu biểu
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sản phẩm & Giải pháp Thực tiễn
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Các dự án được xây dựng với kiến trúc hướng người dùng, tối ưu hóa trải nghiệm và hiệu suất cao.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-md"
            >
              {/* Card visual mockup / header placeholder */}
              <div className="border-b border-border bg-muted/40 p-4">
                <div className="flex items-center justify-between">
                  {/* Browser-like window dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                    <span className="size-2.5 rounded-full bg-border" />
                  </div>
                  <Badge variant="outline" className="text-[10px] font-normal">
                    {project.category}
                  </Badge>
                </div>

                {/* Mockup preview banner */}
                <div className="mt-4 flex h-32 w-full flex-col items-center justify-center rounded-lg border border-border/60 bg-background/50 p-4 text-center">
                  <div className="mb-2 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Layers className="size-5" />
                  </div>
                  <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
                    {project.title.split(" - ")[0]}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Header */}
              <CardHeader className="pt-4">
                <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              {/* Card Content: Highlights & Tech-stack */}
              <CardContent className="flex flex-col gap-4">
                {/* Key Highlights */}
                <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[11px] font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Card Footer: Demo & GitHub Actions */}
              <CardFooter className="flex items-center gap-2 border-t border-border bg-muted/20 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "flex-1 justify-center gap-1.5 text-xs font-medium"
                    )}
                  >
                    <ExternalLink className="size-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "flex-1 justify-center gap-1.5 text-xs font-medium"
                    )}
                  >
                    <Icons.gitHub className="size-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
