import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNavigation } from "@/components/mainNaviagtion"
import { MobileNav } from "@/components/MobileNavigation"
// import { ModeSwitcher } from "@/components/mode-switcher"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { UserButton } from "@stackframe/stack"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex h-14 items-center px-4 container">
        <MainNavigation />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end gap-2 md:justify-end">
          <nav className="flex items-center gap-0.5">
            <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ThemeToggle />
            <UserButton />
          </nav>
        </div>
      </div>
    </header>
  )
}