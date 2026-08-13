export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  exam: string;
  score?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I went from a B1 to a solid B2 in ten weeks. The mock exams were exactly like the real TEF and the feedback after each lesson told me exactly what to fix.",
    name: "Priya K.",
    role: "Canada PR applicant",
    exam: "TEF Canada",
    score: "CLB 9",
  },
  {
    quote:
      "The teachers really understand how the DELF is marked. My writing went from full of small errors to structured and confident — I passed B2 on the first try.",
    name: "Marco D.",
    role: "University applicant",
    exam: "DELF B2",
  },
  {
    quote:
      "I had been self-studying for months and was stuck. The diagnostic session showed me the gaps I couldn't see, and every lesson after that had a clear purpose.",
    name: "Aisha T.",
    role: "Working professional",
    exam: "TCF Tout Public",
  },
];
