"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, TrendingUp, Users, MessageSquare, Phone, Mail } from "lucide-react"
import ModernHeader from "@/components/modern-header"
import { PageHeader } from "@/components/page-header"
import { useState } from "react"

export default function TipsPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState("")

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    if (!isValidEmail(email)) {
      setError("Enter valid email")
      return
    }

    setError("")
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)
      setEmail("")

      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    }, 1000)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (error) {
      setError("")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ModernHeader />

      {/* Hero Section */}
      <PageHeader
        title={<span className="text-accent">Hot Sales Tips</span>}
        subtitle="Proven strategies to help you 'Sell Smarter, Not Harder!'"
      />

      {/* Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tip 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Permission-Based Selling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Always ask for permission before pitching. "Would it be helpful if I shared how we've helped similar
                  companies increase their sales by 40%?"
                </p>
                <p className="text-sm text-accent font-semibold">This approach increases engagement by 300%</p>
              </CardContent>
            </Card>

            {/* Tip 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Focus on Buyer's Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Map your sales process to your buyer's decision-making journey, not your internal sales stages.
                </p>
                <p className="text-sm text-accent font-semibold">Reduces sales cycle length by up to 50%</p>
              </CardContent>
            </Card>

            {/* Tip 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Ask Better Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Replace "What keeps you up at night?" with "What would need to happen for this to be your best year
                  ever?"
                </p>
                <p className="text-sm text-accent font-semibold">Creates positive, forward-thinking conversations</p>
              </CardContent>
            </Card>

            {/* Tip 4 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Value Before Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Focus on delivering value in every interaction rather than pushing for the next meeting or demo.
                </p>
                <p className="text-sm text-accent font-semibold">Builds trust and accelerates decision-making</p>
              </CardContent>
            </Card>

            {/* Tip 5 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">The 3-Touch Rule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Use three different communication channels (email, phone, LinkedIn) with three different value
                  propositions.
                </p>
                <p className="text-sm text-accent font-semibold">Increases response rates by 200%</p>
              </CardContent>
            </Card>

            {/* Tip 6 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Social Proof Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Share specific, relevant success stories: "A company just like yours increased revenue by 85% in 6
                  months."
                </p>
                <p className="text-sm text-accent font-semibold">Makes your solution tangible and credible</p>
              </CardContent>
            </Card>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">Get Sales Tips</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join 5,000+ sales professionals who receive Peter's sales insights directly in their inbox.
            </p>
            <div className="max-w-lg mx-auto">
              {showSuccess && (
                <div className="mb-6 p-4 bg-accent/10 border border-accent/30 text-gray-800 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-accent text-xl">🎉</span>
                    <span className="font-semibold">Thank you for subscribing!</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">You'll receive Peter's sales insights soon.</p>
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-red-500 text-xl">⚠️</span>
                    <span className="font-semibold">{error}</span>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="px-8 py-4 bg-[#f2a324] text-white font-semibold rounded-lg hover:bg-[#e09420] transition-all duration-300 text-lg whitespace-nowrap btn-modern hover-lift hover:shadow-accent transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
