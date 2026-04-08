import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { DashboardShowcase } from "@/components/dashboard-showcase"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { ProductShowcase } from "@/components/product-showcase"
import { StatsSection } from "@/components/stats-section"
import { KanbanPipeline } from "@/components/kanban-pipeline"
import { ScrollReveal } from "@/components/animated.orbs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero - Bigger, more visual */}
        <Hero />

        {/* Smart.R AI section + Dashboard mockup immediately after hero */}
        <ScrollReveal>
          <DashboardShowcase />
        </ScrollReveal>

        {/* Live product showcase */}
        <ScrollReveal delay={0.05}>
          <ProductShowcase />
        </ScrollReveal>

        {/* Candidate Pipeline with Kanban demo */}
        <ScrollReveal delay={0.1}>
          <KanbanPipeline />
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal delay={0.15}>
          <StatsSection />
        </ScrollReveal>

        {/* How it works */}
        <ScrollReveal delay={0.1}>
          <HowItWorks />
        </ScrollReveal>

        {/* Everything you need to hire smarter */}
        <ScrollReveal delay={0.15}>
          <Features />
        </ScrollReveal>

        {/* Why teams choose Smart.R */}
        <ScrollReveal delay={0.1}>
          <Benefits />
        </ScrollReveal>

        {/* Testimonials */}
        <ScrollReveal delay={0.1}>
          <Testimonials />
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal delay={0.1}>
          <FAQ />
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal delay={0.1}>
          <CTABanner />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  )
}
