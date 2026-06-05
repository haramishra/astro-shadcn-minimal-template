import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

// ─── Site Details ────────────────────────────────────────────────────────────

export const siteDetails = {
  name: "[Site Name]",
  tagline: "Your tagline goes here",
  url: "https://example.com",
  logo: "/favicon.svg",
  ogImage: "/og-image.png",
  description:
    "[Site Name] helps you craft stunning, high-performance websites and digital products that captivate your audience and grow your business.",
  language: "en",
  locale: "en_US",

  // ── Contact ──────────────────────────────────────────────────────────────
  email: "hello@example.com",
  phone: "",
  address: "",

  // ── Social Links ─────────────────────────────────────────────────────────
  socialLinks: [
    { type: "x" as const, link: "https://x.com/yourhandle", Icon: IconBrandX },
    {
      type: "github" as const,
      link: "https://github.com/yourhandle",
      Icon: IconBrandGithub,
    },
    {
      type: "linkedin" as const,
      link: "https://linkedin.com/company/yourhandle",
      Icon: IconBrandLinkedin,
    },
    {
      type: "instagram" as const,
      link: "https://instagram.com/yourhandle",
      Icon: IconBrandInstagram,
    },
    {
      type: "youtube" as const,
      link: "https://youtube.com/@yourhandle",
      Icon: IconBrandYoutube,
    },
  ],
} as const;

// ─── Meta / SEO Defaults ─────────────────────────────────────────────────────

export const defaultMeta = {
  title: `${siteDetails.name} — ${siteDetails.tagline}`,
  description: siteDetails.description,
  ogImage: siteDetails.ogImage,
  ogType: "website" as const,
  twitterCard: "summary_large_image" as const,
  robots: "index, follow",
  canonical: siteDetails.url,
} as const;

// ─── Call-to-Actions ─────────────────────────────────────────────────────────

export const ctaDetails = {
  primary: {
    label: "Get Started",
    href: "/get-started",
  },
  secondary: {
    label: "Learn More",
    href: "/about",
  },
  hero: {
    heading: "Build beautiful digital experiences",
    subheading:
      "Transform your ideas into stunning, high-performance websites and digital products with [Site Name].",
    primaryCta: {
      label: "Start Building",
      href: "/get-started",
    },
    secondaryCta: {
      label: "View Portfolio",
      href: "/portfolio",
    },
  },
  banner: {
    label: "🚀 Introducing [Site Name] — craft your next project",
    href: "/launch",
  },
} as const;

// ─── Layout Defaults ─────────────────────────────────────────────────────────

/** Centralized layout defaults — components import these directly. */
export const layoutDefaults = {
  header: {
    sticky: true,
    showCta: true,
  },
  footer: {
    showSocials: true,
    showNewsletter: true,
  },
} as const;

// ─── Types ───────────────────────────────────────────────────────────────────

export type SocialType = (typeof siteDetails.socialLinks)[number]["type"];

export type SocialLink = (typeof siteDetails.socialLinks)[number];
