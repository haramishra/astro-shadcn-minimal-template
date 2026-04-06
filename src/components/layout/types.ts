// ─── Header Types ──────────────────────────────────────────────────────────

export type HeaderVariant = "default" | "centered" | "minimal";

export interface HeaderProps {
  /** Which header layout to render */
  variant?: HeaderVariant;
  /** Stick to top on scroll (default: true) */
  sticky?: boolean;
  /** Transparent background — useful over hero images */
  transparent?: boolean;
  /** Show the primary CTA button (default: true) */
  showCta?: boolean;
  /** Additional CSS classes */
  class?: string;
}

// ─── Footer Types ──────────────────────────────────────────────────────────

export type FooterVariant = "default" | "simple" | "cta";

export interface FooterProps {
  /** Which footer layout to render */
  variant?: FooterVariant;
  /** Show social media icons (default: true) */
  showSocials?: boolean;
  /** Show newsletter signup — only applies to "cta" variant */
  showNewsletter?: boolean;
  /** Additional CSS classes */
  class?: string;
}
