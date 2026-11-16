import Link from "next/link"
import {
  BriefcaseBusiness,
  MapPin,
  Search,
  Star,
  Trophy,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
]

const stats = [
  { value: "50K", label: "Active Jobs", icon: BriefcaseBusiness },
  { value: "12K", label: "Companies", icon: Trophy },
  { value: "2M", label: "Job Seekers", icon: Users },
  { value: "97%", label: "Satisfaction Rate", icon: Star },
]

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-16 sm:pt-24 xl:pt-[176px]"
    >
      <div className="mx-auto w-full max-w-[784px] px-4 sm:px-6 lg:max-w-[832px]">
        <div className="flex h-[50px] items-center justify-center">
          <span
            aria-hidden="true"
            className="hidden h-px w-10 bg-gradient-to-r from-[#010123]/70 to-[#a8a8a8]/70 sm:block lg:w-16"
          />

          <div className="flex h-12 items-center gap-3 rounded-full border border-white/20 bg-[linear-gradient(180deg,#474747_0%,#010102_100%)] py-3 pr-5 pl-3 shadow-[inset_0_0_6px_6px_rgba(0,0,0,0.1)] sm:gap-4 sm:pr-6 sm:pl-6">
            <BriefcaseBusiness
              aria-hidden="true"
              className="size-5 shrink-0 sm:size-6"
              strokeWidth={1.5}
            />
            <span className="font-space-mono text-[13px] leading-[1.2] whitespace-nowrap sm:text-[16px] lg:text-[20px]">
              <strong className="font-bold">50,000+</strong>{" "}
              <span className="text-white/50">new jobs this month</span>
            </span>
          </div>

          <span
            aria-hidden="true"
            className="hidden h-px w-10 bg-gradient-to-l from-[#010123]/70 to-[#a8a8a8]/70 sm:block lg:w-16"
          />
        </div>

        <div className="mt-8 text-center">
          <h1
            id="hero-heading"
            className="font-manrope text-[38px] leading-[1.15] font-bold tracking-[-0.02em] text-balance sm:text-[48px] lg:text-[56px]"
          >
            Find Your Dream Job Today
          </h1>
          <p className="mx-auto mt-4 max-w-[784px] font-manrope text-base leading-[1.6] text-pretty text-white sm:text-lg lg:text-[20px]">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>
        </div>

        <form
          action="/jobs"
          method="get"
          role="search"
          className="mt-8 flex w-full flex-col gap-1 rounded-[16px] border border-white/20 bg-[#101010] p-2 sm:mt-12 sm:h-16 sm:flex-row sm:items-center sm:gap-6 sm:py-2 sm:pr-2 sm:pl-6"
        >
          <div className="flex h-12 items-center gap-2 px-3 sm:h-auto sm:flex-1 sm:px-0">
            <Search
              aria-hidden="true"
              className="size-5 shrink-0 text-white sm:size-6"
              strokeWidth={1.5}
            />
            <label htmlFor="job-query" className="sr-only">
              Job title, skill or company
            </label>
            <input
              id="job-query"
              name="q"
              type="search"
              autoComplete="off"
              placeholder="Job title, skill or company"
              className="h-full w-full min-w-0 bg-transparent font-satoshi text-base leading-[1.7] text-white outline-none placeholder:text-white"
            />
          </div>

          <span
            aria-hidden="true"
            className="mx-3 h-px shrink-0 bg-white/20 sm:mx-0 sm:h-[23px] sm:w-px"
          />

          <div className="flex h-12 items-center gap-2 px-3 sm:h-auto sm:flex-1 sm:px-0">
            <MapPin
              aria-hidden="true"
              className="size-5 shrink-0 text-white sm:size-6"
              strokeWidth={1.5}
            />
            <label htmlFor="job-location" className="sr-only">
              Location or Remote
            </label>
            <input
              id="job-location"
              name="location"
              type="search"
              autoComplete="off"
              placeholder="Location or Remote"
              className="h-full w-full min-w-0 bg-transparent font-satoshi text-base leading-[1.7] text-white outline-none placeholder:text-white"
            />
          </div>

          <Button
            type="submit"
            aria-label="Search jobs"
            className="mt-1 h-12 w-full shrink-0 gap-2 rounded-[12px] bg-brand text-[16px] font-medium text-white shadow-none hover:bg-brand/90 sm:mt-0 sm:w-12"
          >
            <Search
              aria-hidden="true"
              className="size-6"
              strokeWidth={1.5}
            />
            <span className="sm:hidden">Search</span>
          </Button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="font-manrope text-sm leading-[1.3] text-white sm:text-base">
            Trending Position
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {trendingPositions.map((position) => (
              <Link
                key={position}
                href={`/jobs?q=${encodeURIComponent(position)}`}
                className="flex h-[33px] items-center rounded-full border border-white/10 bg-[#1a1a1b] px-3 font-manrope text-[14px] leading-[1.5] text-white transition-colors hover:bg-white/10"
              >
                {position}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="mt-[104px] pt-8 pb-[72px] sm:mt-[160px] sm:pt-10 xl:mt-[286px] xl:pt-[72px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-[60px]">
        <h2
          id="stats-heading"
          className="mx-auto max-w-[600px] text-center font-manrope text-[26px] leading-[1.3] font-medium tracking-[-0.025em] text-white/70 sm:text-[32px] lg:text-[2.5rem]"
        >
          Assisting over 15,000 job seekers find their dream positions.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 xl:mt-12 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className="flex min-h-[220px] flex-col rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,#313131_12%,#010102_72%)] p-6 xl:min-h-[254px]"
              >
                <Icon
                  aria-hidden="true"
                  className="size-6 shrink-0"
                  strokeWidth={1.5}
                />
                <div className="mt-auto pt-10 xl:pt-[72px]">
                  <p className="font-plus-jakarta text-[48px] leading-[1.15] font-semibold tracking-[-0.02em] xl:text-[56px]">
                    {stat.value}
                  </p>
                  <p className="mt-4 font-inter-tight text-lg leading-[1.65]">
                    {stat.label}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
