import { ShieldCheck, Palette, Gauge } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card"

const principleIcons = [
  <ShieldCheck key="shield" className="size-5 text-primary" />,
  <Palette key="palette" className="size-5 text-primary" />,
  <Gauge key="gauge" className="size-5 text-primary" />
]

export default function AboutSection() {
  const { about } = portfolioConfig.personal

  return (
    <section id="about" className="scroll-mt-20 py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-3">
            Giới thiệu
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Về bản thân & Định hướng
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Hành trình xây dựng giải pháp công nghệ bền vững, đề cao trải nghiệm người dùng và chất lượng mã nguồn.
          </p>
        </div>

        {/* Narrative bio paragraphs */}
        <Card className="border-border bg-card/60 backdrop-blur-xs">
          <CardContent className="flex flex-col gap-4 p-6 sm:p-8">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-card-foreground/90 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {about.stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <CardHeader className="pb-2">
                <CardTitle className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </CardTitle>
                <p className="font-heading font-medium text-foreground">
                  {stat.label}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-xs">
                  {stat.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Principles */}
        <div className="flex flex-col gap-6">
          <h3 className="text-center font-heading text-xl font-semibold text-foreground sm:text-2xl">
            Nguyên tắc phát triển phần mềm
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {about.corePrinciples.map((principle, index) => (
              <Card
                key={principle.title}
                className="flex flex-col justify-between transition-all hover:border-primary/40"
              >
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    {principleIcons[index % principleIcons.length]}
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-normal">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
