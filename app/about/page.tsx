import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, TrendingUp, Users } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { generateMetadata } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = generateMetadata(
  "About FluxCapital",
  "Learn about FluxCapital's story, mission, values, and leadership. Founded by Ayushi Patel to provide discipline-first trade advisory services.",
  "/about"
);

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We maintain the highest ethical standards in all our interactions and recommendations.",
  },
  {
    icon: Target,
    title: "Prudence",
    description:
      "Every decision is made with careful consideration of risks and long-term implications.",
  },
  {
    icon: TrendingUp,
    title: "Discipline",
    description:
      "We follow systematic processes and resist emotional decision-making.",
  },
  {
    icon: Users,
    title: "Transparency",
    description:
      "Clear communication and honest disclosure of all risks and methodologies.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--fc-navy-900)] to-[var(--fc-navy-800)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[var(--fc-paper)]">
              About{" "}
              <span className="text-[var(--fc-gold-400)]">FluxCapital</span>
            </h1>
            <p className="text-xl text-[var(--fc-paper)]/80 leading-relaxed">
              Founded on the principle that successful investing requires
              discipline, research, and unwavering commitment to risk
              management.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-bold text-[var(--fc-navy-900)]">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  FluxCapital was born from a simple observation: too many
                  investors lose money not because they lack intelligence, but
                  because they lack discipline. In a market driven by emotions
                  and short-term thinking, we saw the need for a different
                  approach.
                </p>
                <p>
                  Our founder, Ayushi Patel, spent over a decade in financial
                  markets, witnessing firsthand how systematic approaches and
                  risk-first thinking could protect and grow wealth even in
                  volatile conditions. This experience shaped our core
                  philosophy: more than investment, it's momentum.
                </p>
                <p>
                  Today, FluxCapital serves thoughtful investors who understand
                  that true wealth building requires patience, discipline, and
                  expert guidance. We don't promise quick returns—we deliver
                  sustainable processes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[var(--fc-gold-500)]/20 to-[var(--fc-navy-900)]/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-[var(--fc-gold-500)] rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="h-12 w-12 text-[var(--fc-navy-900)]" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-heading text-2xl font-bold text-[var(--fc-navy-900)]">
                      10+ Years
                    </p>
                    <p className="text-muted-foreground">Market Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-[var(--fc-paper)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-[var(--fc-navy-900)] mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To guide thoughtful investors with research-backed strategies,
              disciplined processes, and unwavering commitment to risk
              management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center border-[var(--fc-gold-500)]/20 hover:border-[var(--fc-gold-500)]/40 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[var(--fc-gold-500)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-[var(--fc-gold-600)]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[var(--fc-navy-900)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-[var(--fc-navy-900)] mb-6">
                Leadership
              </h2>
              <p className="text-xl text-muted-foreground">
                Meet the founder and CEO who leads FluxCapital's mission.
              </p>
            </div>

            <Card className="border-[var(--fc-gold-500)]/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-[var(--fc-gold-500)]/20 to-[var(--fc-navy-900)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-32 h-32 bg-[var(--fc-gold-500)] rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-[var(--fc-navy-900)]">
                          <Image
                            src="/owner.jpeg"
                            alt="FluxCapital"
                            width={400}
                            height={200}
                            className="h-28 w-auto rounded-full"
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-[var(--fc-navy-900)]">
                        {siteConfig.owner.name}
                      </h3>
                      <p className="text-[var(--fc-gold-600)] font-semibold">
                        {siteConfig.owner.title}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {siteConfig.owner.bio} Her systematic approach to risk
                      management and deep understanding of market psychology
                      have helped numerous clients navigate volatile markets
                      while preserving capital.
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <strong>Specializations:</strong> Risk Management,
                        Portfolio Strategy, Behavioral Finance
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Education:</strong> Advanced studies in
                        Financial Markets and Risk Management
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Philosophy:</strong> "Discipline beats
                        intelligence in investing every time."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--fc-navy-900)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl font-bold text-[var(--fc-paper)]">
              Why Choose FluxCapital?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <h3 className="font-heading text-xl font-semibold text-[var(--fc-gold-400)]">
                  Experience
                </h3>
                <p className="text-[var(--fc-paper)]/80 text-sm">
                  Over a decade of market experience across various market
                  cycles and conditions.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-xl font-semibold text-[var(--fc-gold-400)]">
                  Methodology
                </h3>
                <p className="text-[var(--fc-paper)]/80 text-sm">
                  Systematic, research-backed approach that prioritizes risk
                  management above all else.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-xl font-semibold text-[var(--fc-gold-400)]">
                  Transparency
                </h3>
                <p className="text-[var(--fc-paper)]/80 text-sm">
                  Clear communication, honest risk disclosure, and no
                  unrealistic promises.
                </p>
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="bg-[var(--fc-gold-500)] hover:bg-[var(--fc-gold-600)] text-[var(--fc-navy-900)]"
            >
              <Link href="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
