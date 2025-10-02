import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, TrendingUp, Lightbulb, Shield, MessageSquare } from "lucide-react"
import Link from "next/link"
import ModernHeader from "@/components/modern-header"
import { FadeInSection } from "@/components/fade-in-section"

export default function CompetenciesPage() {
  const competencies = [
    {
      number: 1,
      title: "Have A Brand Promise",
      icon: <Target className="w-8 h-8" />,
      description: "This is not something esoteric, nor is it trivial.",
      content:
        "When a prospect decides which vendor to contact, one of the criteria they use is customer experience. They'll ask themselves: 'What's it like to be their customer?'. Very few sellers mention customer experience on their website or in their collateral. This is where your business can stand out - it's a huge differentiator.",
      example:
        "Together, we'll develop a brand promise that clearly and succinctly communicates what kind of customer experience your buyers can expect from your business.",
      benefits: [
        "Expertise: 'They know what they're doing' - I.e. they can help me",
        "Speed: 'They won't dillydally around' - I.e. they won't waste my time",
        "Results: 'They'll deliver' - I.e. they'll bring us success",
      ],
    },
    {
      number: 2,
      title: "Have Very Clear Products and Services Descriptions",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "An old saying goes: 'A confused mind says No'.",
      content:
        "When buyers don't understand what you're selling, they will not say so. Instead, they will make some excuse to just walk away and never shortlist you as a potential vendor: 'Thank you, it's not what we're looking for.'",
      example:
        "So, it is super important that you make it easy for your buyers to understand exactly what it is they are getting from your business. Otherwise, you'll lose the opportunity before you've even had a chance to engage them.",
      benefits: [
        "Eliminate buyer confusion",
        "Increase shortlist inclusion rates",
        "Improve initial engagement quality",
      ],
    },
    {
      number: 3,
      title: "A Truly Differentiating Value Proposition",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "What makes your business different from that of your competitors?",
      content:
        "Many business leaders THINK they have a unique value proposition (UVP) that differentiates their business. Unfortunately, most businesses don't. Even worse, many focus on what the business does, i.e. on its products and services. However, what potential buyers want to know most is how your business is DIFFERENT from the others, and what's in it for them.",
      example:
        "Your UVP needs to truly differentiate your business from your competitors' and make you unique in the eyes of your buyers. Of course, your UVP needs to be real, and you need to be able to back up your UVP with facts.",
      benefits: [
        "Stand out from competitors",
        "Focus on buyer benefits, not features",
        "Create compelling differentiation",
      ],
    },
    {
      number: 4,
      title: "Know Your Ideal Buyers",
      icon: <Users className="w-8 h-8" />,
      description: "There is little point in selling to the wrong kind of customers.",
      content:
        "You'll waste a whole lot of time, effort and money, if you do. So, it's critical that you define your ideal customer persona (ICP) before going out to promote your business and advertise your offerings.",
      example:
        "Narrow down your ICP by specifying at least 7 criteria, such as your ideal buyers' location, industry, business size, their job title, and even their personal ambitions, so you can target them accurately and effectively.",
      benefits: ["Save time and resources", "Improve targeting accuracy", "Increase conversion rates"],
    },
    {
      number: 5,
      title: "Know Where To Find Your Buyers",
      icon: <Target className="w-8 h-8" />,
      description: "Now that you know WHO your ideal buyers are, it is vital for you to know WHERE they are.",
      content:
        "Know where your ideal customers are, what they are paying attention to, either online or physically in-person, so you can reach out to them effectively.",
      example:
        "Understanding the channels, platforms, and environments where your buyers spend their time allows for strategic and efficient outreach.",
      benefits: ["Efficient resource allocation", "Higher response rates", "Better ROI on marketing efforts"],
    },
    {
      number: 6,
      title: "Know How To Engage (Not Ambush) Your Buyers",
      icon: <MessageSquare className="w-8 h-8" />,
      description: "This is the most critical competency in the whole Buyer-Friendly Sales Funnel.",
      content:
        "Unfortunately, most sellers still use lazy 'Spray & Pray' approaches to prospect engagement. Sending thousands of automated sales messages in the hope of catching a prospect just as they are looking for what you're selling.",
      example:
        "At Peter Strohkorb Sales Advisory, we make a huge distinction between 'reaching out' to our ideal buyers, versus 'engaging them in a business conversation'. We create a 'Lean-Forward Moment', i.e. literally make your prospects lean forward and take an active interest in what you just told them.",
      benefits: ["Create meaningful conversations", "Avoid being seen as spam", "Generate genuine interest"],
    },
    {
      number: 7,
      title: "Knowing How To Fend Off Your Competitors",
      icon: <Shield className="w-8 h-8" />,
      description: "Very rarely will your business be the only one in the race for a deal.",
      content:
        "Instead, you'll have to beat any number of other businesses that are also competing for the same prize. We help our clients to discover what they can do to end up the last vendor standing, the one that wins the deal.",
      example:
        "We teach our clients a proven method that kills your competitors dead, yet without badmouthing them. Instead, our clients achieve this by sowing fear and doubt about your competitors by proactively raising the one subject that your competitors will not want to touch.",
      benefits: ["Win more competitive deals", "Position against competitors ethically", "Become the preferred vendor"],
    },
    {
      number: 8,
      title: "A Structured Proposal Process",
      icon: <CheckCircle className="w-8 h-8" />,
      description:
        "Did you know? Almost the worst thing a seller can do when being asked to provide a sales proposal is… to provide a sales proposal!",
      content:
        "Most businesses have a sales process. However, very few have a sales proposal process, even though it gives them a huge unfair advantage. We teach our clients this very effective technique.",
      example:
        "This one technique just helped us secure a new multi-million Dollar project. — Corey Veverka, President, TVS Inc, USA",
      benefits: ["Gain unfair competitive advantage", "Increase proposal win rates", "Secure larger deals"],
    },
    {
      number: 9,
      title: "A Superior Buying Experience",
      icon: <TrendingUp className="w-8 h-8" />,
      description:
        "Give your buyers such a great pre, during, and post-purchase experience that they come back for more.",
      content:
        "A great pre-during- and post-purchase experience is more than just a 'nice to have'. In fact, it will be a huge boon for your business as it turns first-time buyers into repeat customers, and it turns repeat customers into advocates who refer new sales opportunities to you.",
      example:
        "Our clients learn the 7 simple, yet effective, customer experience principles to use in their business.",
      benefits: ["Increase customer lifetime value", "Generate repeat business", "Create customer advocates"],
    },
    {
      number: 10,
      title: "An Effective Referral Selling System",
      icon: <Users className="w-8 h-8" />,
      description: "Referrals make the best leads.",
      content:
        "According to IDC, 73% of buyer executives prefer to work with sales professionals who were referred by someone they know. What could be easier than engaging with someone who has already been pre-qualified by someone whose opinion you trust?",
      example:
        "Very few sellers have a structured Referral Selling System that helps them to manage and measure their referrals. Most sellers ask for referrals only sporadically, only when they think of it.",
      benefits: ["Easiest way to gain new leads", "Higher conversion rates", "Pre-qualified prospects"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                The 10 Modern Selling <span className="text-gradient">Competencies</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Master these competencies to engage buyers at every critical touchpoint and transform your sales results
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {competencies.map((competency, index) => (
              <FadeInSection key={competency.number} delay={index * 100}>
                <Card className="card-hover hover-lift overflow-hidden">
                  <div className="grid md:grid-cols-12 gap-0">
                    <div className="md:col-span-1 gradient-primary flex items-center justify-center p-6">
                      <div className="text-4xl font-black text-white">{competency.number}</div>
                    </div>
                    <div className="md:col-span-11 p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="text-accent mt-1">{competency.icon}</div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{competency.title}</h2>
                          <p className="text-lg text-accent font-semibold mb-4">{competency.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <p className="text-gray-700 mb-6 leading-relaxed">{competency.content}</p>
                          <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                            <p className="text-gray-800 font-medium">{competency.example}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h4>
                          <ul className="space-y-3">
                            {competency.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-20 gradient-surface">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Master These Competencies?</h2>
              <p className="text-xl text-gray-700 mb-12">
                The program duration can take as little as an hour for something specific to several months for a
                strategic sales transformation.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="card-hover hover-lift">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Implementation</h3>
                    <p className="text-gray-700 mb-6">
                      Learn the basics of Buyer-Friendly Selling in 10 weeks to 6 months
                    </p>
                    <Button className="btn-modern gradient-accent text-white hover-lift">
                      <Link href="/coaching">Sales Coaching & Training</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="card-hover hover-lift">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Transformation</h3>
                    <p className="text-gray-700 mb-6">
                      Complete sales transformation with ongoing support and guidance
                    </p>
                    <Button className="btn-modern gradient-accent text-white hover-lift">
                      <Link href="/clarity-sessions">Sales Clarity Sessions</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-green-50 p-8 rounded-lg border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-4">100% Satisfaction Guarantee</h3>
                <p className="text-green-700 mb-4">
                  At Peter Strohkorb Sales Advisory we stand behind our quality of service. So you can buy from us in
                  complete confidence.
                </p>
                <p className="text-green-700 font-semibold">
                  If after your first session with Peter Strohkorb you don't experience value, you can cancel the rest
                  of the program, and we'll give you a full refund.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Sales Transformation Today</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Join hundreds of businesses that have already implemented these competencies and seen dramatic
              improvements in their sales performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 px-8 py-4 text-lg hover-lift">
                <Link href="/schedule">Book Free Consultation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 text-lg hover-lift bg-transparent"
              >
                <Link href="/programs">View All Programs</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
