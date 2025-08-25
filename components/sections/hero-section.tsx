"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { formatWhatsAppLink } from "@/lib/utils"

export function HeroSection() {
  const whatsappLink = formatWhatsAppLink(
    siteConfig.whatsappNumber,
    "Hello! I'd like to learn more about FluxCapital's advisory services.",
  )

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--fc-navy-900)] via-[var(--fc-navy-800)] to-[var(--fc-navy-900)]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--fc-navy-900)]/50 to-transparent" />

      {/* Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <div className="w-96 h-96 bg-[var(--fc-gold-500)] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--fc-paper)] leading-tight">
              More Than Investment, <span className="text-[var(--fc-gold-400)] block md:inline">It's Momentum.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--fc-paper)]/80 max-w-3xl mx-auto leading-relaxed">
              FluxCapital is a discipline-first trade advisory guiding thoughtful investors with research-backed
              strategy, risk control, and clear communication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)] font-semibold px-8 py-6 text-lg group"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 mr-2" />
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-[var(--fc-gold-500)] text-[var(--fc-gold-400)] hover:bg-[var(--fc-gold-500)] hover:text-[var(--fc-navy-900)] px-8 py-6 text-lg bg-transparent"
            >
              <Link href="/contact">
                <MessageCircle className="h-5 w-5 mr-2" />
                Book a Call
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-[var(--fc-paper)]/60 max-w-2xl mx-auto"
          >
            Built on discipline, research, and risk control.
            <Link href="/legal/disclaimer" className="text-[var(--fc-gold-400)] hover:underline ml-1">
              View our risk disclosure
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
