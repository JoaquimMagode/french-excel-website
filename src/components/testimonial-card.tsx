import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm">
      <Quote className="size-6 text-primary/60" />
      <p className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
        "{t.quote}"
      </p>
      <footer className="mt-6 border-t border-border pt-4">
        <p className="font-medium text-foreground">{t.name}</p>
        <p className="text-sm text-muted-foreground">
          {t.role} · {t.exam}
          {t.score && <> · {t.score}</>}
        </p>
      </footer>
    </blockquote>
  );
}
