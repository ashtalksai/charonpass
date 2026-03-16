"use client"

import { motion } from "framer-motion"
import { Wallet, Users, FileText, Timer } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Add Your Wallets",
    time: "5 min",
    description: "Give each wallet a nickname (like 'Main Bitcoin'), choose the platform, and enter an approximate value range. No private keys, no seed phrases — ever.",
    icon: Wallet,
    detail: "Supports Coinbase, MetaMask, Ledger, Trezor, Kraken, Binance, and more.",
  },
  {
    number: "02",
    title: "Name Your Beneficiaries",
    time: "3 min",
    description: "Tell us who should be contacted and what they should receive. Add their name, email, relationship, and an optional phone number.",
    icon: Users,
    detail: "You can assign different guides to different people.",
  },
  {
    number: "03",
    title: "Write Recovery Guides",
    time: "15 min",
    description: "Use our guided templates to write plain English instructions. Step-by-step, exactly what your family needs to access each wallet.",
    icon: FileText,
    detail: "We provide prompts so you never stare at a blank page.",
  },
  {
    number: "04",
    title: "Set Your Switch",
    time: "1 min",
    description: "Choose your inactivity period: 30, 60, 90, or 180 days. If you don't check in, your beneficiaries receive your guides automatically.",
    icon: Timer,
    detail: "You can pause the switch if you're traveling.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0D7377]">Simple process</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A2332] mb-4">
            Up and running in under 30 minutes
          </h2>
          <p className="text-lg text-[#1A2332]/60 max-w-2xl mx-auto">
            Four simple steps. No technical knowledge required. Most users complete setup in a single sitting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-[#F7FAFA] rounded-2xl p-6 border border-[#E2EEF0] overflow-hidden"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="h-14 w-14 rounded-2xl bg-[#0D7377] flex items-center justify-center shadow-lg shadow-[#0D7377]/25">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono font-bold text-[#0D7377]/50">{step.number}</span>
                      <span className="text-xs font-medium text-[#0D7377] bg-[#0D7377]/10 px-2 py-0.5 rounded-full">~{step.time}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#1A2332] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#1A2332]/60 leading-relaxed mb-3">{step.description}</p>
                    <p className="text-xs text-[#0D7377] font-medium">{step.detail}</p>
                  </div>
                </div>
                {/* Step number watermark */}
                <div className="absolute bottom-2 right-4 font-display font-black text-6xl text-[#E2EEF0] select-none">
                  {step.number}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
