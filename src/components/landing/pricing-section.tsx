"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    monthlyPrice: 5,
    annualPrice: 4,
    description: "Perfect for getting started with a single wallet.",
    features: [
      "1 wallet",
      "1 beneficiary",
      "1 recovery guide",
      "Email support",
      "Dead Man's Switch",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Family",
    monthlyPrice: 12,
    annualPrice: 9,
    description: "Most popular for families with multiple wallets.",
    features: [
      "5 wallets",
      "3 beneficiaries",
      "Unlimited recovery guides",
      "Priority support",
      "Dead Man's Switch",
      "PDF export",
    ],
    cta: "Start Free",
    popular: true,
  },
  {
    name: "Portfolio",
    monthlyPrice: 29,
    annualPrice: 22,
    description: "For serious holders with complex portfolios.",
    features: [
      "Unlimited wallets",
      "Unlimited beneficiaries",
      "Legal template library",
      "Dedicated support",
      "Dead Man's Switch",
      "PDF export",
      "Priority notifications",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="bg-[#F7FAFA] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0D7377]">Simple pricing</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A2332] mb-4">
            Protect your legacy for less than a coffee
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={cn("text-sm font-medium", !annual ? "text-[#1A2332]" : "text-[#1A2332]/50")}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={cn(
                "relative h-6 w-11 rounded-full transition-colors",
                annual ? "bg-[#0D7377]" : "bg-[#E2EEF0]"
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all",
                  annual ? "left-5.5 translate-x-0" : "left-0.5"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium", annual ? "text-[#1A2332]" : "text-[#1A2332]/50")}>
              Annual <span className="text-[#0D7377] font-semibold">Save 25%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative bg-white rounded-2xl p-6 border transition-all",
                plan.popular
                  ? "border-[#0D7377] shadow-xl shadow-[#0D7377]/10 scale-105"
                  : "border-[#E2EEF0]"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0D7377] text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display text-lg font-bold text-[#1A2332] mb-1">{plan.name}</h3>
                <p className="text-sm text-[#1A2332]/60 mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-[#1A2332]">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-[#1A2332]/50 text-sm">/month</span>
                </div>
                {annual && <p className="text-xs text-[#0D7377] mt-1">Billed annually</p>}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-[#1A2332]/70">
                    <Check className="h-4 w-4 text-[#0D7377] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={cn(
                  "block w-full text-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                  plan.popular
                    ? "bg-[#0D7377] text-white hover:bg-[#0D7377]/90"
                    : "border border-[#E2EEF0] text-[#1A2332] hover:bg-[#F7FAFA]"
                )}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
