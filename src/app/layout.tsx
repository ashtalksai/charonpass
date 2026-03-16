import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Instrument_Sans, DM_Mono } from "next/font/google"
import "./globals.css"
import { SessionProvider } from "next-auth/react"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://charonpass.ashketing.com"),
  title: "CharonPass — Your digital estate, safely delivered.",
  description:
    "CharonPass guides your loved ones through accessing your digital assets after you're gone — without ever touching your private keys.",
  keywords: ["crypto inheritance", "digital estate", "dead man's switch", "cryptocurrency", "estate planning"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CharonPass — Your digital estate, safely delivered.",
    description: "Crypto inheritance for non-technical wallet holders.",
    type: "website",
    url: "https://charonpass.ashketing.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CharonPass — Your digital estate, safely delivered.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CharonPass — Your digital estate, safely delivered.",
    description: "Crypto inheritance for non-technical wallet holders.",
    images: ["/images/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${instrumentSans.variable} ${dmMono.variable}`}
    >
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
