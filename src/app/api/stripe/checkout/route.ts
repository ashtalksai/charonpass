import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2026-02-25.clover",
})

const PRICE_IDS: Record<string, string> = {
  starter: "price_starter_placeholder",
  family: "price_family_placeholder",
  portfolio: "price_portfolio_placeholder",
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { plan, annual } = await request.json()

  if (!plan || !PRICE_IDS[plan]) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 })
  }

  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000"

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    customer_email: session.user.email || undefined,
    line_items: [
      {
        price: PRICE_IDS[plan],
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/dashboard?upgrade=success`,
    cancel_url: `${baseUrl}/pricing`,
    metadata: {
      userId: session.user.id,
      plan,
      annual: annual ? "true" : "false",
    },
  })

  return NextResponse.json({ url: checkoutSession.url })
}
