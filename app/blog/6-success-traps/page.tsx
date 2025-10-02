import ModernHeader from "@/components/modern-header"
import { FadeInSection } from "@/components/fade-in-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Compass, Share2 } from "lucide-react"

export default function SuccessTrapsPage() {
  const traps = [
    {
      title: "Avoiding a Business Decision Still Counts as a Decision!",
      description:
        "We all hesitate sometimes. But putting off a decision is a decision to keep things exactly as they are—even if that’s not working anymore. Progress isn’t about being 100% ready. It’s about making small, timely decisions that build momentum.",
      takeaway: "Indecision locks in your status quo.",
    },
    {
      title: "When Two Equally Good Options Show Up - Just Pick One!",
      description:
        "It’s easy to get stuck between two solid choices. But if both are aligned with your goals, the difference probably won’t matter as much as you think. What matters more is moving forward. Execution creates clarity.",
      takeaway: "Flip a coin, if you must. Action builds data.",
    },
    {
      title: "Carrying It All Yourself Doesn’t Make You Strong - It Makes You Stuck!",
      description:
        "When every decision routes through you, growth slows down—and so do you. The best businesses are designed to thrive without the founder at the centre of everything. It means building trust, creating systems, and empowering others to lead.",
      takeaway: "Don’t be the business bottleneck.",
    },
    {
      title: "It’s Not Personal Money - It’s Growth Capital!",
      description:
        "Many of us fall into seeing business investments through a personal lens. Business money is not personal money. It’s there to help your business grow. When you invest in the right things—like skills, strategy, systems—it pays you back.",
      takeaway: "Business money is for growth.",
    },
    {
      title: "If You Are the Business, It’s Hard to Let It Grow Beyond You!",
      description:
        "If everything depends on you personally, your business will always be limited by your time and availability. A scalable, valuable business is one that can thrive without you in the spotlight. Shift your role from doer to builder.",
      takeaway: "Finally feeling free.",
    },
    {
      title: "Waiting to Get Help Can Be the Most Expensive Choice of All!",
      description:
        "As business owners, we’re used to figuring things out ourselves. But sometimes, doing it all alone isn’t brave—it’s just unnecessary. Asking for help doesn’t mean you’re failing. It means you’re serious about growth.",
      takeaway: "Don't waste time, or money.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <main>
        <article>
          {/* Article Header */}
          <header className="pt-32 pb-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <FadeInSection>
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-accent font-semibold mb-4">Business Growth Insights</p>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    The 6 Success Traps That No One Tells You About
                  </h1>
                  <p className="text-lg text-gray-600">Written By Peter Strohkorb • July 11, 2025</p>
                </div>
              </FadeInSection>
            </div>
          </header>

          {/* Article Body */}
          <div className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto prose prose-lg lg:prose-xl">
                <FadeInSection>
                  <div className="relative aspect-[4/3] w-full mb-8 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/status-quo-fork-in-road.png"
                      alt="A fork in the road with a sign that says 'status quo'"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-primary">The six business truths you need to know about</h2>
                  <p>
                    Every B2B business owner I meet has something in common: drive. You’ve taken risks, built something
                    meaningful, and made it through challenges that would have stopped others. That’s no small feat.
                  </p>
                  <p>
                    But even the most committed business owners sometimes find themselves stuck—plateaued, overwhelmed,
                    or just unsure about what’s really holding things back. And here’s the thing: the obstacles that
                    limit our business growth are often invisible. No one talks about them. They’re quiet. Subtle. Easy
                    to miss.
                  </p>
                  <p>
                    That’s why I’ve written this article—not to lecture, but to share six common patterns I’ve seen time
                    and again in B2B businesses. These aren’t failures. They’re just natural, human behaviours that
                    become bottlenecks if we don’t spot them in time.
                  </p>
                </FadeInSection>

                {/* Traps List */}
                <div className="space-y-12 mt-12">
                  {traps.map((trap, index) => (
                    <FadeInSection key={index} delay={index * 100}>
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary">
                        <p className="text-sm font-bold text-secondary mb-2 uppercase tracking-wider">
                          {trap.takeaway}
                        </p>
                        <h3 className="text-2xl font-bold text-primary mb-3">
                          {index + 1}. {trap.title}
                        </h3>
                        <p>{trap.description}</p>
                      </div>
                    </FadeInSection>
                  ))}
                </div>

                <FadeInSection>
                  <div className="mt-16 bg-accent/10 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-accent-dark text-center mb-4">
                      Final Thought: You’re Already Doing the Hardest Part
                    </h2>
                    <div className="text-center">
                      <p className="mb-4">
                        This article isn’t about blame or guilt. If you saw yourself in any of these six points, you’re
                        not alone. Awareness is the first step toward progress. You’ve already done the hardest part by
                        being willing to reflect.
                      </p>
                      <p className="font-semibold text-primary">So now, what’s one small shift you could make today?</p>
                    </div>
                  </div>
                </FadeInSection>

                <FadeInSection>
                  <div className="mt-12 text-center space-y-6">
                    <p className="text-lg">
                      If you’d like to talk it through, I’m here. Let’s turn these hard truths into your next big leap!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button asChild size="lg" className="btn-modern gradient-accent text-white">
                        <Link href="/schedule" className="inline-flex items-center space-x-2">
                          <Compass className="w-5 h-5" />
                          <span>Book a Quick Call</span>
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg">
                        <Share2 className="w-5 h-5 mr-2" />
                        Recommend this article
                      </Button>
                    </div>
                  </div>
                </FadeInSection>

                <FadeInSection>
                  <div className="mt-16 text-center">
                    <Button asChild size="lg" variant="ghost">
                      <Link
                        href="/blog"
                        className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary"
                      >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Blog</span>
                      </Link>
                    </Button>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
