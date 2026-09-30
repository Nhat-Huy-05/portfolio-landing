import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const { contact } = portfolioConfig;

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border py-20 sm:py-28"
    >
      <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="mb-5 font-mono text-xs uppercase text-accent">
            03 / Liên hệ
          </p>
          <h2 className="font-heading text-5xl font-medium leading-tight sm:text-7xl">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            {contact.subtitle}
          </p>
        </div>
        <a
          href={`mailto:${contact.email}`}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 gap-3 rounded-none px-5 sm:mb-1",
          )}
        >
          <Mail className="size-4" />
          {contact.email}
          <ArrowUpRight className="size-4" />
        </a>
      </div>
      <p className="mt-12 flex items-center gap-2 border-t border-border pt-4 font-mono text-xs uppercase text-muted-foreground">
        <MapPin className="size-3.5" />
        {contact.location}
      </p>
    </section>
  );
}
