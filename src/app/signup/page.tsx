"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { Shield, Check } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      setLoading(false)
      return
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.error || "Something went wrong")
      setLoading(false)
      return
    }

    // Auto sign in after registration
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    router.push("/dashboard")
  }

  const benefits = [
    "Setup takes under 30 minutes",
    "No private keys ever stored",
    "Plain English recovery guides",
    "Dead Man's Switch included",
  ]

  return (
    <div className="min-h-screen flex">
      {/* Left: Teal */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0D7377] flex-col justify-center p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        <div className="relative">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <Shield className="h-8 w-8 text-white" strokeWidth={2.5} />
            <span className="font-display font-bold text-2xl text-white">CharonPass</span>
          </Link>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Secure your digital legacy today.
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Join thousands of crypto holders who&apos;ve given their families the gift of clarity.
          </p>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80">
                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-12 bg-white">
        <div className="w-full max-w-sm mx-auto">
          <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <Shield className="h-6 w-6 text-[#0D7377]" strokeWidth={2.5} />
            <span className="font-display font-bold text-xl text-[#1A2332]">CharonPass</span>
          </Link>

          <h1 className="font-display text-2xl font-bold text-[#1A2332] mb-2">Create your account</h1>
          <p className="text-[#1A2332]/60 mb-8">
            Already have an account?{" "}
            <Link href="/login" className="text-[#0D7377] font-medium hover:underline">
              Sign in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Alex Thompson"
                className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-4 py-2.5 text-sm text-[#1A2332] placeholder-[#1A2332]/40 focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 focus:border-[#0D7377]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-4 py-2.5 text-sm text-[#1A2332] placeholder-[#1A2332]/40 focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 focus:border-[#0D7377]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Min. 8 characters"
                className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-4 py-2.5 text-sm text-[#1A2332] placeholder-[#1A2332]/40 focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 focus:border-[#0D7377]"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#0D7377] py-3 text-sm font-semibold text-white hover:bg-[#0D7377]/90 transition-colors disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-[#1A2332]/40">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="underline">Terms</Link> and{" "}
            <Link href="/privacy" className="underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
