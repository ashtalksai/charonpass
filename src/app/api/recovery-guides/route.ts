import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const guides = await prisma.recoveryGuide.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
  })

  return NextResponse.json({ guides })
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { title, content, walletId, status } = await request.json()

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 })
  }

  const guide = await prisma.recoveryGuide.create({
    data: {
      userId: session.user.id,
      title,
      content: content || "",
      walletId,
      status: status || "draft",
    },
  })

  return NextResponse.json({ guide }, { status: 201 })
}

export async function PATCH(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id, title, content, status } = await request.json()

  if (!id) {
    return NextResponse.json({ error: "Guide ID is required" }, { status: 400 })
  }

  const guide = await prisma.recoveryGuide.update({
    where: { id, userId: session.user.id },
    data: {
      ...(title && { title }),
      ...(content !== undefined && { content }),
      ...(status && { status }),
    },
  })

  return NextResponse.json({ guide })
}
