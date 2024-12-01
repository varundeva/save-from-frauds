"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNavigation() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="size-6" />
        <span className="hidden text-nowrap font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/about" ? "text-foreground" : "text-foreground/80"
          )}
        >
          About Us
        </Link>
        <Link
          href="/prevention"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/prevention")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Fraud Prevention
        </Link>
        <Link
          href="/search"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/component/chart") ||
              pathname?.startsWith("/search")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Search Fraud
        </Link>
        <Link
          href="/report"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/report")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Report Fraud
        </Link>
        {/* <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blog")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Blog
        </Link> */}
        <Link
          href="/frequently-asked-questions"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/frequently-asked-questions")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          FAQ
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Contact Us
        </Link>
      </nav>
    </div>
  )
}
