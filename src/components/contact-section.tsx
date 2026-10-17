import { useState } from "react";
import { packages } from "@/data/packages";

export const CONTACT_EMAIL = "bonjour@frenchexcel.org";

const field =
  "mt-2 w-full rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15";

const countryCodes = [
  { country: "Canada", code: "+1" },
  { country: "United States", code: "+1" },
  { country: "India", code: "+91" },
  { country: "France", code: "+33" },
  { country: "Cameroon", code: "+237" },
  { country: "United Kingdom", code: "+44" },
  { country: "Australia", code: "+61" },
  { country: "Germany", code: "+49" },
  { country: "Belgium", code: "+32" },
  { country: "Switzerland", code: "+41" },
  { country: "United Arab Emirates", code: "+971" },
  { country: "Morocco", code: "+212" },
  { country: "Algeria", code: "+213" },
  { country: "Tunisia", code: "+216" },
  { country: "Senegal", code: "+221" },
  { country: "Nigeria", code: "+234" },
  { country: "South Africa", code: "+27" },
  { country: "China", code: "+86" },
  { country: "Japan", code: "+81" },
  { country: "South Korea", code: "+82" },
  { country: "Singapore", code: "+65" },
  { country: "Malaysia", code: "+60" },
  { country: "Pakistan", code: "+92" },
  { country: "Bangladesh", code: "+880" },
  { country: "Other", code: "+" },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phone, setPhone] = useState("");
  const [exam, setExam] = useState("TEF Canada");
  const [pkg, setPkg] = useState(packages[2]!.name);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone.trim() ? `${countryCode}${phone.trim()}` : "",
          exam,
          pkg,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "We couldn't send your request.",
        );
      }

      window.location.href = "/thank-you";
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border px-6 py-24"
    >
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>

          <h2 className="font-serif text-3xl leading-tight md:text-4xl">
            Let's plan your exam.
          </h2>

          <p className="mt-6 text-pretty text-muted-foreground">
            Tell us your exam, your target score and your deadline. We'll
            reply as soon as possible with an honest assessment of what's
            realistic, which package fits and which teacher we'd match you
            with.
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            Prefer email?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-primary hover:underline"
            >
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
            WhatsApp{" "}

            <div className="mt-2 flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-[42%] rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                aria-label="Country code"
              >
                {countryCodes.map((item) => (
                  <option
                    key={`${item.country}-${item.code}`}
                    value={item.code}
                  >
                    {item.country} ({item.code})
                  </option>
                ))}
              </select>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your WhatsApp number"
                className="min-w-0 flex-1 rounded-lg border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
            </div>
          </label>

          <label className="mt-5 block text-sm font-medium">
            Which exam?
            <select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              className={field}
            >
              {[
                "TEF Canada",
                "TCF Tout Public",
                "TCF Canada",
                "DELF",
                "DALF",
                "Not sure yet",
              ].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>

          <label className="mt-5 block text-sm font-medium">
            Package of interest
            <select
              value={pkg}
              onChange={(e) => setPkg(e.target.value)}
              className={field}
            >
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

          {success && (
            <p className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              Request sent successfully! We'll get back to you as soon as
              possible.
            </p>
          )}

          {error && (
            <p className="mt-4 rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-7 w-full rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {isSubmitting ? "Sending..." : "Send request"}
          </button>
        </form>
      </div>
    </section>
  );
}