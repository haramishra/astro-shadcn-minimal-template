import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { IconMenu2 } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import type { NavLink } from "@/global"

interface MobileNavProps {
  /** Navigation links to display */
  links: NavLink[]
  /** Site name shown in sheet header */
  siteName: string
  /** Site logo URL */
  siteLogo: string
  /** Primary CTA */
  cta?: {
    label: string
    href: string
  }
  /** Show CTA button (default: true) */
  showCta?: boolean
  /** Additional trigger button classes */
  className?: string
}

// ─── Component ────────────────────────────────────────────────────────────

export function MobileNav({
  links,
  siteName,
  siteLogo,
  cta,
  showCta = true,
  className,
}: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className={cn("md:hidden", className)}
            aria-label="Open navigation menu"
          />
        }
      >
        <IconMenu2 className="size-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[360px]">
        {/* Header */}
        <SheetHeader>
          <SheetTitle>
            <a href="/" className="flex items-center gap-2">
              <img src={siteLogo} alt={siteName} className="h-7 w-7" />
              <span className="text-base font-semibold tracking-tight">
                {siteName}
              </span>
            </a>
          </SheetTitle>
        </SheetHeader>

        {/* Navigation Links */}
        <nav
          className="flex-1 overflow-y-auto px-6"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                {link.children && link.children.length > 0 ? (
                  /* Parent with children */
                  <div>
                    <span className="flex items-center rounded-lg px-3 py-2.5 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {link.label}
                    </span>
                    <ul className="ml-3 space-y-0.5 border-l border-border/60 pl-3">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <SheetClose
                            render={
                              <a
                                href={child.href}
                                target={child.external ? "_blank" : undefined}
                                rel={
                                  child.external
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                              />
                            }
                          >
                            {child.label}
                            {child.badge && (
                              <span className="ml-auto inline-flex items-center rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                                {child.badge}
                              </span>
                            )}
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  /* Simple link */
                  <SheetClose
                    render={
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                      />
                    }
                  >
                    {link.label}
                    {link.badge && (
                      <span className="ml-auto inline-flex items-center rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                        {link.badge}
                      </span>
                    )}
                  </SheetClose>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer CTA */}
        {showCta && cta && (
          <SheetFooter>
            <SheetClose
              render={
                <a
                  href={cta.href}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                />
              }
            >
              {cta.label}
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
