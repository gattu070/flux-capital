"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { TrendingUp, PieChart, Shield, Search, GraduationCap, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: TrendingUp,
    title: "Trade Consultancy & Advisory",
    description: "Expert guidance on equity and derivative trading strategies with disciplined risk management.",
    features: ["Position Sizing", "Entry/Exit Strategies", "Risk Assessment"],
  },
  {
    icon: PieChart,
    title: "Portfolio Strategy",
    description: "Comprehensive portfolio construction and optimization tailored to your risk profile.",
    features: ["Asset Allocation", "Diversification", "Rebalancing"],
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Advanced risk assessment and mitigation strategies to protect your capital.",
    features: ["Stop Loss Planning", "Hedging Strategies", "Volatility Analysis"],
  },
  {
    icon: Search,
    title: "Research & Insights",
    description: "In-depth market analysis and investment research to inform your decisions.",
    features: ["Market Analysis", "Sector Research", "Technical Studies"],
  },
  {
    icon: GraduationCap,
    title: "Training & Workshops",
    description: "Educational programs to enhance your understanding of markets and investing.",
    features: ["Trading Psychology", "Technical Analysis", "Risk Management"],
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--fc-navy-900)] mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive advisory services designed to guide you through every aspect of your investment journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg hover:shadow-[var(--fc-gold-500)]/10 transition-all duration-300 border-[var(--fc-gold-500)]/20 hover:border-[var(--fc-gold-500)]/40">
                <CardHeader>
                  <div className="w-12 h-12 bg-[var(--fc-gold-500)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--fc-gold-500)]/20 transition-colors">
                    <service.icon className="h-6 w-6 text-[var(--fc-gold-600)]" />
                  </div>
                  <CardTitle className="font-heading text-xl text-[var(--fc-navy-900)]">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-[var(--fc-gold-500)] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            asChild
            className="bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)] group"
          >
            <Link href="/services">
              Explore All Services
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
