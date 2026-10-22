"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { navItems, site } from "@/lib/site"
import { cn } from "@/lib/utils"

// Dark mode for the footer: re-points the shadcn colour tokens for everything inside it.
const darkTokens = [
  "[--color-background:var(--color-stone-950)]",
  "[--color-foreground:var(--color-stone-100)]",
  "[--color-primary:var(--color-hazard)]",
  "[--color-primary-foreground:var(--color-stone-950)]",
  "[--color-accent:var(--color-stone-800)]",
  "[--color-accent-foreground:var(--color-stone-100)]",
  "[--color-muted:var(--color-stone-800)]",
  "[--color-muted-foreground:var(--color-stone-400)]",
  "[--color-border:var(--color-stone-800)]",
  "[--color-input:var(--color-stone-700)]",
].join(" ")

// Brand icons (lucide-react no longer ships these), drawn in lucide's stroke style.
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-4 w-4",
  "aria-hidden": true,
} as const

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <svg {...iconProps}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: (
    <svg {...iconProps}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  LinkedIn: (
    <svg {...iconProps}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
}

const legal = [
  { label: "Privacy Policy", href: "#todo-privacy-policy" }, // PLACEHOLDER
  { label: "Terms & Conditions", href: "#todo-terms-and-conditions" }, // PLACEHOLDER
]

function FooterSection() {
  // Opens a WhatsApp chat with the team, pre-filled with the visitor's number.
  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const number = String(new FormData(e.currentTarget).get("phone") ?? "").trim()
    const text = encodeURIComponent(`Hi ${site.name}, please get in touch with me on ${number}.`)
    window.open(`https://api.whatsapp.com/send?phone=${site.whatsapp}&text=${text}`, "_blank", "noopener,noreferrer")
  }

  return (
    <footer
      id="footer"
      className={cn(darkTokens, "relative border-t border-border bg-background text-foreground transition-colors duration-300")}
    >
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Link href="/" className="mb-6 flex items-center gap-3" aria-label={`${site.name} home`}>
              <Image
                src="/images/logos/surface-company/surface-company-emblem.png"
                alt=""
                width={48}
                height={48}
                className="size-12"
              />
              <span className="flex flex-col text-lg font-semibold uppercase leading-tight">
                <span>Surface</span>
                <span>Company</span>
              </span>
            </Link>
            <h2 className="mb-4 text-lg font-semibold">Stay Connected</h2>
            <form className="relative" onSubmit={handleWhatsApp}>
              <Label htmlFor="footer-phone" className="sr-only">
                Your phone number
              </Label>
              <Input
                id="footer-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                pattern="\+?[0-9 ]{7,}"
                title="Please enter a valid phone number"
                placeholder="Enter your number"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send via WhatsApp</span>
              </Button>
            </form>
            <div className="pointer-events-none absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav aria-label="Footer" className="space-y-2 text-sm">
              {navItems.map(({ label, href }) => (
                <Link key={label} href={href} className="block transition-colors hover:text-primary">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>
                Phone:{" "}
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                  {site.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary">
                  {site.email}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Chat with us
                </a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <TooltipProvider>
              <div className="flex space-x-4">
                {site.socials.map(({ label, href }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full" asChild>
                        <a href={href} target="_blank" rel="noreferrer">
                          {socialIcons[label]}
                          <span className="sr-only">{label}</span>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on {label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 {site.name}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-4 text-sm">
            {legal.map(({ label, href }) => (
              <a key={label} href={href} className="transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { FooterSection }
