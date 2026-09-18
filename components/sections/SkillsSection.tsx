import { Code2, Server, Cloud, Wrench } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card"

function getCategoryIcon(index: number) {
  switch (index) {
    case 0:
      return <Code2 className="size-5 text-primary" />
    case 1:
      return <Server className="size-5 text-primary" />
    case 2:
      return <Cloud className="size-5 text-primary" />
    case 3:
      return <Wrench className="size-5 text-primary" />
    default:
      return <Code2 className="size-5 text-primary" />
  }
}

export default function SkillsSection() {
  const { skillCategories } = portfolioConfig

  return (
    <section id="skills" className="scroll-mt-20 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-3">
            Kỹ năng
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Công nghệ & Kỹ năng Chuyên môn
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Hệ thống kỹ năng được phân loại rõ ràng, tập trung vào các công nghệ hiện đại và tiêu chuẩn công nghiệp.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card
              key={category.category}
              className="flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:shadow-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    {getCategoryIcon(index)}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      {category.category}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={skill.highlight ? "secondary" : "outline"}
                      className="cursor-default px-2.5 py-1 text-xs font-medium transition-colors hover:border-primary/50"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
