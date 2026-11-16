"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

import { FormField, authInputClassName } from "@/components/auth/form-field"
import { PasswordField } from "@/components/auth/password-field"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"

export function SignInForm() {
  const [formError, setFormError] = React.useState<string | null>(null)
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormError(null)
    setSubmitted(false)

    const formData = new FormData(event.currentTarget)
    const values = {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
      rememberMe: formData.get("rememberMe") === "on",
    }

    console.log("[HireLoop] sign-in form data", {
      email: values.email,
      rememberMe: values.rememberMe,
    })
    setIsSubmitting(true)

    try {
      const { data: signInResponse, error } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe,
        callbackURL: "/",
      })

      // Dev-only: remove token logging before shipping to production.
      console.log("[HireLoop] sign-in token", signInResponse?.token)
      console.log("[HireLoop] sign-in response", { signInResponse, error })

      if (error) {
        console.error("[HireLoop] sign-in failed", error)
        setFormError(
          error.message ??
            "Unable to sign you in. Please check your email and password."
        )
        return
      }

      setSubmitted(true)
    } catch (error) {
      console.error("[HireLoop] sign-in failed", error)
      setFormError("Unable to sign you in right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSignIn} className="space-y-5">
        <FormField id="sign-in-email" label="Email address">
          <Input
            id="sign-in-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className={authInputClassName}
          />
        </FormField>

        <FormField
          id="sign-in-password"
          label="Password"
          action={
            <Link
              href="/forgot-password"
              className="rounded-sm text-xs font-medium text-white/55 underline-offset-4 transition-colors outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-brand/50"
            >
              Forgot password?
            </Link>
          }
        >
          <PasswordField
            id="sign-in-password"
            name="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            required
          />
        </FormField>

        <div className="flex items-center gap-2.5">
          <Checkbox
            id="remember-me"
            name="rememberMe"
            value="on"
            className="size-[18px] rounded-[5px] border-white/25 bg-white/5 dark:bg-white/5 data-checked:border-brand data-checked:bg-brand data-checked:text-white dark:data-checked:bg-brand"
          />
          <Label
            htmlFor="remember-me"
            className="font-manrope text-[13.5px] font-normal text-white/60"
          >
            Keep me signed in
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
            <span>Signed in successfully. Welcome back.</span>
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
              Signing in...
            </>
          ) : (
            <>
              Sign in
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover/button:translate-x-0.5"
              />
            </>
          )}
        </Button>
      </form>

      <p className="mt-6 text-center font-manrope text-sm text-white/45">
        New to HireLoop?{" "}
        <Link
          href="/sign-up"
          className="ml-1 font-semibold text-white underline-offset-4 hover:underline"
        >
          Create an account
        </Link>
      </p>
    </>
  )
}
