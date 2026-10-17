import { Check, CalendarDays, UserRound, Users } from "lucide-react";
import type { Pkg } from "@/data/packages";

export function PackageCard({ pkg }: { pkg: Pkg }) {
  const isJoel = pkg.instructor === "Joel";

  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isJoel ? "border-2 border-primary/60" : "border border-border"
      }`}
    >
      <span
        className={`absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${
          isJoel
            ? "border border-primary bg-card text-primary"
            : pkg.featured
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-foreground"
        }`}
      >
        {isJoel && (
          <img
            src="/French_Excel_icon.png"
            alt=""
            className="size-4 object-contain"
          />
        )}
        {isJoel ? "Taught by Joel" : pkg.badge}
      </span>

      <h3 className="font-serif text-2xl">{pkg.name}</h3>
      <p className="mt-2 text-sm font-medium text-primary">{pkg.duration}</p>
      <p className="mt-1 text-sm text-muted-foreground">{pkg.tagline}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-primary">
          <UserRound className="size-3.5 shrink-0" />
          {pkg.instructor}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
          <Users className="size-3.5 shrink-0" />
          {pkg.format}
        </span>
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-serif text-4xl text-primary">{pkg.price}</span>
        <span className="text-sm text-muted-foreground">/ {pkg.unit}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {pkg.exams.map((e) => (
          <span
            key={e}
            className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground"
          >
            {e}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-secondary p-5">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
          <CalendarDays className="size-4 shrink-0" />
          {pkg.schedule.title}
        </p>
        {pkg.schedule.lines.map((l) => (
          <p key={l} className="mt-2 text-sm text-muted-foreground">
            {l}
          </p>
        ))}
      </div>

      <ul className="mt-7 flex-grow space-y-3">
        {pkg.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 text-sm text-muted-foreground"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`mt-9 rounded-lg py-3 text-center text-sm font-medium transition-colors ${
          pkg.featured
            ? "bg-primary text-primary-foreground hover:opacity-90"
            : "border border-border hover:bg-secondary"
        }`}
      >
        Enroll Now →
      </a>
    </div>
  );
}