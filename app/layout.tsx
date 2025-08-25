import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"
import { PageWrapper } from "@/components/layout/page-wrapper"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "trade advisory",
    "investment consulting",
    "portfolio management",
    "risk management",
    "financial advisory",
    "equity trading",
    "derivatives",
    "Mumbai",
    "India",
  ],
  authors: [
    {
      name: siteConfig.owner.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.owner.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: `@${siteConfig.owner.name.replace(" ", "").toLowerCase()}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  )
}
