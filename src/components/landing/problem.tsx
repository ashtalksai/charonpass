"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const stories = [
  {
    name: "Sarah M.",
    location: "Reddit r/CryptoCurrency",
    story: "Lost $80K in Ethereum after my husband passed away. No one knew the password to his exchange account. Two years later, those funds are still inaccessible.",
    avatar: "SM",
    color: "from-rose-100 to-rose-50",
    textColor: "text-rose-600",
  },
  {
    name: "James, 42",
    location: "Twitter/X",
    story: "I've been meaning to set this up for 2 years. My portfolio is now $150K. My kids wouldn't even know where to start if something happened to me.",
    avatar: "J",
    color: "from-amber-100 to-amber-50",
    textColor: "text-amber-600",
  },
  {
    name: "Anonymous",
    location: "Estate Planning Forum",
    story: "My father passed with $60K in Bitcoin on a Ledger hardware wallet. We found the device but never found the PIN or recovery phrase. It's a black box.",
    avatar: "A",
    color: "from-violet-100 to-violet-50",
    textColor: "text-violet-600",
  },
]

export function Problem() {
  return (
    <section className="bg-[#F7FAFA] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-rose-600">The Hidden Crisis</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A2332] mb-4">
            This happens to real families every day
          </h2>
          <p className="text-lg text-[#1A2332]/60 max-w-2xl mx-auto">
            Over $140 billion in cryptocurrency is permanently inaccessible — not stolen, not lost, just locked away because no one knew how to get in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#E2EEF0] shadow-sm relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-[#E2EEF0]" />
              <p className="text-[#1A2332]/70 leading-relaxed mb-6 text-sm">
                &ldquo;{story.story}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${story.color} flex items-center justify-center text-sm font-bold ${story.textColor}`}>
                  {story.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A2332]">{story.name}</p>
                  <p className="text-xs text-[#1A2332]/50">{story.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0D7377] rounded-2xl p-8 text-center text-white"
        >
          <p className="text-4xl font-display font-bold mb-2">73%</p>
          <p className="text-white/80 text-lg">of crypto holders have no succession plan for their digital assets</p>
        </motion.div>
      </div>
    </section>
  )
}
