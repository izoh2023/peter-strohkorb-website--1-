import ModernHeader from "@/components/modern-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Lightbulb, Target, TrendingUp, BarChart3, Handshake, LineChart } from "lucide-react"
import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import Image from "next/image"

export default function SalesTransformationPage() {
  const transformationPillars = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Leadership Alignment",
      description: "Ensuring your entire leadership team is aligned on vision, strategy, and execution.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Buyer-Friendly Strategy",
      description: "Shifting from product-centric to buyer-centric approaches that resonate with modern customers.",
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Custom Implementation",
      description: "Tailoring our proven frameworks specifically to your business model and market position.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Measurable Outcomes",
      description: "Establishing clear metrics to track progress and demonstrate ROI on your transformation.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      title: "Sustainable Growth",
      description:
        "Building capabilities that deliver not just immediate results, but long-term competitive advantage.",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Diagnosis",
      description:
        "We conduct a comprehensive assessment of your current sales approach, buyer journey mapping, and identify specific opportunities for transformation.",
    },
    {
      number: "02",
      title: "Strategic Co-Creation",
      description:
        "Working directly with your leadership team, we develop a customized Buyer-Friendly Sales strategy tailored to your specific business challenges and goals.",
    },
    {
      number: "03",
      title: "Organizational Alignment",
      description:
        "We align your sales, marketing, and leadership teams around the new approach, ensuring everyone understands their role in the transformation.",
    },
    {
      number: "04",
      title: "Implementation & Integration",
      description:
        "The new strategy is methodically implemented across your organization with clear processes, tools, and metrics.",
    },
    {
      number: "05",
      title: "Measurement & Refinement",
      description:
        "We continuously measure results against established KPIs, making data-driven refinements to optimize performance.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 gradient-primary text-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h1 className="text-5xl md:text-6xl font-black mb-6">
                    Sales <span className="text-gradient">Transformation</span> That Delivers Results
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                    Not just another training program. A strategic, collaborative process that fundamentally transforms
                    how your organization approaches sales.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-accent text-primary hover:bg-accent-dark px-8 py-4 text-lg hover-lift"
                    >
                      <Link href="/schedule">Schedule a Strategy Session</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg hover-lift bg-transparent"
                    >
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:w-1/2 relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/leadership-team-collaborating-on-sales-transformat.jpg"
                      alt="Leadership team collaborating on sales transformation strategy"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Not a Quick Fix Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-6">Not a "Tick-the-Box" Training Exercise</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our approach to sales transformation is a{" "}
                  <span className="font-bold text-secondary">top-down CO-CREATION process</span> in collaboration with
                  your business leadership team (CEO, Sales, Marketing). Together, we apply the Buyer-Friendly Selling
                  concept <span className="font-bold text-secondary">SPECIFICALLY to your business</span> and implement
                  it into your organisation.
                </p>
              </div>
            </FadeInSection>

            {/* First row - 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {transformationPillars.slice(0, 3).map((pillar, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <Card className="card-hover hover-lift h-full">
                    <CardContent className="p-8">
                      <div className="mb-6">{pillar.icon}</div>
                      <h3 className="text-2xl font-bold text-primary mb-3">{pillar.title}</h3>
                      <p className="text-gray-700">{pillar.description}</p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>

            {/* Second row - 2 cards centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
                <div className="md:col-start-1 md:col-end-2 md:mx-auto md:max-w-sm lg:max-w-none">
                  {transformationPillars.slice(3, 4).map((pillar, index) => (
                    <FadeInSection key={index + 3} delay={(index + 3) * 100}>
                      <Card className="card-hover hover-lift h-full">
                        <CardContent className="p-8">
                          <div className="mb-6">{pillar.icon}</div>
                          <h3 className="text-2xl font-bold text-primary mb-3">{pillar.title}</h3>
                          <p className="text-gray-700">{pillar.description}</p>
                        </CardContent>
                      </Card>
                    </FadeInSection>
                  ))}
                </div>
                <div className="md:col-start-2 md:col-end-3 md:mx-auto md:max-w-sm lg:max-w-none">
                  {transformationPillars.slice(4, 5).map((pillar, index) => (
                    <FadeInSection key={index + 4} delay={(index + 4) * 100}>
                      <Card className="card-hover hover-lift h-full">
                        <CardContent className="p-8">
                          <div className="mb-6">{pillar.icon}</div>
                          <h3 className="text-2xl font-bold text-primary mb-3">{pillar.title}</h3>
                          <p className="text-gray-700">{pillar.description}</p>
                        </CardContent>
                      </Card>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Co-Creation Process */}
        <section className="py-20 gradient-surface">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">The Co-Creation Process</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  We work hand-in-hand with your leadership team to develop and implement a sales transformation
                  strategy that's uniquely tailored to your business challenges and goals.
                </p>
              </div>
            </FadeInSection>

            <div className="max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <FadeInSection key={index} delay={index * 150}>
                  <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                      {index < processSteps.length - 1 && (
                        <div className="border-l-2 border-dashed border-accent h-12 ml-8 my-2 md:hidden"></div>
                      )}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <FadeInSection className="lg:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-xl bg-white p-6">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/sales-transformation-process-diagram.jpg"
                      alt="Sales Transformation Process: 5-step methodology showing Strategy & Assessment, Design & Planning, Implementation & Enablement, Execution & Optimization, and Sustain & Scale"
                      fill
                      className="object-cover object-top"
                      style={{ objectPosition: "center top" }}
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-primary mb-6">Why Our Approach Works</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The Buyer-Friendly Selling concept is built on a simple but powerful premise: align your entire sales
                  process with how your buyers actually make purchasing decisions today.
                </p>

                <ul className="space-y-4">
                  {[
                    "Bridges the gap between sales and marketing for a unified customer approach",
                    "Addresses the entire customer journey, not just the sales conversation",
                    "Builds organizational capabilities that create sustainable competitive advantage",
                    "Creates measurable improvements in lead conversion, sales cycle length, and deal size",
                    "Develops a sales culture that's adaptable to changing market conditions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Transformative Results</h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Our clients typically experience these outcomes after implementing our Sales Transformation process:
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FadeInSection delay={100}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover-lift">
                  <LineChart className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">30-50%</h3>
                  <p className="text-lg opacity-90">Increase in Sales Conversion Rates</p>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover-lift">
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">25-40%</h3>
                  <p className="text-lg opacity-90">Reduction in Sales Cycle Length</p>
                </div>
              </FadeInSection>

              <FadeInSection delay={300}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover-lift">
                  <Handshake className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">15-35%</h3>
                  <p className="text-lg opacity-90">Increase in Average Deal Size</p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-primary mb-4">Success Story</h2>
                  <p className="text-lg text-gray-700">
                    See how our Sales Transformation process delivered measurable results for a B2B technology company.
                  </p>
                </div>

                <Card className="card-hover hover-lift overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5 relative flex-shrink-0">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src="/b2b-technology-company-office-with-modern-sales-te.jpg"
                            alt="B2B Technology Company Case Study"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-3/5 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-primary mb-4">Global Tech Solutions Provider</h3>
                        <p className="text-gray-700 mb-6">
                          "Peter's Sales Transformation process helped us completely rethink how we approach our
                          enterprise customers. By aligning our sales and marketing teams around the buyer's journey,
                          we've seen a dramatic improvement in our ability to win complex deals against larger
                          competitors."
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 relative overflow-hidden flex-shrink-0">
                            <Image
                              src="/professional-female-ceo-headshot-sarah-johnson.jpg"
                              alt="Sarah Johnson CEO Portrait"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-bold text-primary">Sarah Johnson</p>
                            <p className="text-sm text-gray-600">CEO, Global Tech Solutions</p>
                          </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <div className="flex flex-wrap gap-6">
                            <div>
                              <p className="text-sm text-gray-600">Revenue Growth</p>
                              <p className="text-2xl font-bold text-secondary">+42%</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Sales Cycle</p>
                              <p className="text-2xl font-bold text-secondary">-35%</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Win Rate</p>
                              <p className="text-2xl font-bold text-secondary">+28%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Sales Approach?</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                Start the conversation about how our Sales Transformation process can be tailored to your specific
                business challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent-dark px-8 py-4 text-lg hover-lift">
                  <Link href="/schedule">Schedule a Strategy Session</Link>
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
