import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Instagram, MapPin, Clock } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { formatWhatsAppLink } from "@/lib/utils"

export function Footer() {
  const whatsappLink = formatWhatsAppLink(siteConfig.whatsappNumber)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--fc-navy-900)] text-[var(--fc-paper)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/fluxcapital-logo.png"
                alt="FluxCapital"
                width={180}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-[var(--fc-paper)]/80 leading-relaxed">{siteConfig.description}</p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-medium">Values:</span>
              <span className="text-[var(--fc-gold-400)]">{siteConfig.values.join(" • ")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-[var(--fc-gold-400)]">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.navigation.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--fc-paper)]/80 hover:text-[var(--fc-gold-400)] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-[var(--fc-gold-400)]">Services</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.services.slice(0, 5).map((service) => (
                <span key={service.name} className="text-sm text-[var(--fc-paper)]/80">
                  {service.name}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold text-[var(--fc-gold-400)]">Contact</h3>
            <div className="space-y-3">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-center space-x-2 text-sm text-[var(--fc-paper)]/80 hover:text-[var(--fc-gold-400)] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{siteConfig.email}</span>
              </Link>

              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-[var(--fc-paper)]/80 hover:text-[var(--fc-gold-400)] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp</span>
              </Link>

              <Link
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-[var(--fc-paper)]/80 hover:text-[var(--fc-gold-400)] transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>Follow Us</span>
              </Link>

              <div className="flex items-start space-x-2 text-sm text-[var(--fc-paper)]/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </div>

              <div className="flex items-start space-x-2 text-sm text-[var(--fc-paper)]/80">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.businessHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--fc-gold-500)]/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-[var(--fc-paper)]/60">
              © {currentYear} FluxCapital. All rights reserved. | Founded by{" "}
              <span className="text-[var(--fc-gold-400)]">{siteConfig.owner.name}</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/legal/privacy"
                className="text-[var(--fc-paper)]/60 hover:text-[var(--fc-gold-400)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms"
                className="text-[var(--fc-paper)]/60 hover:text-[var(--fc-gold-400)] transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/legal/disclaimer"
                className="text-[var(--fc-paper)]/60 hover:text-[var(--fc-gold-400)] transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
