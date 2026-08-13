import { Check, CalendarDays } from "lucide-react";
import type { Pkg } from "@/data/packages";

export function PackageCard({ pkg }: { pkg: Pkg }) {
  const badge = pkg.badge ?? (pkg.featured ? "MOST REQUESTED" : undefined);

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 ${
        pkg.featured
          ? "border-primary/30 shadow-xl shadow-primary/5 ring-1 ring-primary/10"
          : "border-border"
      }`}
    >
      {/* Badge */}
      {badge && (
        <span
          className={`absolute -top-3 left-8 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest ${
            pkg.featured
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-card text-primary"
          }`}
        >
          {badge}
        </span>
      )}

      {/* Package name */}
      <h3 className="font-serif text-2xl">{pkg.name}</h3>

      {/* Duration */}
      {pkg.duration && (
        <p className="mt-2 text-base font-medium text-primary">
          {pkg.duration}
        </p>
      )}

      {/* Description */}
      <p className="mt-1 text-sm leading-6 text-muted-foreground">
        {pkg.tagline}
      </p>

      {/* Price */}
      <div className="mt-6 flex items-end gap-3">
        <span className="font-serif text-4xl leading-none text-primary">
          {pkg.price}
        </span>

        {pkg.originalPrice && (
          <span className="text-lg text-muted-foreground line-through">
            {pkg.originalPrice}
          </span>
        )}

        <span className="pb-0.5 text-sm text-muted-foreground">
          / {pkg.unit}
        </span>
      </div>

      {/* Exams */}
      <div className="mt-5 flex flex-wrap gap-2">
        {pkg.exams.map((exam) => (
          <span
            key={exam}
            className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
          >
            {exam}
          </span>
        ))}
      </div>

      {/* Schedule */}
      <div className="mt-6 rounded-xl bg-secondary/60 p-5">
        <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary">
          <CalendarDays className="size-4" />
          <span>{pkg.schedule.title}</span>
        </div>

        <div className="mt-4 space-y-2">
          {pkg.schedule.details.map((detail) => (
            <p
              key={detail}
              className="text-sm text-foreground/80"
            >
              {detail}
            </p>
          ))}
        </div>
      </div>

      {/* Features */}
      <ul className="mt-7 flex-grow space-y-3">
        {pkg.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-muted-foreground"
          >
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <a
        href="#contact"
        className={`mt-9 rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
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