import "./globals.css"

import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { GoogleTagManager } from "@next/third-parties/google"
import { StackProvider, StackTheme } from "@stackframe/stack"

import { siteConfig } from "@/config/site"
import connectToDatabase from "@/lib/mongoose"
import { Toaster } from "@/components/ui/toaster"
import SiteFooter from "@/components/SiteFooter"
// import { SiteHeader } from "@/components/site-header";
import { SiteHeader } from "@/components/SiteHeader"
import { ThemeProvider } from "@/components/theme-provider"

import { stackServerApp } from "../stack"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  connectToDatabase()
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <GoogleTagManager gtmId="G-RZYMNRZPM6" />
      )}
      <body
        className={`min-h-screen bg-background ${geistSans.variable} antialiased `}
      >
        <StackProvider app={stackServerApp}>
          <StackTheme>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div
                data-wrapper=""
                className="border-border/40 dark:border-border"
              >
                <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
                  <SiteHeader />
                  <main className="flex-1 container">{children}</main>
                  <SiteFooter />
                </div>
              </div>
              <Toaster />
            </ThemeProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  )
}
