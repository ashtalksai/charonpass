import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Shield, Lock, Eye, EyeOff, Database, Wifi, FileX, Key } from "lucide-react"

export const metadata = {
  title: "Security — CharonPass",
  description: "How CharonPass protects your data and your family.",
}

const doStore = [
  { icon: Database, title: "Wallet nicknames", desc: "The friendly name you give a wallet, like 'Main Bitcoin'." },
  { icon: FileX, title: "Recovery guide text", desc: "The plain-English instructions you write yourself." },
  { icon: Eye, title: "Beneficiary contact info", desc: "Name and email so we know who to notify." },
  { icon: Shield, title: "Account credentials", desc: "Email + bcrypt-hashed password. Your plain password is never stored." },
]

const neverStore = [
  { icon: Key, title: "Private keys", desc: "Never. Not encrypted, not hashed. Never transmitted to our servers." },
  { icon: FileX, title: "Seed phrases", desc: "Your 12 or 24 word recovery phrase never touches CharonPass." },
  { icon: Lock, title: "Wallet passwords or PINs", desc: "We store notes you write — we never ask for actual passwords." },
  { icon: Database, title: "Exact crypto balances", desc: "We only store a value range you choose, like '$10k-$50k'." },
]

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#0D7377] py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Security you can understand
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              No marketing speak. Here&apos;s exactly what we store, what we never store, and how we protect your data.
            </p>
          </div>
        </section>

        {/* What we store vs don't */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What we store */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Eye className="h-4 w-4 text-emerald-600" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#1A2332]">What we store</h2>
                </div>
                <div className="space-y-3">
                  {doStore.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                        <div className="h-9 w-9 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#1A2332]">{item.title}</p>
                          <p className="text-xs text-[#1A2332]/60 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* What we never store */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-8 rounded-lg bg-red-100 flex items-center justify-center">
                    <EyeOff className="h-4 w-4 text-red-600" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#1A2332]">What we NEVER store</h2>
                </div>
                <div className="space-y-3">
                  {neverStore.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                        <div className="h-9 w-9 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#1A2332]">{item.title}</p>
                          <p className="text-xs text-[#1A2332]/60 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Encryption details */}
        <section className="bg-[#F7FAFA] py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-12 text-center">Encryption & Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Lock, title: "AES-256 at rest", desc: "All stored data is encrypted with AES-256, the same standard used by banks and governments." },
                { icon: Wifi, title: "TLS 1.3 in transit", desc: "All data transmitted between your browser and our servers is encrypted with TLS 1.3." },
                { icon: Database, title: "PostgreSQL + backups", desc: "Data is stored in a managed PostgreSQL database with daily encrypted backups and point-in-time recovery." },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-[#E2EEF0] text-center">
                    <div className="h-12 w-12 rounded-xl bg-[#0D7377]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-5 w-5 text-[#0D7377]" />
                    </div>
                    <h3 className="font-display font-bold text-[#1A2332] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#1A2332]/60 leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* GDPR */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-8 text-center">GDPR Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Data portability", desc: "You can request a full export of all your data at any time from your account settings." },
                { title: "Right to deletion", desc: "You can permanently delete your account and all associated data. This is irreversible." },
                { title: "Data minimization", desc: "We only collect what we need to provide the service. We don't track behavior or sell data." },
                { title: "Breach notification", desc: "In the event of a data breach, we will notify affected users within 72 hours as required by GDPR." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-[#E2EEF0] bg-[#F7FAFA]">
                  <div className="h-8 w-8 rounded-full bg-[#0D7377] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A2332] mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-[#1A2332]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data retention */}
        <section className="bg-[#F7FAFA] py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-[#1A2332] mb-8 text-center">Data Retention Policy</h2>
            <div className="bg-white rounded-2xl border border-[#E2EEF0] overflow-hidden">
              {[
                { category: "Account data", retention: "Until you delete your account" },
                { category: "Recovery guides", retention: "Until you delete them or close your account" },
                { category: "Check-in logs", retention: "12 months rolling window" },
                { category: "Payment records", retention: "7 years (legal requirement)" },
                { category: "Server logs", retention: "30 days" },
              ].map((row, i) => (
                <div key={i} className={`flex items-center justify-between px-6 py-4 ${i < 4 ? "border-b border-[#E2EEF0]" : ""}`}>
                  <span className="text-sm font-medium text-[#1A2332]">{row.category}</span>
                  <span className="text-sm text-[#1A2332]/60">{row.retention}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
