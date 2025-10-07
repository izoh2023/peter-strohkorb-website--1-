import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Lightbulb, DollarSign, Lock, Gift, Calendar, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import ModernHeader from "@/components/modern-header"
import { FadeInSection } from "@/components/fade-in-section"

export default function SalesMasterRoundtablePage() {
  const reasons = [
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "It’s Time-Effective",
      description: "Just one hour per month, online.",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "It’s Interactive",
      description: "Peer group discussions on your sales-related challenges.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "It’s Insightful",
      description: "A new sales topic each month (with a hand-selected sales expert guest speaker).",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-accent" />,
      title: "It’s Great Value",
      description: "Only US$197 on a 3-monthly subscription, bring a friend for free.",
    },
    {
      icon: <Lock className="w-8 h-8 text-accent" />,
      title: "It’s Safe",
      description: "Everyone can speak their mind, openly and freely as the Roundtables are NOT RECORDED.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "It’s Actionable",
      description:
        "Learn something new to take back to your business with the latest sales insights, tips and techniques.",
    },
    {
      icon: <Gift className="w-8 h-8 text-accent" />,
      title: "It’s Fabulous!",
      description: "Attendees receive a summary of the discussion after each Roundtable.",
    },
  ]

  const topics = [
    {
      month: "January",
      title: '"Jobless but Not Speechless": The Truth About Sales Job Hunting',
      description: "An open and interactive discussion on this important subject in sales.",
    },
    {
      month: "February",
      title: '"The CRO Conundrum": What Is The CRO\'s REAL Role?',
      description: "w/ expert guest speaker Warren Zenna, Founder and CEO at The CRO Collective, USA.",
    },
    {
      month: "March",
      title: '"Mastering Referral Selling"',
      description: "w/ expert guest speaker Derek Morgan, Head of Affiliates & Partnerships at ReferIT, Australia",
    },
    {
      month: "April",
      title: '"The Hot Seat"',
      description:
        "Back by popular demand. Bring your burning sales questions, challenges, or opportunities for the group to workshop and solve, right there and then. Live!",
    },
    {
      month: "May",
      title: '"What\'s Possible with Ai for Sales Growth"',
      description: "with expert guest speaker Lucas Meadowcroft, CEO, Crofti Ai, Australia.",
      summaryLink:
        "https://static1.squarespace.com/static/62dab60e17e29179c0433792/t/681d5949d4025e3f5ba9817b/1746753867383/The+Sales+Masters+Roundtable+Summary+May+2025+-+What%27s+Possible+With+Ai.pdf",
    },
    {
      month: "June",
      title: '"More Pipeline from Your Website"',
      description: "with expert guest speaker Terry Wilson, CEO, Chat Metrics, Australia.",
      summaryLink:
        "https://docs.google.com/document/d/19dtVebKeRAfiBgVSNJkJu8mVJ8TzD9Kf/edit?usp=sharing&ouid=109878350311066705609&rtpof=true&sd=true",
    },
    {
      month: "July",
      title: '"LinkedIn Sales Navigator: Secrets Revealed"',
      description: "with expert guest speaker Greg Burgoyne, Founder, Client Acquisition Systems, and LinkedIn expert",
      summaryLink:
        "https://docs.google.com/document/d/1zCuFNJQxfcUqT3VMboBXrX5uTQsWQ43y/edit?usp=sharing&ouid=106280256984024101930&rtpof=true&sd=true",
    },
    {
      month: "August",
      title: '"The Mind Boggling Advances In AI for B2B Sales"',
      description: "with expert guest speaker Isaac Cohen, CEO, Many Mangoes",
      summaryLink: "https://docs.google.com/document/d/1CMM0iYbnGDGf9APR7Q3NNkFjgVZaoiRB/edit?usp=drive_link&ouid=106280256984024101930&rtpof=true&sd=true",
    },
    {
      month: "September",
      title: '"The Hot Seat"',
      description: "Bring your sales questions, challenges, or opportunities for the group to workshop and solve, right there and then. Live!",
      summaryLink: "https://docs.google.com/document/d/1gIdJVX7Chk3IbTqmIXkiLm36VBt3hPvG/edit?usp=drive_link&ouid=105641804438849414446&rtpof=true&sd=true",
    },
    {
      month: "October",
      title: '"Making Business Change Successful"',
      description:
        "Learn the key strategies and frameworks for successfully implementing organizational change initiatives and driving adoption.",
    },
    {
      month: "November",
      title: '"Beyond The Obvious: Discover Your Real Value Proposition!"',
      description:
        "Uncover and articulate your true competitive differentiators that resonate with buyers and drive sales success.",
    },
    {
      month: "December",
      title: '"The Crystal Ball: The Shape Of Sales In 2026"',
      description: "with acclaimed international b2b sales expert Peter Strohkorb",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <header className="gradient-surface py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">The Sales Master Roundtable</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-secondary tracking-wide bg-accent/20 py-4 px-6 rounded-lg inline-flex items-center gap-x-3">
                <Lightbulb className="w-8 h-8" />
                <span>A monthly deep-dive into the sales topics that matter most.</span>
              </p>
            </div>
          </FadeInSection>
        </div>
      </header>

      <main>
        {/* What is it Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInSection>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-primary mb-6">What Is The Sales Masters Roundtable?</h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    It's a Roundtable discussion on a different sales topic each month. Usually, we bring in a
                    specialist expert guest speaker, followed by Q&A and a moderated discussion where everybody
                    contributes. The hour just flies by.
                  </p>
                </div>
              </FadeInSection>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <FadeInSection delay={100}>
                  <Card className="card-hover hover-lift h-full">
                    <CardContent className="p-8">
                      <Quote className="w-8 h-8 text-accent mb-4" />
                      <p className="text-lg text-gray-800">
                        “I'm so glad to see that others are having the same challenges as me. I now know I'm not alone,
                        that it's not just me.”
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>
                <FadeInSection delay={200}>
                  <Card className="card-hover hover-lift h-full">
                    <CardContent className="p-8">
                      <Quote className="w-8 h-8 text-accent mb-4" />
                      <p className="text-lg text-gray-800">
                        “I always learn something new from the sessions that I can bring back to my team and to my
                        business.”
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              </div>

              <FadeInSection delay={300}>
                <div className="text-center bg-green-50 border-l-4 border-green-500 p-8 rounded-r-lg">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Remember, there are NO RECORDINGS!</h3>
                  <p className="text-lg text-green-700">You’ll need to be there LIVE to get the value!</p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Membership CTA - Prominent Section */}
        <section className="py-24 gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-90"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <FadeInSection>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Join The Sales Masters Roundtable!</h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
                  <p className="text-2xl md:text-3xl font-bold mb-4 text-accent">Only $197 (plus tax) for 3 months</p>
                  <p className="text-xl mb-6 opacity-90">
                    Get access to monthly expert sessions, peer discussions, and actionable insights that will transform
                    your sales approach.
                  </p>
                  <div className="flex justify-center items-center">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-primary font-bold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
                    >
                      <a
                        href="https://billing.peterstrohkorb.com/b/5kA9E8gNm7lS0jSaEX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Become a Member Now
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                <p className="text-lg opacity-80 max-w-2xl mx-auto">
                  Join sales professionals from around the world who are already transforming their results through our
                  monthly roundtables.
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Zero-Cost Ticket CTA */}
        <section className="py-20 gradient-surface">
          <div className="container mx-auto px-4 text-center">
            <FadeInSection>
              <h2 className="text-4xl font-bold text-primary mb-4">Check It Out For Yourself!</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                Join ONE Roundtable Session at Zero Cost! So you can experience the value personally, and make an
                informed decision on whether to join as a member.
              </p>
              <Button size="lg" className="btn-modern gradient-accent text-white px-8 py-4 text-lg hover-lift">
                <Link href="/schedule">Yes, I Want My Zero-Cost Roundtable Ticket!</Link>
              </Button>
            </FadeInSection>
          </div>
        </section>

        {/* 7 Reasons Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">7 Reasons to Join</h2>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 max-w-7xl mx-auto mb-12">
              {reasons.map((reason, index) => (
                <FadeInSection
                  key={index}
                  delay={index * 100}
                  className={index < 3 ? "lg:col-span-4" : "lg:col-span-3"}
                >
                  <Card className="card-hover hover-lift h-full text-center">
                    <CardContent className="p-8">
                      <div className="mb-4">{reason.icon}</div>
                      <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
                      <p className="text-gray-700">{reason.description}</p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
            <FadeInSection delay={reasons.length * 100}>
              <div className="text-center bg-secondary/10 p-6 rounded-lg max-w-2xl mx-auto">
                <p className="text-lg font-semibold text-secondary">
                  PLUS: Bring two new attendees to a Roundtable, and you all attend for free!
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-20 gradient-surface">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Roundtable Topics For 2025</h2>
              </div>
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <ul className="space-y-6">
                    {topics.map((topic, index) => (
                      <li key={index} className="flex items-start space-x-4 pb-6 border-b last:border-b-0">
                        <div className="flex-shrink-0 w-24 text-center">
                          <div className="text-lg font-bold text-primary">{topic.month}</div>
                          <Calendar className="w-6 h-6 text-accent mx-auto mt-1" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-secondary">{topic.title}</h3>
                          <p className="text-gray-700 mt-1">{topic.description}</p>
                          {topic.summaryLink && (
                            <Link
                              href={topic.summaryLink}
                              className="text-accent font-semibold hover:underline mt-2 inline-block"
                            >
                              See the Summary <ArrowRight className="inline w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </section>
      </main>
    </div>
  )
}
