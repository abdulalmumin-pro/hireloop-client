import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import logo from "@/app/images/logo.png"
import { cn } from "cn"

export type AuthMode = "sign-in" | "sign-up"

const tabs: { mode: AuthMode; label: string; href: string }[] = [
  { mode: "sign-in", label: "Sign In", href: "/sign-in" },
  { mode: "sign-up", label: "Sign Up", href: "/sign-up" },
]

type AuthShellProps = {
  mode: AuthMode
  title: string
  description: string
  children: React.ReactNode
}

export function AuthShell({
  mode,
  title,
  description,
  children,
}: AuthShellProps) {
  return (
    <div className="relative isolate flex min-h-svh flex-col overflow-hidden bg-page text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-52 left-1/2 h-[620px] w-[min(1100px,160vw)] -translate-x-1/2 rounded-full bg-brand/20 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.08),transparent_38%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-5 sm:px-6 sm:py-6 lg:px-10 xl:px-[60px]">
        <Link
          href="/"
          aria-label="HireLoop home"
          className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-page"
        >
          <Image
            src={logo}
            alt="HireLoop"
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 font-manrope text-xs text-white/60 transition-colors outline-none hover:border-white/20 hover:text-white focus-visible:ring-2 focus-visible:ring-brand/50 sm:text-[13px]"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-3.5 transition-transform group-hover:-translate-x-0.5"
          />
          Back to home
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 pt-4 pb-10 sm:px-6 sm:pb-14">
        <div className="w-full max-w-[460px]">
          <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(43,43,46,0.92)_0%,rgba(9,9,11,0.96)_58%,rgba(1,1,2,0.98)_100%)] p-5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-8">
            <nav
              aria-label="Authentication"
              className="grid grid-cols-2 gap-1 rounded-[14px] border border-white/10 bg-black/40 p-1"
            >
              {tabs.map((tab) => {
                const active = tab.mode === mode

                return (
                  <Link
                    key={tab.mode}
                    href={tab.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex h-10 items-center justify-center rounded-[10px] font-manrope text-[14px] font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand/60 sm:h-11 sm:text-[15px]",
                      active
                        ? "bg-white text-[#0b0b0c] shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
                        : "text-white/55 hover:bg-white/[0.06] hover:text-white"
                    )}
                  >
                    {tab.label}
                  </Link>
                )
              })}
            </nav>

            <div className="mt-6 sm:mt-7">
              <h1 className="font-manrope text-[26px] leading-[1.2] font-bold tracking-[-0.02em] sm:text-[30px]">
                {title}
              </h1>
              <p className="mt-2 font-manrope text-sm leading-6 text-white/50 sm:text-[15px]">
                {description}
              </p>
            </div>

            <div className="mt-6 sm:mt-7">{children}</div>
          </div>

          <p className="mt-5 text-center font-manrope text-xs leading-5 text-white/30">
            Secure access for job seekers and recruiters.
          </p>
        </div>
      </main>
    </div>
  )
}
