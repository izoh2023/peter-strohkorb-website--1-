import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import ModernHeader from "@/components/modern-header"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

const footerNote =
  "based on “Managing Top-Line Computer Applications”; Stephen P. Hindman & John J. Sviokla; Harvard Business School Publication # 9-192-098, rev 7/9/92"

export default function BlogPostPage() {
  return (
    <div className="bg-white">
      <ModernHeader />
      <PageHeader
        title="Shock! Discounting Just 5% Can Hurt Your Bottom Line By a Massive 50%!"
        subtitle="Written By Peter Strohkorb"
      />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/businessman-horrified.png" alt="Horrified businessman" fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              This article is for Executives who still think that discounting is a way to grow a business. Be prepared
              to be amazed. Here we go…
            </p>

            <h2 className="text-3xl font-bold mt-12">Our Base Case Scenario.</h2>
            <p>
              The first image below illustrates our base case in this scenario. I have purposely kept the numbers simple
              to make it easy to get the point. In this base case scenario, we assume that you sell a product or service
              for $100, while it costs you $60 to produce.
            </p>
            <p>
              Your gross profit therefore is: $100 - $60 = $40. Then we subtract your fixed costs, admin and direct
              selling expenses, and end up with your base case Profit before Tax (PBT) of $10.
            </p>
            <div className="my-8">
              <Image
                src="/images/cost-saving-model-base-case.jpeg"
                alt="Base Case P&L Performance Impact"
                width={800}
                height={1200}
                className="mx-auto rounded-lg shadow-md"
              />
              <p className="text-xs text-gray-500 mt-2 text-center italic">{footerNote}</p>
            </div>
            <p>
              So, in this base case scenario, on sales revenue of $100 you make $10 profit before tax. So far, so good.
              Below, we will now make three different adjustments, each by just 5%, to illustrate how you can achieve
              dramatically different financial outcomes, depending on which lever you pull. Here we go:
            </p>

            <h2 className="text-3xl font-bold mt-12">Lever 1: Reducing Your Direct Selling Expenses.</h2>
            <p>
              Based on the base case scenario above, the table below shows the impact on your bottom line if you reduce
              direct selling expenses by 5%.
            </p>
            <div className="my-8">
              <Image
                src="/images/cost-saving-model-direct-selling-expenses.jpeg"
                alt="P&L Impact of reducing direct selling expenses by 5%"
                width={800}
                height={1200}
                className="mx-auto rounded-lg shadow-md"
              />
              <p className="text-xs text-gray-500 mt-2 text-center italic">{footerNote}</p>
            </div>
            <p>
              As you can see, reducing direct selling expenses by 5% improves profitability by only 3%. The improvement
              to your bottom line is only minimal. In fact, to me, this does not seem a hugely effective way to improve
              bottom line results.
            </p>

            <h2 className="text-3xl font-bold mt-12">Lever 2. Increasing Sales Revenue.</h2>
            <p>
              In this scenario, I make a different adjustment, also by just 5%, but in the other direction. Here, I will
              illustrate what happens when you increases your sales revenue by just 5%. In other words, what happens to
              your bottom line when you sell 5% more? Here it is…
            </p>
            <div className="my-8">
              <Image
                src="/images/cost-saving-model-lever-2.jpeg"
                alt="P&L Impact of increasing sales volume by 5%"
                width={800}
                height={1200}
                className="mx-auto rounded-lg shadow-md"
              />
              <p className="text-xs text-gray-500 mt-2 text-center italic">{footerNote}</p>
            </div>
            <p>
              In this scenario the business is now selling $105, i.e. $5 more than in our base case scenario. Leaving
              all other expenses the same as in our base case and just increasing your sales revenue by 5% makes a huge
              difference: Your bottom line improves by a massive 20%. That's a four-fold profit multiplier! But there's
              more: Something incredible happens when you do something perhaps a little counter-intuitive...
            </p>

            <h2 className="text-3xl font-bold mt-12">Lever 3. Raising Prices.</h2>
            <p>Look at what happens in this scenario if you were to lift your prices by just 5%.</p>
            <div className="my-8">
              <Image
                src="/images/cost-saving-model-lever-3.jpeg"
                alt="P&L Impact of raising prices by 5%"
                width={800}
                height={1200}
                className="mx-auto rounded-lg shadow-md"
              />
              <p className="text-xs text-gray-500 mt-2 text-center italic">{footerNote}</p>
            </div>
            <p>The result can be a 50% improvement to your bottom line!</p>

            <h2 className="text-3xl font-bold mt-12 text-red-600">But: Discounting is a Huge Profit Killer!</h2>
            <p>The same dramatic effect above works also in reverse!</p>
            <div className="my-8">
              <Image
                src="/images/cost-saving-model-discounting.jpeg"
                alt="P&L Impact of discounting by 5%"
                width={800}
                height={1200}
                className="mx-auto rounded-lg shadow-md"
              />
              <p className="text-xs text-gray-500 mt-2 text-center italic">{footerNote}</p>
            </div>
            <p>
              You see, discounting price by 5%, results in a bottom line profit result of just $5, which is a 50%
              DECREASE to your bottom line, compared to our base case scenario!
            </p>
            <Card className="bg-red-50 border-red-200 my-8">
              <CardContent className="p-6 flex items-start">
                <AlertTriangle className="h-8 w-8 text-red-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-red-700">Discounting is a huge profit killer!</h4>
                  <p className="text-red-600">Discounting by 5% reduces your bottom line profit by a massive 50%.</p>
                </div>
              </CardContent>
            </Card>
            <p>
              So, think twice about cutting costs or discounting to win more sales, when you can lift sales and grow the
              business instead. Time You Review Your Sales Fundamentals.
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}
