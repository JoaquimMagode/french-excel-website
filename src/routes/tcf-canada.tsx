import { createFileRoute, Link } from "@tanstack/react-router";

const title = "TCF Canada Preparation | Online TCF Canada Classes — French Excel";

const description =
  "Prepare for the TCF Canada online with personalised French classes focused on Canadian immigration. Train for the compulsory speaking and writing tests plus the listening and reading MCQs, with mock tests and CLB/NCLC-targeted feedback.";

export const Route = createFileRoute("/tcf-canada")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },

      { property: "og:title", content: title },
      { property: "og:description", content: description },
      {
        property: "og:url",
        content: "https://frenchexcel.org/tcf-canada",
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
          "French Excel — online TCF Canada preparation for Canadian immigration with native French teachers",
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
          name: "TCF Canada Preparation — Online Classes",
          description:
            "Online TCF Canada preparation for Canadian immigration (IRCC). Train for the compulsory speaking and writing tests and the listening and reading multiple-choice sections, with mock tests and feedback targeted at your CLB/NCLC goal from native French teachers.",
          url: "https://frenchexcel.org/tcf-canada",
          inLanguage: "en",
          teaches:
            "TCF Canada exam strategy for speaking, writing, listening and reading aligned to CLB/NCLC immigration targets",
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
              name: "TCF Canada Preparation",
              item: "https://frenchexcel.org/tcf-canada",
            },
          ],
        }),
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://frenchexcel.org/tcf-canada",
      },
    ],
  }),

  component: TcfCanadaPage,
});

function TcfCanadaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            TCF Canada Preparation
          </p>

          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Hit your CLB target on the TCF Canada.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            The TCF Canada is the test IRCC accepts for permanent residence and
            citizenship. We prepare you for all four sections and translate your
            goal into the exact CLB/NCLC level you need, with personalised online
            classes, exam-style practice and detailed feedback.
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
            TCF Canada preparation online
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              The TCF Canada is recognised by Immigration, Refugees and
              Citizenship Canada and is used across Express Entry, Provincial
              Nominee Programs and citizenship applications. Your results map
              directly onto the Canadian Language Benchmarks, so every point can
              change the outcome of your file.
            </p>

            <p>
              At French Excel, our online TCF Canada classes keep that benchmark
              in view from day one. We build your French while drilling the exact
              task types each section uses, so you walk in knowing how the test
              scores you and how to reach the level your application requires.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The four TCF Canada sections
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Train for every section of the TCF Canada
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Speaking (compulsory)",
                text: "Prepare for the three-task oral test with a face-to-face examiner: a short interview, an interaction task and a monologue. We rehearse each format until your delivery is fluent and benchmark-ready.",
              },
              {
                title: "Writing (compulsory)",
                text: "Work through the three timed writing tasks — a message, a short report and a structured opinion piece — with corrections focused on register, structure and the accuracy that lifts your CLB.",
              },
              {
                title: "Listening (MCQ)",
                text: "Practise the multiple-choice listening section with authentic-style audio, so you can decode announcements, conversations and reports quickly under exam timing.",
              },
              {
                title: "Reading (MCQ)",
                text: "Sharpen your reading speed and comprehension across the multiple-choice questions, from short notices to longer documents, so you finish the section with time to check.",
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
              "A clear CLB/NCLC target for your immigration goal",
              "Compulsory speaking and writing coaching with examiner-style feedback",
              "Listening and reading MCQ strategy and timing drills",
              "Full TCF Canada mock tests with a benchmark estimate",
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
            Who is TCF Canada preparation for?
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              This preparation is built for Express Entry candidates, Provincial
              Nominee applicants and anyone claiming French points toward
              permanent residence or Canadian citizenship.
            </p>

            <p>
              Whether you need to reach CLB 7 for extra Express Entry points,
              confirm a higher benchmark for a specific program or simply pass
              with confidence, your plan is shaped around the score your
              application depends on.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl">
            Ready to start your TCF Canada preparation?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            Get a benchmark-focused plan, examiner-style feedback and realistic
            exam training with French Excel.
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
