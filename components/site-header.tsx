"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import logo from "@/app/images/logo.png"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
]

const actionLinks = [
  { label: "Sign In", href: "/sign-in" },
  { label: "Get Started", href: "/sign-up" },
]

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 bg-page">
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-4 sm:px-6 lg:px-10 xl:px-[60px] xl:pt-6">
        <div className="flex h-16 w-full items-center justify-between gap-4 rounded-[16px] bg-navbar pr-2 pl-4 sm:h-[74px] sm:pl-6 lg:pr-0">
          <Link
            href="/"
            aria-label="HireLoop home"
            className="shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-navbar"
          >
            <Image
              src={logo}
              alt="HireLoop"
              priority
              className="h-9 w-auto sm:h-11"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center lg:flex"
          >
            <div className="flex items-center gap-10 pl-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[16px] leading-[1.8] text-white transition-colors hover:text-white/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <span aria-hidden="true" className="mx-6 h-6 w-px bg-white/40" />

            <div className="flex items-center gap-4 pr-2">
              <Button
                nativeButton={false}
                render={<Link href={actionLinks[0].href} />}
                className="h-[58px] rounded-[12px] bg-white px-6 font-manrope text-[18px] font-semibold text-brand shadow-none hover:bg-white/90 hover:text-brand"
              >
                {actionLinks[0].label}
              </Button>
              <Button
                nativeButton={false}
                render={<Link href={actionLinks[1].href} />}
                className="h-[52px] rounded-[12px] bg-brand px-6 font-instrument text-[18px] font-medium text-white shadow-none hover:bg-brand/90"
              >
                {actionLinks[1].label}
              </Button>
            </div>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-lg"
                  aria-label="Open navigation menu"
                  className="mr-1 size-11 rounded-[12px] text-white hover:bg-white/10 hover:text-white lg:hidden"
                />
              }
            >
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-[min(20rem,calc(100vw-2rem))] gap-0 border-white/10 bg-[#161616] p-0 text-white sm:max-w-sm"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate to jobs, companies, pricing, sign in, or create an
                account.
              </SheetDescription>

              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <Image src={logo} alt="HireLoop" className="h-9 w-auto" />
                <SheetClose
                  render={
                    <Button
                      variant="ghost"
                      size="icon-lg"
                      aria-label="Close navigation menu"
                      className="size-10 rounded-[10px] text-white hover:bg-white/10 hover:text-white"
                    />
                  }
                >
                  <X className="size-5" />
                </SheetClose>
              </div>

              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-1 px-3 py-5"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-[10px] px-4 py-3 text-[16px] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-3 border-t border-white/10 p-5">
                <Button
                  nativeButton={false}
                  render={
                    <Link
                      href={actionLinks[0].href}
                      onClick={() => setOpen(false)}
                    />
                  }
                  className="h-[52px] w-full rounded-[12px] bg-white font-manrope text-[18px] font-semibold text-brand shadow-none hover:bg-white/90 hover:text-brand"
                >
                  {actionLinks[0].label}
                </Button>
                <Button
                  nativeButton={false}
                  render={
                    <Link
                      href={actionLinks[1].href}
                      onClick={() => setOpen(false)}
                    />
                  }
                  className="h-[52px] w-full rounded-[12px] bg-brand font-instrument text-[18px] font-medium text-white shadow-none hover:bg-brand/90"
                >
                  {actionLinks[1].label}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
