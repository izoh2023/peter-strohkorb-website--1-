"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  Zap,
  Clock,
  Lightbulb,
  HelpCircle,
  MessageSquare,
  X,
} from "lucide-react";
import ModernHeader from "@/components/modern-header";
import { FadeInSection } from "@/components/fade-in-section";

export default function AIAdvicePage() {
  const [showPrompt, setShowPrompt] = useState(false);

  const samplePrompts = [
    "How do I effectively handle price objections from a prospect?",
    "What are the best strategies for following up with leads without being annoying?",
    "Can you give me tips on how to shorten my current sales cycle?",
    "What key questions should I ask during an information call to uncover client needs?",
    "How can I create a sense of urgency for a deal without being overly pushy?",
    "What are some effective ways to prospect for new clients on LinkedIn?",
    "Explain the 'Permission-Based Selling' concept in simple terms.",
    "How do I build a strong value proposition that resonates with my ideal buyer?",
  ];

  const handleVoiceClick = () => {
    setShowPrompt(true);

    // Auto-hide after 8 seconds
    setTimeout(() => {
      setShowPrompt(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 gradient-primary text-white relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <FadeInSection>
              <Bot className="w-10 h-10 mx-auto mb-6 text-accent" />

              <h3 className="text-5xl md:text-6xl font-black mb-8">
                Access Peter's Sales Strategy Advice, 24/7, Free Of Charge!
              </h3>

              {/* Voice Interaction Button */}
              <div className="mb-8">
                <button
                  onClick={handleVoiceClick}
                  className="group relative bg-orange-500 active:bg-orange-600 md:hover:bg-gray-500 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl md:hover:shadow-gray-500/25 transition-all duration-300 transform active:scale-95 md:hover:scale-105 border-2 border-white/20 md:hover:border-white/40"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      🎤
                      <div className="absolute -inset-1 bg-white/20 rounded-full animate-pulse md:group-hover:animate-ping"></div>
                    </div>
                    <span>
                      Use Your Voice And Get Instant Sales Advice. Live!
                    </span>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/50 to-orange-400/30 blur-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </button>

                <p className="text-sm text-gray-400 mt-3 max-w-md mx-auto">
                  Click to start a voice conversation with Peter's AI advisor
                </p>
                <br />

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                  Speak to Peter's AI Alter Ego, get expert sales advice 24/7
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Intuitive Prompt Overlay */}
        {showPrompt && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            {/* Semi-transparent backdrop */}
            <div className="absolute inset-0 bg-black/60 animate-fade-in"></div>

            {/* Pointing finger animation at bottom right */}
            <div className="absolute bottom-24 right-8 animate-bounce pointer-events-auto">
              <div className="relative">
                {/* Speech bubble */}
                <div className="bg-accent text-white font-bold px-6 py-4 rounded-2xl shadow-2xl mb-4 relative animate-pulse">
                  <p className="text-lg whitespace-nowrap">
                    Click "Ask Peter" here! 👇
                  </p>
                  {/* Arrow pointing down */}
                  <div className="absolute -bottom-2 right-8 w-4 h-4 bg-accent transform rotate-45"></div>

                  {/* Close button */}
                  <button
                    onClick={() => setShowPrompt(false)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Giant pointing finger emoji */}
                <div className="text-7xl animate-bounce ml-12">👇</div>
              </div>
            </div>

            {/* Pulsing circle highlight at bottom right corner */}
            <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full border-4 border-accent animate-ping"></div>
            <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full border-4 border-accent"></div>
          </div>
        )}

        {/* How it Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Instant Sales Wisdom at Your Fingertips
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Our AI Sales Advisor is trained on Peter Strohkorb's extensive
                  knowledge base, methodologies, and successful case studies.
                  Access it anytime via the chat widget.
                </p>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FadeInSection delay={100}>
                <Card className="text-center card-hover hover-lift h-full">
                  <CardContent className="p-8">
                    <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Instant Responses
                    </h3>
                    <p className="text-gray-700">
                      Get immediate answers to your pressing sales questions via
                      voice or text through the global chat widget.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              <FadeInSection delay={200}>
                <Card className="text-center card-hover hover-lift h-full">
                  <CardContent className="p-8">
                    <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Expert Knowledge
                    </h3>
                    <p className="text-gray-700">
                      Leverage insights from 25+ years of real-world sales
                      success and proven frameworks.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
              <FadeInSection delay={300}>
                <Card className="text-center card-hover hover-lift h-full">
                  <CardContent className="p-8">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Always Available
                    </h3>
                    <p className="text-gray-700">
                      No appointments needed. Your AI sales coach is ready
                      whenever you are, 24/7.
                    </p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Sample Prompts Section */}
        {/* <section className="py-16 gradient-surface">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  What Can You Ask?
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Here are some examples of questions you can ask Peter's AI
                  Sales Advisor. Try them out in the chat widget!
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
        </section> */}

        {/* CTA to use the widget */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <FadeInSection>
              <MessageSquare className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-primary mb-4">
                Try Peter's AI Advisor Now!
              </h2>
              <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
                Click the chat icon at the bottom-right of your screen to start
                a conversation and get personalized sales advice instantly.
              </p>
              <Button
                id="activate"
                size="lg"
                className="btn-modern gradient-accent text-white hover-lift"
                onClick={handleVoiceClick}
              >
                Activate AI Advisor
              </Button>
            </FadeInSection>
          </div>
        </section>
      </main>
      {/* Footer is global */}
    </div>
  );
}
