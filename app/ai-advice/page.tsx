"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Zap, Clock, Lightbulb, HelpCircle, MessageSquare } from "lucide-react"
import ModernHeader from "@/components/modern-header"
import { FadeInSection } from "@/components/fade-in-section"

export default function AIAdvicePage() {
  const samplePrompts = [
    "How do I effectively handle price objections from a prospect?",
    "What are the best strategies for following up with leads without being annoying?",
    "Can you give me tips on how to shorten my current sales cycle?",
    "What key questions should I ask during an information call to uncover client needs?",
    "How can I create a sense of urgency for a deal without being overly pushy?",
    "What are some effective ways to prospect for new clients on LinkedIn?",
    "Explain the 'Permission-Based Selling' concept in simple terms.",
    "How do I build a strong value proposition that resonates with my ideal buyer?",
  ]

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeInSection>
              <Bot className="w-20 h-20 mx-auto mb-6 text-accent" />
              <h1 className="text-5xl md:text-6xl font-black mb-4">Ask Peter's AI Sales Advisor</h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Get instant, expert sales advice powered by Peter's 25+ years of experience, available 24/7.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">Instant Sales Wisdom at Your Fingertips</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Our AI Sales Advisor is trained on Peter Strohkorb's extensive knowledge base, methodologies, and
                  successful case studies. Access it anytime via the chat widget.
                </p>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FadeInSection delay={100}>
                <Card className="text-center card-hover hover-lift h-full">
                  <CardContent className="p-8">
                    <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">Instant Responses</h3>
                    <p className="text-gray-700">
                      Get immediate answers to your pressing sales questions via voice or text through the global chat
                      widget.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              <FadeInSection delay={200}>
                <Card className="text-center card-hover hover-lift h-full">
                  <CardContent className="p-8">
                    <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">Expert Knowledge</h3>
                    <p className="text-gray-700">
                      Leverage insights from 25+ years of real-world sales success and proven frameworks.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              <FadeInSection delay={300}>
                <Card className="text-center card-hover hover-lift h-full">
                  <CardContent className="p-8">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">Always Available</h3>
                    <p className="text-gray-700">
                      No appointments needed. Your AI sales coach is ready whenever you are, 24/7.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Sample Prompts Section */}
        <section className="py-16 gradient-surface">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">What Can You Ask?</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Here are some examples of questions you can ask Peter's AI Sales Advisor. Try them out in the chat
                  widget!
                </p>
              </div>
            </FadeInSection>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {samplePrompts.map((prompt, index) => (
                  <FadeInSection key={index} delay={index * 50}>
                    <Card className="card-hover hover-lift">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <HelpCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                          <p className="text-gray-800">{prompt}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA to use the widget */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <FadeInSection>
              <MessageSquare className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-primary mb-4">Try Peter's AI Advisor Now!</h2>
              <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
                Click the chat icon at the bottom-right of your screen to start a conversation and get personalized
                sales advice instantly.
              </p>
              <Button
                size="lg"
                className="btn-modern gradient-accent text-white hover-lift"
                onClick={() => {
                  // This is a placeholder to suggest interaction. The actual widget is global.
                  // You might want to trigger the widget to open if the ElevenLabs API supports it.
                  alert("Click the chat icon in the bottom-right corner to use the AI Advisor!")
                }}
              >
                Activate AI Advisor
              </Button>
            </FadeInSection>
          </div>
        </section>
      </main>
      {/* Footer is global */}
    </div>
  )
}
