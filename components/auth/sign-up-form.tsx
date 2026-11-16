"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Loader2,
} from "lucide-react"

import { FormField, authInputClassName } from "@/components/auth/form-field"
import { PasswordField } from "@/components/auth/password-field"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { cn } from "cn"

const accountTypes = [
  { value: "job-seeker", label: "Job seeker", icon: BriefcaseBusiness },
  { value: "recruiter", label: "Recruiter", icon: Building2 },
]

const checkboxClassName =
  "size-[18px] rounded-[5px] border-white/25 bg-white/5 data-checked:border-brand data-checked:bg-brand data-checked:text-white dark:bg-white/5 dark:data-checked:bg-brand"

export function SignUpForm() {
  const [formError, setFormError] = React.useState<string | null>(null)
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormError(null)
    setSubmitted(false)

    const formData = new FormData(event.currentTarget)
    const password = String(formData.get("password") ?? "")
    const confirmPassword = String(formData.get("confirmPassword") ?? "")

    if (password !== confirmPassword) {
      setFormError("Passwords do not match. Please try again.")
      return
    }

    if (formData.get("terms") !== "on") {
      setFormError(
        "Please accept the Terms of Service and Privacy Policy to continue."
      )
      return
    }

    const values = {
      accountType: String(formData.get("accountType") ?? "job-seeker"),
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      terms: true,
    }

    // TODO: Map accountType to a custom user field when the database schema supports it.
    console.log("[HireLoop] sign-up form data", values)
    setIsSubmitting(true)

    try {
      const { data: signUpResponse, error } = await authClient.signUp.email({
        name: values.name,
        email: values.email,
        password,
        callbackURL: "/",
      })

      // Dev-only: remove token logging before shipping to production.
      console.log("[HireLoop] sign-up token", signUpResponse?.token)
      console.log("[HireLoop] sign-up response", { signUpResponse, error })

      if (error) {
        console.error("[HireLoop] sign-up failed", error)
        setFormError(
          error.message ?? "Unable to create your account. Please try again."
        )
        return
      }

      setSubmitted(true)
    } catch (error) {
      console.error("[HireLoop] sign-up failed", error)
      setFormError("Unable to create your account right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSignUp} className="space-y-5">
        <fieldset className="space-y-2">
          <legend className="font-manrope text-[13.5px] leading-5 font-medium text-white/80">
            I&apos;m joining as
          </legend>
          <div className="grid grid-cols-2 gap-2">
            {accountTypes.map((type) => {
              const Icon = type.icon

              return (
                <label
                  key={type.value}
                  className="flex h-[52px] cursor-pointer items-center justify-center gap-2 rounded-[12px] border border-white/12 bg-white/[0.03] font-manrope text-sm text-white/60 transition-colors select-none hover:bg-white/[0.06] has-[:checked]:border-brand/70 has-[:checked]:bg-brand/12 has-[:checked]:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand/40"
                >
                  <input
                    type="radio"
                    name="accountType"
                    value={type.value}
                    defaultChecked={type.value === "job-seeker"}
                    className="sr-only"
                  />
                  <Icon
                    aria-hidden="true"
                    className="size-4 shrink-0"
                    strokeWidth={1.7}
                  />
                  {type.label}
                </label>
              )
            })}
          </div>
        </fieldset>

        <FormField id="sign-up-name" label="Full name">
          <Input
            id="sign-up-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jordan Lee"
            required
            className={authInputClassName}
          />
        </FormField>

        <FormField id="sign-up-email" label="Email address">
          <Input
            id="sign-up-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className={authInputClassName}
          />
        </FormField>

        <FormField
          id="sign-up-password"
          label="Password"
          hint="Use at least 8 characters."
        >
          <PasswordField
            id="sign-up-password"
            name="password"
            autoComplete="new-password"
            placeholder="Create a password"
            required
            minLength={8}
            aria-describedby="sign-up-password-hint"
          />
        </FormField>

        <FormField id="sign-up-confirm-password" label="Confirm password">
          <PasswordField
            id="sign-up-confirm-password"
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="Re-enter your password"
            required
            minLength={8}
          />
        </FormField>

        <div className="flex items-start gap-2.5">
          <Checkbox
            id="sign-up-terms"
            name="terms"
            value="on"
            className={cn(checkboxClassName, "mt-0.5")}
          />
          <Label
            htmlFor="sign-up-terms"
            className="block font-manrope text-[13.5px] leading-[1.55] font-normal text-white/55"
          >
            I agree to HireLoop&apos;s{" "}
            <Link
              href="/terms"
              className="text-white underline-offset-4 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-white underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </Label>
        </div>

        {formError ? (
          <p
            role="alert"
            className="rounded-[12px] border border-red-400/20 bg-red-400/10 px-3.5 py-3 text-[13px] leading-5 text-red-200"
          >
            {formError}
          </p>
        ) : null}

        {submitted ? (
          <div
            role="status"
            className="flex items-start gap-2.5 rounded-[12px] border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-3 text-[13px] leading-5 text-emerald-200"
          >
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0"
            />
            <span>Account created successfully. Welcome to HireLoop.</span>
          </div>
        ) : null}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="group h-12 w-full gap-2 rounded-[12px] bg-brand font-manrope text-[15px] font-semibold text-white shadow-none hover:bg-brand/90 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Creating account...
            </>
          ) : (
            <>
              Create account
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover/button:translate-x-0.5"
              />
            </>
          )}
        </Button>
      </form>

      <p className="mt-6 text-center font-manrope text-sm text-white/45">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="ml-1 font-semibold text-white underline-offset-4 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </>
  )
}
