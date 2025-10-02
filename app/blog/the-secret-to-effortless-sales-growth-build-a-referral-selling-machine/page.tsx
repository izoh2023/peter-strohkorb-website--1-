import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import ModernHeader from "@/components/modern-header"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Higher Conversion Rates",
    description: "Referrals have a 70% higher conversion rate than non-referred leads.",
  },
  { title: "Shorter Sales Cycles", description: "Deals from referrals close up to 50% faster." },
  { title: "Loyal Customers", description: "Referred customers have a 16% higher lifetime value." },
  { title: "Lower Acquisition Costs", description: "Dramatically reduces cost per lead and cost per acquisition." },
  {
    title: "Pre-Vetted, High-Quality Leads",
    description: "Prospects come with built-in credibility, making them more likely to convert.",
  },
  {
    title: "Competitive Differentiation",
    description: "A referral gives you an edge that marketing messages can't match.",
  },
  { title: "Sustainable Growth", description: "Builds a pipeline of warm introductions for predictable revenue." },
]

const steps = [
  {
    title: "Commit",
    description:
      "The sooner you get started building a structured Referral Selling System into your business, the sooner you reap the rewards.",
  },
  {
    title: "Identify Your Ideal Referral Sources",
    description: "Focus on satisfied customers with strong networks who understand and can articulate your value.",
  },
  {
    title: "Choose the Right Time",
    description: "Ask for a referral when your customer expresses satisfaction and is most enthusiastic.",
  },
  {
    title: "Ask the Right Way",
    description: "Use specific, guiding questions instead of vague requests to prompt targeted referrals.",
  },
  {
    title: "Make It Easy",
    description: "Provide a simple, structured way for them to refer you, like a draft email or a one-pager.",
  },
  {
    title: "Track, Measure and Manage Success",
    description: "Use metrics to monitor referrals and their impact on opportunities and revenue.",
  },
  {
    title: "Reward and Recognize",
    description: "Show appreciation with personal thanks, incentives, and by closing the loop on their introduction.",
  },
]

export default function ReferralSellingPage() {
  return (
    <div className="bg-white text-gray-800">
      <ModernHeader />
      <PageHeader
        title="The Secret to Effortless Sales Growth: Build a Referral Selling Machine"
        subtitle="Your “How To” Guide"
        author="Peter Strohkorb"
        date="July 15, 2025"
      />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/confident-businesswoman.jpeg"
              alt="Confident businesswoman smiling"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="prose lg:prose-xl max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Consider Referral Selling?</h2>
            <p>
              Emma, a sales director at a growing SaaS company, had worked tirelessly to build strong relationships with
              her existing customers. She knew they were satisfied and getting great results, yet despite their success,
              new business remained slow. Then, one day, she saw a competitor announce a major deal with a company she
              should have been working with.
            </p>
            <p className="font-semibold">
              The worst part? One of her happiest clients had strong connections to the decision-maker at that company,
              but Emma had never asked them to make an introduction.
            </p>
            <p>
              This is a common mistake. Businesses work hard to close deals but fail to leverage their satisfied
              customers to gain referrals into new accounts. The solution? Stop relying on unstructured ad-hoc
              approaches to referral selling. Get a structured Referral Selling System that expands your reach into
              fresh, high-value accounts.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-12 mb-4">Why Referral Selling Works</h3>
            <p>
              Cold calls and cold emails are becoming less effective by the day. Buyers are sceptical, over-prospected,
              and wary of vendor pitches. However, a referral from someone they trust changes everything, because you
              come into a new account already pre-qualified. It fast-tracks credibility and removes the initial
              resistance that slows down traditional sales approaches.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-12 mb-4">
              Why Referral Selling Is YOUR Unfair Advantage
            </h3>
            <p>Many businesses struggle with referral selling because:</p>
            <ul>
              <li>
                They don’t have a process in place. Asking for referrals happens sporadically rather than as part of a
                structured system.
              </li>
              <li>
                Sales reps fear rejection. They hesitate to ask for referrals because they worry it might damage
                existing relationships.
              </li>
              <li>
                They rely too much on inbound referrals. Businesses often wait for customers to introduce them instead
                of proactively requesting introductions to new prospects.
              </li>
            </ul>
            <p>
              A proper referral system eliminates these roadblocks and makes referrals a consistent, reliable pipeline
              for new business.
            </p>

            <div className="my-12">
              <h2 className="text-3xl font-bold text-center text-primary mb-8">
                The 7 Benefits of a Referral Selling System
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-gray-50">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-primary">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <blockquote className="border-l-4 border-accent bg-yellow-50 p-6 my-8 italic">
              <p className="mb-0">
                👉 A case in point: A consulting firm struggled to break into a niche vertical. They used referral
                selling to leverage existing client relationships and gained five new enterprise accounts in one year -
                all through warm introductions.
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Your “How To” Guide - The 7 Steps To Building Your Effective Referral Selling System
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="flex">
                    <div className="bg-primary text-white flex items-center justify-center p-4 w-16">
                      <span className="text-3xl font-bold">{index + 1}</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-xl text-primary">{step.title}</h4>
                      <p className="text-gray-700 mt-1">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <blockquote className="border-l-4 border-accent bg-yellow-50 p-6 my-8 italic">
              <p className="mb-0">
                👉 Another case in point: A cybersecurity company implemented a structured Referral Selling System and
                saw a 38% increase in new opportunities within three months, at a cost far less than traditional lead
                gen efforts.
              </p>
            </blockquote>

            <h3 className="text-2xl font-bold text-primary mt-12 mb-4">3 Quick Tips for Overcoming Common Barriers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Fear of Asking:</span> Train your sales team to see referrals as a value
                exchange, not a favour.
              </li>
              <li>
                <span className="font-semibold">Inconsistent Effort:</span> Make referral selling a KPI for your team
                and manage their success.
              </li>
              <li>
                <span className="font-semibold">Tracking Issues:</span> Use your CRM system to monitor referrals and
                their impact on new opportunities and revenue.
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  )
}
