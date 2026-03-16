import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Privacy Policy — CharonPass",
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <h1 className="font-display text-4xl font-bold text-[#1A2332] mb-3">Privacy Policy</h1>
            <p className="text-[#1A2332]/60">Last updated: March 1, 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-10">
            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">1. Introduction</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                CharonPass (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the CharonPass website and platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. We take your privacy seriously and are committed to protecting your personal data in compliance with the General Data Protection Regulation (GDPR) and other applicable privacy laws.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">2. Information We Collect</h2>
              <p className="text-[#1A2332]/70 leading-relaxed mb-3">We collect information you provide directly to us:</p>
              <ul className="list-disc list-inside space-y-2 text-[#1A2332]/70">
                <li><strong>Account information:</strong> Name, email address, and hashed password when you register.</li>
                <li><strong>Wallet information:</strong> Nicknames you assign to wallets and approximate value ranges you choose. We never collect private keys, seed phrases, or actual wallet credentials.</li>
                <li><strong>Recovery guides:</strong> The plain-English instructions you write for your beneficiaries.</li>
                <li><strong>Beneficiary information:</strong> Names, email addresses, and relationship descriptors of people you designate.</li>
                <li><strong>Check-in data:</strong> Timestamps when you check in to reset your Dead Man&apos;s Switch.</li>
                <li><strong>Payment information:</strong> Processed by Stripe. We do not store full card numbers.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">3. What We Never Collect</h2>
              <p className="text-[#1A2332]/70 leading-relaxed mb-3">CharonPass is designed to be non-custodial. We explicitly never collect or store:</p>
              <ul className="list-disc list-inside space-y-2 text-[#1A2332]/70">
                <li>Private keys or seed phrases</li>
                <li>Wallet passwords or PINs</li>
                <li>Exact cryptocurrency balances</li>
                <li>Any information that would allow us to access your cryptocurrency</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">4. How We Use Your Information</h2>
              <p className="text-[#1A2332]/70 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-[#1A2332]/70">
                <li>Provide, operate, and maintain the CharonPass service</li>
                <li>Monitor your Dead Man&apos;s Switch inactivity period and send trigger notifications</li>
                <li>Send service-related emails (check-in reminders, account notifications)</li>
                <li>Process payments via Stripe</li>
                <li>Respond to customer support inquiries</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-[#1A2332]/70 leading-relaxed mt-3">
                We do not sell your personal data. We do not use your data for advertising. We do not share your data with third parties except as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">5. Legal Basis for Processing (GDPR)</h2>
              <p className="text-[#1A2332]/70 leading-relaxed mb-3">For users in the European Economic Area, we process your data on the following legal bases:</p>
              <ul className="list-disc list-inside space-y-2 text-[#1A2332]/70">
                <li><strong>Contract performance:</strong> Processing necessary to provide the service you&apos;ve signed up for.</li>
                <li><strong>Legitimate interests:</strong> Fraud prevention, service security, and improving our product.</li>
                <li><strong>Legal obligation:</strong> Retaining payment records as required by law.</li>
                <li><strong>Consent:</strong> Marketing communications (you can withdraw consent at any time).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">6. Data Retention</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                We retain your account data for as long as your account is active. Check-in logs are retained for 12 months. Payment records are retained for 7 years as required by law. Server logs are retained for 30 days. You may request deletion of your data at any time by emailing hello@charonpass.com or using the account deletion feature.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">7. Your Rights Under GDPR</h2>
              <p className="text-[#1A2332]/70 leading-relaxed mb-3">If you are located in the EU/EEA, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 text-[#1A2332]/70">
                <li><strong>Access:</strong> Request a copy of your personal data.</li>
                <li><strong>Rectification:</strong> Correct inaccurate personal data.</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data.</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format.</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
                <li><strong>Restriction:</strong> Request restricted processing in certain circumstances.</li>
              </ul>
              <p className="text-[#1A2332]/70 mt-3">To exercise these rights, email us at hello@charonpass.com.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">8. Data Security</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 encryption in transit, regular security assessments, and access controls. In the event of a data breach affecting your personal data, we will notify you within 72 hours as required by GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">9. Cookies</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                We use strictly necessary cookies for session management and authentication. We do not use analytics, advertising, or tracking cookies. You cannot opt out of strictly necessary cookies as they are required for the service to function.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">10. Third-Party Services</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                We use the following third-party services: Stripe (payment processing), managed PostgreSQL hosting (database storage), and Vercel/similar (application hosting). Each of these providers has their own privacy policy and data processing agreements in place with us.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">11. Contact Us</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                For privacy-related questions, data access requests, or complaints, contact us at: <a href="mailto:hello@charonpass.com" className="text-[#0D7377] hover:underline">hello@charonpass.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
