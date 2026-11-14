import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="min-h-svh bg-page text-white">
      <SiteHeader />

      <main className="mx-auto min-h-[85svh] w-full max-w-[1440px] px-4 pt-16 pb-24 sm:px-6 lg:px-10 xl:px-[60px]">
        <div className="mx-auto w-full max-w-[1320px]">
          <p className="text-[13px] font-medium tracking-[0.3em] text-brand uppercase">
            HireLoop
          </p>
          <h1 className="mt-5 max-w-2xl font-instrument text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Find your next opportunity.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
            The responsive public navigation is ready. Connect its links to your
            jobs, companies, pricing, and auth pages.
          </p>
        </div>
      </main>
    </div>
  )
}
