import type { Metadata } from "next"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, PieChart, Shield, Search, GraduationCap, Users, CheckCircle, ArrowRight } from "lucide-react"
import { generateMetadata } from "@/lib/utils"
import Link from "next/link"

export const metadata: Metadata = generateMetadata(
  "Services & Capabilities",
  "Comprehensive trade advisory services including portfolio strategy, risk management, research insights, and training programs.",
  "/services",
)

const services = [
  {
    icon: TrendingUp,
    title: "Trade Consultancy & Advisory",
    description: "Expert guidance on equity and derivative trading strategies with disciplined risk management.",
    whoItsFor: "Active traders and investors seeking systematic trading approaches",
    approach: "Research-driven analysis combined with proven risk management techniques",
    deliverables: [
      "Weekly market analysis and trade recommendations",
      "Position sizing guidance based on risk tolerance",
      "Entry and exit strategy development",
      "Real-time trade alerts via WhatsApp",
      "Monthly performance review and strategy adjustment",
    ],
    pricing: "Starting from ₹25,000/month",
  },
  {
    icon: PieChart,
    title: "Portfolio Strategy & Construction",
    description: "Comprehensive portfolio construction and optimization tailored to your risk profile and goals.",
    whoItsFor: "Long-term investors building diversified investment portfolios",
    approach: "Asset allocation based on modern portfolio theory and risk-return optimization",
    deliverables: [
      "Customized asset allocation strategy",
      "Portfolio rebalancing recommendations",
      "Risk assessment and optimization",
      "Quarterly portfolio review meetings",
      "Tax-efficient investment strategies",
    ],
    pricing: "Starting from ₹50,000/quarter",
  },
  {
    icon: Shield,
    title: "Risk Management Services",
    description: "Advanced risk assessment and mitigation strategies to protect your capital.",
    whoItsFor: "Investors prioritizing capital preservation and downside protection",
    approach: "Multi-layered risk framework including position sizing, hedging, and stop-loss strategies",
    deliverables: [
      "Comprehensive risk assessment report",
      "Hedging strategy implementation",
      "Stop-loss and position sizing guidelines",
      "Stress testing and scenario analysis",
      "Risk monitoring and alerts",
    ],
    pricing: "Starting from ₹30,000/month",
  },
  {
    icon: Search,
    title: "Research & Market Insights",
    description: "In-depth market analysis and investment research to inform your decisions.",
    whoItsFor: "Investors seeking detailed market intelligence and research-backed insights",
    approach: "Fundamental and technical analysis combined with macroeconomic research",
    deliverables: [
      "Weekly market outlook reports",
      "Sector and stock analysis",
      "Economic indicator tracking",
      "Technical chart analysis",
      "Investment thesis development",
    ],
    pricing: "Starting from ₹15,000/month",
  },
  {
    icon: GraduationCap,
    title: "Training & Educational Workshops",
    description: "Educational programs to enhance your understanding of markets and investing.",
    whoItsFor: "Beginners and intermediate investors wanting to improve their knowledge",
    approach: "Practical, hands-on learning with real market examples and case studies",
    deliverables: [
      "Monthly group workshops",
      "One-on-one mentoring sessions",
      "Educational materials and resources",
      "Practice trading simulations",
      "Certification upon completion",
    ],
    pricing: "Starting from ₹10,000/workshop",
  },
  {
    icon: Users,
    title: "Premium Advisory Program",
    description: "Comprehensive advisory service combining all our capabilities for high-net-worth clients.",
    whoItsFor: "High-net-worth individuals seeking comprehensive wealth management",
    approach: "Holistic approach covering all aspects of investment management and financial planning",
    deliverables: [
      "All services included",
      "Dedicated advisor relationship",
      "Priority support and communication",
      "Customized reporting and analytics",
      "Quarterly strategy review meetings",
    ],
    pricing: "Starting from ₹1,00,000/quarter",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--fc-navy-900)] to-[var(--fc-navy-800)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fc-paper)]">
              Services & <span className="text-[var(--fc-gold-400)]">Capabilities</span>
            </h1>
            <p className="text-xl text-[var(--fc-paper)]/80 leading-relaxed">
              Comprehensive advisory services designed to guide you through every aspect of your investment journey with
              discipline and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="border-[var(--fc-gold-500)]/20 hover:border-[var(--fc-gold-500)]/40 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Service Overview */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-[var(--fc-gold-500)]/10 rounded-lg flex items-center justify-center">
                          <service.icon className="h-6 w-6 text-[var(--fc-gold-600)]" />
                        </div>
                        <div>
                          <h2 className="font-heading text-2xl font-bold text-[var(--fc-navy-900)]">{service.title}</h2>
                          <p className="text-[var(--fc-gold-600)] font-semibold">{service.pricing}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-[var(--fc-navy-900)] mb-1">Who it's for:</h4>
                          <p className="text-sm text-muted-foreground">{service.whoItsFor}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--fc-navy-900)] mb-1">Our approach:</h4>
                          <p className="text-sm text-muted-foreground">{service.approach}</p>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-[var(--fc-navy-900)] mb-4">What you get:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-[var(--fc-gold-600)] mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t border-[var(--fc-gold-500)]/20">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            asChild
                            className="bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)]"
                          >
                            <Link href="/contact">
                              Get Started
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link href="/pricing">View Pricing Details</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--fc-paper)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl font-bold text-[var(--fc-navy-900)]">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Schedule a consultation to discuss which services align best with your investment goals and risk
              tolerance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)]"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/faqs">View FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
