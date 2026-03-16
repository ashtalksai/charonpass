"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Do you store my private keys or seed phrase?",
    a: "Never. We store only plain-English notes that you write yourself. CharonPass has no access to your keys, seed phrases, or passwords. We are physically incapable of accessing your crypto.",
  },
  {
    q: "What does my beneficiary actually receive?",
    a: "When the Dead Man's Switch triggers, your beneficiaries receive an email with a link to your recovery guides. The guides contain whatever step-by-step instructions you've written. They don't need a CharonPass account to view them.",
  },
  {
    q: "What if I go on vacation or can't check in?",
    a: "You can pause the switch or set a longer interval at any time. You can also check in from your phone in seconds. If you set a 90-day interval, you have 3 months before anything happens.",
  },
  {
    q: "Is this legal?",
    a: "Yes. Estate planning for digital assets is fully legal in all jurisdictions we're aware of. CharonPass is a documentation and communication tool, not a custody or transfer service. Consult an estate attorney for specific legal advice.",
  },
  {
    q: "What happens if CharonPass shuts down?",
    a: "Your recovery guides are always exportable as a PDF. We recommend downloading and storing them securely (encrypted USB, printed copy in a safe) as a backup. Your family's access to your assets should never depend on any single company.",
  },
  {
    q: "How is this different from Casa or Vault12?",
    a: "Casa and Vault12 are built for technical, high-net-worth holders managing actual key custody. CharonPass is built for everyday crypto holders who want their non-technical family to have clear instructions. We don't touch your keys — we help you document what you own.",
  },
  {
    q: "Is my data encrypted?",
    a: "Yes. All data is encrypted with AES-256 at rest and TLS in transit. We are GDPR compliant and do not sell your data. You can request a full data export or account deletion at any time.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0D7377]">FAQ</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A2332] mb-4">
            Common questions
          </h2>
          <p className="text-lg text-[#1A2332]/60">
            Everything you need to know about CharonPass.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-[#E2EEF0] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full px-5 py-4 text-left bg-white hover:bg-[#F7FAFA] transition-colors"
              >
                <span className="text-sm font-semibold text-[#1A2332] pr-4">{faq.q}</span>
                {open === i ? (
                  <Minus className="h-4 w-4 text-[#0D7377] shrink-0" />
                ) : (
                  <Plus className="h-4 w-4 text-[#1A2332]/40 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-[#1A2332]/60 leading-relaxed border-t border-[#E2EEF0] pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
