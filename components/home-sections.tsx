import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { homeSections } from "@/constants/home-sections";

export default function HomeSections() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10">
      {homeSections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <Card>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-foreground/90">
                {section.content}
              </p>
            </CardContent>
          </Card>
        </section>
      ))}
    </main>
  );
}
