"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

// ─────────────────────────────────────────────
// Slide Components
// ─────────────────────────────────────────────

function Slide1_Title() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-white">
      <div className="max-w-4xl w-full text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-16 w-16 rounded-2xl bg-[#0D7377] flex items-center justify-center">
            <Shield className="h-9 w-9 text-white" strokeWidth={2} />
          </div>
        </div>
        <h1 className="font-display text-6xl sm:text-7xl font-bold text-[#1A2332] mb-6 tracking-tight">
          CharonPass
        </h1>
        <p className="text-2xl text-[#0D7377] font-semibold mb-4">
          The crypto inheritance platform for the other 99%
        </p>
        <p className="text-base text-[#1A2332]/40 font-mono mt-10">
          March 2026 · ChimeStream · charonpass.ashketing.com
        </p>
      </div>
    </div>
  )
}

function Slide2_Problem() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-[#0D7377]">
      <div className="max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-white">The Problem</span>
        </div>
        <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          $140 billion in crypto.<br />Locked. Forever.
        </h2>
        <p className="text-xl text-white/70 mb-12">
          Not hacked. Not stolen. Just gone — because no one knew how to access it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: "💀", stat: "$140B", label: "Permanently inaccessible crypto", sub: "From deceased/incapacitated holders" },
            { icon: "📊", stat: "73%", label: "Crypto holders with no estate plan", sub: "For their digital assets" },
            { icon: "🔐", stat: "20–25%", label: "Of all Bitcoin permanently lost", sub: "Academic crypto loss research" },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="font-display text-4xl font-bold text-white mb-2">{item.stat}</p>
              <p className="text-sm font-semibold text-white/80 mb-1">{item.label}</p>
              <p className="text-xs text-white/50">{item.sub}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/30 mt-6 font-mono">
          Sources: Chainalysis 2025, Coinbase estate recovery team data, academic crypto loss research
        </p>
      </div>
    </div>
  )
}

function Slide3_Story() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-[#FFFDF7]">
      <div className="max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">Real Stories</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A2332] mb-12">
          &ldquo;My dad had $80,000 in Bitcoin.<br />We couldn&apos;t access a single dollar.&rdquo;
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              name: "Sarah",
              source: "r/CryptoCurrency",
              quote: "He kept saying he'd explain it to us. He died suddenly last April. We can see the balance. We just can't touch it.",
            },
            {
              name: "James",
              source: "r/personalfinance",
              quote: "I've been meaning to set up a plan for 2 years. I just... haven't. My wife doesn't even know which exchanges I use.",
            },
            {
              name: "The Reality",
              source: "Every day",
              quote: "The crypto is visible. The keys are gone. Every day, this happens to real families.",
            },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#E2EEF0] shadow-sm">
              <p className="text-[#1A2332] text-sm leading-relaxed italic mb-4">&ldquo;{card.quote}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#0D7377]/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#0D7377]">{card.name[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1A2332]">{card.name}</p>
                  <p className="text-xs text-[#1A2332]/40 font-mono">{card.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide4_Solution() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-[#F7FAFA]">
      <div className="max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">The Solution</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A2332] mb-4">
          CharonPass. Plain-English crypto inheritance.<br />15 minutes to set up.
        </h2>
        <p className="text-lg text-[#1A2332]/60 mb-10">
          Generates step-by-step recovery guides — written for a non-technical family member to follow.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "✅", text: "No seed phrases stored (ever)" },
            { icon: "✅", text: "No technical knowledge required" },
            { icon: "✅", text: "Works with any wallet or exchange" },
            { icon: "✅", text: "Dead man's switch auto-delivers" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-[#E2EEF0] text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-sm font-semibold text-[#1A2332]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-[#0D7377] rounded-2xl p-6 text-white">
          <p className="text-lg font-semibold">
            &ldquo;The TurboTax of crypto inheritance. Plain-English recovery guides + dead man&apos;s switch. 🔐&rdquo;
          </p>
          <p className="text-sm text-white/60 mt-2 font-mono">— Social bio</p>
        </div>
      </div>
    </div>
  )
}

function Slide5_HowItWorks() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-white">
      <div className="max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">How It Works</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A2332] mb-12">
          Four steps. Your family is protected.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: 1,
              title: "Add Your Wallets",
              desc: "Name each wallet, platform, estimated value. No keys, no seed phrases.",
            },
            {
              step: 2,
              title: "Build Recovery Guides",
              desc: "Plain-English instructions for each wallet. We guide you through what to write.",
            },
            {
              step: 3,
              title: "Add Beneficiaries",
              desc: "Who receives the guide. Email + verification.",
            },
            {
              step: 4,
              title: "Set Your Switch",
              desc: "Check in weekly/monthly. Miss your check-in? Your guide is delivered automatically.",
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="bg-[#F7FAFA] rounded-2xl p-6 border border-[#E2EEF0] h-full">
                <div className="h-10 w-10 rounded-full bg-[#0D7377] text-white font-bold text-lg flex items-center justify-center mb-4 font-mono">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#1A2332] mb-2">{item.title}</h3>
                <p className="text-sm text-[#1A2332]/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-[#0D7377]/5 rounded-xl px-5 py-3 border border-[#0D7377]/10">
          <p className="text-sm text-[#0D7377] font-medium">
            ✨ The &ldquo;check-in&rdquo; mechanic is the magic — weekly/monthly ping. If they stop, the guide goes out. Simple.
          </p>
        </div>
      </div>
    </div>
  )
}

function Slide6_Product() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-[#F7FAFA]">
      <div className="max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-emerald-700">Live Product</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A2332] mb-4">
          It&apos;s live. It works.
        </h2>
        <p className="text-lg text-[#1A2332]/60 mb-8">
          <span className="font-mono text-[#0D7377]">charonpass.ashketing.com</span> · Auth, dashboards, and dead man&apos;s switch fully functional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              label: "Dashboard",
              desc: "4 stat cards: Wallets Protected, Beneficiaries Named, Guide Completion, Switch Countdown",
              tag: "Core Screen",
            },
            {
              label: "Recovery Guide Editor",
              desc: "Guided wizard walks you through what to write for each wallet — step by step",
              tag: "Key Feature",
            },
            {
              label: "Dead Man's Switch",
              desc: "87-day countdown timer in DM Mono. Large, unmistakable. One-click 'Check In Now.'",
              tag: "The Magic",
            },
          ].map((screen, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#E2EEF0]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-[#0D7377] bg-[#0D7377]/10 px-2.5 py-1 rounded-full">
                  {screen.tag}
                </span>
              </div>
              <h3 className="font-semibold text-[#1A2332] mb-2">{screen.label}</h3>
              <p className="text-sm text-[#1A2332]/60 leading-relaxed">{screen.desc}</p>
            </div>
          ))}
        </div>
        <a
          href="https://charonpass.ashketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0D7377] hover:underline"
        >
          Try it live → charonpass.ashketing.com
        </a>
      </div>
    </div>
  )
}

function Slide7_Market() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-white">
      <div className="max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">Market Size</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A2332] mb-4">
          The market is massive.<br />The competition left a $9/month gap.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            { label: "TAM", value: "$6.2B", sub: "310M global crypto holders × $20/year avg estate planning spend", accent: true },
            { label: "SAM", value: "$1.1B", sub: "55M non-technical holders in US/EU with $5K+ in crypto", accent: false },
            { label: "SOM", value: "$50M", sub: "2.5M reachable via community channels in 24 months", accent: false },
          ].map((item, i) => (
            <div key={i} className={cn(
              "rounded-2xl p-6 border",
              item.accent ? "bg-[#0D7377] border-[#0D7377] text-white" : "bg-[#F7FAFA] border-[#E2EEF0]"
            )}>
              <span className={cn("text-xs font-mono font-semibold", item.accent ? "text-white/60" : "text-[#0D7377]")}>
                {item.label}
              </span>
              <p className={cn("font-display text-4xl font-bold mt-2 mb-2", item.accent ? "text-white" : "text-[#1A2332]")}>
                {item.value}
              </p>
              <p className={cn("text-xs leading-relaxed", item.accent ? "text-white/70" : "text-[#1A2332]/50")}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Crypto wallet market CAGR", value: "28.9%" },
            { label: "Americans owning crypto (2025)", value: "77M" },
            { label: '"Dead man\'s switch" searches/mo', value: "33,100" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#F7FAFA] rounded-xl p-4 border border-[#E2EEF0] text-center">
              <p className="font-mono text-2xl font-bold text-[#0D7377]">{stat.value}</p>
              <p className="text-xs text-[#1A2332]/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide8_Competition() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-[#F7FAFA]">
      <div className="max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">Competition</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-[#1A2332] mb-8">Built for everyone else.</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 text-[#1A2332]/50 font-medium w-40"></th>
                <th className="py-3 px-4 text-center text-[#1A2332]/50 font-medium">Casa</th>
                <th className="py-3 px-4 text-center text-[#1A2332]/50 font-medium">Vault12</th>
                <th className="py-3 px-4 text-center bg-[#0D7377] text-white font-bold rounded-t-xl">CharonPass ✨</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Price", vals: ["$250–$2,100/yr", "$17.5M raised", "$9–$29/mo"] },
                { label: "Technical?", vals: ["Yes — hardware wallet req.", "Yes — crypto-savvy guardians", "No — for everyone"] },
                { label: "Target", vals: ["HNW, technical", "Tech-adjacent", "Mass market ($5K–$200K)"] },
                { label: "Setup time", vals: ["Hours", "Hours", "15 minutes"] },
                { label: "Family needs crypto?", vals: ["Yes", "Yes", "No"] },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F7FAFA]"}>
                  <td className="py-3 px-4 font-medium text-[#1A2332] border border-[#E2EEF0]">{row.label}</td>
                  <td className="py-3 px-4 text-center text-[#1A2332]/50 border border-[#E2EEF0]">{row.vals[0]}</td>
                  <td className="py-3 px-4 text-center text-[#1A2332]/50 border border-[#E2EEF0]">{row.vals[1]}</td>
                  <td className="py-3 px-4 text-center font-semibold text-[#0D7377] bg-[#0D7377]/5 border border-[#0D7377]/20">{row.vals[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            "Easiest UX in the category (TurboTax framing)",
            "Lowest price point by 10x",
            "Only non-custodial product for non-technical families",
          ].map((moat, i) => (
            <div key={i} className="bg-[#0D7377]/5 rounded-xl p-3 border border-[#0D7377]/10">
              <p className="text-xs font-semibold text-[#0D7377]">🏆 {moat}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide9_BusinessModel() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-white">
      <div className="max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">Business Model</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-[#1A2332] mb-8">
          Recurring SaaS. $9–$29/month. Strong unit economics.
        </h2>
        <div className="grid grid-cols-3 gap-5 mb-8">
          {[
            {
              plan: "Starter",
              price: "$9",
              period: "/mo",
              features: ["1 wallet · 1 beneficiary", "Basic guide", "Switch (90/180-day)"],
              featured: false,
            },
            {
              plan: "Family",
              price: "$19",
              period: "/mo",
              badge: "★ Most Popular",
              features: ["5 wallets · 3 beneficiaries", "Full guides", "All check-in intervals"],
              featured: true,
            },
            {
              plan: "Portfolio",
              price: "$29",
              period: "/mo",
              features: ["Unlimited wallets", "Unlimited beneficiaries", "Custom intervals + API"],
              featured: false,
            },
          ].map((tier, i) => (
            <div key={i} className={cn(
              "rounded-2xl p-6 border-2 relative",
              tier.featured ? "bg-[#0D7377] border-[#0D7377] text-white" : "bg-[#F7FAFA] border-[#E2EEF0]"
            )}>
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
                  {tier.badge}
                </span>
              )}
              <h3 className={cn("font-semibold mb-1", tier.featured ? "text-white" : "text-[#1A2332]")}>{tier.plan}</h3>
              <div className="flex items-end gap-1 mb-4">
                <span className={cn("font-display text-4xl font-bold", tier.featured ? "text-white" : "text-[#0D7377]")}>{tier.price}</span>
                <span className={cn("text-sm mb-1", tier.featured ? "text-white/70" : "text-[#1A2332]/50")}>{tier.period}</span>
              </div>
              <ul className="space-y-1.5">
                {tier.features.map((f, j) => (
                  <li key={j} className={cn("text-xs flex items-start gap-1.5", tier.featured ? "text-white/80" : "text-[#1A2332]/60")}>
                    <span className={tier.featured ? "text-white" : "text-[#0D7377]"}>•</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: "CAC target", value: "<$20", sub: "Community-led" },
            { label: "LTV (12-mo avg)", value: "$180", sub: "Mid-tier" },
            { label: "LTV:CAC", value: ">9x", sub: "Strong margins" },
            { label: "Year 1 ARR target", value: "$38K MRR", sub: "2,000 users by M12" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#F7FAFA] rounded-xl p-4 border border-[#E2EEF0] text-center">
              <p className="font-mono text-xl font-bold text-[#0D7377]">{stat.value}</p>
              <p className="text-xs font-semibold text-[#1A2332] mt-1">{stat.label}</p>
              <p className="text-xs text-[#1A2332]/40 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Slide10_Traction() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-[#F7FAFA]">
      <div className="max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">Traction & Validation</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-[#1A2332] mb-10">
          The problem is validated. The demand is there.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#1A2332]/50 uppercase tracking-wider">Community Signals</h3>
            {[
              { platform: "🔴 Reddit", size: "5 subreddits · 2.5M+ members", signal: "8/10" },
              { platform: "🔵 Facebook", size: "4 groups · 150K+ members", signal: "7/10" },
              { platform: "🟡 YouTube", size: "12 active channels", signal: "7/10" },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-[#E2EEF0] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1A2332] text-sm">{c.platform}</p>
                  <p className="text-xs text-[#1A2332]/50 mt-0.5">{c.size}</p>
                </div>
                <span className="bg-emerald-50 text-emerald-700 font-bold text-xs px-2.5 py-1 rounded-full">{c.signal}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#1A2332]/50 uppercase tracking-wider">IdeaBrowser Scores</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Opportunity", score: "9/10" },
                { label: "Problem", score: "9/10" },
                { label: "Feasibility", score: "8/10" },
                { label: "Why Now", score: "9/10" },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-[#E2EEF0] text-center">
                  <p className="font-mono text-2xl font-bold text-[#0D7377]">{s.score}</p>
                  <p className="text-xs text-[#1A2332]/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#0D7377]/5 rounded-xl p-4 border border-[#0D7377]/10">
              <p className="text-sm font-semibold text-[#0D7377]">Revenue Potential</p>
              <p className="text-2xl font-bold text-[#1A2332] mt-1">$1M–$10M ARR</p>
              <p className="text-xs text-[#1A2332]/50 mt-1">IdeaBrowser projection · Live product · QA 4.8/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slide11_GTM() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-white">
      <div className="max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-[#0D7377]">Go-To-Market</span>
        </div>
        <h2 className="font-display text-4xl font-bold text-[#1A2332] mb-3">
          Community-led. Low CAC. Fast to first $10K MRR.
        </h2>
        <p className="text-base text-[#1A2332]/50 mb-8 italic">
          The audience is on Reddit. They&apos;re already asking the question. We just need to show up with the answer.
        </p>
        <div className="grid grid-cols-3 gap-5">
          {[
            {
              phase: "Phase 1",
              timeline: "Weeks 1–4",
              target: "50 paying users",
              color: "bg-[#F7FAFA] border-[#E2EEF0]",
              items: ["ProductHunt launch (Tuesday)", "Reddit PSA posts", "Facebook crypto groups", "YouTube affiliate outreach"],
            },
            {
              phase: "Phase 2",
              timeline: "Month 2–3",
              target: "200 paying users",
              color: "bg-[#0D7377]/5 border-[#0D7377]/20",
              items: ["Reddit ads ($200 test)", "SEO content (5 articles)", "Email nurture sequence", "Creator partnerships"],
            },
            {
              phase: "Phase 3",
              timeline: "Month 4–6",
              target: "500 users · $10K MRR",
              color: "bg-[#F7FAFA] border-[#E2EEF0]",
              items: ["Scale winning channels", "Affiliate program (20%)", "LinkedIn attorney outreach", "B2B referral angle"],
            },
          ].map((phase, i) => (
            <div key={i} className={cn("rounded-2xl p-6 border", phase.color)}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-semibold text-[#0D7377]">{phase.phase}</span>
                <span className="text-xs text-[#1A2332]/40">{phase.timeline}</span>
              </div>
              <p className="font-bold text-[#1A2332] text-sm mb-4">{phase.target}</p>
              <ul className="space-y-1.5">
                {phase.items.map((item, j) => (
                  <li key={j} className="text-xs text-[#1A2332]/60 flex items-start gap-1.5">
                    <span className="text-[#0D7377] mt-0.5">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 bg-emerald-50 rounded-xl p-3 border border-emerald-100">
          <p className="text-sm text-emerald-700 font-medium">
            💡 Phase 1 is zero-cost. We validate product-market fit organically before spending anything.
          </p>
        </div>
      </div>
    </div>
  )
}

function Slide12_Ask() {
  return (
    <div className="h-screen flex items-center justify-center p-8 md:p-16 bg-[#0D7377]">
      <div className="max-w-4xl w-full text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 mb-8">
          <span className="text-sm font-semibold text-white">The Ask</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          What we need. What you get.
        </h2>
        <p className="text-lg text-white/70 mb-10">
          First mover in the non-technical crypto inheritance market. $1M–$10M ARR potential.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
          {[
            {
              icon: "💰",
              title: "Distribution partnerships",
              desc: "Estate planning attorneys, financial advisors, crypto exchanges",
            },
            {
              icon: "📣",
              title: "Creator affiliates",
              desc: "Personal finance YouTubers/podcasters with crypto-adjacent audiences",
            },
            {
              icon: "🤝",
              title: "Angel investment",
              desc: "$50K to scale content marketing and paid acquisition (6-month runway)",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-5 border border-white/20">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Why Now", value: "$140B problem, no mainstream solution" },
            { label: "Tailwind", value: "EU/US crypto estate regs tightening 2026" },
            { label: "SEO Gap", value: "33K/mo keyword, zero SaaS competition" },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs font-mono text-white/40 mb-1">{item.label}</p>
              <p className="text-sm text-white/80 font-medium">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://charonpass.ashketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0D7377] rounded-xl px-6 py-3 font-bold text-sm hover:bg-white/90 transition-colors"
          >
            Try it live →
          </a>
          <a
            href="mailto:hello@chimestream.com"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white rounded-xl px-6 py-3 font-semibold text-sm hover:bg-white/20 transition-colors border border-white/20"
          >
            hello@chimestream.com
          </a>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Slide Registry
// ─────────────────────────────────────────────

const SLIDES = [
  { id: 1, label: "Title", component: <Slide1_Title /> },
  { id: 2, label: "Problem", component: <Slide2_Problem /> },
  { id: 3, label: "Story", component: <Slide3_Story /> },
  { id: 4, label: "Solution", component: <Slide4_Solution /> },
  { id: 5, label: "How It Works", component: <Slide5_HowItWorks /> },
  { id: 6, label: "Product", component: <Slide6_Product /> },
  { id: 7, label: "Market", component: <Slide7_Market /> },
  { id: 8, label: "Competition", component: <Slide8_Competition /> },
  { id: 9, label: "Business Model", component: <Slide9_BusinessModel /> },
  { id: 10, label: "Traction", component: <Slide10_Traction /> },
  { id: 11, label: "GTM", component: <Slide11_GTM /> },
  { id: 12, label: "The Ask", component: <Slide12_Ask /> },
]

// ─────────────────────────────────────────────
// Main Deck Controller
// ─────────────────────────────────────────────

export default function DeckPage() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback(
    (delta: number) => {
      const next = current + delta
      if (next < 0 || next >= SLIDES.length) return
      setDir(delta)
      setCurrent(next)
    },
    [current]
  )

  const jumpTo = (i: number) => {
    setDir(i > current ? 1 : -1)
    setCurrent(i)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1)
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go])

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  }

  return (
    <div className="relative h-screen overflow-hidden select-none">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={current}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "spring", stiffness: 380, damping: 36 }}
          className="absolute inset-0"
        >
          {SLIDES[current].component}
        </motion.div>
      </AnimatePresence>

      {/* Slide counter — top right */}
      <div className="absolute top-4 right-4 z-20 font-mono text-xs bg-black/10 backdrop-blur-sm text-[#1A2332]/60 px-3 py-1.5 rounded-lg">
        {current + 1} / {SLIDES.length}
      </div>

      {/* Home link — top left */}
      <Link
        href="/"
        className="absolute top-4 left-4 z-20 flex items-center gap-2 text-sm font-medium bg-black/5 backdrop-blur-sm hover:bg-black/10 transition-colors px-3 py-1.5 rounded-lg text-[#1A2332]/70"
      >
        <Shield className="h-4 w-4 text-[#0D7377]" />
        CharonPass
      </Link>

      {/* Thin progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/5 z-20">
        <motion.div
          className="h-full bg-[#0D7377]"
          animate={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Navigation — bottom center */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3 z-20">
        <button
          onClick={() => go(-1)}
          disabled={current === 0}
          className="h-9 w-9 rounded-full bg-white/70 backdrop-blur-sm border border-black/10 flex items-center justify-center disabled:opacity-30 hover:bg-white transition-colors shadow-sm"
        >
          <ChevronLeft className="h-4 w-4 text-[#1A2332]" />
        </button>

        {/* Dots */}
        <div className="flex gap-1.5 items-center">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              title={SLIDES[i].label}
              className={cn(
                "rounded-full transition-all duration-200",
                i === current
                  ? "w-5 h-2 bg-[#0D7377]"
                  : "w-2 h-2 bg-[#0D7377]/30 hover:bg-[#0D7377]/50"
              )}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          disabled={current === SLIDES.length - 1}
          className="h-9 w-9 rounded-full bg-white/70 backdrop-blur-sm border border-black/10 flex items-center justify-center disabled:opacity-30 hover:bg-white transition-colors shadow-sm"
        >
          <ChevronRight className="h-4 w-4 text-[#1A2332]" />
        </button>
      </div>
    </div>
  )
}
