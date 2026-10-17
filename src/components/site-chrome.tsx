import { useState } from "react";
import { Menu, X } from "lucide-react";

export const BRAND = "French Excel";
export const TEAM_NAME = "our team of native French teachers";

const nav = [
  { to: "/#top", label: "Home" },
  { to: "/#method", label: "Method" },
  { to: "/#courses", label: "Courses" },
  { to: "/#packages", label: "Packages" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="/#top"
          className="flex items-center gap-3 font-serif text-2xl font-medium tracking-tight text-primary"
        >
          <img
            src="/French_Excel_icon.png"
            alt=""
            className="h-8 w-8"
  />
  {BRAND}
</a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.slice(1).map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a Demo
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.to}>
                <a
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="font-serif text-lg font-medium text-primary">{BRAND}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            One-to-one preparation for the TEF, TCF and DELF examinations — online, worldwide.
          </p>
        </div>
        <nav className="flex gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Exams</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>TEF Canada</li>
              <li>TCF Tout Public</li>
              <li>DELF / DALF</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Site</p>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.slice(1).map((item) => (
                <li key={item.to}>
                  <a href={item.to} className="text-muted-foreground hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-t border-border px-6 py-5">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}