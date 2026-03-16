"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, Menu, X, BarChart2, Target, Megaphone, Palette, Presentation, ExternalLink, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// ─────────────────────────────────────────────
// Section Content Components
// ─────────────────────────────────────────────

function ResearchSection() {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-3 py-1 mb-4">
          <span className="text-xs font-semibold text-[#0D7377]">Market Research</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-3">Research — CharonPass</h2>
        <p className="text-[#1A2332]/60 leading-relaxed">
          Market validation, competitive analysis, and opportunity assessment for the crypto inheritance platform.
        </p>
      </div>

      {/* Executive Summary */}
      <div className="bg-[#0D7377] rounded-2xl p-8 text-white">
        <h3 className="font-semibold text-white/60 text-sm uppercase tracking-wider mb-4">Executive Summary</h3>
        <p className="text-lg leading-relaxed mb-6">
          <strong>CharonPass</strong> addresses a $140B problem: crypto permanently locked because holders die or become incapacitated without leaving access instructions. Target: non-technical crypto holders aged 35–55 with $5K–$200K in assets.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "TAM", value: "$6.2B" },
            { label: "Validation Score", value: "9/10" },
            { label: "Competition", value: "Low" },
          ].map((m, i) => (
            <div key={i} className="bg-white/10 rounded-xl p-4 text-center">
              <p className="font-mono text-2xl font-bold text-white">{m.value}</p>
              <p className="text-xs text-white/60 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3">
          <span className="bg-emerald-400 text-emerald-900 font-bold text-sm px-4 py-1.5 rounded-full">✅ VERDICT: GO</span>
          <span className="text-white/70 text-sm">Strong opportunity. Green field. Community validated.</span>
        </div>
      </div>

      {/* Market Opportunity */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Market Opportunity</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "TAM", value: "$6.2B", sub: "310M global crypto holders × $20/year estate planning", accent: true },
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
              <p className={cn("font-display text-3xl font-bold mt-1 mb-2", item.accent ? "text-white" : "text-[#1A2332]")}>
                {item.value}
              </p>
              <p className={cn("text-xs leading-relaxed", item.accent ? "text-white/70" : "text-[#1A2332]/50")}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Landscape */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Competitive Landscape</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#F7FAFA]">
                <th className="text-left py-3 px-4 text-[#1A2332]/50 font-medium border border-[#E2EEF0]">Company</th>
                <th className="text-left py-3 px-4 text-[#1A2332]/50 font-medium border border-[#E2EEF0]">Price</th>
                <th className="text-left py-3 px-4 text-[#1A2332]/50 font-medium border border-[#E2EEF0]">Target</th>
                <th className="text-left py-3 px-4 text-[#1A2332]/50 font-medium border border-[#E2EEF0]">Weakness</th>
              </tr>
            </thead>
            <tbody>
              {[
                { co: "CharonPass ✨", price: "$9–$29/mo", target: "Non-technical, $5K–$200K", weakness: "—", us: true },
                { co: "Casa", price: "$250–$2,100/yr", target: "HNW, technical", weakness: "Requires hardware wallet" },
                { co: "Vault12", price: "$17.5M raised", target: "Tech-adjacent", weakness: "Requires crypto-savvy guardians" },
                { co: "Coinbase", price: "Free (no product)", target: "Everyone", weakness: "No inheritance product at all" },
              ].map((row, i) => (
                <tr key={i} className={row.us ? "bg-[#0D7377]/5" : ""}>
                  <td className={cn("py-3 px-4 font-semibold border border-[#E2EEF0]", row.us ? "text-[#0D7377]" : "text-[#1A2332]")}>
                    {row.co}
                  </td>
                  <td className="py-3 px-4 text-[#1A2332] border border-[#E2EEF0]">{row.price}</td>
                  <td className="py-3 px-4 text-[#1A2332]/70 border border-[#E2EEF0]">{row.target}</td>
                  <td className="py-3 px-4 text-[#1A2332]/50 border border-[#E2EEF0] italic">{row.weakness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 bg-[#0D7377]/5 rounded-xl p-4 border border-[#0D7377]/10">
          <p className="text-sm font-semibold text-[#0D7377]">Our Edge: The $9/month gap left by every competitor</p>
          <p className="text-sm text-[#1A2332]/60 mt-1">Casa and Vault12 left the $5K–$200K non-technical holder completely unserved. That&apos;s 55M people in the US/EU alone.</p>
        </div>
      </div>

      {/* Validation Signals */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Validation Signals</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { source: "🔴 Reddit", detail: "5 subreddits · 2.5M+ members · Active threads about crypto loss", score: "8/10" },
            { source: "🔵 Facebook", detail: "4 groups · 150K+ members · Older demographic matching persona", score: "7/10" },
            { source: "🟡 YouTube", detail: "12 active channels covering crypto estate planning", score: "7/10" },
            { source: "🔍 Search", detail: '"dead man\'s switch" — 33,100/mo, LOW competition', score: "⭐" },
          ].map((v, i) => (
            <div key={i} className="bg-[#F7FAFA] rounded-xl p-5 border border-[#E2EEF0] flex items-start gap-3">
              <div className="flex-1">
                <p className="font-semibold text-[#1A2332] mb-1">{v.source}</p>
                <p className="text-sm text-[#1A2332]/60">{v.detail}</p>
              </div>
              <span className="bg-white border border-[#E2EEF0] text-[#0D7377] font-bold text-xs px-2 py-0.5 rounded-full shrink-0">{v.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GTMSection() {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-3 py-1 mb-4">
          <span className="text-xs font-semibold text-[#0D7377]">Go-To-Market</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-3">GTM Plan — CharonPass</h2>
        <p className="text-[#1A2332]/60 leading-relaxed">
          Community-led launch strategy. Zero-spend Phase 1. $10K MRR by Month 6.
        </p>
        <a
          href="https://docs.google.com/document/d/1rynK56frsEqKXwShQI70wmK_GQHr7nE3ePGt_EpuORU/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-[#0D7377] hover:underline mt-2"
        >
          View full GTM Plan in Google Docs <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Target Audience */}
      <div className="bg-[#F7FAFA] rounded-2xl p-6 border border-[#E2EEF0]">
        <h3 className="font-display text-lg font-bold text-[#1A2332] mb-4">Primary Persona: &ldquo;The Worried Holder&rdquo;</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="font-semibold text-[#1A2332]">Age:</span> <span className="text-[#1A2332]/60">35–55, primarily male (60%)</span></div>
          <div><span className="font-semibold text-[#1A2332]">Income:</span> <span className="text-[#1A2332]/60">$80K–$150K household</span></div>
          <div><span className="font-semibold text-[#1A2332]">Portfolio:</span> <span className="text-[#1A2332]/60">$5K–$200K (Coinbase, MetaMask, Ledger)</span></div>
          <div><span className="font-semibold text-[#1A2332]">Trigger:</span> <span className="text-[#1A2332]/60">Reads story about locked crypto after death</span></div>
          <div className="col-span-2"><span className="font-semibold text-[#1A2332]">Pain:</span> <span className="text-[#1A2332]/60">&ldquo;My spouse doesn&apos;t know I have crypto, let alone how to access it&rdquo;</span></div>
        </div>
      </div>

      {/* Launch Channels */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Launch Channels (Priority Order)</h3>
        <div className="space-y-3">
          {[
            {
              n: 1,
              channel: "Reddit",
              platforms: "r/CryptoCurrency, r/Bitcoin, r/personalfinance, r/EstatePlanning",
              outcome: "500–2,000 organic visits per post if it gains traction",
              type: "Highest Priority",
            },
            {
              n: 2,
              channel: "Facebook Crypto Groups",
              platforms: "Crypto Investing for Beginners (45K), Bitcoin & Crypto Investors (38K)",
              outcome: "100–300 signups from first month of consistent posting",
              type: "High",
            },
            {
              n: 3,
              channel: "YouTube Creator Outreach",
              platforms: "Graham Stephan (5.4M), Andrei Jikh (2.9M), Coin Bureau (2.8M)",
              outcome: "Single featured video = 1,000–5,000 signups spike",
              type: "High",
            },
            {
              n: 4,
              channel: "ProductHunt Launch",
              platforms: "Tuesday launch at 12:01am PST",
              outcome: "300–800 signups on launch day",
              type: "Medium",
            },
            {
              n: 5,
              channel: "SEO Content",
              platforms: '"dead man\'s switch" (33K/mo), "coinbase wallet recovery" (4.4K/mo)',
              outcome: "500–2,000 organic monthly visits by Month 3",
              type: "Long-term",
            },
          ].map((c, i) => (
            <div key={i} className="bg-[#F7FAFA] rounded-xl p-5 border border-[#E2EEF0] flex gap-4">
              <div className="h-9 w-9 rounded-full bg-[#0D7377] text-white font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                {c.n}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-[#1A2332]">{c.channel}</h4>
                  <span className="text-xs bg-[#0D7377]/10 text-[#0D7377] px-2 py-0.5 rounded-full font-medium">{c.type}</span>
                </div>
                <p className="text-xs text-[#1A2332]/50 mb-1.5">{c.platforms}</p>
                <p className="text-sm text-[#1A2332]/70">→ {c.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">90-Day Timeline</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { phase: "Week 1", target: "50 signups", items: ["ProductHunt submission", "Reddit PSA posts", "Publish first blog post", "Reach out to 5 YouTube creators"] },
            { phase: "Month 1", target: "100 signups · 20 paying", items: ["2 more blog articles", "Reddit thread engagement", "A/B test hero headline", "YouTube creator follow-up"] },
            { phase: "Month 2–3", target: "200 paying · $4K MRR", items: ["YouTube creator partnership", "SEO content ranking", "Email nurture active", "Reddit ads test ($200)"] },
          ].map((phase, i) => (
            <div key={i} className="bg-[#F7FAFA] rounded-2xl p-5 border border-[#E2EEF0]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-[#0D7377]">{phase.phase}</span>
              </div>
              <p className="font-semibold text-[#1A2332] text-sm mb-3">{phase.target}</p>
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
      </div>

      {/* Revenue Targets */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Revenue Targets</h3>
        <div className="grid grid-cols-4 gap-3">
          {[
            { month: "Month 1", users: "50", mrr: "$950" },
            { month: "Month 3", users: "200", mrr: "$3,800" },
            { month: "Month 6", users: "500", mrr: "$9,500" },
            { month: "Month 12", users: "2,000", mrr: "$38,000" },
          ].map((r, i) => (
            <div key={i} className="bg-[#F7FAFA] rounded-xl p-4 border border-[#E2EEF0] text-center">
              <p className="text-xs text-[#1A2332]/40 font-mono mb-1">{r.month}</p>
              <p className="font-mono text-xl font-bold text-[#0D7377]">{r.mrr}</p>
              <p className="text-xs text-[#1A2332]/50 mt-0.5">{r.users} users</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MarketingSection() {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-3 py-1 mb-4">
          <span className="text-xs font-semibold text-[#0D7377]">Marketing Plan</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-3">Marketing Plan — CharonPass</h2>
        <p className="text-[#1A2332]/60 leading-relaxed">
          Brand voice, content strategy, social media campaigns, and KPIs.
        </p>
        <a
          href="https://docs.google.com/document/d/18WQKIM6kDMCngAV8MhP7myEHjEBZdCAryn5GWwAGVJw/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-[#0D7377] hover:underline mt-2"
        >
          View full Marketing Plan in Google Docs <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Positioning */}
      <div className="bg-[#0D7377] rounded-2xl p-8 text-white">
        <h3 className="font-semibold text-white/60 text-sm uppercase tracking-wider mb-4">Positioning Statement</h3>
        <p className="text-lg leading-relaxed mb-4">
          &ldquo;For the crypto holder who has a family but not a plan — CharonPass creates a plain-English recovery guide that your spouse can actually follow, without ever storing your keys.&rdquo;
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-xs text-white/50 mb-1">Tagline</p>
            <p className="font-semibold">Your digital estate, safely delivered.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-xs text-white/50 mb-1">Primary CTA</p>
            <p className="font-semibold">Protect Your Family Today</p>
          </div>
        </div>
      </div>

      {/* Brand Voice */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Brand Voice</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
            <p className="font-semibold text-emerald-700 mb-3">✅ We Say</p>
            <ul className="space-y-1.5 text-sm text-emerald-700">
              {["Plain-English recovery guide", "Your family can actually follow", "No seed phrases to decode", "Peace of mind for your whole family", "Set it up in 15 minutes"].map((p, i) => (
                <li key={i} className="flex items-start gap-1.5"><span>→</span> &ldquo;{p}&rdquo;</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-5 border border-red-100">
            <p className="font-semibold text-red-600 mb-3">❌ We Never Say</p>
            <ul className="space-y-1.5 text-sm text-red-600">
              {["HODL / to the moon / wen lambo", "Blockchain-based / decentralized / trustless", "In the event of your untimely passing", "Fear-based openers", "Technical jargon as opener"].map((p, i) => (
                <li key={i} className="flex items-start gap-1.5"><span>→</span> {p}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-[#F7FAFA] rounded-xl p-5 border border-[#E2EEF0]">
          <p className="text-xs text-[#1A2332]/40 mb-2">Tone</p>
          <p className="text-[#1A2332] font-semibold">Warm, reassuring, responsible — &ldquo;TurboTax meets Apple&rdquo;</p>
          <p className="text-sm text-[#1A2332]/60 mt-1">Guided, clear, human, trustworthy. Takes a scary topic and makes it manageable.</p>
        </div>
      </div>

      {/* Blog Topics */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">SEO Content Strategy</h3>
        <div className="space-y-3">
          {[
            { title: "What Happens to Your Crypto When You Die? The $140B Problem No One Talks About", kw: "crypto inheritance", vol: "~2K/mo", priority: "Medium" },
            { title: "Dead Man's Switch for Crypto: The Complete 2026 Guide", kw: "dead man's switch", vol: "33,100/mo", priority: "⭐ Priority" },
            { title: "Coinbase Wallet Recovery: What Your Family Needs to Know", kw: "coinbase wallet recovery phrase", vol: "4,400/mo", priority: "Priority" },
            { title: "Casa vs. Vault12 vs. CharonPass: Which Crypto Inheritance Platform Is Right for You?", kw: "comparison intent", vol: "Varies", priority: "Medium" },
            { title: "The Crypto Estate Planning Checklist Every Holder Needs in 2026", kw: "crypto estate planning", vol: "1,800/mo", priority: "Lead magnet" },
          ].map((article, i) => (
            <div key={i} className="bg-[#F7FAFA] rounded-xl p-4 border border-[#E2EEF0] flex gap-3 items-start">
              <span className="font-mono text-[#0D7377]/40 text-xs font-bold mt-0.5 w-5 shrink-0">{i + 1}.</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#1A2332] mb-1">{article.title}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-white border border-[#E2EEF0] text-[#1A2332]/50 px-2 py-0.5 rounded-full">{article.kw}</span>
                  <span className="text-xs bg-[#0D7377]/10 text-[#0D7377] px-2 py-0.5 rounded-full font-medium">{article.vol}</span>
                  <span className="text-xs bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full">{article.priority}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Posts */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Social Media Posts (Ready to Publish)</h3>
        <div className="space-y-4">
          {[
            {
              platform: "Twitter/X — Launch",
              text: "$140B in crypto is locked forever.\n\nNot hacked. Not stolen. Just... inaccessible.\n\nBecause when people die, their families have no idea how to access the wallets.\n\nWe built @CharonPass to fix this.\n\n15 minutes to set up. No technical knowledge required. No seed phrases stored. Ever.",
            },
            {
              platform: "Twitter/X — Product",
              text: "Most crypto inheritance tools require:\n❌ Hardware wallets\n❌ Technical setup\n❌ Trusting strangers as guardians\n❌ $250+/year\n\n@CharonPass requires:\n✅ 15 minutes\n✅ Zero technical knowledge\n✅ $9/month",
            },
          ].map((post, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-[#E2EEF0]">
              <p className="text-xs font-semibold text-[#0D7377] mb-3">{post.platform}</p>
              <p className="text-sm text-[#1A2332] whitespace-pre-line leading-relaxed">{post.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Calendar */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Content Calendar (Month 1)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#F7FAFA]">
                {["Week", "Blog", "Twitter/X", "Reddit", "LinkedIn"].map((h) => (
                  <th key={h} className="text-left py-2.5 px-4 text-[#1A2332]/50 font-medium border border-[#E2EEF0] text-xs">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Launch post (crypto inheritance)", "5 posts (launch + product)", "PSA post + thread answers", "Professional angle post"],
                ["2", "Tutorial: Set Up Your First Guide", "5 posts (community)", "Continue thread engagement", "Estate planning attorney angle"],
                ["3", "Dead Man's Switch guide", "5 posts (social proof)", "Story-driven post", "—"],
                ["4", "Coinbase wallet recovery guide", "5 posts (comparison)", "Stats post + checklist", "Monthly roundup"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F7FAFA]/50"}>
                  {row.map((cell, j) => (
                    <td key={j} className={cn("py-2.5 px-4 border border-[#E2EEF0] text-xs", j === 0 ? "font-mono font-bold text-[#0D7377]" : "text-[#1A2332]/70")}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function BrandSection() {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-3 py-1 mb-4">
          <span className="text-xs font-semibold text-[#0D7377]">Brand Spec</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-3">Brand Spec — CharonPass</h2>
        <p className="text-[#1A2332]/60 leading-relaxed">
          Visual identity, color palette, typography, and design system for CharonPass.
        </p>
      </div>

      {/* Color Palette */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Teal Primary", hex: "#0D7377", rgb: "13, 115, 119", role: "Brand primary, CTAs, accents" },
            { name: "Dark Navy", hex: "#1A2332", rgb: "26, 35, 50", role: "Text primary, headings" },
            { name: "Surface", hex: "#F7FAFA", rgb: "247, 250, 250", role: "Backgrounds, cards" },
            { name: "Border", hex: "#E2EEF0", rgb: "226, 238, 240", role: "Borders, dividers" },
          ].map((color, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-[#E2EEF0]">
              <div className="h-20" style={{ backgroundColor: color.hex }} />
              <div className="p-4 bg-white">
                <p className="font-semibold text-[#1A2332] text-sm">{color.name}</p>
                <p className="font-mono text-xs text-[#0D7377] mt-0.5">{color.hex}</p>
                <p className="text-xs text-[#1A2332]/40 mt-0.5">rgb({color.rgb})</p>
                <p className="text-xs text-[#1A2332]/60 mt-1.5 leading-relaxed">{color.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Typography</h3>
        <div className="space-y-4">
          <div className="bg-[#F7FAFA] rounded-2xl p-6 border border-[#E2EEF0]">
            <p className="text-xs text-[#1A2332]/40 font-mono mb-3">Display Font — Plus Jakarta Sans</p>
            <div className="space-y-2">
              <p className="font-display text-5xl font-bold text-[#1A2332]">CharonPass</p>
              <p className="font-display text-2xl font-semibold text-[#1A2332]">Your digital estate, safely delivered.</p>
              <p className="font-display text-base text-[#1A2332]/60">Used for all headings, product name, and key statements.</p>
            </div>
          </div>
          <div className="bg-[#F7FAFA] rounded-2xl p-6 border border-[#E2EEF0]">
            <p className="text-xs text-[#1A2332]/40 font-mono mb-3">Body Font — Instrument Sans</p>
            <p className="text-base text-[#1A2332] leading-relaxed">Plain-English recovery guides that your family can actually follow. No seed phrases, no technical knowledge. Set up in 15 minutes.</p>
          </div>
          <div className="bg-[#F7FAFA] rounded-2xl p-6 border border-[#E2EEF0]">
            <p className="text-xs text-[#1A2332]/40 font-mono mb-3">Mono Font — DM Mono</p>
            <p className="font-mono text-2xl font-medium text-[#0D7377]">87 days · $9/mo · 33,100/mo</p>
            <p className="font-mono text-sm text-[#1A2332]/60 mt-2">Used for stats, counters, data, code snippets.</p>
          </div>
        </div>
      </div>

      {/* Design Tokens */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Design Tokens (CSS Variables)</h3>
        <div className="bg-[#1A2332] rounded-2xl p-6 font-mono text-sm">
          <pre className="text-[#0D7377] leading-relaxed whitespace-pre-wrap">{`:root {
  /* Colors */
  --background: #FFFFFF;
  --accent: #0D7377;
  --surface: #F7FAFA;
  --text-primary: #1A2332;
  --border: #E2EEF0;

  /* Fonts */
  --font-display: 'Plus Jakarta Sans';
  --font-body: 'Instrument Sans';
  --font-mono: 'DM Mono';

  /* Radii */
  --radius-card: 16px;
  --radius-btn: 12px;
  --radius-chip: 999px;

  /* Shadows */
  --shadow-card: 0 1px 3px rgba(13,115,119,0.08);
}`}</pre>
        </div>
      </div>

      {/* Logo Usage */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Logo & Icon Usage</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Light background", bg: "bg-white border border-[#E2EEF0]", iconBg: "bg-[#0D7377]", text: "text-[#1A2332]" },
            { label: "Dark background", bg: "bg-[#0D7377]", iconBg: "bg-white/20", text: "text-white" },
            { label: "Surface", bg: "bg-[#F7FAFA] border border-[#E2EEF0]", iconBg: "bg-[#0D7377]", text: "text-[#1A2332]" },
          ].map((v, i) => (
            <div key={i} className={cn("rounded-2xl p-6 flex flex-col items-center gap-3", v.bg)}>
              <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center", v.iconBg)}>
                <Shield className={cn("h-7 w-7", v.iconBg.includes("white/20") ? "text-white" : "text-white")} strokeWidth={2} />
              </div>
              <span className={cn("font-display font-bold", v.text)}>CharonPass</span>
              <span className={cn("text-xs", v.iconBg.includes("white/20") ? "text-white/50" : "text-[#1A2332]/40")}>{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PitchSection() {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-3 py-1 mb-4">
          <span className="text-xs font-semibold text-[#0D7377]">Pitch Deck</span>
        </div>
        <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-3">Pitch Deck — CharonPass</h2>
        <p className="text-[#1A2332]/60 leading-relaxed">
          12-slide interactive investor pitch deck with Framer Motion animations, keyboard navigation, and full content from the marketer&apos;s Google Doc.
        </p>
      </div>

      {/* Live Deck Link */}
      <div className="bg-[#0D7377] rounded-2xl p-8 text-white text-center">
        <p className="text-white/70 text-sm mb-3">Interactive Framer Motion Pitch Deck</p>
        <Link
          href="/deck"
          className="inline-flex items-center gap-2 bg-white text-[#0D7377] rounded-xl px-8 py-4 font-bold text-base hover:bg-white/90 transition-colors"
        >
          Open Live Pitch Deck → /deck
        </Link>
        <p className="text-white/40 text-xs mt-3 font-mono">charonpass.ashketing.com/deck</p>
      </div>

      {/* Slide Overview */}
      <div>
        <h3 className="font-display text-xl font-bold text-[#1A2332] mb-4">Slide Overview (12 Slides)</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { n: 1, title: "Title", summary: "CharonPass — The crypto inheritance platform for the other 99%" },
            { n: 2, title: "The Problem", summary: "$140B locked forever. 73% no plan. 20-25% Bitcoin permanently lost." },
            { n: 3, title: "Real Stories", summary: "Real Reddit testimonials — Sarah, James — verified community pain." },
            { n: 4, title: "The Solution", summary: "Plain-English guides + dead man's switch. 15 min setup. No keys stored." },
            { n: 5, title: "How It Works", summary: "4-step flow: add wallets → write guides → add beneficiaries → set switch." },
            { n: 6, title: "Live Product", summary: "Dashboard, guide editor, countdown timer — all functional at charonpass.ashketing.com" },
            { n: 7, title: "Market Size", summary: "TAM $6.2B / SAM $1.1B / SOM $50M. 33K/mo keyword, zero SaaS competition." },
            { n: 8, title: "Competition", summary: "Casa & Vault12 leave non-technical $5K–$200K holder completely unserved." },
            { n: 9, title: "Business Model", summary: "SaaS $9–$29/mo. LTV:CAC >9x. $38K MRR by Month 12." },
            { n: 10, title: "Traction", summary: "IdeaBrowser 9/10 opportunity. 2.5M Reddit members. Product live + QA passed." },
            { n: 11, title: "GTM", summary: "Phase 1 zero-cost (Reddit+ProductHunt). Phase 3: $10K MRR by Month 6." },
            { n: 12, title: "The Ask", summary: "Distribution partners, creator affiliates, $50K angel for content marketing." },
          ].map((slide) => (
            <div key={slide.n} className="bg-[#F7FAFA] rounded-xl p-4 border border-[#E2EEF0] flex gap-3 items-start">
              <span className="font-mono text-xs font-bold text-[#0D7377]/50 w-6 shrink-0 mt-0.5">{slide.n < 10 ? `0${slide.n}` : slide.n}</span>
              <div>
                <p className="font-semibold text-[#1A2332] text-sm">{slide.title}</p>
                <p className="text-xs text-[#1A2332]/50 mt-0.5 leading-relaxed">{slide.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Source Doc */}
      <div className="bg-[#F7FAFA] rounded-xl p-5 border border-[#E2EEF0]">
        <p className="text-sm font-semibold text-[#1A2332] mb-2">Source Document</p>
        <a
          href="https://docs.google.com/document/d/1jqPL1X41uOKl_poiVksnVaGUX3eo7fiPUNTOBpT4ZQk/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-[#0D7377] hover:underline"
        >
          Pitch Deck Content — CharonPass (Google Docs) <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <p className="text-xs text-[#1A2332]/40 mt-1.5">Full slide copy, speaker notes, visual descriptions, and design tokens from @marketer.</p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Nav Sections Config
// ─────────────────────────────────────────────

const NAV_SECTIONS = [
  {
    id: "research",
    label: "Research",
    icon: BarChart2,
    description: "Market analysis & validation",
    component: <ResearchSection />,
  },
  {
    id: "gtm",
    label: "GTM Plan",
    icon: Target,
    description: "Go-to-market strategy",
    component: <GTMSection />,
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    description: "Brand voice & content plan",
    component: <MarketingSection />,
  },
  {
    id: "brand",
    label: "Brand Spec",
    icon: Palette,
    description: "Colors, fonts & design system",
    component: <BrandSection />,
  },
  {
    id: "pitch",
    label: "Pitch Deck",
    icon: Presentation,
    description: "12-slide investor presentation",
    component: <PitchSection />,
  },
]

// ─────────────────────────────────────────────
// Main Docs Page
// ─────────────────────────────────────────────

export default function DocsPage() {
  const [active, setActive] = useState("research")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeSection = NAV_SECTIONS.find((s) => s.id === active)!

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white border-b border-[#E2EEF0] px-4 py-3 flex items-center gap-3">
        <button
          className="md:hidden h-8 w-8 flex items-center justify-center rounded-lg hover:bg-[#F7FAFA]"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-5 w-5 text-[#1A2332]" />
        </button>
        <Link href="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-[#0D7377] flex items-center justify-center">
            <Shield className="h-4 w-4 text-white" strokeWidth={2} />
          </div>
          <span className="font-display font-bold text-[#1A2332]">CharonPass</span>
        </Link>
        <span className="text-[#1A2332]/30 text-sm">/</span>
        <span className="text-sm text-[#1A2332]/50">Docs</span>
        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/"
            className="text-xs text-[#0D7377] hover:underline hidden sm:inline"
          >
            ← Live Site
          </Link>
          <Link
            href="/deck"
            className="inline-flex items-center gap-1.5 text-xs bg-[#0D7377] text-white px-3 py-1.5 rounded-lg hover:bg-[#0D7377]/90 transition-colors"
          >
            View Pitch <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar — Desktop */}
        <aside className="hidden md:flex flex-col w-64 border-r border-[#E2EEF0] bg-[#F7FAFA] sticky top-[53px] h-[calc(100vh-53px)]">
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <p className="text-xs font-semibold text-[#1A2332]/30 uppercase tracking-wider px-3 mb-3">Documents</p>
            {NAV_SECTIONS.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActive(section.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left mb-1 transition-all",
                    active === section.id
                      ? "bg-[#0D7377] text-white"
                      : "text-[#1A2332]/70 hover:bg-white hover:text-[#1A2332]"
                  )}
                >
                  <Icon className={cn("h-4 w-4 shrink-0", active === section.id ? "text-white" : "text-[#0D7377]")} />
                  <div>
                    <p className={cn("text-sm font-semibold", active === section.id ? "text-white" : "text-[#1A2332]")}>
                      {section.label}
                    </p>
                    <p className={cn("text-xs", active === section.id ? "text-white/60" : "text-[#1A2332]/40")}>
                      {section.description}
                    </p>
                  </div>
                </button>
              )
            })}
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t border-[#E2EEF0]">
            <div className="space-y-2">
              <a
                href="https://charonpass.ashketing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#1A2332]/50 hover:text-[#0D7377] transition-colors px-2 py-1"
              >
                <ExternalLink className="h-3 w-3" /> Live Site
              </a>
              <a
                href="https://github.com/ashtalksai/charonpass"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#1A2332]/50 hover:text-[#0D7377] transition-colors px-2 py-1"
              >
                <ExternalLink className="h-3 w-3" /> GitHub Repo
              </a>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="md:hidden fixed inset-0 z-40 flex">
            <div className="absolute inset-0 bg-black/30" onClick={() => setSidebarOpen(false)} />
            <aside className="relative z-50 w-72 bg-[#F7FAFA] border-r border-[#E2EEF0] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-[#E2EEF0]">
                <p className="font-display font-bold text-[#1A2332]">Docs</p>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="h-8 w-8 flex items-center justify-center rounded-lg hover:bg-white"
                >
                  <X className="h-4 w-4 text-[#1A2332]" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-3 px-3">
                {NAV_SECTIONS.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => { setActive(section.id); setSidebarOpen(false) }}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left mb-1 transition-all",
                        active === section.id ? "bg-[#0D7377] text-white" : "hover:bg-white text-[#1A2332]/70"
                      )}
                    >
                      <Icon className={cn("h-4 w-4 shrink-0", active === section.id ? "text-white" : "text-[#0D7377]")} />
                      <span className={cn("text-sm font-semibold", active === section.id ? "text-white" : "text-[#1A2332]")}>
                        {section.label}
                      </span>
                    </button>
                  )
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-10">
            {activeSection.component}
          </div>
        </main>
      </div>
    </div>
  )
}
