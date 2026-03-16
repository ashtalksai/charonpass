"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Mail, MessageSquare, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    setLoading(false)
    if (res.ok) {
      setSuccess(true)
    } else {
      setError("Something went wrong. Please try again.")
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#F7FAFA] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-6">
                  <span className="text-xs font-semibold text-[#0D7377]">Get in touch</span>
                </div>
                <h1 className="font-display text-4xl font-bold text-[#1A2332] mb-4">We&apos;re here to help</h1>
                <p className="text-lg text-[#1A2332]/60 mb-8 leading-relaxed">
                  Have a question about CharonPass? Want to give feedback? We read every message.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E2EEF0]">
                    <div className="h-10 w-10 rounded-lg bg-[#0D7377]/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#0D7377]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A2332]">Email us directly</p>
                      <a href="mailto:hello@charonpass.com" className="text-sm text-[#0D7377] hover:underline">
                        hello@charonpass.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E2EEF0]">
                    <div className="h-10 w-10 rounded-lg bg-[#0D7377]/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-[#0D7377]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A2332]">Response time</p>
                      <p className="text-sm text-[#1A2332]/60">We typically respond within 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-white rounded-2xl border border-[#E2EEF0] p-8 shadow-sm">
                {success ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                    <h2 className="font-display text-xl font-bold text-[#1A2332] mb-2">Message sent!</h2>
                    <p className="text-[#1A2332]/60">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-xl font-bold text-[#1A2332] mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Name *</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            placeholder="Alex Thompson"
                            className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 focus:border-[#0D7377]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Email *</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 focus:border-[#0D7377]"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Subject</label>
                        <input
                          type="text"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          placeholder="How can we help?"
                          className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 focus:border-[#0D7377]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A2332] mb-1.5">Message *</label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          required
                          rows={5}
                          placeholder="Tell us what's on your mind..."
                          className="w-full rounded-lg border border-[#E2EEF0] bg-[#F7FAFA] px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7377]/30 focus:border-[#0D7377] resize-none"
                        />
                      </div>
                      {error && <p className="text-sm text-red-600">{error}</p>}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-[#0D7377] py-3 text-sm font-semibold text-white hover:bg-[#0D7377]/90 disabled:opacity-60 transition-colors"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
