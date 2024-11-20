import React from "react"
import Link from "next/link"

const SiteFooter = () => {
  return (
    <div className="border-t">
      <footer className="container flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © 2024 Save From Frauds. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default SiteFooter
