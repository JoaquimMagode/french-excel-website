import { useState } from "react";
import { packages } from "@/data/packages";

export const CONTACT_EMAIL = "bonjour@latelierdefrancais.com";

const field =
  "mt-2 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [exam, setExam] = useState("TEF Canada");
  const [pkg, setPkg] = useState(packages[2]!.name);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Exam: ${exam}`,
      `Package of interest: ${pkg}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Consultation request — ${exam}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h2 className="font-serif text-3xl leading-tight md:text-4xl">Let's plan your exam.</h2>
          <p className="mt-6 text-pretty text-muted-foreground">
            Tell us your exam, your target score and your deadline. We'll reply within two working
            days with an honest assessment of what's realistic, which package fits and which teacher
            we'd match you with.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Prefer email?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
          <label className="block text-sm font-medium">
            Your name
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={field}
            />
          </label>

          <label className="mt-5 block text-sm font-medium">
            Email
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={field}
            />
          </label>

          <label className="mt-5 block text-sm font-medium">
            Which exam?
            <select value={exam} onChange={(e) => setExam(e.target.value)} className={field}>
              {["TEF Canada", "TCF Tout Public", "TCF Canada", "DELF", "DALF", "Not sure yet"].map(
                (o) => (
                  <option key={o}>{o}</option>
                ),
              )}
            </select>
          </label>

          <label className="mt-5 block text-sm font-medium">
            Package of interest
            <select value={pkg} onChange={(e) => setPkg(e.target.value)} className={field}>
              {packages.map((p) => (
                <option key={p.slug}>{p.name}</option>
              ))}
              <option>Still deciding</option>
            </select>
          </label>

          <label className="mt-5 block text-sm font-medium">
            Your goal & timeline
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. I need CLB 7 on TEF Canada by June."
              className={field}
            />
          </label>

          <button
            type="submit"
            className="mt-7 w-full rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Send request
          </button>
        </form>
      </div>
    </section>
  );
}