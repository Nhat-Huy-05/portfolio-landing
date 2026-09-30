import { portfolioConfig } from "@/config/portfolio";

export default function AboutSection() {
  const { about, location } = portfolioConfig.personal;

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border py-20 sm:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-5 font-mono text-xs uppercase text-accent">
            01 / Góc nhìn
          </p>
          <h2 className="max-w-sm font-heading text-4xl font-medium leading-tight sm:text-5xl">
            Làm cho mọi thứ{" "}
            <span className="font-serif italic">rõ ràng hơn.</span>
          </h2>
          <p className="mt-6 flex items-center gap-2 font-mono text-xs uppercase text-muted-foreground">
            <span className="size-2 bg-primary" aria-hidden="true" />
            {location}
          </p>
        </div>

        <div>
          <div className="flex max-w-2xl flex-col gap-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-border">
            {about.corePrinciples.map((principle, index) => (
              <article
                key={principle.title}
                className="grid gap-2 border-b border-border py-5 sm:grid-cols-[3rem_1fr] sm:gap-4"
              >
                <span className="font-mono text-xs text-accent">
                  0{index + 1}
                </span>
                <div className="grid gap-2 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
                  <h3 className="font-medium">{principle.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
