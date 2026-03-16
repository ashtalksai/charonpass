"use client"

import { motion } from "framer-motion"
import { ClipboardList, BookOpen, Timer } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Setup in minutes",
    description: "Add your wallets with a nickname and approximate value. No keys, no passwords, no technical details required.",
  },
  {
    icon: BookOpen,
    title: "Plain English instructions",
    description: "Write guides your non-technical family can actually follow. We give you templates and prompts to make it easy.",
  },
  {
    icon: Timer,
    title: "Dead Man's Switch",
    description: "Set an inactivity period. If you don't check in, your beneficiaries receive your guides and instructions automatically.",
  },
]

export function Solution() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#0D7377]">The CharonPass Way</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A2332] mb-6">
              We guide you, step by step.{" "}
              <span className="text-[#0D7377]">Like TurboTax for your crypto estate.</span>
            </h2>
            <p className="text-lg text-[#1A2332]/60 leading-relaxed mb-8">
              This isn&apos;t a technical product for blockchain experts. It&apos;s a life planning tool for people who own crypto and care about their families.
            </p>
            <p className="text-[#1A2332]/60 leading-relaxed">
              We never touch your private keys. We never hold your assets. We simply help you document what you own and leave clear instructions for the people you love.
            </p>
          </motion.div>

          {/* Right: Steps */}
          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl border border-[#E2EEF0] bg-[#F7FAFA] hover:border-[#0D7377]/30 hover:shadow-md transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#0D7377]/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-[#0D7377]" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[#1A2332] mb-1">{step.title}</h3>
                    <p className="text-sm text-[#1A2332]/60 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
