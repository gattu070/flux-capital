"use client"

import Link from "next/link"
import { Phone, Mail, Instagram } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { formatWhatsAppLink } from "@/lib/utils"

export function TopBar() {
  const whatsappLink = formatWhatsAppLink(
    siteConfig.whatsappNumber,
    "Hello! I'm interested in FluxCapital's advisory services.",
  )

  return (
    <div className="bg-[var(--fc-navy-900)] text-[var(--fc-paper)] py-2 px-4">
      <div className="container mx-auto flex items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 hover:text-[var(--fc-gold-400)] transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">{siteConfig.email}</span>
          </Link>
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[var(--fc-gold-400)] transition-colors"
          >
            <Instagram className="h-4 w-4" />
            <span className="hidden sm:inline">Follow Us</span>
          </Link>
        </div>

        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[var(--fc-gold-500)] text-[var(--fc-navy-900)] px-3 py-1 rounded-full text-xs font-medium hover:bg-[var(--fc-gold-400)] transition-colors"
        >
          <Phone className="h-3 w-3" />
          <span>Chat on WhatsApp</span>
        </Link>
      </div>
    </div>
  )
}
