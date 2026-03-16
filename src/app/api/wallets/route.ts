import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const wallets = await prisma.wallet.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json({ wallets })
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { nickname, platform, valueRange, notes } = await request.json()

  if (!nickname || !platform || !valueRange) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const wallet = await prisma.wallet.create({
    data: {
      userId: session.user.id,
      nickname,
      platform,
      valueRange,
      notes,
    },
  })

  return NextResponse.json({ wallet }, { status: 201 })
}
