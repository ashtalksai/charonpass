import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Shield, Lock, Eye, Heart } from "lucide-react"

export const metadata = {
  title: "About — CharonPass",
  description: "We believe no family should lose access to their loved one's digital legacy.",
}

const values = [
  { icon: Lock, title: "Privacy First", description: "We never see your keys, your assets, or your financial details. Your data belongs to you." },
  { icon: Eye, title: "Radical Transparency", description: "We're open about what we store, how we store it, and what happens with your data." },
  { icon: Heart, title: "Human-Centered", description: "Every design decision starts with a simple question: can a grieving non-technical family member do this?" },
  { icon: Shield, title: "Security by Default", description: "AES-256 encryption at rest, TLS in transit, GDPR compliant. Security is not a feature — it's the foundation." },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#F7FAFA] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-6">
                  <span className="text-xs font-semibold text-[#0D7377]">Our Mission</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1A2332] mb-6 leading-tight">
                  We believe no family should lose access to their loved one&apos;s digital legacy.
                </h1>
                <p className="text-lg text-[#1A2332]/60 leading-relaxed">
                  CharonPass was founded by crypto holders who experienced firsthand what happens when someone passes without leaving instructions. We built the tool we wished had existed.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2EEF0]">
                <Image
                  src="/images/about-visual.png"
                  alt="About CharonPass"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-8 text-center">The problem we&apos;re solving</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { stat: "$140B+", label: "in crypto permanently inaccessible", desc: "Not stolen — just locked away because no one had the instructions." },
                { stat: "73%", label: "of holders have no succession plan", desc: "Most people know they should do this. Almost none actually do." },
                { stat: "20-25%", label: "of all Bitcoin lost forever", desc: "Some estimates suggest a quarter of all Bitcoin is in wallets that will never be accessed again." },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-[#F7FAFA] border border-[#E2EEF0]">
                  <p className="font-display text-3xl font-bold text-[#0D7377] mb-1">{item.stat}</p>
                  <p className="text-sm font-semibold text-[#1A2332] mb-2">{item.label}</p>
                  <p className="text-xs text-[#1A2332]/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-[#1A2332]/70 leading-relaxed text-center max-w-2xl mx-auto">
              The solutions that existed were built for technically sophisticated, high-net-worth users. None of them were built for the average person with $20,000 in Bitcoin who just wants their spouse to be okay.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-[#F7FAFA] py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-4 text-center">Our approach</h2>
            <p className="text-lg text-[#1A2332]/60 text-center mb-12">Three principles guide everything we build.</p>
            <div className="space-y-6">
              {[
                {
                  title: "Non-custodial. Always.",
                  desc: "We never hold, see, or transmit your private keys or seed phrases. We are physically incapable of accessing your crypto. We are a documentation tool, not a custody service.",
                },
                {
                  title: "Plain English. Not tech.",
                  desc: "Everything in CharonPass is written for someone who doesn't know what a seed phrase is. Our guides use plain English instructions that any family member can follow on the worst day of their life.",
                },
                {
                  title: "Dead Man's Switch. Built in.",
                  desc: "The Dead Man's Switch is the core feature. It's the mechanism that ensures your guides actually reach your family at the right time, without requiring anyone to know your passwords.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-[#E2EEF0]">
                  <div className="h-10 w-10 rounded-full bg-[#0D7377] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#1A2332] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#1A2332]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-12 text-center">Our values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <div key={i} className="p-6 rounded-2xl bg-[#F7FAFA] border border-[#E2EEF0]">
                    <div className="h-12 w-12 rounded-xl bg-[#0D7377]/10 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-[#0D7377]" />
                    </div>
                    <h3 className="font-display font-bold text-[#1A2332] mb-2">{v.title}</h3>
                    <p className="text-sm text-[#1A2332]/60 leading-relaxed">{v.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-[#0D7377] py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <blockquote className="font-display text-2xl font-bold text-white mb-6 leading-relaxed">
              &ldquo;My uncle passed with $40,000 in Bitcoin. We never found the keys. That conversation — watching my aunt cry because she knew the money existed but couldn&apos;t reach it — is why CharonPass exists.&rdquo;
            </blockquote>
            <p className="text-white/70">— Founder, CharonPass</p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-4">Ready to protect your family?</h2>
            <p className="text-[#1A2332]/60 mb-8">Setup takes under 30 minutes. No credit card required for the free plan.</p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-[#0D7377] px-8 py-4 text-base font-bold text-white hover:bg-[#0D7377]/90 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
