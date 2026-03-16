"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Check, X, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 5,
    annualPrice: 4,
    description: "For individuals with a single wallet.",
    features: {
      wallets: "1 wallet",
      beneficiaries: "1 beneficiary",
      guides: "1 recovery guide",
      support: "Email support",
      deadSwitch: true,
      pdfExport: false,
      legalTemplates: false,
      dedicatedSupport: false,
    },
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Family",
    monthlyPrice: 12,
    annualPrice: 9,
    description: "Most popular for families with multiple wallets.",
    features: {
      wallets: "5 wallets",
      beneficiaries: "3 beneficiaries",
      guides: "Unlimited guides",
      support: "Priority support",
      deadSwitch: true,
      pdfExport: true,
      legalTemplates: false,
      dedicatedSupport: false,
    },
    cta: "Start Free",
    popular: true,
  },
  {
    name: "Portfolio",
    monthlyPrice: 29,
    annualPrice: 22,
    description: "For serious holders with complex portfolios.",
    features: {
      wallets: "Unlimited wallets",
      beneficiaries: "Unlimited beneficiaries",
      guides: "Unlimited guides",
      support: "Priority support",
      deadSwitch: true,
      pdfExport: true,
      legalTemplates: true,
      dedicatedSupport: true,
    },
    cta: "Get Started",
    popular: false,
  },
]

const featureMatrix = [
  { label: "Wallets", key: "wallets" },
  { label: "Beneficiaries", key: "beneficiaries" },
  { label: "Recovery Guides", key: "guides" },
  { label: "Support", key: "support" },
  { label: "Dead Man's Switch", key: "deadSwitch", bool: true },
  { label: "PDF Export", key: "pdfExport", bool: true },
  { label: "Legal Template Library", key: "legalTemplates", bool: true },
  { label: "Dedicated Support", key: "dedicatedSupport", bool: true },
]

const pricingFaqs = [
  { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately, downgrades take effect at the next billing cycle." },
  { q: "Is there a free trial?", a: "The Starter plan is free forever with no credit card required. Paid plans have a 14-day free trial." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards via Stripe. Annual plans can also be paid by invoice." },
  { q: "What is your refund policy?", a: "If you're not satisfied within 30 days of your first paid payment, we'll refund you in full, no questions asked." },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#F7FAFA] py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#0D7377]">Simple, transparent pricing</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1A2332] mb-4">
              Protect your legacy for less than a coffee
            </h1>
            <p className="text-lg text-[#1A2332]/60 mb-8">No hidden fees. No lock-in. Cancel anytime.</p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-3">
              <span className={cn("text-sm font-medium", !annual ? "text-[#1A2332]" : "text-[#1A2332]/50")}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={cn("relative h-6 w-11 rounded-full transition-colors", annual ? "bg-[#0D7377]" : "bg-[#E2EEF0]")}
              >
                <span className={cn("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-200", annual ? "left-[22px]" : "left-[2px]")} />
              </button>
              <span className={cn("text-sm font-medium", annual ? "text-[#1A2332]" : "text-[#1A2332]/50")}>
                Annual <span className="text-[#0D7377] font-semibold">Save 25%</span>
              </span>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={cn(
                    "relative rounded-2xl p-6 border",
                    plan.popular ? "border-[#0D7377] shadow-xl shadow-[#0D7377]/10" : "border-[#E2EEF0]"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#0D7377] text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                    </div>
                  )}
                  <h2 className="font-display text-xl font-bold text-[#1A2332] mb-1">{plan.name}</h2>
                  <p className="text-sm text-[#1A2332]/60 mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display text-4xl font-bold text-[#1A2332]">${annual ? plan.annualPrice : plan.monthlyPrice}</span>
                    <span className="text-[#1A2332]/50">/month</span>
                  </div>
                  <Link
                    href="/signup"
                    className={cn(
                      "block w-full text-center rounded-xl px-4 py-3 text-sm font-semibold mb-6 transition-colors",
                      plan.popular ? "bg-[#0D7377] text-white hover:bg-[#0D7377]/90" : "border border-[#E2EEF0] text-[#1A2332] hover:bg-[#F7FAFA]"
                    )}
                  >
                    {plan.cta}
                  </Link>
                  <ul className="space-y-3">
                    {featureMatrix.map((f) => {
                      const val = plan.features[f.key as keyof typeof plan.features]
                      return (
                        <li key={f.key} className="flex items-center gap-3 text-sm">
                          {f.bool ? (
                            val ? (
                              <Check className="h-4 w-4 text-[#0D7377] shrink-0" />
                            ) : (
                              <X className="h-4 w-4 text-[#E2EEF0] shrink-0" />
                            )
                          ) : (
                            <Check className="h-4 w-4 text-[#0D7377] shrink-0" />
                          )}
                          <span className={cn("text-[#1A2332]/70", f.bool && !val && "text-[#1A2332]/30")}>
                            {f.bool ? f.label : String(val)}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="bg-[#F7FAFA] rounded-2xl p-8 flex items-center gap-6 border border-[#E2EEF0] mb-16">
              <div className="h-16 w-16 rounded-full bg-[#0D7377]/10 flex items-center justify-center shrink-0">
                <Shield className="h-7 w-7 text-[#0D7377]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#1A2332] mb-1">30-Day Money-Back Guarantee</h3>
                <p className="text-sm text-[#1A2332]/60">
                  If you&apos;re not completely satisfied within the first 30 days of your paid plan, we&apos;ll refund your payment in full — no questions asked.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-[#1A2332] mb-8 text-center">Pricing FAQ</h2>
              <div className="space-y-4">
                {pricingFaqs.map((faq, i) => (
                  <div key={i} className="border border-[#E2EEF0] rounded-xl p-5">
                    <h3 className="font-semibold text-[#1A2332] mb-2 text-sm">{faq.q}</h3>
                    <p className="text-sm text-[#1A2332]/60 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
