"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-[#0D7377] py-24 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">
            Don&apos;t let your crypto die with you.
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of crypto holders who&apos;ve already secured their digital legacy. Setup takes less than 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-[#0D7377] shadow-lg hover:bg-white/90 transition-all"
            >
              Start for Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-white/50 text-sm">No credit card required. Free plan available.</p>
        </motion.div>
      </div>
    </section>
  )
}
