import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  // In MVP: log to console. In production: send via email service.
  console.log("Contact form submission:", { name, email, subject, message, timestamp: new Date().toISOString() })

  return NextResponse.json({ success: true })
}
