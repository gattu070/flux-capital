"use client"

import { motion } from "framer-motion"
import { Shield, TrendingUp, Users, Award } from "lucide-react"

const signals = [
  {
    icon: Shield,
    title: "Risk-First Approach",
    description: "Every strategy prioritizes capital preservation",
  },
  {
    icon: TrendingUp,
    title: "Research-Backed",
    description: "Decisions grounded in thorough market analysis",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Transparent communication and aligned interests",
  },
  {
    icon: Award,
    title: "Disciplined Process",
    description: "Systematic approach to investment decisions",
  },
]

export function TrustSignals() {
  return (
    <section className="py-16 bg-[var(--fc-paper)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fc-navy-900)] mb-4">
            Built on Discipline, Research, and Risk Control
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our foundation rests on proven principles that have guided successful investors for generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--fc-gold-500)]/10 rounded-full flex items-center justify-center group-hover:bg-[var(--fc-gold-500)]/20 transition-colors">
                <signal.icon className="h-8 w-8 text-[var(--fc-gold-600)]" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[var(--fc-navy-900)] mb-2">{signal.title}</h3>
              <p className="text-muted-foreground">{signal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
