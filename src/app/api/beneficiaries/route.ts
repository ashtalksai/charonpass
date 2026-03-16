import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const beneficiaries = await prisma.beneficiary.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json({ beneficiaries })
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { name, email, relationship, phone } = await request.json()

  if (!name || !email || !relationship) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const beneficiary = await prisma.beneficiary.create({
    data: {
      userId: session.user.id,
      name,
      email,
      relationship,
      phone,
    },
  })

  return NextResponse.json({ beneficiary }, { status: 201 })
}
