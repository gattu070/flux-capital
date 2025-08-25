import type { Metadata } from "next"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star, Phone } from "lucide-react"
import { generateMetadata, formatWhatsAppLink } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"
import Link from "next/link"

export const metadata: Metadata = generateMetadata(
  "Engagement Models & Pricing",
  "Flexible engagement models including retainer, project-based, and premium advisory services. Transparent pricing with no hidden fees.",
  "/pricing",
)

const pricingPlans = [
  {
    name: "Retainer Advisory",
    description: "Ongoing advisory relationship with regular communication and support",
    price: "₹25,000 - ₹75,000",
    period: "per month",
    popular: false,
    features: [
      "Monthly strategy review meetings",
      "WhatsApp support during market hours",
      "Weekly market analysis reports",
      "Position sizing and risk guidance",
      "Email support within 24 hours",
      "Access to research library",
    ],
    ideal: "Active investors seeking regular guidance and market insights",
    commitment: "Minimum 3-month engagement",
  },
  {
    name: "Project-Based",
    description: "Specific advisory projects with defined scope and deliverables",
    price: "₹50,000 - ₹2,00,000",
    period: "per project",
    popular: true,
    features: [
      "Portfolio review and optimization",
      "Investment strategy development",
      "Risk assessment and mitigation plan",
      "Detailed written recommendations",
      "Implementation guidance",
      "3-month follow-up support",
    ],
    ideal: "Investors with specific needs or one-time advisory requirements",
    commitment: "Project duration: 2-8 weeks",
  },
  {
    name: "Premium Advisory",
    description: "Comprehensive wealth management for high-net-worth clients",
    price: "₹1,00,000+",
    period: "per quarter",
    popular: false,
    features: [
      "Dedicated advisor relationship",
      "Comprehensive portfolio management",
      "Tax optimization strategies",
      "Estate planning coordination",
      "Priority support and communication",
      "Quarterly strategy review meetings",
      "Custom research and analysis",
      "Family office coordination",
    ],
    ideal: "High-net-worth individuals and families seeking comprehensive wealth management",
    commitment: "Minimum 1-year engagement",
  },
]

export default function PricingPage() {
  const whatsappLink = formatWhatsAppLink(
    siteConfig.whatsappNumber,
    "Hello! I'd like to discuss FluxCapital's pricing and engagement models.",
  )

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--fc-navy-900)] to-[var(--fc-navy-800)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fc-paper)]">
              Engagement <span className="text-[var(--fc-gold-400)]">Models</span>
            </h1>
            <p className="text-xl text-[var(--fc-paper)]/80 leading-relaxed">
              Flexible advisory arrangements designed to meet your specific needs and investment objectives. Transparent
              pricing with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative border-[var(--fc-gold-500)]/20 hover:border-[var(--fc-gold-500)]/40 transition-colors ${
                  plan.popular ? "ring-2 ring-[var(--fc-gold-500)] ring-opacity-50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[var(--fc-gold-500)] text-[var(--fc-navy-900)] px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <CardTitle className="font-heading text-2xl text-[var(--fc-navy-900)]">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-[var(--fc-navy-900)]">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[var(--fc-navy-900)] mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[var(--fc-gold-500)]/20">
                    <div>
                      <h4 className="font-semibold text-[var(--fc-navy-900)] mb-1">Ideal for:</h4>
                      <p className="text-sm text-muted-foreground">{plan.ideal}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--fc-navy-900)] mb-1">Commitment:</h4>
                      <p className="text-sm text-muted-foreground">{plan.commitment}</p>
                    </div>
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)]"
                        : "bg-[var(--fc-navy-900)] hover:bg-[var(--fc-navy-800)] text-[var(--fc-paper)]"
                    }`}
                    asChild
                  >
                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4 mr-2" />
                      Discuss This Plan
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-[var(--fc-paper)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-[var(--fc-navy-900)] mb-6">Pricing Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our pricing reflects the value of disciplined, research-backed advisory services. We believe in
                transparent, fair pricing that aligns our interests with your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-[var(--fc-gold-500)]/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-[var(--fc-navy-900)]">What's Included</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">No setup or onboarding fees</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">All communication and support included</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Access to research and analysis tools</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Regular strategy reviews and adjustments</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[var(--fc-gold-500)]/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-[var(--fc-navy-900)]">Payment Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Monthly or quarterly billing options</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">30-day notice for plan changes</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Secure payment processing</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Detailed invoicing and reporting</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--fc-navy-900)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl font-bold text-[var(--fc-paper)]">Ready to Get Started?</h2>
            <p className="text-lg text-[var(--fc-paper)]/80">
              Schedule a consultation to discuss which engagement model best fits your needs and objectives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)]"
              >
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[var(--fc-gold-500)] text-[var(--fc-gold-400)] hover:bg-[var(--fc-gold-500)] hover:text-[var(--fc-navy-900)] bg-transparent"
              >
                <Link href="/contact">Schedule Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
