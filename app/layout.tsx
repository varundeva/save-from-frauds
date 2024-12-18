import "./globals.css"

import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { StackProvider, StackTheme } from "@stackframe/stack"
import { GoogleAnalytics } from "react-next-google-tools"

import { siteConfig } from "@/config/site"
import connectToDatabase from "@/lib/mongoose"
import { Toaster } from "@/components/ui/toaster"
import SiteFooter from "@/components/SiteFooter"
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
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://savefromfrauds.freesv.com",
    images: [
      {
        url: "/save-from-frauds.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    creatorId: "@varundeva",
    description:
      "Use our trusted platform to identify and avoid online scams. Verify suspicious emails, phone numbers, and websites with our user-reported fraud database.",
    images: ["/save-from-frauds.png"],
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
      <head>
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics id="G-RZYMNRZPM6" isNextJs={true} />
        )}
      </head>
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
                <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-screen-2xl min-[1800px]:border-x">
                  <SiteHeader />
                  <main className="container flex-1">{children}</main>
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
