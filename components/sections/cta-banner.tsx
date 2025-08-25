"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Clock } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { formatWhatsAppLink } from "@/lib/utils"

export function CTABanner() {
  const whatsappLink = formatWhatsAppLink(
    siteConfig.whatsappNumber,
    "Hello! I'd like to speak with an advisor about FluxCapital's services.",
  )

  return (
    <section className="py-16 bg-[var(--fc-gold-500)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center space-x-2 text-[var(--fc-navy-900)]">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Quick Response Guarantee</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fc-navy-900)]">
            Speak with an Advisor Within 24 Hours
          </h2>

          <p className="text-lg text-[var(--fc-navy-900)]/80 max-w-2xl mx-auto">
            Get personalized guidance tailored to your investment goals and risk profile. No obligation, just expert
            insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-[var(--fc-navy-900)] hover:bg-[var(--fc-navy-800)] text-[var(--fc-paper)] px-8 py-6 text-lg"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 mr-2" />
                Start WhatsApp Chat
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-[var(--fc-navy-900)] text-[var(--fc-navy-900)] hover:bg-[var(--fc-navy-900)] hover:text-[var(--fc-paper)] px-8 py-6 text-lg bg-transparent"
            >
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>

          <p className="text-sm text-[var(--fc-navy-900)]/60">
            Available {siteConfig.businessHours} • Response within 24 hours guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  )
}
