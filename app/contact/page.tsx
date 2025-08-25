import type { Metadata } from "next"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { ContactForm } from "@/components/forms/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Instagram, MapPin, Clock, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { generateMetadata, formatWhatsAppLink } from "@/lib/utils"
import Link from "next/link"

export const metadata: Metadata = generateMetadata(
  "Contact FluxCapital",
  "Get in touch with FluxCapital for investment advisory services. Contact us via WhatsApp, email, or schedule a consultation call.",
  "/contact",
)

export default function ContactPage() {
  const whatsappLink = formatWhatsAppLink(
    siteConfig.whatsappNumber,
    "Hello! I'd like to discuss FluxCapital's advisory services and schedule a consultation.",
  )

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--fc-navy-900)] to-[var(--fc-navy-800)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fc-paper)]">
              Contact <span className="text-[var(--fc-gold-400)]">FluxCapital</span>
            </h1>
            <p className="text-xl text-[var(--fc-paper)]/80 leading-relaxed">
              Ready to start your investment journey? Get in touch with our team for personalized advisory services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-[var(--fc-navy-900)] mb-6">Get in Touch</h2>
              <p className="text-xl text-muted-foreground">
                Choose your preferred way to connect with us. We respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* WhatsApp */}
              <Card className="border-[var(--fc-gold-500)]/20 hover:border-[var(--fc-gold-500)]/40 transition-colors text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[var(--fc-gold-500)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-[var(--fc-gold-600)]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--fc-navy-900)] mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground mb-4">
                    Quick responses and real-time communication for urgent queries.
                  </p>
                  <Button
                    asChild
                    className="bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)]"
                  >
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Start Chat
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-[var(--fc-gold-500)]/20 hover:border-[var(--fc-gold-500)]/40 transition-colors text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[var(--fc-gold-500)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-[var(--fc-gold-600)]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--fc-navy-900)] mb-2">Email</h3>
                  <p className="text-muted-foreground mb-4">
                    Detailed inquiries and formal communication for comprehensive discussions.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href={`mailto:${siteConfig.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Social */}
              <Card className="border-[var(--fc-gold-500)]/20 hover:border-[var(--fc-gold-500)]/40 transition-colors text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[var(--fc-gold-500)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Instagram className="h-8 w-8 text-[var(--fc-gold-600)]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--fc-navy-900)] mb-2">Social Media</h3>
                  <p className="text-muted-foreground mb-4">
                    Follow us for market insights, tips, and company updates.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4 mr-2" />
                      Follow Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-[var(--fc-gold-500)]/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-[var(--fc-navy-900)] mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Mail className="h-5 w-5 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-[var(--fc-navy-900)]">Email</p>
                          <Link
                            href={`mailto:${siteConfig.email}`}
                            className="text-muted-foreground hover:text-[var(--fc-gold-600)] transition-colors"
                          >
                            {siteConfig.email}
                          </Link>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-[var(--fc-navy-900)]">WhatsApp</p>
                          <Link
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-[var(--fc-gold-600)] transition-colors"
                          >
                            Quick Response Available
                          </Link>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-[var(--fc-navy-900)]">Location</p>
                          <p className="text-muted-foreground">{siteConfig.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-[var(--fc-navy-900)]">Business Hours</p>
                          <p className="text-muted-foreground">{siteConfig.businessHours}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[var(--fc-gold-500)]/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-[var(--fc-navy-900)] mb-4">Response Time</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">WhatsApp</span>
                        <span className="text-[var(--fc-gold-600)] font-semibold">Within 2 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Email</span>
                        <span className="text-[var(--fc-gold-600)] font-semibold">Within 24 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Contact Form</span>
                        <span className="text-[var(--fc-gold-600)] font-semibold">Within 24 hours</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * During business hours. Weekend responses may take longer.
                    </p>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="border-[var(--fc-gold-500)]/20">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-[var(--fc-navy-900)] mb-4">Location</h3>
                    <div className="aspect-video bg-gradient-to-br from-[var(--fc-gold-500)]/10 to-[var(--fc-navy-900)]/10 rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <MapPin className="h-8 w-8 text-[var(--fc-gold-600)] mx-auto" />
                        <p className="text-muted-foreground font-medium">Mumbai, Maharashtra</p>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer">
                            View on Maps
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
