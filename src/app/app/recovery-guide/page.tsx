"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { FileText, Plus, Save, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Guide {
  id: string
  title: string
  content: string
  status: string
  updatedAt: string
}

const TEMPLATE = `# How to access my [WALLET NAME] account

## What this wallet holds
[Describe what cryptocurrency is here and approximately how much]

## Step 1: Go to the website
Open a web browser and navigate to [platform URL]

## Step 2: Sign in
Click "Sign In". Use this email address: [your email]

## Step 3: Verify your identity
[Describe the 2FA method - phone, authenticator app, email, etc.]
The verification device is: [describe where to find it]

## Step 4: Accessing your funds
[Describe how to sell or transfer funds to a bank account]

## Emergency contacts
Platform support: [support URL or phone]
My backup email: [backup email]

## Additional notes
[Any other important information your family should know]`

export default function RecoveryGuidePage() {
  const [guides, setGuides] = useState<Guide[]>([])
  const [selected, setSelected] = useState<Guide | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch("/api/recovery-guides")
      .then((r) => r.json())
      .then((d) => {
        setGuides(d.guides || [])
        setLoading(false)
      })
  }, [])

  const handleNew = async () => {
    const res = await fetch("/api/recovery-guides", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "New Recovery Guide", content: TEMPLATE, status: "draft" }),
    })
    const data = await res.json()
    setGuides((prev) => [data.guide, ...prev])
    setSelected(data.guide)
  }

  const handleSave = async () => {
    if (!selected) return
    setSaving(true)
    await fetch("/api/recovery-guides", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selected.id, title: selected.title, content: selected.content, status: selected.status }),
    })
    setGuides((prev) => prev.map((g) => g.id === selected.id ? selected : g))
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex h-screen bg-[#F7FAFA]">
      <Sidebar />
      <div className="flex-1 ml-64 flex overflow-hidden">
        {/* Sidebar list */}
        <div className="w-64 border-r border-[#E2EEF0] bg-white flex flex-col">
          <div className="p-4 border-b border-[#E2EEF0] flex items-center justify-between">
            <h2 className="font-display font-semibold text-sm text-[#1A2332]">Recovery Guides</h2>
            <button onClick={handleNew} className="p-1.5 rounded-lg bg-[#0D7377] text-white hover:bg-[#0D7377]/90">
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex-1 overflow-auto">
            {loading ? (
              <div className="p-4 text-xs text-[#1A2332]/40">Loading...</div>
            ) : guides.length === 0 ? (
              <div className="p-4 text-xs text-[#1A2332]/40">No guides yet. Create your first one.</div>
            ) : (
              guides.map((guide) => (
                <button
                  key={guide.id}
                  onClick={() => setSelected(guide)}
                  className={cn(
                    "w-full text-left px-4 py-3 border-b border-[#E2EEF0] hover:bg-[#F7FAFA] transition-colors",
                    selected?.id === guide.id && "bg-[#0D7377]/5 border-l-2 border-l-[#0D7377]"
                  )}
                >
                  <p className="text-sm font-medium text-[#1A2332] truncate">{guide.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={cn(
                      "text-xs font-medium px-1.5 py-0.5 rounded-full",
                      guide.status === "complete"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    )}>
                      {guide.status}
                    </span>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Editor */}
        {selected ? (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="border-b border-[#E2EEF0] bg-white px-6 py-3 flex items-center gap-4">
              <input
                type="text"
                value={selected.title}
                onChange={(e) => setSelected({ ...selected, title: e.target.value })}
                className="flex-1 font-display font-semibold text-[#1A2332] bg-transparent focus:outline-none focus:ring-0 text-lg"
              />
              <select
                value={selected.status}
                onChange={(e) => setSelected({ ...selected, status: e.target.value })}
                className="text-xs border border-[#E2EEF0] rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30"
              >
                <option value="draft">Draft</option>
                <option value="complete">Complete</option>
              </select>
              <button
                onClick={handleSave}
                disabled={saving}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                  saved
                    ? "bg-emerald-500 text-white"
                    : "bg-[#0D7377] text-white hover:bg-[#0D7377]/90"
                )}
              >
                {saved ? <CheckCircle className="h-4 w-4" /> : <Save className="h-4 w-4" />}
                {saving ? "Saving..." : saved ? "Saved!" : "Save"}
              </button>
            </div>
            <textarea
              value={selected.content}
              onChange={(e) => setSelected({ ...selected, content: e.target.value })}
              className="flex-1 p-6 font-mono text-sm text-[#1A2332] bg-white focus:outline-none resize-none"
              placeholder="Write recovery instructions here..."
            />
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-[#F7FAFA]">
            <div className="text-center">
              <FileText className="h-12 w-12 mx-auto mb-3 text-[#E2EEF0]" />
              <p className="text-[#1A2332]/60 font-medium">Select a guide or create a new one</p>
              <button onClick={handleNew} className="mt-4 text-sm text-[#0D7377] font-medium hover:underline">
                + Create Recovery Guide
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
