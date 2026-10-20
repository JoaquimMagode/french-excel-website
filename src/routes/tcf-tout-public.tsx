import { createFileRoute, Link } from "@tanstack/react-router";

const title = "TCF Tout Public Preparation | Online TCF Classes — French Excel";

const description =
  "Prepare for the TCF Tout Public online with personalised French classes. Build your level across the compulsory listening, reading and language-structure sections plus the optional speaking and writing tests, with mock tests and CEFR-aligned feedback from A1 to C2.";

export const Route = createFileRoute("/tcf-tout-public")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      {
        property: "og:url",
        content: "https://frenchexcel.org/tcf-tout-public",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "French Excel" },

      {
        property: "og:image",
        content: "https://frenchexcel.org/og-image.png",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "French Excel — online TCF Tout Public preparation across CEFR levels with native French teachers",
      },
      { property: "og:locale", content: "en_US" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "twitter:image",
        content: "https://frenchexcel.org/og-image.png",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "TCF Tout Public Preparation — Online Classes",
          description:
            "Online TCF Tout Public preparation covering the compulsory listening, reading and language-structure sections plus the optional speaking and writing tests. CEFR-aligned practice from A1 to C2 with mock tests and detailed feedback from native French teachers.",
          url: "https://frenchexcel.org/tcf-tout-public",
          inLanguage: "en",
          teaches:
            "TCF Tout Public exam strategy across the compulsory and optional sections, positioned on the CEFR scale from A1 to C2",
          provider: { "@id": "https://frenchexcel.org/#organization" },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            inLanguage: "fr",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://frenchexcel.org/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "TCF Tout Public Preparation",
              item: "https://frenchexcel.org/tcf-tout-public",
            },
          ],
        }),
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://frenchexcel.org/tcf-tout-public",
      },
    ],
  }),

  component: TcfToutPublicPage,
});

function TcfToutPublicPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            TCF Tout Public Preparation
          </p>

          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Know exactly where you sit on the CEFR scale.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            The TCF Tout Public measures your general French across the full A1
            to C2 range. We help you push your level up and prove it, with
            personalised online classes, exam-style practice and detailed
            feedback on both the compulsory and optional sections.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Start Your Preparation
            </a>

            <Link
              to="/"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              Explore French Excel
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-y border-border bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl">
            TCF Tout Public preparation online
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              The TCF Tout Public is the general-purpose version of the Test de
              connaissance du français. It places you on a single CEFR level
              from A1 to C2, which makes it a flexible proof of French for
              university admission, professional files and personal goals alike.
            </p>

            <p>
              At French Excel, our online TCF Tout Public classes start by
              pinpointing your current level, then raise it deliberately. You
              practise each section the way the test presents it, so your final
              score reflects the best French you can actually produce.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Compulsory and optional sections
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Prepare for every part of the TCF Tout Public
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Listening (compulsory)",
                text: "Decode the full range of audio prompts — from short exchanges to longer broadcasts — and learn to track register and detail so you place as high as your real level allows.",
              },
              {
                title: "Language structure (compulsory)",
                text: "Tighten the grammar and vocabulary the test probes directly, turning the rules you already half-know into fast, accurate choices under time pressure.",
              },
              {
                title: "Reading (compulsory)",
                text: "Work through notices, articles and formal documents, building the comprehension and pace needed to clear the reading section comfortably.",
              },
              {
                title: "Speaking & writing (optional)",
                text: "If your goal needs them, we coach the optional oral and written tests with examiner-style feedback on fluency, structure and the markers of each CEFR level.",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="rounded-2xl border border-border bg-surface p-7"
              >
                <h3 className="font-serif text-2xl">{skill.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {skill.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="border-y border-border bg-surface px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl">
            What you get with French Excel
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "A clear read of your current CEFR level and a target to beat",
              "Focused drills for the compulsory listening, structure and reading sections",
              "Optional speaking and writing coaching when your goal requires it",
              "Full TCF Tout Public mock tests with a CEFR estimate",
              "Personalised online lessons around your timezone",
              "Flexible learning packages",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border p-5"
              >
                <span className="mt-1 text-lg">✓</span>
                <span className="leading-7">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl">
            Who is TCF Tout Public preparation for?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              This preparation suits learners who need a recognised, general
              statement of their French level — for a university application, a
              professional requirement or a personal milestone — rather than an
              immigration-specific result.
            </p>

            <p>
              Because the test spans A1 to C2, your plan is built around the
              level you are aiming for, whether that means consolidating an
              intermediate footing or pushing into the advanced C1–C2 range.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl">
            Ready to start your TCF Tout Public preparation?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            Get a level-driven plan, examiner-style feedback and realistic exam
            training with French Excel.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-foreground px-7 py-3 font-medium text-background transition-opacity hover:opacity-80"
          >
            Contact French Excel
          </a>
        </div>
      </section>
    </main>
  );
}
