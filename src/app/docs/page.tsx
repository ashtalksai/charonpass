import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FileText, TrendingUp, Megaphone, Palette, Presentation, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Docs — CharonPass",
}

const sections = [
  {
    icon: FileText,
    title: "Research",
    description: "Planner's research document — market analysis, competitor landscape, and customer discovery findings.",
    href: "#",
    external: false,
    status: "internal",
  },
  {
    icon: TrendingUp,
    title: "GTM Plan",
    description: "Go-to-market strategy, channel prioritization, launch timeline, and growth targets.",
    href: "#",
    external: false,
    status: "coming-soon",
  },
  {
    icon: Megaphone,
    title: "Marketing Plan",
    description: "Content strategy, SEO approach, community building playbook, and paid channel tests.",
    href: "#",
    external: false,
    status: "coming-soon",
  },
  {
    icon: Palette,
    title: "Brand Spec",
    description: "Designer's brand specification — colors, typography, logo usage, tone of voice, and design system.",
    href: "https://docs.google.com/document/d/1BolMhH8I2E0afpKS3VvaZpq6eeAsNnreqYlZ5J-srQM/edit",
    external: true,
    status: "live",
  },
  {
    icon: Presentation,
    title: "Pitch Deck",
    description: "8-slide investor pitch deck covering problem, solution, market, business model, traction, and ask.",
    href: "/deck",
    external: false,
    status: "live",
  },
]

const statusBadge = {
  live: { label: "Live", className: "bg-emerald-50 text-emerald-600" },
  internal: { label: "Internal", className: "bg-amber-50 text-amber-600" },
  "coming-soon": { label: "Coming soon", className: "bg-[#F7FAFA] text-[#1A2332]/50" },
}

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#F7FAFA] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7377]/10 px-4 py-1.5 mb-4">
                <span className="text-xs font-semibold text-[#0D7377]">Internal docs</span>
              </div>
              <h1 className="font-display text-4xl font-bold text-[#1A2332] mb-3">CharonPass Docs Hub</h1>
              <p className="text-lg text-[#1A2332]/60">
                Strategy documents, brand resources, and planning materials for the CharonPass team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sections.map((section, i) => {
                const Icon = section.icon
                const badge = statusBadge[section.status as keyof typeof statusBadge]
                const content = (
                  <div className={`bg-white rounded-2xl p-6 border border-[#E2EEF0] hover:border-[#0D7377]/30 hover:shadow-md transition-all group h-full flex flex-col ${section.status !== "coming-soon" ? "cursor-pointer" : "opacity-70 cursor-default"}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-12 w-12 rounded-xl bg-[#0D7377]/10 flex items-center justify-center group-hover:bg-[#0D7377]/15 transition-colors">
                        <Icon className="h-5 w-5 text-[#0D7377]" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badge.className}`}>
                          {badge.label}
                        </span>
                        {section.external && <ExternalLink className="h-3.5 w-3.5 text-[#1A2332]/30" />}
                      </div>
                    </div>
                    <h2 className="font-display text-lg font-bold text-[#1A2332] mb-2">{section.title}</h2>
                    <p className="text-sm text-[#1A2332]/60 leading-relaxed flex-1">{section.description}</p>
                    {section.status !== "coming-soon" && (
                      <p className="text-xs text-[#0D7377] font-medium mt-4 group-hover:underline">
                        {section.external ? "Open in Google Docs →" : "View →"}
                      </p>
                    )}
                  </div>
                )

                if (section.status === "coming-soon") {
                  return <div key={i}>{content}</div>
                }

                if (section.external) {
                  return (
                    <a key={i} href={section.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  )
                }

                return (
                  <Link key={i} href={section.href}>
                    {content}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
