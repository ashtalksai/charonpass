"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"

function useCountUp(target: number, duration: number) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  return count
}

export function Hero() {
  const count = useCountUp(140, 1500)

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(/images/bg-pattern.png)",
          backgroundSize: "400px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-[#0D7377]">
                Over ${count}B in crypto is locked forever
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1A2332] leading-tight mb-6">
              Your family can&apos;t access your crypto.{" "}
              <span className="text-[#0D7377]">Fix that today.</span>
            </h1>

            <p className="text-lg text-[#1A2332]/60 leading-relaxed mb-8 max-w-xl">
              CharonPass guides your loved ones through accessing your digital assets — without ever touching your private keys.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D7377] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#0D7377]/25 hover:bg-[#0D7377]/90 transition-all"
              >
                Protect My Crypto
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E2EEF0] bg-white px-6 py-3.5 text-base font-semibold text-[#1A2332] hover:bg-[#F7FAFA] transition-all"
              >
                <Play className="h-4 w-4 text-[#0D7377]" />
                See How It Works
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0D7377]/20 to-[#0D7377]/40 border-2 border-white flex items-center justify-center text-xs font-bold text-[#0D7377]"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#1A2332]/60">
                <span className="font-semibold text-[#1A2332]">2,400+</span> crypto holders protected
              </p>
            </div>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0D7377]/10 border border-[#E2EEF0]">
              <Image
                src="/images/hero-illustration.png"
                alt="CharonPass dashboard preview"
                width={600}
                height={500}
                className="w-full object-cover"
                priority
              />
              {/* Floating card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-[#E2EEF0] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#0D7377]/10 flex items-center justify-center">
                    <span className="text-[#0D7377] text-lg">🛡️</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A2332]">Dead Man&apos;s Switch Active</p>
                    <p className="text-xs text-[#1A2332]/60">Next check-in due in 87 days</p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
