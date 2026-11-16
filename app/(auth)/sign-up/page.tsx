import type { Metadata } from "next"

import { AuthShell } from "@/components/auth/auth-shell"
import { SignUpForm } from "@/components/auth/sign-up-form"

export const metadata: Metadata = {
  title: "Create Account — HireLoop",
  description:
    "Create a HireLoop account to find your next role or hire exceptional talent.",
}

export default function SignUpPage() {
  return (
    <AuthShell
      mode="sign-up"
      title="Create your account"
      description="Join HireLoop to find your next role or hire exceptional talent."
    >
      <SignUpForm />
    </AuthShell>
  )
}
