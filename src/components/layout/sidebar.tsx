"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, LayoutDashboard, Wallet, FileText, Users, Timer, LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/app/wallets", label: "Wallets", icon: Wallet },
  { href: "/app/recovery-guide", label: "Recovery Guide", icon: FileText },
  { href: "/app/beneficiaries", label: "Beneficiaries", icon: Users },
  { href: "/app/switch", label: "Dead Man's Switch", icon: Timer },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-[#E2EEF0] flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-[#E2EEF0]">
        <Shield className="h-6 w-6 text-[#0D7377]" strokeWidth={2.5} />
        <span className="font-display font-bold text-lg text-[#1A2332]">CharonPass</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#0D7377]/10 text-[#0D7377]"
                  : "text-[#1A2332]/70 hover:bg-[#F7FAFA] hover:text-[#1A2332]"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Sign out */}
      <div className="px-3 py-4 border-t border-[#E2EEF0]">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#1A2332]/60 hover:bg-[#F7FAFA] hover:text-[#1A2332] transition-colors w-full"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
