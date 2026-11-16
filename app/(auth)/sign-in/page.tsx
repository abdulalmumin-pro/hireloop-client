import type { Metadata } from "next"

import { AuthShell } from "@/components/auth/auth-shell"
import { SignInForm } from "@/components/auth/sign-in-form"

export const metadata: Metadata = {
  title: "Sign In — HireLoop",
  description:
    "Sign in to your HireLoop account to continue your job search or manage your hiring pipeline.",
}

export default function SignInPage() {
  return (
    <AuthShell
      mode="sign-in"
      title="Welcome back"
      description="Sign in to continue your job search or manage your hiring pipeline."
    >
      <SignInForm />
    </AuthShell>
  )
}
