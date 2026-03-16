import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { redirect } from "next/navigation"
import { Sidebar } from "@/components/layout/sidebar"
import { DashboardClient } from "@/components/dashboard/dashboard-client"

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user?.id) redirect("/login")

  const userId = session.user.id

  const [wallets, beneficiaries, guides, switchData, recentCheckIns] = await Promise.all([
    prisma.wallet.count({ where: { userId } }),
    prisma.beneficiary.count({ where: { userId } }),
    prisma.recoveryGuide.findMany({ where: { userId }, select: { status: true } }),
    prisma.deadManSwitch.findUnique({ where: { userId } }),
    prisma.checkIn.findMany({ where: { userId }, orderBy: { createdAt: "desc" }, take: 5 }),
  ])

  const completedGuides = guides.filter((g) => g.status === "complete").length

  const daysUntilTrigger = switchData
    ? Math.max(0, Math.ceil((new Date(switchData.nextDeadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : null

  return (
    <div className="flex h-screen bg-[#F7FAFA]">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-auto">
        <DashboardClient
          userName={session.user.name || "there"}
          stats={{
            wallets,
            beneficiaries,
            completedGuides,
            totalGuides: guides.length,
            daysUntilTrigger,
            switchStatus: switchData?.status || "not-set",
            lastCheckIn: switchData?.lastCheckIn?.toISOString() || null,
          }}
          recentCheckIns={recentCheckIns.map((c) => c.createdAt.toISOString())}
        />
      </main>
    </div>
  )
}
