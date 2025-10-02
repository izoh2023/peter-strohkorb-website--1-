import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Finally, insights on what sellers and marketers can do to improve marketing qualified lead volume, build stronger and better pipelines, and accelerate sales outcomes. Well done, Peter - you’ve done it again!",
    author: "Bill Sisson",
    title: "APAC VP, Gartner Sales, Marketing, Customer Service & Communication Practice",
  },
  {
    quote:
      "I think you’ve produced an eminently practical approach. It tackles head-on a problem that most people try to resolve with “communicate better” platitudes.",
    author: "Neil Rackham",
    title: "Global expert and father of modern sales methodologies, such as SPIN selling and Challenger",
  },
  {
    quote:
      "I recommend this book to any CEO or senior executive who wishes to maximize the combined power of their Sales and Marketing functions.",
    author: "Dr. David Cooke",
    title: "Managing Director at Konica Minolta Business Solutions",
  },
  {
    quote: "Peter’s insights and approach deliver at every level.",
    author: "Tony Hughes",
    title: "International best-selling author and sales leadership coach",
  },
  {
    quote:
      "Even for experienced business advisors Peter will generate important tips and better approaches. I have no hesitation in recommending Peter to help you improve the effectiveness of your new business and sales programs.",
    author: "John Scutt",
    title: "Founder and CEO, Lindfield Partners, Australia",
  },
]

export default function PetersBooksPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Breadcrumbs and Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center text-sm text-gray-500 mb-2">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span>Peter’s Books</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Peter Strohkorb’s Books</h1>
        </div>

        {/* Books Section */}
        <div className="space-y-16">
          {/* Book 1: Sell Smarter, Not Harder */}
          <Card className="overflow-hidden shadow-lg border-none">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <Image
                  src="/images/book-smarketing-sell-smarter.jpeg"
                  alt="Book cover for Smarketing: Sell Smarter, Not Harder, 2nd Edition"
                  width={500}
                  height={750}
                  className="rounded-l-lg object-cover w-full h-full"
                />
              </div>
              <div className="md:col-span-8 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900">"Smarketing"</h2>
                <p className="text-lg text-gray-600 mt-1 italic">"Sell Smarter, Not Harder"</p>
                <p className="mt-4 text-xl font-semibold text-accent">
                  The Book For CEOs, Sales, Marketing and Business Leaders Who Want To Grow Sales Revenues.
                </p>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  This book answers one of the burning business sales questions of our time: "How can we achieve higher
                  productivity and lifted sales results, without adding more resources?" Discover a proven step-by-step
                  methodology to significantly boost organisational sales results, customer experience and marketing
                  performance right across the board. The book includes actionable advice, proven techniques, and case
                  studies from clients on three continents.
                </p>
                <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent-dark text-white font-bold">
                  <a
                    href="https://www.amazon.com.au/Smarketing-Business-Executives-Marketing-Performance-ebook/dp/B085VZ5Y9H/ref=sr_1_1?dchild=1&keywords=Peter%20Strohkorb&qid=1618001850&sr=8-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Book 2: Innovative Organisational Leadership */}
          <Card className="overflow-hidden shadow-lg border-none">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900">"Innovative Organisational Leadership"</h2>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  This brand new business book is all about the latest business insights and modern sales methods. In
                  it, 29 German business experts offer their respective specialist perspectives on how to grow a
                  business in today's challenging environment.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed font-medium">
                  My contribution is Chapter 10, titled: "Business Growth Through Renewed Customer Focus and Internal
                  Collaboration".
                </p>
                <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent-dark text-white font-bold">
                  <a
                    href="https://www.amazon.de/Innovative-Unternehmensf%C3%BChrung-Strategien-Unternehmen-zukunftsf%C3%A4hig/dp/3658409428?language=en_GB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
                </Button>
              </div>
              <div className="md:col-span-4">
                <Image
                  src="/images/book-innovative-unternehmensfuhrung.jpeg"
                  alt="Book cover for Innovative Unternehmensführung"
                  width={500}
                  height={750}
                  className="rounded-r-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </Card>

          {/* Book 3: The OneTEAM Method */}
          <Card className="overflow-hidden shadow-lg border-none">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <Image
                  src="/images/book-the-oneteam-method.jpeg"
                  alt="Book cover for The OneTEAM Method"
                  width={500}
                  height={750}
                  className="rounded-l-lg object-cover w-full h-full"
                />
              </div>
              <div className="md:col-span-8 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Peter Strohkorb's First Book: "The OneTEAM Method®"
                </h2>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  This is my internationally acclaimed inaugural business book on how your Sales and Marketing resources
                  can better align with your Customers to boost your sales revenue and business success.
                </p>
                <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent-dark text-white font-bold">
                  <a
                    href="https://www.amazon.com/OneTEAM-Method-Marketing-Collaboration-Business-ebook/dp/B00VU11PK2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <Separator className="my-16 md:my-24" />

        {/* Testimonials Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">What Readers Say…</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`text-left border-l-4 border-accent bg-white shadow-md ${
                  testimonials.length % 2 !== 0 && index === testimonials.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-400 mr-1" fill="currentColor" />
                    <Star className="text-yellow-400 mr-1" fill="currentColor" />
                    <Star className="text-yellow-400 mr-1" fill="currentColor" />
                    <Star className="text-yellow-400 mr-1" fill="currentColor" />
                    <Star className="text-yellow-400" fill="currentColor" />
                  </div>
                  <blockquote className="text-gray-700 italic">“{testimonial.quote}”</blockquote>
                  <footer className="mt-4">
                    <p className="font-bold text-gray-900">— {testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
