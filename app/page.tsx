import Image from "next/image"

import globe from "@/app/images/globe.png"
import { HeroSection, StatsSection } from "@/components/hero-section"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="relative isolate min-h-svh bg-page text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={globe}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <SiteHeader />

      <main>
        <HeroSection />
        <StatsSection />
      </main>
    </div>
  )
}
