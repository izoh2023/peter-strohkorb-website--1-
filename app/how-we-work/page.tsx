import ModernHeader from "@/components/modern-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Users,
  Search,
  Target,
  TrendingUp,
  Lightbulb,
  Calendar,
  Globe,
  BarChart3,
  MessageSquare,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { PageHeader } from "@/components/page-header"

export default function HowWeWorkPage() {
  const approachSteps = [
    {
      icon: <Search className="w-8 h-8 text-accent" />,
      title: "Buyer-Friendly Sales Funnel Health Check",
      description:
        "A structured, evidence-based tool that benchmarks your sales effectiveness across 10 buyer-aligned competencies",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent" />,
      title: "Stakeholder Interviews",
      description: "Understanding your team's mindset, methods, and bottlenecks through comprehensive discussions",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Sales Pipeline Analysis",
      description: "Identifying conversion friction points and lost opportunities in your process flow",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Client Interaction Audits",
      description: "Revealing how your team is perceived by buyers during each stage of the journey",
    },
  ]

  const strategyElements = [
    "Rebuild your sales process from the buyer's perspective",
    "Introduce or refine lead qualification and conversion pathways",
    "Deliver practical sales coaching & enablement focused on real conversations",
    "Coach your team to master empathy-based selling and storytelling",
    "Embed repeatable best practices tailored to your industry",
  ]

  const uniqueApproach = [
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      title: "Buyer-Friendly Selling",
      description: "A modern approach that aligns with how today's B2B buyers think, feel, and decide",
    },
    {
      icon: <Settings className="w-6 h-6 text-accent" />,
      title: "Innovative Diagnostic Tools",
      description: "Measure and map performance gaps before prescribing solutions",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      title: "Sales & Marketing Alignment",
      description: "Ensuring your messaging and buyer journey are consistent end-to-end",
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Interactive Team Engagement",
      description: "Training that's grounded in real scenarios and built to stick",
    },
  ]

  const budgetPhases = [
    {
      phase: "Assessment & Diagnostic",
      description: "Comprehensive analysis of your current sales ecosystem and identification of key opportunities",
      color: "bg-blue-50 border-blue-200",
    },
    {
      phase: "10 Competencies Implementation",
      description: "Implementation of the 10 buyer-friendly selling competencies across your sales process",
      color: "bg-green-50 border-green-200",
    },
    {
      phase: "Implementation Planning",
      description: "Strategic planning and roadmap development for sales transformation implementation",
      color: "bg-purple-50 border-purple-200",
    },
    {
      phase: "Sales Coaching & Enablement",
      description: "Practical coaching delivery and team capability development",
      color: "bg-accent/10 border-accent/30",
    },
    {
      phase: "Ongoing Performance Support",
      description: "Continuous optimization and performance enhancement for sustained results",
      color: "bg-gray-50 border-gray-200",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <PageHeader
        title="How We Work With You"
        subtitle="A structured approach to transforming your sales performance with measurable ROI"
      />

      <main>
        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-6">Proven Results Across Three Continents</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Your objective to refine your sales strategy, enhance lead generation and conversion, and elevate
                  client interactions in a B2B environment aligns perfectly with the outcomes we deliver through our
                  proprietary <span className="font-bold text-secondary">Buyer-Friendly Sales Funnel framework</span>{" "}
                  and supporting diagnostic tools.
                </p>
                <div className="flex items-center justify-center space-x-8 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-accent" />
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-accent" />
                    <span>Australia • USA • UK</span>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
                <p className="text-lg text-gray-700">
                  Over the past 15+ years, we've advised B2B organisations across Australia, the U.S., and UK, helping
                  CEOs and business leaders improve revenue performance by aligning their sales approach with{" "}
                  <span className="font-bold text-primary">how modern buyers actually like to buy</span>.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 gradient-surface">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">🔍 Our Comprehensive Approach</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  We co-create your sales growth future together with your leadership, sales and marketing teams,
                  beginning with a comprehensive diagnostic of your current sales ecosystem.
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {approachSteps.map((step, index) => (
                <FadeInSection key={index} delay={index * 150}>
                  <Card className="card-hover hover-lift h-full">
                    <CardContent className="p-8">
                      <div className="mb-6">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={600}>
              <div className="text-center mt-12">
                <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
                  <p className="text-lg text-gray-700 italic">
                    "This process reveals not just <span className="font-bold text-primary">what's happening</span>, but{" "}
                    <span className="font-bold text-secondary">why</span>—and which high-impact changes will generate
                    the greatest ROI."
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Strategy Refinement Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <FadeInSection className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-primary mb-6">🚀 Sales Strategy Refinement & Training</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Once the gaps and opportunities are clear, we work collaboratively with your leadership and sales team
                  to implement transformative changes.
                </p>

                <ul className="space-y-4">
                  {strategyElements.map((element, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-gray-800">{element}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <p className="text-lg font-semibold text-primary">
                    Our programs are designed to drive immediate behavioural shifts as well as long-term capability
                    uplift.
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection className="lg:w-1/2">
                <div className="relative">
                  <img
                    src="/images/sales-training-session.jpg"
                    alt="Peter Strohkorb in his advisory office"
                    className="w-full rounded-xl shadow-2xl"
                  />
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="py-20 gradient-surface">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">💡 What Makes Our Approach Unique</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Our methodology combines proven frameworks with innovative tools and a deep understanding of modern
                  buyer behavior.
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {uniqueApproach.map((item, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <Card className="card-hover hover-lift h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        {item.icon}
                        <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={400}>
              <div className="text-center mt-12">
                <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
                  <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-lg font-semibold text-primary">
                    Everything is milestone-driven and tailored to your team's current maturity and future goals.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Budget & Investment Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">📋 Delivery Structure</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                  Most of our clients prefer a milestone-based structure comprising the following five phased
                  engagement:
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
              {budgetPhases.map((phase, index) => (
                <FadeInSection key={index} delay={index * 150}>
                  <Card className={`card-hover hover-lift h-full border-2 ${phase.color}`}>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-bold text-primary mb-4">{phase.phase}</h3>
                      <p className="text-sm text-gray-700">{phase.description}</p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Client Benefits Section */}
        <section className="py-20 gradient-dark text-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">As Our Client, You'll...</h2>
                <div className="space-y-6">
                  {[
                    "Achieve (and even exceed) your sales revenue targets.",
                    "Grow your customer base.",
                    "Expand your existing accounts.",
                    "Gain better leads and more referrals.",
                    "Have your CRM finally tell you the truth.",
                  ].map((benefit, index) => (
                    <FadeInSection key={index} delay={index * 100}>
                      <div className="flex items-center justify-start space-x-4 text-left bg-white/10 rounded-lg p-6 hover:bg-white/15 transition-colors">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-lg md:text-xl">{benefit}</p>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Accelerate Your Revenue Outcomes?</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                If this sounds aligned with your goals, let's schedule a conversation to discuss your current situation
                and objectives in detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent-dark px-8 py-4 text-lg hover-lift">
                  <Link href="/schedule" className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Your Strategy Call</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg hover-lift bg-transparent"
                >
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
    </div>
  )
}
