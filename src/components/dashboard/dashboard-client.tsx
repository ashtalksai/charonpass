"use client"

import { useState } from "react"
import { Wallet, Users, FileText, Timer, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Props {
  userName: string
  stats: {
    wallets: number
    beneficiaries: number
    completedGuides: number
    totalGuides: number
    daysUntilTrigger: number | null
    switchStatus: string
    lastCheckIn: string | null
  }
  recentCheckIns: string[]
}

export function DashboardClient({ userName, stats, recentCheckIns }: Props) {
  const [checkingIn, setCheckingIn] = useState(false)
  const [checkedIn, setCheckedIn] = useState(false)

  const handleCheckIn = async () => {
    setCheckingIn(true)
    await fetch("/api/checkin", { method: "POST" })
    setCheckingIn(false)
    setCheckedIn(true)
    setTimeout(() => setCheckedIn(false), 3000)
  }

  const setupSteps = [
    { label: "Add your first wallet", done: stats.wallets > 0, href: "/app/wallets" },
    { label: "Add a beneficiary", done: stats.beneficiaries > 0, href: "/app/beneficiaries" },
    { label: "Write a recovery guide", done: stats.totalGuides > 0, href: "/app/recovery-guide" },
    { label: "Activate Dead Man's Switch", done: stats.switchStatus === "active", href: "/app/switch" },
  ]

  const completedSteps = setupSteps.filter((s) => s.done).length

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl font-bold text-[#1A2332]">
            Welcome back, {userName}
          </h1>
          <p className="text-[#1A2332]/60 text-sm mt-1">
            {stats.switchStatus === "active"
              ? `Your switch is active. Next check-in deadline in ${stats.daysUntilTrigger} days.`
              : "Set up your Dead Man's Switch to protect your family."}
          </p>
        </div>
        <button
          onClick={handleCheckIn}
          disabled={checkingIn}
          className={cn(
            "flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all shadow-md",
            checkedIn
              ? "bg-emerald-500 text-white"
              : "bg-[#0D7377] text-white hover:bg-[#0D7377]/90 shadow-[#0D7377]/25"
          )}
        >
          <CheckCircle className="h-4 w-4" />
          {checkingIn ? "Checking in..." : checkedIn ? "Checked in!" : "Check In Now"}
        </button>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Wallets", value: stats.wallets, icon: Wallet, href: "/app/wallets", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Beneficiaries", value: stats.beneficiaries, icon: Users, href: "/app/beneficiaries", color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Recovery Guides", value: `${stats.completedGuides}/${stats.totalGuides}`, icon: FileText, href: "/app/recovery-guide", color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Days Until Switch", value: stats.daysUntilTrigger ?? "—", icon: Timer, href: "/app/switch", color: "text-[#0D7377]", bg: "bg-[#0D7377]/10" },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <Link key={i} href={stat.href} className="bg-white rounded-xl p-5 border border-[#E2EEF0] hover:border-[#0D7377]/30 hover:shadow-sm transition-all group">
              <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center mb-3", stat.bg)}>
                <Icon className={cn("h-5 w-5", stat.color)} />
              </div>
              <p className="font-display text-2xl font-bold text-[#1A2332]">{stat.value}</p>
              <p className="text-xs text-[#1A2332]/50 mt-1">{stat.label}</p>
            </Link>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Setup progress */}
        <div className="bg-white rounded-xl border border-[#E2EEF0] p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-[#1A2332]">Setup Progress</h2>
            <span className="text-xs font-medium text-[#0D7377] bg-[#0D7377]/10 px-2 py-1 rounded-full">
              {completedSteps}/4 complete
            </span>
          </div>
          <div className="w-full bg-[#E2EEF0] rounded-full h-2 mb-4">
            <div
              className="bg-[#0D7377] h-2 rounded-full transition-all"
              style={{ width: `${(completedSteps / 4) * 100}%` }}
            />
          </div>
          <ul className="space-y-2.5">
            {setupSteps.map((step, i) => (
              <li key={i}>
                <Link
                  href={step.href}
                  className={cn(
                    "flex items-center gap-3 text-sm rounded-lg px-3 py-2 transition-colors",
                    step.done
                      ? "text-[#1A2332]/50"
                      : "text-[#1A2332] hover:bg-[#F7FAFA]"
                  )}
                >
                  {step.done ? (
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-amber-400 shrink-0" />
                  )}
                  <span className={step.done ? "line-through" : ""}>{step.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent activity */}
        <div className="bg-white rounded-xl border border-[#E2EEF0] p-6">
          <h2 className="font-display font-semibold text-[#1A2332] mb-4">Recent Activity</h2>
          {recentCheckIns.length > 0 ? (
            <ul className="space-y-3">
              {recentCheckIns.map((checkin, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm text-[#1A2332]">Check-in completed</p>
                    <p className="text-xs text-[#1A2332]/50">
                      {new Date(checkin).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-8 text-[#1A2332]/40">
              <Timer className="h-10 w-10 mx-auto mb-2 opacity-30" />
              <p className="text-sm">No activity yet. Start by checking in!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
