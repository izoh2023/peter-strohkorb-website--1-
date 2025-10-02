"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  TrendingUp,
  Target,
  Star,
  Quote,
  CheckCircle,
  Award,
  Clock,
  DollarSign,
  Handshake,
  Users,
  ClipboardCheck,
} from "lucide-react"
import Link from "next/link"
import ModernHeader from "@/components/modern-header"
import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedChart } from "@/components/animated-chart"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-surface"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <FadeInSection>
                <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 leading-tight">
                  Sell Smarter, <span className="text-gradient">Not Harder!</span>
                </h1>
              </FadeInSection>
              <FadeInSection delay={200}>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
                  Actionable Sales Growth Advice for B2B Services & Tech Businesses.
                </p>
              </FadeInSection>
              <FadeInSection delay={200}>
                <p className="text-lg md:text-xl text-gray-600 mb-6 font-medium">
                  The Buyer-Friendly Sales Funnel comprises 10 fundamental competencies that transform how you engage
                  with modern buyers.
                </p>
              </FadeInSection>
              <FadeInSection delay={400}>
                <div className="flex flex-col gap-4 justify-center lg:justify-start items-stretch mb-8">
                  <Button
                    size="lg"
                    className="btn-modern gradient-primary text-accent px-6 py-4 text-base hover-lift w-full sm:w-auto"
                  >
                    <Link href="/competencies" className="flex items-center justify-center space-x-2">
                      <span>View 10 Competencies</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <button
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 text-base font-medium rounded-md transition-all duration-300 hover-lift w-full sm:w-auto border-2 shadow-lg"
                    style={{
                      backgroundColor: "#f2a324",
                      color: "#1a1a1a",
                      borderColor: "#f2a324",
                      fontWeight: "600",
                    }}
                    onClick={() => (window.location.href = "/sales-checklist")}
                  >
                    <ClipboardCheck className="w-4 h-4" style={{ color: "#1a1a1a" }} />
                    <span style={{ color: "#1a1a1a", fontWeight: "600" }}>Take Self-Assessment</span>
                  </button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-6 py-4 text-base border-2 border-accent text-accent hover:bg-accent hover:text-white hover-lift bg-white w-full sm:w-auto"
                  >
                    <Link href="https://calendly.com/d/cpd5-5d4-46q" target="_blank" rel="noopener noreferrer">
                      Book Free Consultation
                    </Link>
                  </Button>
                </div>
              </FadeInSection>
              <FadeInSection delay={600}>
                <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>25+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>500+ Businesses Helped</span>
                  </div>
                </div>
              </FadeInSection>
            </div>
            <FadeInSection delay={400}>
              <div className="relative">
                <div className="relative z-10 group">
                  <div className="absolute inset-0 bg-accent rounded-2xl opacity-0 group-hover:opacity-20 group-hover:blur-xl transition-all duration-500 ease-in-out"></div>
                  <Image
                    src="/images/peter-strohkorb-portrait.jpg"
                    alt="Peter Strohkorb - B2B Sales Expert"
                    width={500}
                    height={500}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover-lift transition-all duration-300"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg animate-float">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">200%</div>
                        <div className="text-sm text-gray-600">Revenue Increase</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 -left-4 bg-gray-100 rounded-full p-3 animate-pulse-slow">
                  <Target className="w-8 h-8 text-accent" />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven B2B Sales Track Record</h2>
              <p className="text-xl text-gray-300">Numbers that speak for themselves</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-6xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <p className="text-gray-300">Years Experience</p>
                <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded"></div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-6xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <p className="text-gray-300">Businesses Helped</p>
                <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded"></div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-6xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={200} suffix="%" />
                </div>
                <p className="text-gray-300">Revenue Increase</p>
                <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded"></div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-6xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={400} suffix="%" />
                </div>
                <p className="text-gray-300">Faster Sales Cycles</p>
                <div className="w-12 h-1 bg-accent mx-auto mt-2 rounded"></div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Why Traditional Sales Approaches Are <span className="text-gradient">Failing</span>
                </h2>
                <div className="max-w-md mx-auto">
                  <AnimatedChart type="decline" className="rounded-lg shadow-lg" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <FadeInSection delay={200}>
                  <div className="relative h-full">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full flex items-center justify-center animate-pulse-slow">
                      <TrendingUp className="w-8 h-8 text-red-600 transform rotate-180" />
                    </div>
                    <Card className="pt-12 card-hover h-full">
                      <CardContent className="p-8">
                        <h3 className="text-3xl font-bold text-red-600 mb-8">The Symptoms Are Obvious:</h3>
                        <div className="space-y-6">
                          <div className="flex items-start space-x-4 group">
                            <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                            <p className="text-lg text-gray-700">
                              New prospects are now harder to reach than ever before
                            </p>
                          </div>
                          <div className="flex items-start space-x-4 group">
                            <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                            <p className="text-lg text-gray-700">
                              Sales cycles are lengthening while buyers take longer to make decisions
                            </p>
                          </div>
                          <div className="flex items-start space-x-4 group">
                            <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                            <p className="text-lg text-gray-700">
                              Forecasts and sales targets are frequently under-achieved
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </FadeInSection>
                <FadeInSection delay={400}>
                  <div className="relative h-full">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full flex items-center justify-center animate-float">
                      <Target className="w-8 h-8 text-secondary" />
                    </div>
                    <Card className="pt-12 card-hover h-full">
                      <CardContent className="p-8">
                        <h3 className="text-3xl font-bold text-secondary mb-8">The Solution Is Clear:</h3>
                        <p className="text-lg text-gray-700 mb-6">
                          Businesses need a proven, structured, and scalable framework that helps them win, keep, and
                          grow more sales.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent hover-lift mb-6">
                          <p className="text-lg font-semibold text-primary">
                            The Buyer-Friendly Sales Funnel with 10 Modern Selling Competencies.
                          </p>
                        </div>
                        <div className="max-w-xs">
                          <AnimatedChart type="growth" className="rounded-lg shadow-md" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 gradient-surface">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-primary mb-6">See Peter in Action</h2>
              <p className="text-xl text-gray-700 mb-12">
                Watch how the Buyer-Friendly Sales Funnel transforms businesses
              </p>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl hover-lift">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/NflMve_E53U?rel=0&modestbranding=1"
                  title="Boost B2B Sales the Smart | Modern B2B Sales Tips | Sell Smarter to Modern Buyers | Peter Strohkorb"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                    How We <span className="text-gradient">Work With You</span>
                  </h2>
                  <p className="text-xl text-gray-700 mb-8">
                    Our structured, milestone-based approach ensures measurable results and transparent investment. We
                    co-create your sales transformation with your leadership team using proven diagnostic tools and
                    buyer-friendly methodologies.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-secondary mb-2">Structured</div>
                      <div className="text-sm text-gray-600">Approach</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-secondary mb-2">5 Phases</div>
                      <div className="text-sm text-gray-600">Milestone-Based</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="btn-modern gradient-accent text-white px-8 py-4 text-lg hover-lift">
                      <Link href="/how-we-work" className="flex items-center space-x-2">
                        <Handshake className="w-5 h-5" />
                        <span>See Our Full Process</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 text-lg border-2 border-accent text-accent hover:bg-accent hover:text-white hover-lift bg-white"
                    >
                      <Link href="https://calendly.com/d/cpd5-5d4-46q" target="_blank" rel="noopener noreferrer">
                        Schedule Strategy Call
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <Card className="card-hover hover-lift">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-primary mb-6">Our 5-Phase Approach</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                            1
                          </div>
                          <div>
                            <div className="font-semibold text-primary">Assessment & Diagnostic</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">
                            2
                          </div>
                          <div>
                            <div className="font-semibold text-primary">10 Competencies Implementation</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">
                            3
                          </div>
                          <div>
                            <div className="font-semibold text-primary">Implementation Planning</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                            4
                          </div>
                          <div>
                            <div className="font-semibold text-primary">Sales Coaching & Enablement</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-sm">
                            5
                          </div>
                          <div>
                            <div className="font-semibold text-primary">Ongoing Performance Support</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </FadeInSection>
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

      {/* 10 Competencies Preview */}
      <section className="py-20 gradient-surface">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                The 10 Buyer-Friendly Selling <span className="text-gradient">Fundamental Competencies</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Master these competencies to engage buyers at every critical touchpoint
              </p>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/images/buyer-focused-funnel.png"
                  alt="Buyer-Friendly B2B Sales Funnel Diagram"
                  width={1000}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="max-w-6xl mx-auto mt-16 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <FadeInSection delay={200}>
                    <Card className="card-hover hover-lift h-full w-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            1
                          </div>
                          <h3 className="text-xl font-bold text-primary">Scalable Framework & Process</h3>
                        </div>
                        <p className="text-base text-gray-700 leading-relaxed">
                          It provides a robust, scalable framework and process for fundamental selling, empowering new
                          sales and marketing team members to achieve immediate impact, thus accelerating onboarding and
                          time-to-value.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>

                  <FadeInSection delay={400}>
                    <Card className="card-hover hover-lift h-full w-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            2
                          </div>
                          <h3 className="text-xl font-bold text-primary">Buyer-Centric Culture</h3>
                        </div>
                        <p className="text-base text-gray-700 leading-relaxed">
                          It fosters a buyer-centric culture throughout the organization, ensuring alignment with the
                          evolving expectations of today's discerning buyers.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                </div>
              </div>
              <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
                {[
                  { number: 1, title: "Brand Promise" },
                  { number: 2, title: "Product Description" },
                  { number: 3, title: "Value Proposition" },
                  { number: 4, title: "Ideal Customers" },
                  { number: 5, title: "Find Your Buyers" },
                  { number: 6, title: "Engage Effectively" },
                  { number: 7, title: "Fend Off Competitors" },
                  { number: 8, title: "Proposal Process" },
                  { number: 9, title: "Buying Experience" },
                  { number: 10, title: "Referral System" },
                ].map((competency, index) => (
                  <FadeInSection key={competency.number} delay={index * 100}>
                    <Card className="card-hover hover-lift h-full group text-center">
                      <CardContent className="p-3">
                        <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-accent font-bold text-lg group-hover:scale-110 transition-transform mx-auto mb-3">
                          {competency.number}
                        </div>
                        <h3 className="text-sm font-bold text-primary leading-tight">{competency.title}</h3>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
              <FadeInSection delay={800}>
                <div className="text-center mt-12">
                  <Button size="lg" className="btn-modern gradient-accent text-white px-8 py-4 text-lg hover-lift">
                    <Link href="/competencies" className="flex items-center space-x-2">
                      <span>Learn All 10 Competencies</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </FadeInSection>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Self-Assessment CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center bg-gray-50 rounded-2xl p-10 md:p-16 shadow-lg border border-gray-200">
              <ClipboardCheck className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Check Your Sales Funnel Health</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                Take our free, confidential self-assessment to discover how your sales process stacks up against our
                proven Buyer-Friendly Sales Funnel. Get instant results and actionable insights.
              </p>
              <Button size="lg" className="btn-modern gradient-accent text-white px-8 py-4 text-lg hover-lift">
                <Link href="/sales-checklist" className="flex items-center space-x-2">
                  <span>Start Free Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 gradient-surface">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <Link href="/testimonials" className="inline-block">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 hover:text-accent transition-colors">
                  Proven <span className="text-gradient">Results</span>
                </h2>
              </Link>
              <div className="text-center mb-12">
                <Button size="lg" className="btn-modern gradient-accent text-white px-8 py-4 text-lg hover-lift">
                  <Link href="/testimonials" className="flex items-center space-x-2">
                    <Users className="w-5 h-5 mr-2" />
                    <span>See What Our Clients Say</span>
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <FadeInSection delay={200}>
              <Card className="card-hover hover-lift text-center group">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <TrendingUp className="w-16 h-16 text-secondary mx-auto group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                      <DollarSign className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Services Business</h3>
                  <p className="text-lg text-gray-700 mb-4">DOUBLED Sales Revenue</p>
                  <p className="text-accent font-semibold">In just 8 weeks</p>
                </CardContent>
              </Card>
            </FadeInSection>
            <FadeInSection delay={400}>
              <Card className="card-hover hover-lift text-center group">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <Clock className="w-16 h-16 text-accent mx-auto group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse">
                      <Target className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Consulting Business</h3>
                  <p className="text-lg text-gray-700 mb-4">ACCELERATED Sales Cycle</p>
                  <p className="text-accent font-semibold">By 400%</p>
                </CardContent>
              </Card>
            </FadeInSection>
            <FadeInSection delay={600}>
              <Card className="card-hover hover-lift text-center group">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <Award className="w-16 h-16 text-primary mx-auto group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center animate-pulse">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">IT Services Business</h3>
                  <p className="text-lg text-gray-700 mb-4">DOUBLED Valuation</p>
                  <p className="text-accent font-semibold">In 8 months</p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
          <FadeInSection delay={800}>
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 border-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-float"></div>
              <div
                className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-float"
                style={{ animationDelay: "4s" }}
              ></div>
              <CardContent className="p-8 text-center relative z-10">
                <Quote className="w-12 h-12 text-accent mx-auto mb-6 animate-pulse-slow" />
                <blockquote className="text-2xl text-gray-700 italic mb-6">
                  "This one technique just helped us secure a new multi-million Dollar project."
                </blockquote>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src="/images/corey-veverka-headshot.jpg"
                    alt="Corey Veverka, President, TVS Inc, USA"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-primary">Corey Veverka</p>
                    <p className="text-gray-600">President, TVS Inc, USA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-5 rounded-full animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Sales Results?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Join 500+ businesses that have already implemented the Buyer-Friendly Sales Funnel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent-dark px-8 py-4 text-lg hover-lift">
                <Link href="https://calendly.com/d/cpd5-5d4-46q" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg hover-lift bg-transparent"
              >
                <Link href="/programs">View Programs</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
