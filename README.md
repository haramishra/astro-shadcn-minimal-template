# Astro + shadcn/ui Minimal Template

A production-ready starter template built with **Astro 6**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**. Designed for landing pages, marketing sites, and SaaS products — with a clean architecture that's easy to customize.

## Tech Stack

| Layer         | Technology                                       |
| ------------- | ------------------------------------------------ |
| Framework     | [Astro 6](https://astro.build)                   |
| UI Library    | [React 19](https://react.dev)                    |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com)       |
| Components    | [shadcn/ui](https://ui.shadcn.com) (base-mira)   |
| Icons         | [Tabler Icons](https://tabler.io/icons)          |
| Fonts         | DM Sans + Playfair Display (via Fontsource)      |
| Type Safety   | TypeScript (strict mode)                         |
| Linting       | ESLint + Prettier                                |

---

## Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (recommended) — or npm / yarn

### Installation

```bash
# Clone the template
git clone https://github.com/your-username/astro-shadcn-minimal-template.git
cd astro-shadcn-minimal-template

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) to see the site.

### Available Scripts

| Script             | Description                        |
| ------------------ | ---------------------------------- |
| `pnpm dev`         | Start local dev server             |
| `pnpm build`       | Build for production (`dist/`)     |
| `pnpm preview`     | Preview the production build       |
| `pnpm lint`        | Run ESLint                         |
| `pnpm format`      | Format with Prettier               |
| `pnpm typecheck`   | Run `astro check` for type errors  |

---

## Project Structure

```
src/
├── assets/
│   └── images/              # Optimized images (processed by Astro)
├── components/
│   ├── layout/              # Header, Footer & shared layout parts
│   │   ├── _parts/          # Shared pieces (SiteLogo)
│   │   ├── header/          # Header variants + sub-components
│   │   └── footer/          # Footer variants + sub-components
│   ├── sections/            # Page sections (hero, features, etc.)
│   │   └── homepage/
│   └── ui/                  # shadcn/ui components (auto-generated)
├── global/                  # Centralized site configuration
│   ├── site-config.ts       # Site details, SEO, CTAs, layout defaults
│   ├── menus.ts             # Navigation menus (header, footer, blog)
│   ├── faqs.ts              # FAQ data
│   └── index.ts             # Barrel re-exports
├── layouts/
│   ├── BaseHead.astro       # <head> with SEO, OG tags, JSON-LD
│   └── MainLayout.astro     # Full page shell (head + header + main + footer)
├── lib/
│   └── utils.ts             # cn() utility for class merging
├── pages/
│   └── index.astro          # Homepage
└── styles/
    └── global.css           # Tailwind imports + CSS variables (theme)
```

---

## Customization

### 1. Site Details & Branding

All site-wide configuration lives in **`src/global/site-config.ts`**. This is the single source of truth for your brand.

```ts
// src/global/site-config.ts

export const siteDetails = {
  name: "Your Brand",                   // Site name (shown in header, footer, SEO)
  tagline: "Your catchy tagline",        // Used in default page title
  url: "https://yourdomain.com",         // Canonical URL
  logo: "/favicon.svg",                  // Logo path (in /public)
  ogImage: "/og-image.png",              // Default social share image
  description: "A brief description...", // Default meta description
  language: "en",
  locale: "en_US",

  // Contact
  email: "hello@yourdomain.com",
  phone: "+1 234 567 890",
  address: "123 Main St, City, ST 12345",

  // Social Links — add, remove, or reorder
  socialLinks: [
    { type: "x", link: "https://x.com/you", Icon: IconBrandX },
    { type: "github", link: "https://github.com/you", Icon: IconBrandGithub },
    // ... add more from @tabler/icons-react
  ],
};
```

The **CTAs** (call-to-action buttons) used across the site are also configured here:

```ts
export const ctaDetails = {
  primary: { label: "Get Started", href: "/get-started" },
  secondary: { label: "Learn More", href: "/about" },
  hero: {
    heading: "Your hero headline",
    subheading: "Supporting text for the hero section.",
    primaryCta: { label: "Start Building", href: "/get-started" },
    secondaryCta: { label: "View Portfolio", href: "/portfolio" },
  },
  banner: {
    label: "🚀 Announcement text",
    href: "/launch",
  },
};
```

**Layout defaults** control header/footer behavior:

```ts
export const layoutDefaults = {
  header: { sticky: true, showCta: true },
  footer: { showSocials: true, showNewsletter: true },
};
```

> **Tip:** Every component imports from `@/global`, so changes here automatically propagate everywhere.

---

### 2. Navigation Menus

Edit **`src/global/menus.ts`** to configure all navigation.

#### Header Navigation

```ts
export const headerNav: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [                              // Dropdown items
      { label: "Web Dev", href: "/services/web-development" },
      { label: "Design", href: "/services/design" },
    ],
  },
  { label: "Blog", href: "/blog", badge: "New" }, // Optional badge
  { label: "Contact", href: "/contact" },
];
```

#### Footer Navigation

Footer links are organized into column groups:

```ts
export const footerNav: NavGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
  // Add more column groups...
];
```

The `NavLink` type supports:

| Property     | Type        | Description                            |
| ------------ | ----------- | -------------------------------------- |
| `label`      | `string`    | Display text                           |
| `href`       | `string`    | Link URL                               |
| `external`   | `boolean?`  | Opens in new tab                       |
| `badge`      | `string?`   | Badge text (e.g. "New", "Beta")        |
| `children`   | `NavLink[]?`| Nested dropdown items                  |

---

### 3. Theme & Colors

The color system uses **CSS custom properties** with OKLCH values. Edit **`src/styles/global.css`** to customize.

#### Changing the Color Palette

The template ships with a **mauve** base color. To switch:

1. Go to [ui.shadcn.com/themes](https://ui.shadcn.com/themes)
2. Pick a theme and copy the CSS variables
3. Replace the `:root` and `.dark` blocks in `src/styles/global.css`

```css
/* src/styles/global.css */
:root {
  --primary: oklch(0.491 0.27 292.581);     /* Your primary color */
  --background: oklch(1 0 0);               /* Page background */
  --foreground: oklch(0.145 0.008 326);      /* Default text color */
  --radius: 0.45rem;                         /* Border radius base */
  /* ... other tokens */
}

.dark {
  --primary: oklch(0.432 0.232 292.759);
  --background: oklch(0.145 0.008 326);
  /* ... dark mode overrides */
}
```

Key tokens to customize:

| Token          | Purpose                                |
| -------------- | -------------------------------------- |
| `--primary`    | Buttons, links, active states          |
| `--secondary`  | Secondary buttons, subtle backgrounds  |
| `--accent`     | Highlights, hover states               |
| `--muted`      | Subdued backgrounds                    |
| `--destructive`| Error states, delete actions           |
| `--border`     | Border colors                          |
| `--radius`     | Base border-radius (scales to sm–4xl)  |

---

### 4. Typography / Fonts

Fonts are configured in **`astro.config.mjs`** using Astro's built-in Fonts API:

```js
// astro.config.mjs
fonts: [
  {
    provider: fontProviders.fontsource(),
    name: "DM Sans",                        // Body font
    cssVariable: "--font-dm-sans",
    fallbacks: ["sans-serif"],
  },
  {
    provider: fontProviders.fontsource(),
    name: "Playfair Display",               // Heading font
    cssVariable: "--font-playfair-display",
    fallbacks: ["serif"],
  },
],
```

Then mapped to Tailwind in `global.css`:

```css
@theme inline {
  --font-sans: var(--font-dm-sans), sans-serif;     /* → font-sans */
  --font-heading: var(--font-playfair-display), serif; /* → font-heading */
}
```

**To change fonts:**

1. Install the Fontsource package: `pnpm add @fontsource-variable/inter`
2. Update `astro.config.mjs` with the new font name + CSS variable
3. Update the `@theme inline` block in `global.css` to map the variable

---

### 5. Layout Variants

The layout system supports **multiple header and footer variants**, controlled via props on `<MainLayout>`.

#### Header Variants

| Variant      | Description                                    |
| ------------ | ---------------------------------------------- |
| `"default"`  | Logo left, nav center, CTA right               |
| `"centered"` | Logo centered above nav                        |
| `"minimal"`  | Logo + CTA only (no nav links)                 |

#### Footer Variants

| Variant      | Description                                    |
| ------------ | ---------------------------------------------- |
| `"default"`  | Multi-column nav + social links                |
| `"simple"`   | Single-row compact footer                      |
| `"cta"`      | Newsletter banner + multi-column nav           |

#### Usage in Pages

```astro
---
import MainLayout from "@/layouts/MainLayout.astro"
---

<!-- Default layout -->
<MainLayout>
  <slot />
</MainLayout>

<!-- Centered header + CTA footer -->
<MainLayout header="centered" footer="cta">
  <slot />
</MainLayout>

<!-- Transparent header (for hero overlays) -->
<MainLayout headerTransparent>
  <slot />
</MainLayout>
```

#### Full Layout Props

| Prop                | Type                                    | Default      |
| ------------------- | --------------------------------------- | ------------ |
| `title`             | `string`                                | Site default |
| `description`       | `string`                                | Site default |
| `ogImage`           | `string`                                | Site default |
| `ogType`            | `"website" \| "article"`                | `"website"`  |
| `twitterCard`       | `"summary" \| "summary_large_image"`    | `"summary_large_image"` |
| `canonical`         | `string`                                | Current URL  |
| `robots`            | `string`                                | `"index, follow"` |
| `keywords`          | `string`                                | —            |
| `publishedTime`     | `string` (ISO 8601)                     | —            |
| `modifiedTime`      | `string` (ISO 8601)                     | —            |
| `author`            | `string`                                | —            |
| `class`             | `string`                                | —            |
| `header`            | `"default" \| "centered" \| "minimal"`  | `"default"`  |
| `footer`            | `"default" \| "simple" \| "cta"`        | `"default"`  |
| `headerTransparent` | `boolean`                               | `false`      |

---

### 6. Adding shadcn/ui Components

This template uses shadcn/ui with the **base-mira** style preset and **Tabler** icons.

```bash
# Add a single component
npx shadcn@latest add dialog

# Add multiple components
npx shadcn@latest add card badge tooltip

# Browse all available components
npx shadcn@latest add
```

Components are installed to `src/components/ui/`. Currently included:

`avatar` · `badge` · `button` · `card` · `checkbox` · `dialog` · `dropdown-menu` · `input` · `label` · `popover` · `radio-group` · `scroll-area` · `select` · `separator` · `sheet` · `skeleton` · `switch` · `table` · `tabs` · `textarea` · `tooltip`

#### Using in Astro Files

```astro
---
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
---

<Card>
  <CardHeader>
    <CardTitle>Hello</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Click me</Button>
  </CardContent>
</Card>
```

> **Note:** shadcn/ui components are React components. In `.astro` files they render as static HTML by default. Add `client:load` (or `client:visible`, `client:idle`) for interactive components:
>
> ```astro
> <Dialog client:load>...</Dialog>
> ```

---

### 7. Adding New Pages

Create a new `.astro` file in `src/pages/`:

```astro
---
// src/pages/about.astro
import MainLayout from "@/layouts/MainLayout.astro"
---

<MainLayout
  title="About — Your Brand"
  description="Learn more about us"
  header="default"
  footer="cta"
>
  <section class="container mx-auto py-20">
    <h1 class="text-4xl font-heading font-bold">About Us</h1>
    <p class="mt-4 text-muted-foreground">Your content here.</p>
  </section>
</MainLayout>
```

Astro uses **file-based routing** — the file path becomes the URL:

| File                      | URL              |
| ------------------------- | ---------------- |
| `src/pages/index.astro`   | `/`              |
| `src/pages/about.astro`   | `/about`         |
| `src/pages/blog/[slug].astro` | `/blog/:slug` |

---

### 8. Adding Page Sections

Create section components in `src/components/sections/`:

```astro
---
// src/components/sections/homepage/features.astro
---

<section class="container mx-auto py-20">
  <h2 class="text-3xl font-heading font-bold text-center">Features</h2>
  <!-- Your section content -->
</section>
```

Then compose them in your page:

```astro
---
import MainLayout from "@/layouts/MainLayout.astro"
import Hero from "@/components/sections/homepage/hero.astro"
import Features from "@/components/sections/homepage/features.astro"
---

<MainLayout>
  <Hero />
  <Features />
</MainLayout>
```

---

### 9. Images & Assets

- **Optimized images** → Place in `src/assets/images/` and use Astro's `<Image>` component:

  ```astro
  ---
  import { Image } from "astro:assets"
  import heroImg from "@/assets/images/hero.png"
  ---

  <Image src={heroImg} alt="Hero" width={1000} height={600} />
  ```

- **Static files** (favicon, og-image, robots.txt) → Place in `public/`. Served as-is at the root URL.

---

### 10. Path Aliases

The template includes these TypeScript path aliases (defined in `tsconfig.json`):

| Alias      | Path                                     |
| ---------- | ---------------------------------------- |
| `@/*`      | `./src/*`                                |
| `@header`  | `./src/components/layout/header/index.astro` |
| `@footer`  | `./src/components/layout/footer/index.astro` |

Use them in imports:

```ts
import { siteDetails } from "@/global"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

---

## SEO

SEO is handled automatically by `BaseHead.astro` and built-in integrations. Every page gets:

- ✅ Title & meta description
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ JSON-LD structured data
- ✅ Robots directive
- ✅ Article-specific meta (publish date, author)
- ✅ Automatically generated **Sitemap** (`/sitemap-index.xml`) via `@astrojs/sitemap`
- ✅ Dynamic **RSS Feed** (`/rss.xml`) via `@astrojs/rss`
- ✅ Pre-configured `robots.txt`

Override any default on a per-page basis via `<MainLayout>` props.

---

## Deployment

Astro builds to static HTML by default. Deploy the `dist/` folder to any static host.

```bash
pnpm build
```

### Popular Hosts

| Platform         | Deploy Command / Guide                                                |
| ---------------- | --------------------------------------------------------------------- |
| **Vercel**       | `vercel` or connect your Git repo                                     |
| **Netlify**      | Build command: `pnpm build`, publish dir: `dist`                      |
| **Cloudflare**   | `wrangler pages deploy dist`                                          |
| **GitHub Pages** | Use the [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) |

> For SSR or hybrid rendering, add an [Astro adapter](https://docs.astro.build/en/guides/on-demand-rendering/) to `astro.config.mjs`.

---

## FAQ

<details>
<summary><strong>How do I add dark mode?</strong></summary>

The CSS variables for `.dark` are already defined in `global.css`. Add a theme toggle that applies the `dark` class to the `<html>` element. You can use a React component with `client:load` for this.

</details>

<details>
<summary><strong>Can I use this without React?</strong></summary>

Yes — remove `@astrojs/react` from `astro.config.mjs` and the React dependencies from `package.json`. You won't be able to use shadcn/ui components, but pure Astro components work great.

</details>

<details>
<summary><strong>How do I change the shadcn/ui style preset?</strong></summary>

Update the `"style"` field in `components.json` and re-add your components. Available styles are listed at [ui.shadcn.com](https://ui.shadcn.com).

</details>

<details>
<summary><strong>Where do I add global scripts or analytics?</strong></summary>

Add `<script>` tags in `src/layouts/BaseHead.astro` or directly in `MainLayout.astro` before the closing `</body>` tag.

</details>

---

## License

MIT — use this template for anything.
