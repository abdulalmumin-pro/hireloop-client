"use client"

import * as React from "react"
import { Eye, EyeOff } from "lucide-react"

import { authInputClassName } from "@/components/auth/form-field"
import { Input } from "@/components/ui/input"
import { cn } from "cn"

type PasswordFieldProps = Omit<React.ComponentProps<"input">, "type">

export function PasswordField({ className, ...props }: PasswordFieldProps) {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className="relative">
      <Input
        type={visible ? "text" : "password"}
        className={cn(authInputClassName, "pr-12", className)}
        {...props}
      />

      <button
        type="button"
        onClick={() => setVisible((current) => !current)}
        aria-label={visible ? "Hide password" : "Show password"}
        aria-pressed={visible}
        className="absolute inset-y-0 right-1.5 my-auto flex size-9 items-center justify-center rounded-lg text-white/40 transition-colors outline-none hover:bg-white/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-brand/50"
      >
        {visible ? (
          <EyeOff
            className="size-[18px]"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        ) : (
          <Eye className="size-[18px]" strokeWidth={1.6} aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
