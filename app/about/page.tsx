import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"
import ModernHeader from "@/components/modern-header"
import { FadeInSection } from "@/components/fade-in-section"

export default function AboutPage() {
  const companies = [
    { src: "/images/logo-sony.png", alt: "Sony Logo", name: "Sony", role: "" },
    {
      src: "/images/logo-canon.png",
      alt: "Canon Logo",
      name: "Canon",
      role: "Multiple Executive Roles in People, Marketing and Sales Leadership",
    },
    { src: "/images/logo-3m.png", alt: "3M Logo", name: "3M", role: "New Business Development Manager" },
    { src: "/images/logo-csc.png", alt: "CSC Logo", name: "CSC", role: "Senior Sales Role" },
    {
      src: "/images/logo-dell.png",
      alt: "Dell Logo",
      name: "Dell",
      role: "IT Managed Services Sales APJ",
    },
  ]
  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeInSection>
              <h1 className="text-5xl md:text-6xl font-black mb-4">About Peter Strohkorb</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                25+ Years of Sales Excellence with Global Companies, Driving Tangible Growth for Businesses Like Yours.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Peter's Story */}
              <FadeInSection>
                <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                  <div>
                    <img
                      src="/images/peter-strohkorb-portrait.jpg"
                      alt="Peter Strohkorb, Sales Advisory Expert"
                      className="w-full rounded-lg shadow-xl hover-lift"
                    />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-primary mb-6">Meet Peter Strohkorb</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      During 25 years in senior sales and marketing roles at Sony, Canon, 3M, CSC and Dell, Peter
                      observed that traditional selling practices were becoming less and less effective. Modern buyers
                      had changed, but sales approaches hadn't evolved to match.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      This realization led Peter to develop his revolutionary Permission-Based Selling strategy in 2017,
                      which taught sellers how to earn the right to sell before pitching their buyers.
                    </p>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Years of further development, testing, and fine-tuning brought an even more advanced solution: The
                      Buyer-Friendly Sales Funnel - a proven framework that addresses the specific competencies needed
                      to engage buyers at every critical touchpoint.
                    </p>
                    <Button size="lg" className="btn-modern gradient-accent text-white hover-lift">
                      <Link href="https://calendly.com/d/cpd5-5d4-46q" target="_blank" rel="noopener noreferrer">
                        Work With Peter
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeInSection>

              {/* Industry Connections */}
              <FadeInSection delay={200}>
                <div className="mb-20">
                  <h2 className="text-3xl font-bold text-primary text-center mb-12">Industry Connections</h2>
                  <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Peter maintains strong relationships with leading technology and business platforms, staying current
                    with the latest trends and innovations in sales and marketing.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <FadeInSection delay={100}>
                      <Card className="overflow-hidden card-hover hover-lift">
                        <CardContent className="p-0">
                          <img
                            src="/images/peter-at-salesforce.jpg"
                            alt="Peter Strohkorb at Salesforce"
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2">Salesforce Partnership</h3>
                            <p className="text-gray-600">
                              Collaborating with Salesforce to understand the latest CRM innovations and sales
                              automation technologies.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </FadeInSection>
                    <FadeInSection delay={200}>
                      <Card className="overflow-hidden card-hover hover-lift">
                        <CardContent className="p-0">
                          <img
                            src="/images/peter-at-linkedin.jpg"
                            alt="Peter Strohkorb at LinkedIn"
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-2">LinkedIn Collaboration</h3>
                            <p className="text-gray-600">
                              Working with LinkedIn to leverage social selling strategies and professional networking
                              for sales success.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </FadeInSection>
                  </div>
                </div>
              </FadeInSection>

              {/* Experience */}
              <FadeInSection delay={400}>
                <div className="mb-20">
                  <h2 className="text-3xl font-bold text-primary text-center mb-12">Corporate Experience</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
                    {companies.map((company, index) => (
                      <FadeInSection key={company.name} delay={index * 100}>
                        <Card className="text-center h-full card-hover hover-lift">
                          <CardContent className="p-6 flex flex-col items-center justify-center">
                            <div className="h-16 flex items-center justify-center mb-4">
                              <img
                                src={company.src || "/placeholder.svg"}
                                alt={company.alt}
                                className="max-h-full max-w-full object-contain transition-all duration-300"
                              />
                            </div>
                            <h3 className="font-semibold text-primary">{company.name}</h3>
                            <p className="text-sm text-gray-600">{company.role}</p>
                          </CardContent>
                        </Card>
                      </FadeInSection>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Achievements */}
              <FadeInSection delay={600}>
                <div className="mb-20">
                  <h2 className="text-3xl font-bold text-primary text-center mb-12">Key Achievements</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        icon: <Award className="w-12 h-12 text-accent mx-auto mb-4" />,
                        value: "25+",
                        label: "Years of Experience",
                      },
                      {
                        icon: <Users className="w-12 h-12 text-accent mx-auto mb-4" />,
                        value: "500+",
                        label: "Businesses Helped",
                      },
                      {
                        icon: <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />,
                        value: "400%",
                        label: "Avg. Sales Cycle Improvement",
                      },
                      {
                        icon: <Globe className="w-12 h-12 text-accent mx-auto mb-4" />,
                        value: "2011",
                        label: "Advisory Founded",
                      },
                    ].map((achievement, index) => (
                      <FadeInSection key={achievement.label} delay={index * 100}>
                        <Card className="text-center h-full card-hover hover-lift">
                          <CardContent className="p-8">
                            {achievement.icon}
                            <h3 className="text-3xl font-bold text-primary mb-2">{achievement.value}</h3>
                            <p className="text-gray-600">{achievement.label}</p>
                          </CardContent>
                        </Card>
                      </FadeInSection>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              {/* Philosophy */}
              <FadeInSection delay={800}>
                <div className="gradient-surface rounded-lg p-8 md:p-12 text-center card-hover hover-lift">
                  <h2 className="text-3xl font-bold text-primary mb-6">Peter's Philosophy</h2>
                  <blockquote className="text-3xl text-gray-800 italic mb-6 text-gradient">
                    "Sell Smarter, Not Harder!"
                  </blockquote>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Modern buyers have changed their buying behavior, but most sales approaches haven't evolved to
                    match. Success comes from understanding the buyer's journey and earning the right to sell at every
                    touchpoint, rather than pushing traditional sales tactics that no longer work.
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>
      {/* Footer is global */}
    </div>
  )
}
