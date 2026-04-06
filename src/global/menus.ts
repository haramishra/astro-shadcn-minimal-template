// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  /** If true, opens in a new tab */
  external?: boolean;
  /** Badge text shown next to the label (e.g. "New", "Beta") */
  badge?: string;
  /** Nested items for dropdown menus */
  children?: NavLink[];
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

// ─── Header Navigation ──────────────────────────────────────────────────────

export const headerNav: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/design" },
      { label: "Branding", href: "/services/branding" },
      { label: "SEO & Marketing", href: "/services/seo" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Footer Navigation ──────────────────────────────────────────────────────

export const footerNav: NavGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/design" },
      { label: "Branding", href: "/services/branding" },
      { label: "SEO & Marketing", href: "/services/seo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Guides", href: "/guides" },
      { label: "FAQs", href: "/faqs" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

// ─── Blog / Docs Sidebar Navigation ─────────────────────────────────────────

export const blogNav: NavLink[] = [
  { label: "All Posts", href: "/blog" },
  { label: "Tutorials", href: "/blog/category/tutorials" },
  { label: "Case Studies", href: "/blog/category/case-studies" },
  { label: "Design", href: "/blog/category/design" },
  { label: "Development", href: "/blog/category/development" },
  { label: "News", href: "/blog/category/news" },
];

// ─── Utility ─────────────────────────────────────────────────────────────────

/** Recursively flatten all nav links (useful for sitemap generation). */
export function flattenNavLinks(links: NavLink[]): NavLink[] {
  return links.flatMap((link) => [
    link,
    ...(link.children ? flattenNavLinks(link.children) : []),
  ]);
}
