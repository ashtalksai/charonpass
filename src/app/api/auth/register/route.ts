import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const nextDeadline = new Date()
    nextDeadline.setDate(nextDeadline.getDate() + 90)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        deadManSwitch: {
          create: {
            intervalDays: 90,
            lastCheckIn: new Date(),
            nextDeadline,
            status: "active",
          },
        },
      },
      select: { id: true, email: true, name: true },
    })

    return NextResponse.json({ user }, { status: 201 })
  } catch (error) {
    console.error("Register error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
