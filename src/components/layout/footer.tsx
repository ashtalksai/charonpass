import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F7FAFA] border-t border-[#E2EEF0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg text-[#1A2332] mb-3">
              <Shield className="h-5 w-5 text-[#0D7377]" strokeWidth={2.5} />
              <span>CharonPass</span>
            </Link>
            <p className="text-sm text-[#1A2332]/60 leading-relaxed">
              Your digital estate, safely delivered.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-[#1A2332] mb-4">Product</h3>
            <ul className="space-y-2">
              {[
                { href: "/#features", label: "Features" },
                { href: "/pricing", label: "Pricing" },
                { href: "/security", label: "Security" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#1A2332]/60 hover:text-[#0D7377] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#1A2332] mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#1A2332]/60 hover:text-[#0D7377] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[#1A2332] mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#1A2332]/60 hover:text-[#0D7377] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#E2EEF0]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#1A2332]/50">
              &copy; 2026 CharonPass. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-[#1A2332]/50">
              <span className="flex items-center gap-1.5">
                <span>🔒</span> Bank-level encryption
              </span>
              <span className="flex items-center gap-1.5">
                <span>🚫</span> No keys stored
              </span>
              <span className="flex items-center gap-1.5">
                <span>🛡️</span> GDPR compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
