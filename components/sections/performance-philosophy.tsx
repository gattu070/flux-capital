"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, Target, ArrowRight } from "lucide-react"

export function PerformancePhilosophy() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--fc-navy-900)] to-[var(--fc-navy-800)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--fc-paper)]">
              Our Performance Philosophy
            </h2>
            <p className="text-xl text-[var(--fc-paper)]/80 leading-relaxed">
              We don't promise returns—we deliver disciplined processes. Our approach focuses on consistent methodology,
              risk management, and long-term wealth preservation rather than chasing short-term gains.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-[var(--fc-gold-400)] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[var(--fc-paper)] mb-1">Capital Preservation First</h3>
                  <p className="text-[var(--fc-paper)]/70 text-sm">
                    Protecting your capital is our primary objective before seeking growth opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-[var(--fc-gold-400)] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[var(--fc-paper)] mb-1">Risk-Adjusted Returns</h3>
                  <p className="text-[var(--fc-paper)]/70 text-sm">
                    We measure success by risk-adjusted performance, not absolute returns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-[var(--fc-gold-400)] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[var(--fc-paper)] mb-1">Consistent Process</h3>
                  <p className="text-[var(--fc-paper)]/70 text-sm">
                    Systematic approach that adapts to market conditions while maintaining discipline.
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-[var(--fc-gold-500)] text-[var(--fc-gold-400)] hover:bg-[var(--fc-gold-500)] hover:text-[var(--fc-navy-900)] group bg-transparent"
            >
              <Link href="/performance">
                View Our Approach
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[var(--fc-paper)] p-8 rounded-2xl shadow-2xl">
              <h3 className="font-heading text-2xl font-bold text-[var(--fc-navy-900)] mb-6">
                Our Methodology Snapshot
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Research & Analysis</span>
                  <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[var(--fc-gold-500)] rounded-full" style={{ width: "95%" }} />
                  </div>
                  <span className="text-[var(--fc-navy-900)] font-semibold">95%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Risk Management</span>
                  <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[var(--fc-gold-500)] rounded-full" style={{ width: "98%" }} />
                  </div>
                  <span className="text-[var(--fc-navy-900)] font-semibold">98%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Client Communication</span>
                  <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[var(--fc-gold-500)] rounded-full" style={{ width: "92%" }} />
                  </div>
                  <span className="text-[var(--fc-navy-900)] font-semibold">92%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Process Discipline</span>
                  <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-[var(--fc-gold-500)] rounded-full" style={{ width: "100%" }} />
                  </div>
                  <span className="text-[var(--fc-navy-900)] font-semibold">100%</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-6 italic">
                * Methodology focus areas - not performance guarantees. Past performance does not indicate future
                results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
