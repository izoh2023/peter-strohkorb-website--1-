import ModernHeader from "@/components/modern-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Zap, Users, Search, Clock, DollarSign } from "lucide-react"
import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"

export default function ClaritySessionsPage() {
  const sessionBenefits = [
    {
      icon: <Search className="w-8 h-8 text-accent" />,
      title: "Uncover Hidden Challenges",
      description: "Identify the root causes of your sales roadblocks and inefficiencies.",
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Define Clear Objectives",
      description: "Set achievable, measurable sales goals aligned with your business vision.",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Actionable Roadmap",
      description: "Receive a clear, step-by-step plan to implement immediate improvements.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Strategic Insights",
      description: "Gain expert perspectives on market trends and competitive positioning.",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Team Alignment",
      description: "Ensure your entire sales team is focused and working cohesively.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 gradient-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeInSection>
              <Lightbulb className="w-20 h-20 mx-auto mb-6 text-accent" />
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                Gain Sales <span className="text-gradient">Clarity</span> & Direction
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Quick-fix, toe-in-the-water engagements designed to cut through the noise and provide focused strategy
                to accelerate your sales growth.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-accent" />
                  <span>Limited Duration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-6 h-6 text-accent" />
                  <span>Focused Scope</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-accent" />
                  <span>Cost-Effective</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* What are Clarity Sessions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">What Are Sales Clarity Sessions?</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                  Sales Clarity Sessions are focused, high-impact workshops designed to diagnose your sales operations,
                  refine your strategy, and create a clear path forward.
                </p>
                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg max-w-4xl mx-auto">
                  <p className="text-lg font-semibold text-primary mb-2">Perfect for businesses that need:</p>
                  <p className="text-gray-700">
                    <strong>Quick-fix solutions</strong> or want to <strong>test the waters</strong> with our approach.
                    These engagements are intentionally <strong>limited in duration, scope, and cost</strong> to provide
                    immediate value without long-term commitment.
                  </p>
                </div>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* First three boxes in top row */}
              {sessionBenefits.slice(0, 3).map((benefit, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <Card className="card-hover hover-lift h-full">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6">{benefit.icon}</div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}

              {/* Bottom two boxes centered */}
              <div className="lg:col-span-3 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                  {sessionBenefits.slice(3).map((benefit, index) => (
                    <FadeInSection key={index + 3} delay={(index + 3) * 100}>
                      <Card className="card-hover hover-lift h-full">
                        <CardContent className="p-8 text-center">
                          <div className="mb-6">{benefit.icon}</div>
                          <h3 className="text-2xl font-bold text-primary mb-3">{benefit.title}</h3>
                          <p className="text-gray-700">{benefit.description}</p>
                        </CardContent>
                      </Card>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 gradient-surface">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-primary mb-4">The Clarity Session Process</h2>
                  <p className="text-lg text-gray-700">Streamlined and efficient - designed for quick results</p>
                </div>
                <div className="space-y-8">
                  {[
                    {
                      title: "Pre-Session Discovery",
                      description:
                        "Brief information gathering about your business, sales process, and specific challenges. (30 minutes)",
                    },
                    {
                      title: "Intensive Workshop",
                      description:
                        "Focused session (2-4 hours) concentrating on analysis, strategy development, and immediate problem-solving.",
                    },
                    {
                      title: "Customized Action Plan",
                      description:
                        "Concise report with key findings, prioritized recommendations, and a clear 30-60 day action plan.",
                    },
                    {
                      title: "Follow-Up Support",
                      description:
                        "One follow-up call (30 minutes) to address implementation questions and ensure you're on track.",
                    },
                  ].map((step, index) => (
                    <Card key={index} className="card-hover hover-lift">
                      <CardContent className="p-6 flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 gradient-accent rounded-full flex items-center justify-center text-white font-bold text-xl mt-1">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-1">{step.title}</h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      </CardContent>
                    </Card>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Test the Waters?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Start with a low-risk, high-value Clarity Session and experience the difference focused expertise can
                make.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-12">
                <p className="text-lg mb-2">
                  <strong>Perfect for:</strong> Quick wins • Testing our approach • Limited budget • Immediate needs
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-accent text-primary hover:bg-accent-dark px-8 py-4 text-lg hover-lift border-2 border-white"
                >
                  <Link href="https://calendly.com/d/cpd5-5d4-46q" target="_blank" rel="noopener noreferrer">
                    Schedule Information Call
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg hover-lift bg-transparent"
                >
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
    </div>
  )
}
