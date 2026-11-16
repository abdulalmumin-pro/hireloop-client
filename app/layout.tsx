import {
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Inter_Tight,
  Manrope,
  Plus_Jakarta_Sans,
  Space_Mono,
} from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope-face",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-face",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono-face",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-plus-jakarta-face",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight-face",
})

const satoshi = localFont({
  src: "./fonts/satoshi-regular.woff2",
  weight: "400",
  variable: "--font-satoshi-face",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        manrope.variable,
        instrumentSans.variable,
        spaceMono.variable,
        plusJakartaSans.variable,
        interTight.variable,
        satoshi.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
