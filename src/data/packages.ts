export type Pkg = {
  slug: string;
  name: string;
  duration: string;
  tagline: string;
  price: string;
  unit: string;
  badge: string;
  instructor: string;
  format: string;
  exams: string[];
  schedule: { title: string; lines: string[] };
  features: string[];
  featured?: boolean;
};

export const packages: Pkg[] = [
  {
    slug: "regular-group",
    name: "Regular Group",
    duration: "6 months",
    tagline: "For group classes",
    price: "CAD 150",
    unit: "per month",
    badge: "Most popular",
    instructor: "Native French instructor",
    format: "Group class",
    exams: ["TEF", "TCF", "DELF"],
    schedule: {
      title: "Schedule - 5 classes/week",
      lines: ["Monday - Friday", "1 hour per class"],
    },
    features: [
      "A1 - B2/C1 ",
      "Small-group interactive classes",
      "Teacher feedback and corrections",
      "Access to TEF, TCF & DELF prep materials",
    ],
    featured: true,
  },
  {
    slug: "group-joel",
    name: "Group with Joel",
    duration: "6 months",
    tagline: "Group classes taught by Joel",
    price: "CAD 200",
    unit: "per month",
    badge: "Taught by Joel",
    instructor: "Joel",
    format: "Group class",
    exams: ["TEF", "TCF", "DELF"],
    schedule: {
      title: "Schedule - 4 classes/week",
      lines: ["Monday - Thursday", "1 hour per class"],
    },
    features: [
      "A1 - CLB 7",
      "Every session led by Joel himself",
      "Small-group interactive classes",
      "Teacher feedback and corrections",
    ],
  },
  {
    slug: "regular-private",
    name: "Regular Private",
    duration: "6 months",
    tagline: "For one-on-one sessions",
    price: "CAD 200",
    unit: "per month",
    badge: "Most requested",
    instructor: "Native French instructor",
    format: "Private class",
    exams: ["TEF", "TCF", "DELF"],
    schedule: {
      title: "Schedule - 5 classes/week",
      lines: ["Monday - Friday", "1 hour per class"],
    },
    features: [
      "A1 - C1",
      "One-to-one personalised instruction",
      "Lessons adapted to your weaknesses",
      "Flexible weekday & weekend options",
    ],
  },
  {
    slug: "private-joel",
    name: "Private with Joel",
    duration: "6 months",
    tagline: "One-to-one sessions with Joel",
    price: "CAD 250",
    unit: "per month",
    badge: "Premium",
    instructor: "Joel",
    format: "Private class",
    exams: ["TEF", "TCF", "DELF"],
    schedule: {
      title: "Schedule - 4 classes/week",
      lines: ["Monday - Thursday", "1 hour per class"],
    },
    features: [
      "A1 - Mastery",
      "One-to-one coaching directly with Joel",
      "Plan built around your target score",
      "Flexible weekday & weekend options",
    ],
  },
  {
    slug: "fast-track",
    name: "Fast Track",
    duration: "3 months",
    tagline: "Intensive exam preparation",
    price: "CAD 350",
    unit: "per month",
    badge: "Fastest",
    instructor: "Native French instructor",
    format: "Intensive class",
    exams: ["TEF", "TCF", "DELF"],
    schedule: {
      title: "Schedule - 5 classes/week",
      lines: ["Sunday - Thursday", "1 hours per class"],
    },
    features: [
      "Intensive exam-focused preparation",
      "Section-by-section exam strategies",
      "High-frequency speaking practice",
      "Accelerated preparation for your exam date",
    ],
  },
];
