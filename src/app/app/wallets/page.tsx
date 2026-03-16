"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Wallet, Plus, Trash2, Bitcoin } from "lucide-react"

interface WalletData {
  id: string
  nickname: string
  platform: string
  valueRange: string
  notes?: string
  createdAt: string
}

const PLATFORMS = ["Coinbase", "MetaMask", "Ledger", "Trezor", "Kraken", "Binance", "Other"]
const VALUE_RANGES = ["Under $1k", "$1k-$10k", "$10k-$50k", "$50k-$100k", "$100k+"]

const PLATFORM_COLORS: Record<string, string> = {
  Coinbase: "bg-blue-100 text-blue-700",
  MetaMask: "bg-orange-100 text-orange-700",
  Ledger: "bg-gray-100 text-gray-700",
  Trezor: "bg-green-100 text-green-700",
  Kraken: "bg-purple-100 text-purple-700",
  Binance: "bg-yellow-100 text-yellow-700",
  Other: "bg-slate-100 text-slate-700",
}

export default function WalletsPage() {
  const [wallets, setWallets] = useState<WalletData[]>([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ nickname: "", platform: "Coinbase", valueRange: "$1k-$10k", notes: "" })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch("/api/wallets")
      .then((r) => r.json())
      .then((d) => { setWallets(d.wallets || []); setLoading(false) })
  }, [])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const res = await fetch("/api/wallets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    setWallets((prev) => [data.wallet, ...prev])
    setForm({ nickname: "", platform: "Coinbase", valueRange: "$1k-$10k", notes: "" })
    setShowForm(false)
    setSaving(false)
  }

  return (
    <div className="flex h-screen bg-[#F7FAFA]">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl font-bold text-[#1A2332]">Wallets</h1>
            <p className="text-[#1A2332]/60 text-sm mt-1">Add the crypto wallets you want your family to know about.</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 rounded-xl bg-[#0D7377] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0D7377]/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Wallet
          </button>
        </div>

        {/* Add form */}
        {showForm && (
          <div className="bg-white rounded-xl border border-[#0D7377]/30 p-6 mb-6 shadow-sm">
            <h2 className="font-display font-semibold text-[#1A2332] mb-4">New Wallet</h2>
            <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Nickname *</label>
                <input
                  type="text"
                  value={form.nickname}
                  onChange={(e) => setForm({ ...form, nickname: e.target.value })}
                  required
                  placeholder="e.g. Main Bitcoin"
                  className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 focus:border-[#0D7377]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Platform *</label>
                <select
                  value={form.platform}
                  onChange={(e) => setForm({ ...form, platform: e.target.value })}
                  className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30"
                >
                  {PLATFORMS.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Approximate Value *</label>
                <select
                  value={form.valueRange}
                  onChange={(e) => setForm({ ...form, valueRange: e.target.value })}
                  className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30"
                >
                  {VALUE_RANGES.map((v) => <option key={v}>{v}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Notes (optional)</label>
                <input
                  type="text"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Any notes for your family..."
                  className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30"
                />
              </div>
              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-[#0D7377] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0D7377]/90 disabled:opacity-60"
                >
                  {saving ? "Saving..." : "Save Wallet"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-[#E2EEF0] px-5 py-2.5 text-sm font-medium text-[#1A2332] hover:bg-[#F7FAFA]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Wallets list */}
        {loading ? (
          <div className="text-center py-16 text-[#1A2332]/40">Loading...</div>
        ) : wallets.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E2EEF0]">
            <Wallet className="h-12 w-12 mx-auto mb-3 text-[#E2EEF0]" />
            <p className="text-[#1A2332]/60 font-medium">No wallets yet</p>
            <p className="text-sm text-[#1A2332]/40 mt-1">Add your first wallet to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {wallets.map((wallet) => (
              <div key={wallet.id} className="bg-white rounded-xl border border-[#E2EEF0] p-5 hover:border-[#0D7377]/30 hover:shadow-sm transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-xl bg-[#0D7377]/10 flex items-center justify-center">
                    <Bitcoin className="h-5 w-5 text-[#0D7377]" />
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${PLATFORM_COLORS[wallet.platform] || "bg-slate-100 text-slate-700"}`}>
                    {wallet.platform}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-[#1A2332] mb-1">{wallet.nickname}</h3>
                <p className="text-sm text-[#0D7377] font-medium mb-2">{wallet.valueRange}</p>
                {wallet.notes && <p className="text-xs text-[#1A2332]/50 line-clamp-2">{wallet.notes}</p>}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
