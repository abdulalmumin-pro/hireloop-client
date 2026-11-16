import * as React from "react"

import { Label } from "@/components/ui/label"
import { cn } from "cn"

export const authInputClassName =
  "h-12 rounded-[12px] border-white/12 bg-white/[0.04] px-4 text-[15px] text-white transition-colors placeholder:text-white/45 focus-visible:border-brand/70 focus-visible:ring-brand/20 aria-invalid:border-red-400/60 aria-invalid:ring-red-400/15 dark:bg-white/[0.04] md:text-[15px]"

type FormFieldProps = {
  id: string
  label: string
  hint?: string
  error?: string
  action?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export function FormField({
  id,
  label,
  hint,
  error,
  action,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <Label
          htmlFor={id}
          className="font-manrope text-[13.5px] leading-5 font-medium text-white/80"
        >
          {label}
        </Label>
        {action}
      </div>

      {children}

      {error ? (
        <p id={`${id}-error`} className="text-xs leading-5 text-red-300">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-xs leading-5 text-white/40">
          {hint}
        </p>
      ) : null}
    </div>
  )
}
