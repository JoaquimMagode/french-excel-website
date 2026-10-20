import { createFileRoute, Link } from "@tanstack/react-router";

const title =
  "DELF & DALF Preparation | Online DELF/DALF Classes — French Excel";

const description =
  "Prepare for the DELF (A1–B2) and DALF (C1–C2) online with personalised French classes. Train the four competencies — listening, reading, writing and speaking — with mock tests, exam-day strategy and detailed feedback toward your lifetime French diploma.";

export const Route = createFileRoute("/delf-dalf")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      {
        property: "og:url",
        content: "https://frenchexcel.org/delf-dalf",
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
          "French Excel — online DELF and DALF preparation across CEFR levels with native French teachers",
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
          name: "DELF & DALF Preparation — Online Classes",
          description:
            "Online DELF (A1–B2) and DALF (C1–C2) preparation covering the four competencies — listening, reading, writing and speaking — with mock tests, exam-day strategy and detailed feedback from native French teachers toward a permanent French diploma.",
          url: "https://frenchexcel.org/delf-dalf",
          inLanguage: "en",
          teaches:
            "DELF and DALF exam strategy across the four competencies, from A1 to C2 on the CEFR scale",
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
              name: "DELF & DALF Preparation",
              item: "https://frenchexcel.org/delf-dalf",
            },
          ],
        }),
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://frenchexcel.org/delf-dalf",
      },
    ],
  }),

  component: DelfDalfPage,
});

function DelfDalfPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            DELF &amp; DALF Preparation
          </p>

          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Earn a French diploma that lasts for life.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            The DELF and DALF are official diplomas from the French Ministry of
            Education — awarded once and valid forever. We prepare you for the
            level you need, from DELF A1 to DALF C2, across all four
            competencies with personalised online classes and detailed feedback.
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
            DELF &amp; DALF preparation online
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              The DELF covers CEFR levels A1 to B2 and the DALF covers the
              advanced C1 and C2 levels. Each is a standalone diploma that never
              expires, which is why they are so widely used for French
              university entry, professional recognition and lasting proof of
              fluency.
            </p>

            <p>
              At French Excel, our online DELF and DALF classes target the exact
              level you are sitting. Every exam asks for the same four
              competencies, so we train them together while tuning the depth and
              register to the diploma you want to hold.
            </p>
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The four competencies
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Master the four skills every DELF/DALF tests
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Listening comprehension",
                text: "Train your ear on the recordings used at your level, from everyday exchanges at DELF to dense lectures and debates at DALF, and learn to take exam-ready notes.",
              },
              {
                title: "Reading comprehension",
                text: "Work through the document types each level favours — notices and articles for DELF, argumentative and specialised texts for DALF — building both speed and precision.",
              },
              {
                title: "Written production",
                text: "Craft the written tasks the jury expects, from structured letters and essays to the DALF synthesis and argued text, with corrections on structure, cohesion and register.",
              },
              {
                title: "Oral production",
                text: "Rehearse the interview, monologue and debate formats with examiner-style feedback, so you present and defend ideas with the fluency your level demands.",
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
              "The right DELF or DALF level chosen for your goal",
              "Coaching on all four competencies at your target level",
              "Exam-day strategy for timing, the preparation room and the jury",
              "Full DELF/DALF mock tests marked against the official criteria",
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
            Who is DELF/DALF preparation for?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              This preparation is for learners who want a permanent, recognised
              French qualification — students heading to a French-speaking
              university, professionals who need a lasting credential, and anyone
              who wants to certify their level once and for good.
            </p>

            <p>
              Because the diploma is valid for life, it is worth sitting the
              highest level you can reach. We help you decide between adjacent
              levels and then prepare you to clear it with room to spare.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl">
            Ready to start your DELF or DALF preparation?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            Get a level-driven plan, examiner-style feedback and exam-day
            strategy with French Excel.
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
