import { Clock, Plus, ArrowUpRight } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Subtle gradient colors per card index
const CARD_ACCENTS = [
  "from-blue-500/10 via-transparent to-transparent border-blue-500/20",
  "from-violet-500/10 via-transparent to-transparent border-violet-500/20",
  "from-emerald-500/10 via-transparent to-transparent border-emerald-500/20",
]

const ICON_COLORS = [
  "bg-blue-500/10 text-blue-500",
  "bg-violet-500/10 text-violet-500",
  "bg-emerald-500/10 text-emerald-500",
]

export default function ProjectsSection() {
  const { projects } = portfolioConfig

  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <Badge variant="outline" className="px-3 py-1 text-xs tracking-widest uppercase">
            Dự án tiêu biểu
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sản phẩm đã xây dựng
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground leading-relaxed">
            Mục này sẽ được cập nhật với các dự án thực tế. Hiện tại đang trong quá trình hoàn thiện.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const accent = CARD_ACCENTS[idx % CARD_ACCENTS.length]
            const iconColor = ICON_COLORS[idx % ICON_COLORS.length]

            return (
              <div
                key={project.id}
                className={cn(
                  "group relative flex flex-col gap-4 rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                  accent
                )}
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className={cn("flex size-10 items-center justify-center rounded-xl text-sm font-bold", iconColor)}>
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[10px] font-normal tracking-wide"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Title & description */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                {project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-[10px] font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Coming soon footer */}
                <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground/60">
                  <Clock className="size-3" />
                  <span>Sắp cập nhật</span>
                </div>

                {/* Hover glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-primary/20 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            )
          })}

          {/* "Add project" placeholder card */}
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border/60 bg-muted/20 p-6 text-center transition-all duration-300 hover:border-primary/30 hover:bg-muted/40">
            <div className="flex size-10 items-center justify-center rounded-xl border border-dashed border-border bg-background text-muted-foreground">
              <Plus className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-foreground">Thêm dự án thực tế</p>
              <p className="text-xs text-muted-foreground">
                Chỉnh sửa trong{" "}
                <code className="rounded bg-muted px-1 py-0.5 font-mono text-[10px]">
                  config/portfolio.ts
                </code>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/50">
          <ArrowUpRight className="size-3.5" />
          <span>Các dự án thực tế sẽ được bổ sung sau khi hoàn thiện</span>
        </div>

      </div>
    </section>
  )
}
