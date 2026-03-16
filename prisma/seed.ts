import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash("demo1234", 12)

  const user = await prisma.user.upsert({
    where: { email: "alex@example.com" },
    update: {},
    create: {
      name: "Alex Thompson",
      email: "alex@example.com",
      password: hashedPassword,
      plan: "family",
    },
  })

  // Create wallets
  await prisma.wallet.createMany({
    data: [
      {
        userId: user.id,
        nickname: "Main Coinbase",
        platform: "Coinbase",
        valueRange: "$10k-$50k",
        notes: "Primary exchange account, used for regular purchases",
      },
      {
        userId: user.id,
        nickname: "MetaMask DeFi",
        platform: "MetaMask",
        valueRange: "$5k-$10k",
        notes: "Used for DeFi protocols and NFTs",
      },
      {
        userId: user.id,
        nickname: "Cold Storage",
        platform: "Ledger",
        valueRange: "$100k+",
        notes: "Long-term Bitcoin and Ethereum storage",
      },
    ],
    skipDuplicates: true,
  })

  // Create beneficiaries
  await prisma.beneficiary.createMany({
    data: [
      {
        userId: user.id,
        name: "Sarah Thompson",
        email: "sarah@example.com",
        relationship: "Spouse",
        phone: "+1-555-0101",
      },
      {
        userId: user.id,
        name: "Michael Thompson",
        email: "michael@example.com",
        relationship: "Child",
        phone: "+1-555-0102",
      },
    ],
    skipDuplicates: true,
  })

  // Create dead man's switch
  const nextDeadline = new Date()
  nextDeadline.setDate(nextDeadline.getDate() + 90)

  await prisma.deadManSwitch.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      intervalDays: 90,
      lastCheckIn: new Date(),
      nextDeadline,
      status: "active",
    },
  })

  // Create a check-in record
  await prisma.checkIn.create({
    data: { userId: user.id },
  })

  // Create a sample recovery guide
  await prisma.recoveryGuide.create({
    data: {
      userId: user.id,
      title: "How to access my Coinbase account",
      content: `# Accessing My Coinbase Account

## Step 1: Go to coinbase.com
Open a web browser and navigate to www.coinbase.com

## Step 2: Sign In
Click the "Sign In" button in the top right corner. Use the email address: alex@example.com

## Step 3: Two-Factor Authentication
You'll need access to my phone (iPhone 14 Pro, kept in the home office safe). The 2FA code will appear in the Google Authenticator app.

## Step 4: What you'll find
This account holds approximately $25,000 in Bitcoin and Ethereum. You can sell or transfer funds to your own bank account using the "Cash Out" feature.

## Need Help?
Coinbase customer support: support.coinbase.com
Phone: 1-888-908-7930

The account recovery email is: alex.recovery@gmail.com (password in the family password manager)`,
      status: "complete",
    },
  })

  console.log("Seed completed. Demo user: alex@example.com / demo1234")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
