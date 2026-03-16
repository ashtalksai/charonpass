"use client"

import Link from "next/link"
import { useState } from "react"
import { Shield, Menu, X } from "lucide-react"
import { useSession } from "next-auth/react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Security" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2EEF0] bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl text-[#1A2332]">
            <Shield className="h-6 w-6 text-[#0D7377]" strokeWidth={2.5} />
            <span>CharonPass</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1A2332]/70 hover:text-[#0D7377] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <Link
                href="/dashboard"
                className="text-sm font-medium text-[#0D7377] hover:text-[#0D7377]/80 transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="text-sm font-medium text-[#1A2332]/70 hover:text-[#0D7377] transition-colors"
              >
                Login
              </Link>
            )}
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-lg bg-[#0D7377] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0D7377]/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1A2332]/70 hover:text-[#0D7377]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#E2EEF0] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-[#1A2332]/70 hover:text-[#0D7377] py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#E2EEF0] space-y-3">
              {session ? (
                <Link
                  href="/dashboard"
                  className="block text-sm font-medium text-[#0D7377]"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="block text-sm font-medium text-[#1A2332]/70"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
              <Link
                href="/signup"
                className="block w-full text-center rounded-lg bg-[#0D7377] px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
