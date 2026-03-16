"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Timer, CheckCircle, AlertTriangle, Pause } from "lucide-react"
import { cn } from "@/lib/utils"

interface SwitchData {
  intervalDays: number
  lastCheckIn: string
  nextDeadline: string
  status: string
}

export default function SwitchPage() {
  const [switchData, setSwitchData] = useState<SwitchData | null>(null)
  const [loading, setLoading] = useState(true)
  const [checkingIn, setCheckingIn] = useState(false)
  const [checkedIn, setCheckedIn] = useState(false)

  useEffect(() => {
    // In production, fetch from /api/switch endpoint
    // For now, simulate with a default
    setLoading(false)
    const nextDeadline = new Date()
    nextDeadline.setDate(nextDeadline.getDate() + 87)
    setSwitchData({
      intervalDays: 90,
      lastCheckIn: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      nextDeadline: nextDeadline.toISOString(),
      status: "active",
    })
  }, [])

  const handleCheckIn = async () => {
    setCheckingIn(true)
    const res = await fetch("/api/checkin", { method: "POST" })
    const data = await res.json()
    setCheckingIn(false)
    setCheckedIn(true)
    if (switchData) {
      const newDeadline = new Date()
      newDeadline.setDate(newDeadline.getDate() + switchData.intervalDays)
      setSwitchData({ ...switchData, lastCheckIn: new Date().toISOString(), nextDeadline: newDeadline.toISOString() })
    }
    setTimeout(() => setCheckedIn(false), 3000)
  }

  const daysLeft = switchData
    ? Math.max(0, Math.ceil((new Date(switchData.nextDeadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : 0

  const urgency = daysLeft <= 7 ? "critical" : daysLeft <= 30 ? "warning" : "safe"

  return (
    <div className="flex h-screen bg-[#F7FAFA]">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-auto p-8">
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-[#1A2332]">Dead Man's Switch</h1>
          <p className="text-[#1A2332]/60 text-sm mt-1">
            If you stop checking in, your beneficiaries will automatically receive your recovery guides.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-16 text-[#1A2332]/40">Loading...</div>
        ) : (
          <div className="max-w-2xl space-y-6">
            {/* Countdown */}
            <div className={cn(
              "rounded-2xl p-8 text-center border-2",
              urgency === "safe" && "bg-white border-[#E2EEF0]",
              urgency === "warning" && "bg-amber-50 border-amber-200",
              urgency === "critical" && "bg-red-50 border-red-200"
            )}>
              <div className={cn(
                "font-mono text-7xl font-bold mb-2 tabular-nums",
                urgency === "safe" && "text-[#0D7377]",
                urgency === "warning" && "text-amber-600",
                urgency === "critical" && "text-red-600"
              )}>
                {daysLeft}
              </div>
              <p className="text-[#1A2332]/60 text-lg mb-6">days until switch triggers</p>

              <button
                onClick={handleCheckIn}
                disabled={checkingIn}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-bold transition-all shadow-lg",
                  checkedIn
                    ? "bg-emerald-500 text-white shadow-emerald-500/25"
                    : "bg-[#0D7377] text-white hover:bg-[#0D7377]/90 shadow-[#0D7377]/25"
                )}
              >
                <CheckCircle className="h-5 w-5" />
                {checkingIn ? "Checking in..." : checkedIn ? "Checked in! Switch reset." : "Check In Now"}
              </button>

              {switchData && (
                <p className="mt-4 text-sm text-[#1A2332]/50">
                  Last check-in: {new Date(switchData.lastCheckIn).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              )}
            </div>

            {/* Settings */}
            <div className="bg-white rounded-xl border border-[#E2EEF0] p-6">
              <h2 className="font-display font-semibold text-[#1A2332] mb-4">Switch Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A2332] mb-2">Inactivity period</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[30, 60, 90, 180].map((days) => (
                      <button
                        key={days}
                        className={cn(
                          "rounded-lg py-2.5 text-sm font-medium border transition-colors",
                          switchData?.intervalDays === days
                            ? "bg-[#0D7377] text-white border-[#0D7377]"
                            : "border-[#E2EEF0] text-[#1A2332]/60 hover:border-[#0D7377]/30"
                        )}
                      >
                        {days}d
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-t border-[#E2EEF0]">
                  <div>
                    <p className="text-sm font-medium text-[#1A2332]">Status</p>
                    <p className="text-xs text-[#1A2332]/50">{switchData?.status === "active" ? "Switch is monitoring for inactivity" : "Switch is paused"}</p>
                  </div>
                  <span className={cn(
                    "inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full",
                    switchData?.status === "active"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                  )}>
                    <span className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      switchData?.status === "active" ? "bg-emerald-500" : "bg-amber-500"
                    )} />
                    {switchData?.status === "active" ? "Active" : "Paused"}
                  </span>
                </div>
              </div>
            </div>

            {/* Explainer */}
            <div className="bg-[#F7FAFA] rounded-xl border border-[#E2EEF0] p-6">
              <h2 className="font-display font-semibold text-[#1A2332] mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                What happens when it triggers?
              </h2>
              <ol className="space-y-2 text-sm text-[#1A2332]/70">
                <li className="flex gap-3"><span className="text-[#0D7377] font-bold">1.</span>CharonPass sends an email to each of your beneficiaries.</li>
                <li className="flex gap-3"><span className="text-[#0D7377] font-bold">2.</span>The email contains a secure link to your recovery guides.</li>
                <li className="flex gap-3"><span className="text-[#0D7377] font-bold">3.</span>Your beneficiaries follow your step-by-step instructions.</li>
                <li className="flex gap-3"><span className="text-[#0D7377] font-bold">4.</span>They can access the guides without a CharonPass account.</li>
              </ol>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
