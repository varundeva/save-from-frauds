/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface DocsConfig {
  mainNav: MainNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
    {
      title: "Report Fraud",
      href: "/report",
    },
    {
      title: "Search Fraud",
      href: "/search",
    },
    {
      title: "Prevention Fraud",
      href: "/prevention",
    },
    {
      title: "Blog",
      href: "/blog",
    },{
      title:"Frequently Asked Questions",
      href:"/frequently-asked-questions"
    }
  ]
}