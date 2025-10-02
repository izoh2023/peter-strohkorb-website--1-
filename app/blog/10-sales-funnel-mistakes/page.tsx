import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { FadeInSection } from "@/components/fade-in-section"
import ModernHeader from "@/components/modern-header"
import { SocialShare } from "@/components/social-share"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "10 Sales Funnel Mistakes That Are Hiding In Plain Sight",
  description:
    "Discover the common pitfalls that are hiding in your sales funnel and how to fix them to improve your B2B sales performance.",
  keywords: ["sales funnel mistakes", "B2B sales", "sales competencies", "leaky sales funnel", "sales process"],
  openGraph: {
    title: "10 Sales Funnel Mistakes That Are Hiding In Plain Sight",
    description: "Discover the common pitfalls that are hiding in your sales funnel and how to fix them.",
    images: ["/images/a-leaky-sales-funnel.png"],
  },
  twitter: {
    title: "10 Sales Funnel Mistakes That Are Hiding In Plain Sight",
    description: "Discover the common pitfalls that are hiding in your sales funnel and how to fix them.",
    images: ["/images/a-leaky-sales-funnel.png"],
  },
}

export default function SalesFunnelMistakesPage() {
  return (
    <div className="bg-white">
      <ModernHeader />
      <PageHeader
        title="10 Sales Funnel Mistakes That Are Hiding In Plain Sight"
        subtitle="How to fix the leaks in your sales funnel"
      />

      <main className="py-12">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <FadeInSection>
              <div className="mb-8">
                <Image
                  src="/images/a-leaky-sales-funnel.png"
                  alt="A leaky sales funnel diagram showing where prospects are lost"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="prose lg:prose-xl max-w-none text-gray-800">
                <p className="lead">
                  Did you know there are ten sales competencies you need to master to run a truly buyer-friendly
                  business? Most businesses only focus on a few, leaving significant gaps in their sales funnel where
                  potential customers leak out. Let's explore these common pitfalls and how you can plug the leaks.
                </p>

                <h2>The Disconnect Between Sales and Modern Buyers</h2>
                <p>
                  The way customers buy has changed dramatically, but many sales teams are still using outdated
                  playbooks. They focus on their product, their process, and their pitch, forgetting that the buyer is
                  in control. This disconnect leads to a "leaky" sales funnel where opportunities are lost at every
                  stage.
                </p>

                <h2>The 10 Hidden Leaks in Your Sales Funnel</h2>
                <p>
                  The Buyer-Friendly Sales Funnel is built on 10 core competencies. A weakness in any of these areas
                  creates a leak. Here’s where most businesses go wrong:
                </p>
                <ol>
                  <li>
                    <strong>No Clear Brand Promise:</strong> Buyers don't know what it's like to be your customer.
                  </li>
                  <li>
                    <strong>Confusing Product Descriptions:</strong> If buyers don't understand what you sell, they walk
                    away.
                  </li>
                  <li>
                    <strong>A Weak Value Proposition:</strong> You fail to answer "Why should I buy from you and not
                    your competitor?"
                  </li>
                  <li>
                    <strong>Undefined Ideal Buyers (ICP):</strong> Selling to everyone means you're effectively selling
                    to no one.
                  </li>
                  <li>
                    <strong>Not Knowing Where to Find Buyers:</strong> You're invisible to your ideal customers.
                  </li>
                  <li>
                    <strong>Amushing Instead of Engaging:</strong> Your outreach is seen as spammy and self-serving.
                  </li>
                  <li>
                    <strong>No Strategy to Beat Competitors:</strong> You can't differentiate or create doubt about
                    alternatives.
                  </li>
                  <li>
                    <strong>A Missing Proposal Process:</strong> You send a proposal as soon as asked, losing all
                    leverage.
                  </li>
                  <li>
                    <strong>A Poor Buying Experience:</strong> The process is difficult, turning buyers away.
                  </li>
                  <li>
                    <strong>No System for Referrals:</strong> You're missing out on the easiest, warmest leads.
                  </li>
                </ol>

                <div className="my-8 p-6 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <h3>How Buyer-Friendly is Your Sales Funnel?</h3>
                  <p>
                    Take our free 2-minute self-assessment to identify the biggest leaks in your sales funnel and get
                    actionable advice on how to fix them.
                  </p>
                  <Button asChild className="mt-4 btn-modern gradient-accent text-white">
                    <Link
                      href="https://peterstrohkorb.com/sales-assessment-test"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Take the Free Assessment
                    </Link>
                  </Button>
                </div>

                <h2>Plugging the Leaks for Sustainable Growth</h2>
                <p>
                  Fixing these leaks isn't about working harder; it's about working smarter. By systematically
                  addressing each of these 10 competencies, you can build a robust, scalable sales process that aligns
                  with how modern customers actually make purchasing decisions. This not only increases revenue but also
                  shortens sales cycles and improves forecast accuracy.
                </p>
                <p>Ready to transform your sales approach? It starts with understanding where you stand.</p>
              </div>
            </FadeInSection>
            <SocialShare />
            <div className="text-center mt-12">
              <Button asChild variant="outline">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
