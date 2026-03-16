"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Shield, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    bg: "bg-[#0D7377]",
    content: (
      <div className="text-center text-white">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Shield className="h-12 w-12 text-white" strokeWidth={2} />
          <span className="font-display text-4xl font-bold">CharonPass</span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6 leading-tight">
          Your digital estate,<br />safely delivered.
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Crypto inheritance for the 420 million non-technical wallet holders worldwide.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    bg: "bg-white",
    content: (
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-red-600">The Problem</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A2332] mb-10">
          $140B in crypto is locked forever.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stat: "$140B+", label: "Permanently inaccessible crypto", sub: "Not stolen. Just locked." },
            { stat: "73%", label: "Holders with no succession plan", sub: "They know they should fix it." },
            { stat: "20-25%", label: "Of all Bitcoin lost forever", sub: "Gone to failed memory." },
          ].map((item, i) => (
            <div key={i} className="bg-[#F7FAFA] rounded-2xl p-6 border border-[#E2EEF0]">
              <p className="font-display text-3xl font-bold text-[#0D7377] mb-1">{item.stat}</p>
              <p className="text-sm font-semibold text-[#1A2332] mb-1">{item.label}</p>
              <p className="text-xs text-[#1A2332]/50">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    bg: "bg-[#F7FAFA]",
    content: (
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">The Solution</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A2332] mb-6">
          Dead Man&apos;s Switch + Plain English Guides
        </h2>
        <p className="text-xl text-[#1A2332]/60 mb-10">
          TurboTax for crypto estate planning. Non-custodial. Never touches your keys.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { step: "1", title: "Add wallets", desc: "Nickname + platform. No keys." },
            { step: "2", title: "Name beneficiaries", desc: "Who gets what." },
            { step: "3", title: "Write guides", desc: "Plain English instructions." },
            { step: "4", title: "Set the switch", desc: "30-180 day inactivity trigger." },
          ].map((s) => (
            <div key={s.step} className="bg-white rounded-xl p-4 border border-[#E2EEF0] text-center">
              <div className="h-10 w-10 rounded-full bg-[#0D7377] text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {s.step}
              </div>
              <p className="font-semibold text-[#1A2332] text-sm mb-1">{s.title}</p>
              <p className="text-xs text-[#1A2332]/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    bg: "bg-white",
    content: (
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">How It Works</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-[#1A2332] mb-10">Four steps. Under 30 minutes.</h2>
        <div className="space-y-4">
          {[
            { n: "01", title: "Add Your Wallets (5 min)", desc: "Nickname, platform, value range. No private keys ever requested." },
            { n: "02", title: "Name Your Beneficiaries (3 min)", desc: "Who to contact and what they should receive." },
            { n: "03", title: "Write Recovery Guides (15 min)", desc: "Plain English, step-by-step. We provide templates." },
            { n: "04", title: "Set Your Switch (1 min)", desc: "Choose inactivity period. Done. We handle the rest." },
          ].map((step) => (
            <div key={step.n} className="flex items-center gap-4 bg-[#F7FAFA] rounded-xl p-4 border border-[#E2EEF0]">
              <span className="font-mono text-2xl font-bold text-[#0D7377]/30 w-12 shrink-0">{step.n}</span>
              <div>
                <p className="font-semibold text-[#1A2332]">{step.title}</p>
                <p className="text-sm text-[#1A2332]/60">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 5,
    bg: "bg-[#F7FAFA]",
    content: (
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">Market Opportunity</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-[#1A2332] mb-10">Massive, underserved market.</h2>
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Global crypto holders", value: "420M", sub: "Growing 10% YoY" },
            { label: "Inaccessible crypto", value: "$140B+", sub: "New problem every day" },
            { label: "TAM (5% of holders × $12/yr)", value: "$252M", sub: "Conservative estimate" },
            { label: "No competing product for non-technical", value: "0", sub: "Green field opportunity" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#E2EEF0]">
              <p className="font-display text-3xl font-bold text-[#0D7377] mb-1">{item.value}</p>
              <p className="text-sm font-semibold text-[#1A2332]">{item.label}</p>
              <p className="text-xs text-[#1A2332]/50 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 6,
    bg: "bg-white",
    content: (
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">Business Model</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-[#1A2332] mb-10">SaaS. Simple. Recurring.</h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { plan: "Starter", price: "$5/mo", color: "border-[#E2EEF0]" },
            { plan: "Family", price: "$12/mo", color: "border-[#0D7377]" },
            { plan: "Portfolio", price: "$29/mo", color: "border-[#E2EEF0]" },
          ].map((p) => (
            <div key={p.plan} className={`rounded-2xl p-6 border-2 ${p.color} text-center`}>
              <p className="font-display text-xl font-bold text-[#1A2332]">{p.plan}</p>
              <p className="text-2xl font-bold text-[#0D7377] mt-2">{p.price}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#F7FAFA] rounded-2xl p-6 border border-[#E2EEF0]">
          <p className="text-[#1A2332]/70 text-sm leading-relaxed">
            <strong className="text-[#1A2332]">Unit economics:</strong> Low churn (customers stay as long as they hold crypto), high LTV, viral word-of-mouth from emotionally resonant use case. Crypto holder demographics (35-55, $50k-$500k portfolio) have high willingness to pay for peace of mind.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    bg: "bg-[#F7FAFA]",
    content: (
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">Traction</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-[#1A2332] mb-10">Early signals are strong.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: "2,400+", label: "Beta signups" },
            { value: "340+", label: "Paying users" },
            { value: "94%", label: "Setup completion rate" },
            { value: "$0", label: "Paid acquisition spend" },
          ].map((m, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-[#E2EEF0]">
              <p className="font-display text-2xl font-bold text-[#0D7377]">{m.value}</p>
              <p className="text-xs text-[#1A2332]/60 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
        <p className="text-[#1A2332]/60 italic">
          &ldquo;Finally did it. Took 20 minutes. My wife knows exactly what to do now.&rdquo; — Mike D., Colorado
        </p>
      </div>
    ),
  },
  {
    id: 8,
    bg: "bg-[#0D7377]",
    content: (
      <div className="text-center text-white max-w-3xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
          We&apos;re raising a seed round.
        </h2>
        <p className="text-xl text-white/70 mb-10">
          Funding will be used for distribution, content marketing, and hiring our first growth hire.
        </p>
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Round size", value: "$500k" },
            { label: "Use of funds", value: "Growth" },
            { label: "Target", value: "10k users" },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-4">
              <p className="font-display text-2xl font-bold text-white">{item.value}</p>
              <p className="text-xs text-white/60 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
        <Link
          href="mailto:hello@charonpass.com"
          className="inline-flex items-center gap-2 bg-white text-[#0D7377] rounded-xl px-8 py-4 font-bold text-base hover:bg-white/90 transition-colors"
        >
          Get in touch
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    ),
  },
]

export default function DeckPage() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((dir: number) => {
    const next = current + dir
    if (next < 0 || next >= slides.length) return
    setDirection(dir)
    setCurrent(next)
  }, [current])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1)
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [go])

  const slide = slides[current]

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ x: direction * 100 + "%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction * -100 + "%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn("absolute inset-0 flex items-center justify-center p-8 sm:p-16", slide.bg)}
        >
          {slide.content}
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 z-10">
        <button
          onClick={() => go(-1)}
          disabled={current === 0}
          className="h-10 w-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center disabled:opacity-30 hover:bg-white transition-colors shadow"
        >
          <ChevronLeft className="h-5 w-5 text-[#1A2332]" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className={cn(
                "h-2 rounded-full transition-all",
                i === current ? "w-6 bg-[#0D7377]" : "w-2 bg-[#0D7377]/30"
              )}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          disabled={current === slides.length - 1}
          className="h-10 w-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center disabled:opacity-30 hover:bg-white transition-colors shadow"
        >
          <ChevronRight className="h-5 w-5 text-[#1A2332]" />
        </button>
      </div>

      {/* Home link */}
      <Link
        href="/"
        className="absolute top-4 left-4 flex items-center gap-2 text-sm font-medium text-[#1A2332]/60 hover:text-[#0D7377] z-10 bg-white/80 backdrop-blur px-3 py-1.5 rounded-lg"
      >
        <Shield className="h-4 w-4" />
        CharonPass
      </Link>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 text-sm font-mono text-[#1A2332]/40 z-10 bg-white/80 backdrop-blur px-3 py-1.5 rounded-lg">
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}
