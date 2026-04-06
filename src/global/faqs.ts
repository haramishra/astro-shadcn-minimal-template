// ─── Types ───────────────────────────────────────────────────────────────────

export interface FAQ {
  /** The question being answered */
  question: string;
  /** Rich-text body / answer (supports markdown if rendered accordingly) */
  body: string;
  /** Whether to feature this FAQ on the homepage or landing sections */
  featured: boolean;
}

// ─── FAQ Data ────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: "What services does [Site Name] offer?",
    body: "[Site Name] provides end-to-end digital services including web development, UI/UX design, branding, and SEO & marketing. We work with businesses of all sizes to build stunning, high-performance digital experiences.",
    featured: true,
  },
  {
    question: "How long does a typical project take?",
    body: "Project timelines vary depending on scope and complexity. A simple landing page can be delivered in 1–2 weeks, while a full-scale web application may take 6–12 weeks. We provide a detailed timeline during our discovery phase.",
    featured: true,
  },
  {
    question: "What technologies do you use?",
    body: "We leverage modern technologies like Astro, React, Next.js, TypeScript, and Tailwind CSS for the frontend. For the backend, we work with Node.js, serverless functions, and various cloud platforms including Cloudflare and Vercel.",
    featured: true,
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    body: "Yes! We offer flexible support and maintenance plans to keep your site running smoothly after launch. This includes security updates, performance monitoring, content updates, and feature enhancements.",
    featured: true,
  },
  {
    question: "How does the pricing work?",
    body: "We offer both project-based and retainer pricing models. Project pricing is scoped during our discovery call based on requirements. Retainer plans start from a monthly fee and include a set number of development hours.",
    featured: false,
  },
  {
    question: "Can you work with our existing design system?",
    body: "Absolutely. We frequently integrate with existing brand guidelines, design systems, and component libraries. Whether you have a Figma file or a fully documented design system, we can work with what you have.",
    featured: false,
  },
  {
    question: "Do you help with hosting and deployment?",
    body: "Yes, we handle the full deployment pipeline. We typically deploy to platforms like Vercel, Cloudflare Pages, or AWS depending on your project's needs. We also configure CI/CD pipelines for automated deployments.",
    featured: false,
  },
  {
    question: "What is your design process?",
    body: "Our process starts with a discovery phase where we understand your goals and users. We then move into wireframing, visual design, prototyping, and finally development. You receive updates and can provide feedback at every stage.",
    featured: true,
  },
  {
    question: "Can I request a custom feature or integration?",
    body: "Of course. We build custom features and integrate with third-party services regularly — whether it's a CRM, payment gateway, analytics platform, or any API-driven service. Just let us know your requirements.",
    featured: false,
  },
  {
    question: "How do I get started?",
    body: "Simply reach out via our contact page or email us at hello@example.com. We'll schedule a free discovery call to understand your project requirements and provide a tailored proposal.",
    featured: true,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Returns only FAQs marked as featured. */
export function getFeaturedFaqs(): FAQ[] {
  return faqs.filter((faq) => faq.featured);
}

/** Returns all FAQs (for the dedicated FAQ page). */
export function getAllFaqs(): FAQ[] {
  return faqs;
}
