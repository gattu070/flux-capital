import { HeroSection } from "@/components/sections/hero-section"
import { TrustSignals } from "@/components/sections/trust-signals"
import { ServicesOverview } from "@/components/sections/services-overview"
import { MethodEdge } from "@/components/sections/method-edge"
import { PerformancePhilosophy } from "@/components/sections/performance-philosophy"
import { CTABanner } from "@/components/sections/cta-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSignals />
      <ServicesOverview />
      <MethodEdge />
      <PerformancePhilosophy />
      <CTABanner />
    </>
  )
}
