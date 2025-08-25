"use client"

import { motion } from "framer-motion"
import { BarChart3, Target, Shield, RefreshCw, Calculator, Brain } from "lucide-react"

const methodItems = [
  {
    icon: BarChart3,
    title: "Market Research",
    description: "Comprehensive analysis of market trends, sector performance, and economic indicators.",
    size: "large",
  },
  {
    icon: Target,
    title: "Position Sizing",
    description: "Scientific approach to determining optimal position sizes based on risk tolerance.",
    size: "medium",
  },
  {
    icon: Shield,
    title: "Risk Controls",
    description: "Multi-layered risk management with stop-losses and hedging strategies.",
    size: "medium",
  },
  {
    icon: RefreshCw,
    title: "Review Cadence",
    description: "Regular portfolio reviews and strategy adjustments based on market conditions.",
    size: "small",
  },
  {
    icon: Calculator,
    title: "Quantitative Tools",
    description: "Data-driven analysis using proven quantitative models and metrics.",
    size: "small",
  },
  {
    icon: Brain,
    title: "Behavioral Discipline",
    description: "Systematic approach to overcome emotional biases in investment decisions.",
    size: "large",
  },
]

export function MethodEdge() {
  return (
    <section className="py-20 bg-[var(--fc-paper)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--fc-navy-900)] mb-6">
            Our Method & Edge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach combining traditional wisdom with modern analytical tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          {methodItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                group p-6 bg-white rounded-xl border border-[var(--fc-gold-500)]/20 
                hover:border-[var(--fc-gold-500)]/40 hover:shadow-lg hover:shadow-[var(--fc-gold-500)]/10 
                transition-all duration-300 cursor-pointer
                ${item.size === "large" ? "md:col-span-2" : ""}
                ${item.size === "medium" ? "md:col-span-1" : ""}
              `}
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-[var(--fc-gold-500)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--fc-gold-500)]/20 transition-colors">
                  <item.icon className="h-6 w-6 text-[var(--fc-gold-600)]" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[var(--fc-navy-900)] mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
