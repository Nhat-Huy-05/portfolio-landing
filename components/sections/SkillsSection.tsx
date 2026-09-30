import { portfolioConfig } from "@/config/portfolio";

export default function SkillsSection() {
  const { skillCategories } = portfolioConfig;

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-border py-20 sm:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-5 font-mono text-xs uppercase text-accent">
            02 / Công cụ
          </p>
          <h2 className="max-w-sm font-heading text-4xl font-medium leading-tight sm:text-5xl">
            Bộ đồ nghề <span className="font-serif italic">hiện tại.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
            Những công nghệ tôi dùng để đưa một ý tưởng web từ giao diện đến lúc
            vận hành.
          </p>
        </div>

        <div className="border-t border-border">
          {skillCategories.map((category, index) => (
            <article
              key={category.category}
              className="grid gap-4 border-b border-border py-6 sm:grid-cols-[0.75fr_1.25fr] sm:gap-8"
            >
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase text-accent">
                  0{index + 1}
                </p>
                <h3 className="font-medium">{category.category}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <ul
                className="flex flex-wrap content-start gap-2"
                aria-label={category.category}
              >
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="border border-border px-2.5 py-1.5 font-mono text-xs text-foreground/80"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
