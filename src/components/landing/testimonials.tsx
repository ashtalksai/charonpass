"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mike D.",
    location: "Colorado",
    quote: "Finally did it. Took 20 minutes. My wife knows exactly what to do now. I feel like I've completed something I should have done years ago.",
    avatar: "MD",
    rating: 5,
  },
  {
    name: "Jennifer R.",
    location: "Ontario, Canada",
    quote: "The guided wizard made it so easy. I'm not technical at all — I barely know what a seed phrase is — but CharonPass walked me through everything.",
    avatar: "JR",
    rating: 5,
  },
  {
    name: "Robert K.",
    location: "Texas",
    quote: "The dead man's switch gives me peace of mind. Set it and forget it. I check in once a month and know my family will be taken care of.",
    avatar: "RK",
    rating: 5,
  },
]

const stats = [
  { label: "in inaccessible crypto", value: "$140B+" },
  { label: "of holders have no plan", value: "73%" },
  { label: "of all Bitcoin lost forever", value: "20-25%" },
  { label: "protected holders", value: "2,400+" },
]

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0D7377]">Real customers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A2332] mb-4">
            Peace of mind in 20 minutes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F7FAFA] rounded-2xl p-6 border border-[#E2EEF0]"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-[#1A2332]/70 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#0D7377]/10 flex items-center justify-center text-sm font-bold text-[#0D7377]">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A2332]">{t.name}</p>
                  <p className="text-xs text-[#1A2332]/50">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E2EEF0] rounded-2xl overflow-hidden border border-[#E2EEF0]"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#F7FAFA] px-6 py-8 text-center">
              <p className="font-display text-2xl font-bold text-[#0D7377] mb-1">{stat.value}</p>
              <p className="text-xs text-[#1A2332]/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
