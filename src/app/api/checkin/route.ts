import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function POST() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const userId = session.user.id

  // Log check-in
  await prisma.checkIn.create({ data: { userId } })

  // Update dead man's switch
  const switchRecord = await prisma.deadManSwitch.findUnique({ where: { userId } })

  if (switchRecord) {
    const nextDeadline = new Date()
    nextDeadline.setDate(nextDeadline.getDate() + switchRecord.intervalDays)

    await prisma.deadManSwitch.update({
      where: { userId },
      data: {
        lastCheckIn: new Date(),
        nextDeadline,
        status: "active",
      },
    })
  }

  return NextResponse.json({ success: true, checkedInAt: new Date().toISOString() })
}
