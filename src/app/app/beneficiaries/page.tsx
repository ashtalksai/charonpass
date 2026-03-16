"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Users, Plus, Mail, Phone } from "lucide-react"

interface Beneficiary {
  id: string
  name: string
  email: string
  relationship: string
  phone?: string
}

const RELATIONSHIPS = ["Spouse", "Partner", "Child", "Parent", "Sibling", "Friend", "Lawyer", "Other"]

export default function BeneficiariesPage() {
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({ name: "", email: "", relationship: "Spouse", phone: "" })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch("/api/beneficiaries")
      .then((r) => r.json())
      .then((d) => { setBeneficiaries(d.beneficiaries || []); setLoading(false) })
  }, [])

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const res = await fetch("/api/beneficiaries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    const data = await res.json()
    setBeneficiaries((prev) => [data.beneficiary, ...prev])
    setForm({ name: "", email: "", relationship: "Spouse", phone: "" })
    setShowForm(false)
    setSaving(false)
  }

  return (
    <div className="flex h-screen bg-[#F7FAFA]">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl font-bold text-[#1A2332]">Beneficiaries</h1>
            <p className="text-[#1A2332]/60 text-sm mt-1">Who should receive your recovery guides when the switch triggers?</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 rounded-xl bg-[#0D7377] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0D7377]/90"
          >
            <Plus className="h-4 w-4" />
            Add Beneficiary
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl border border-[#0D7377]/30 p-6 mb-6 shadow-sm">
            <h2 className="font-display font-semibold text-[#1A2332] mb-4">New Beneficiary</h2>
            <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Sarah Thompson"
                  className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="sarah@example.com"
                  className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Relationship *</label>
                <select
                  value={form.relationship}
                  onChange={(e) => setForm({ ...form, relationship: e.target.value })}
                  className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30"
                >
                  {RELATIONSHIPS.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Phone (optional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1-555-0101"
                  className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30"
                />
              </div>
              <div className="md:col-span-2 flex gap-3">
                <button type="submit" disabled={saving} className="rounded-xl bg-[#0D7377] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0D7377]/90 disabled:opacity-60">
                  {saving ? "Saving..." : "Save Beneficiary"}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="rounded-xl border border-[#E2EEF0] px-5 py-2.5 text-sm font-medium text-[#1A2332] hover:bg-[#F7FAFA]">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <div className="text-center py-16 text-[#1A2332]/40">Loading...</div>
        ) : beneficiaries.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E2EEF0]">
            <Users className="h-12 w-12 mx-auto mb-3 text-[#E2EEF0]" />
            <p className="text-[#1A2332]/60 font-medium">No beneficiaries yet</p>
            <p className="text-sm text-[#1A2332]/40 mt-1">Add who should receive your recovery guides.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beneficiaries.map((b) => (
              <div key={b.id} className="bg-white rounded-xl border border-[#E2EEF0] p-5">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#0D7377]/10 flex items-center justify-center font-bold text-[#0D7377] text-lg">
                    {b.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[#1A2332]">{b.name}</h3>
                      <span className="text-xs font-medium bg-[#0D7377]/10 text-[#0D7377] px-2 py-0.5 rounded-full">{b.relationship}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#1A2332]/60">
                      <Mail className="h-3 w-3" />
                      {b.email}
                    </div>
                    {b.phone && (
                      <div className="flex items-center gap-1.5 text-xs text-[#1A2332]/60 mt-1">
                        <Phone className="h-3 w-3" />
                        {b.phone}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
