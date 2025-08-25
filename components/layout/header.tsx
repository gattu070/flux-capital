"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/lib/site-config"
import { formatWhatsAppLink } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappLink = formatWhatsAppLink(
    siteConfig.whatsappNumber,
    "Hello! I'd like to learn more about FluxCapital's services.",
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--fc-gold-500)]/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/fluxcapital-logo.png"
            alt="FluxCapital"
            width={180}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-[var(--fc-gold-500)] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)]"
          >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Image src="/fluxcapital-logo.png" alt="FluxCapital" width={160} height={36} className="h-7 w-auto" />
              </Link>

              <nav className="flex flex-col space-y-4">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-[var(--fc-gold-500)] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col space-y-3 pt-6 border-t">
                <Button variant="outline" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Us
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)]"
                >
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
