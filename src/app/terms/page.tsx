import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Terms of Service — CharonPass",
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <h1 className="font-display text-4xl font-bold text-[#1A2332] mb-3">Terms of Service</h1>
            <p className="text-[#1A2332]/60">Last updated: March 1, 2026</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-10">
            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">1. Agreement to Terms</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                By accessing or using CharonPass (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. These terms apply to all users of the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">2. Description of Service</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                CharonPass is a digital estate planning platform that allows users to document their cryptocurrency holdings and create plain-English recovery guides for their beneficiaries. CharonPass operates a &ldquo;Dead Man&apos;s Switch&rdquo; that sends recovery guides to designated beneficiaries after a period of user inactivity.
              </p>
              <p className="text-[#1A2332]/70 leading-relaxed mt-3">
                <strong>CharonPass is not a custodial service.</strong> We do not hold, store, control, or have access to any cryptocurrency, private keys, seed phrases, or wallet credentials. We are a documentation and communication tool only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">3. User Accounts</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                You must create an account to use the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years old to use the Service. You must provide accurate and complete information when creating your account.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">4. Subscription and Payments</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                CharonPass offers free and paid subscription plans. Paid subscriptions are billed monthly or annually in advance. You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. We offer a 30-day money-back guarantee on your first payment. Payments are processed by Stripe and subject to Stripe&apos;s terms of service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">5. Acceptable Use</h2>
              <p className="text-[#1A2332]/70 leading-relaxed mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-[#1A2332]/70">
                <li>Use the Service for any unlawful purpose</li>
                <li>Provide false or misleading information</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Use the Service to harass, harm, or defraud others</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use automated means to access the Service without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">6. Dead Man&apos;s Switch</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                The Dead Man&apos;s Switch feature sends your recovery guides to designated beneficiaries after a period of inactivity. You are solely responsible for (a) ensuring your chosen inactivity period is appropriate for your circumstances, (b) keeping your contact information and beneficiary information current, and (c) checking in regularly to prevent unintended triggers. CharonPass is not liable for any consequences of an unintended or missed trigger.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">7. Disclaimer of Warranties</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND. CHARONPASS DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT YOUR RECOVERY GUIDES WILL BE SUCCESSFULLY DELIVERED TO YOUR BENEFICIARIES. THIS IS AN MVP PRODUCT AND YOU SHOULD MAINTAIN BACKUP COPIES OF ALL RECOVERY GUIDES.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">8. Limitation of Liability</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CHARONPASS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR CRYPTOCURRENCY, ARISING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">9. Indemnification</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                You agree to indemnify and hold CharonPass harmless from any claims, damages, or expenses arising from your use of the Service, violation of these Terms, or violation of any rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">10. Termination</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                We may suspend or terminate your account if you violate these Terms. You may delete your account at any time. Upon termination, your data will be deleted within 30 days, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">11. Governing Law</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which CharonPass is incorporated, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">12. Changes to Terms</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                We may update these Terms from time to time. We will notify you of material changes via email. Continued use of the Service after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-[#1A2332] mb-3">13. Contact</h2>
              <p className="text-[#1A2332]/70 leading-relaxed">
                For questions about these Terms, contact us at: <a href="mailto:hello@charonpass.com" className="text-[#0D7377] hover:underline">hello@charonpass.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
