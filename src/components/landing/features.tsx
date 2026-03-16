"use client"

import { motion } from "framer-motion"
import { BookOpen, Timer, Users, Wallet, CheckCircle, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: BookOpen,
    title: "Recovery Guide",
    description: "Step-by-step instructions your family can actually follow. Written in plain English, not tech jargon.",
    size: "large",
  },
  {
    icon: Timer,
    title: "Dead Man's Switch",
    description: "Automatically alerts beneficiaries after your chosen inactivity period.",
    size: "small",
  },
  {
    icon: Users,
    title: "Multiple Beneficiaries",
    description: "Name who gets what, with personalized guides per person.",
    size: "small",
  },
  {
    icon: Wallet,
    title: "Multi-Wallet Support",
    description: "Coinbase, MetaMask, Ledger, Trezor — all covered with platform-specific guides.",
    size: "small",
  },
  {
    icon: CheckCircle,
    title: "Weekly Check-In",
    description: "Simple 'I'm still here' button that resets the countdown. Takes 3 seconds.",
    size: "small",
  },
  {
    icon: Lock,
    title: "Zero Key Storage",
    description: "We never see your private keys or seed phrases. Ever. Not even encrypted.",
    size: "large",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-[#F7FAFA] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0D7377]">Everything you need</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A2332] mb-4">
            Built for people, not developers
          </h2>
          <p className="text-lg text-[#1A2332]/60 max-w-2xl mx-auto">
            Every feature is designed around one question: what would a non-technical family member actually need to access your crypto?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "relative bg-white rounded-2xl p-6 border border-[#E2EEF0] overflow-hidden group hover:border-[#0D7377]/30 hover:shadow-lg hover:shadow-[#0D7377]/5 transition-all",
                  feature.size === "large" && "md:col-span-1"
                )}
              >
                {/* Background texture */}
                <div
                  className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity"
                  style={{
                    backgroundImage: "url(/images/feature-icons.png)",
                    backgroundSize: "200px",
                  }}
                />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-[#0D7377]/10 flex items-center justify-center mb-4 group-hover:bg-[#0D7377]/15 transition-colors">
                    <Icon className="h-5 w-5 text-[#0D7377]" />
                  </div>
                  <h3 className="font-display font-semibold text-[#1A2332] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#1A2332]/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
