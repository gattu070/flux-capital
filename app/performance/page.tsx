import type { Metadata } from "next"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import { generateMetadata } from "@/lib/utils"
import Link from "next/link"

export const metadata: Metadata = generateMetadata(
  "Our Approach & Case Studies",
  "Learn about FluxCapital's systematic investment methodology and review anonymized case studies demonstrating our risk-first approach.",
  "/performance",
)

const methodologySteps = [
  {
    step: "01",
    title: "Market Research & Analysis",
    description:
      "Comprehensive analysis of market conditions, economic indicators, and sector trends to identify opportunities and risks.",
  },
  {
    step: "02",
    title: "Risk Assessment",
    description:
      "Thorough evaluation of potential downside risks and volatility factors before considering any investment opportunity.",
  },
  {
    step: "03",
    title: "Position Sizing",
    description:
      "Scientific approach to determining optimal position sizes based on risk tolerance and portfolio allocation principles.",
  },
  {
    step: "04",
    title: "Entry Strategy",
    description:
      "Systematic entry approach using technical analysis and fundamental valuation to optimize timing and price levels.",
  },
  {
    step: "05",
    title: "Risk Management",
    description: "Implementation of stop-loss levels, hedging strategies, and position monitoring to protect capital.",
  },
  {
    step: "06",
    title: "Review & Adjustment",
    description:
      "Regular portfolio review and strategy adjustment based on changing market conditions and performance analysis.",
  },
]

const caseStudies = [
  {
    title: "Defensive Portfolio Strategy",
    period: "March 2020 - December 2020",
    challenge: "Navigate extreme market volatility during COVID-19 pandemic while preserving capital.",
    approach:
      "Implemented defensive positioning with increased cash allocation, selective equity exposure, and hedging strategies.",
    outcome: "Portfolio declined only 8% during market crash vs benchmark decline of 35%, followed by steady recovery.",
    keyLearning: "Disciplined risk management and cash reserves provided flexibility during crisis periods.",
  },
  {
    title: "Sector Rotation Strategy",
    period: "January 2021 - June 2022",
    challenge: "Capitalize on post-pandemic recovery while managing inflation and interest rate risks.",
    approach: "Systematic sector rotation based on economic cycle analysis and relative strength indicators.",
    outcome: "Outperformed benchmark by 12% while maintaining lower volatility through diversified sector exposure.",
    keyLearning: "Systematic approach to sector allocation can enhance returns while managing concentration risk.",
  },
  {
    title: "Risk-Controlled Growth",
    period: "July 2022 - Present",
    challenge: "Generate returns in challenging market environment with high inflation and geopolitical uncertainty.",
    approach: "Focus on quality companies with strong fundamentals, combined with tactical hedging strategies.",
    outcome:
      "Maintained positive returns while benchmark declined 15%, demonstrating effectiveness of risk-first approach.",
    keyLearning: "Quality focus and risk management become even more critical during uncertain market periods.",
  },
]

export default function PerformancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--fc-navy-900)] to-[var(--fc-navy-800)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fc-paper)]">
              Our <span className="text-[var(--fc-gold-400)]">Approach</span> & Case Studies
            </h1>
            <p className="text-xl text-[var(--fc-paper)]/80 leading-relaxed">
              Systematic methodology and real-world case studies demonstrating our commitment to risk-controlled
              investing.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-[var(--fc-navy-900)] mb-6">
                Our Investment Methodology
              </h2>
              <p className="text-xl text-muted-foreground">
                A systematic, six-step process that prioritizes risk management and disciplined decision-making.
              </p>
            </div>

            <div className="space-y-8">
              {methodologySteps.map((step, index) => (
                <Card
                  key={step.step}
                  className="border-[var(--fc-gold-500)]/20 hover:border-[var(--fc-gold-500)]/40 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[var(--fc-gold-500)] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-[var(--fc-navy-900)] font-bold">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-semibold text-[var(--fc-navy-900)] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[var(--fc-paper)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-[var(--fc-navy-900)] mb-6">Case Studies</h2>
              <p className="text-xl text-muted-foreground">
                Real-world examples of our methodology in action across different market conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card
                  key={study.title}
                  className="border-[var(--fc-gold-500)]/20 hover:border-[var(--fc-gold-500)]/40 transition-colors"
                >
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-[var(--fc-navy-900)]">{study.title}</CardTitle>
                    <CardDescription className="text-[var(--fc-gold-600)] font-semibold">
                      {study.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[var(--fc-navy-900)] mb-1">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--fc-navy-900)] mb-1">Approach:</h4>
                      <p className="text-sm text-muted-foreground">{study.approach}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[var(--fc-navy-900)] mb-1">Outcome:</h4>
                      <p className="text-sm text-muted-foreground">{study.outcome}</p>
                    </div>

                    <div className="pt-3 border-t border-[var(--fc-gold-500)]/20">
                      <h4 className="font-semibold text-[var(--fc-gold-600)] mb-1">Key Learning:</h4>
                      <p className="text-sm text-muted-foreground italic">{study.keyLearning}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="py-16 bg-[var(--fc-navy-900)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 p-6 bg-[var(--fc-navy-800)] rounded-lg border border-[var(--fc-gold-500)]/20">
              <AlertTriangle className="h-6 w-6 text-[var(--fc-gold-400)] flex-shrink-0 mt-1" />
              <div className="space-y-3">
                <h3 className="font-heading text-xl font-semibold text-[var(--fc-paper)]">Important Risk Disclosure</h3>
                <div className="text-[var(--fc-paper)]/80 text-sm space-y-2">
                  <p>
                    Past performance does not guarantee future results. All investments carry risk of loss, and there is
                    no assurance that any investment strategy will be successful.
                  </p>
                  <p>
                    Case studies presented are for illustrative purposes only and represent selected examples. Results
                    may not be representative of all client experiences.
                  </p>
                  <p>
                    Market conditions, economic factors, and individual circumstances can significantly impact
                    investment outcomes. Please consult with our advisors to understand risks specific to your
                    situation.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-[var(--fc-gold-500)] text-[var(--fc-gold-400)] hover:bg-[var(--fc-gold-500)] hover:text-[var(--fc-navy-900)] bg-transparent"
                >
                  <Link href="/legal/disclaimer">Read Full Disclaimer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl font-bold text-[var(--fc-navy-900)]">
              Ready to Apply Our Methodology?
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule a consultation to discuss how our systematic approach can be tailored to your investment
              objectives.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)]"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
