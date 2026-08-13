export type Pkg = {
  slug: string;
  name: string;
  tagline: string;
  duration: string
  price: string;
  originalPrice?: string;
  unit: string;
  badge?: string;
  schedule:{
    title: string;
    details: string[]
  }
  exams: string[];
  features: string[];
  featured?: boolean;
};

export const packages: Pkg[] = [
  {
    slug: "regular-group",
    name: "Regular Group",
    tagline: "For group classes",
    duration: "6 months",
    schedule: {
      title: "Schedule - 5 classes/week",
      details: [
        "Monday - Friday",
        "1 hour per class"
      ]
    } ,
    price: "CAD 150",
    unit: "per month",
    badge: "Most Popular",
    exams: ["TEF", "TCF", "DELF"],
    features: [
      "A1 - CLB 7",
      "Small-group interactive classes",
      "Teacher feedback and corrections",
      "Access to TEF, TCF & DELF prep materials",
    ],
    featured: true,
  },
  {
    slug: "regular-private",
    name: "Regular Private",  
    tagline: "For one-on-one sessions",
    duration: "6 months",
    schedule: {
      title: "Schedule - 5 classes/week",
      details: [
        "Monday - Friday",
        "1 hour per class"
      ],
    } ,
    price: "CAD 200",
    unit: "per month",
    badge: "Most Requested",
    exams: ["TEF", "TCF", "DELF"],
    features: [
      "A1 - CLB 7",
      "One-to-one personalised instruction",
      "Lessons adapted to your weaknesses",
      "Flexible weekday & weekend options",
    ],
  },
  {
    slug: "express",
    name: "Fast Track",
    tagline: "Intensive exam preparation ",
    duration: "3 months",
    schedule: { 
      title: "Schedule - 6 classes/week",
      details: [
        "Monday - Saturday",
        "2 hours per class"
      ]
    } ,
    price: "CAD 320",
    unit: "per month",
    badge: "Fastest",
    exams: ["TEF", "TCF", "DELF"],
    features: [
      "Intensive exam-focused preparation",
      "Section-by-section exam strategies",
      "High-frequency speaking practice",
      "Accelerated preparation for your exam date",
    ],
    // featured: true,
  },
];