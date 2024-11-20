import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNavigation } from "@/components/MainNavigation"
import { MobileNav } from "@/components/MobileNavigation"
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
          <div className="w-full flex-1 md:hidden lg:hidden">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold lg:inline-block text-nowrap">
                {siteConfig.name}
              </span>
            </Link>
          </div>
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
