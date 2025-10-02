import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Video, Phone } from "lucide-react"
import ModernHeader from "@/components/modern-header"
import { FadeInSection } from "@/components/fade-in-section"

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />

      {/* Hero Section with proper padding */}
      <section className="pt-32 pb-16 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInSection>
            <Calendar className="w-20 h-20 mx-auto mb-6 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule Your Free Consultation</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book 15 minutes with Peter to discuss your sales challenges and explore how we can help transform your
              results
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Scheduling Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Choose Your Preferred Meeting Type</h2>
                <p className="text-lg text-gray-700">Select the option that works best for you</p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Video Call */}
              <FadeInSection delay={200}>
                <Card className="hover:shadow-lg transition-shadow card-hover hover-lift h-full">
                  <CardHeader className="text-center">
                    <Video className="w-12 h-12 text-accent mx-auto mb-4" />
                    <CardTitle className="text-xl">Video Consultation</CardTitle>
                    <p className="text-gray-600">Face-to-face discussion via Zoom</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <Clock className="w-6 h-6 text-gray-500 inline mr-2" />
                      <span className="text-gray-700">15 minutes</span>
                    </div>
                    <a
                      href="https://calendly.com/d/cpd5-5d4-46q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-modern gradient-accent text-white mb-4 hover-lift inline-block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                    >
                      Schedule Video Call
                    </a>
                    <p className="text-sm text-gray-600">Perfect for detailed discussions and screen sharing</p>
                  </CardContent>
                </Card>
              </FadeInSection>

              {/* Phone Call */}
              <FadeInSection delay={300}>
                <Card className="hover:shadow-lg transition-shadow card-hover hover-lift h-full">
                  <CardHeader className="text-center">
                    <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
                    <CardTitle className="text-xl">Phone Consultation</CardTitle>
                    <p className="text-gray-600">Traditional phone conversation</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <Clock className="w-6 h-6 text-gray-500 inline mr-2" />
                      <span className="text-gray-700">15 minutes</span>
                    </div>
                    <a
                      href="https://calendly.com/d/cpd5-5d4-46q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-modern gradient-accent text-white mb-4 hover-lift inline-block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                    >
                      Schedule Phone Call
                    </a>
                    <p className="text-sm text-gray-600">Quick and convenient for busy schedules</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>

            {/* What to Expect */}
            <FadeInSection delay={400}>
              <div className="mt-12 bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-center mb-6">What to Expect in Your Consultation</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-accent">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Assess Your Situation</h3>
                    <p className="text-sm text-gray-600">We'll discuss your current sales challenges and goals</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-accent">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Identify Opportunities</h3>
                    <p className="text-sm text-gray-600">Pinpoint areas where you can improve sales performance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-accent">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Recommend Next Steps</h3>
                    <p className="text-sm text-gray-600">Get actionable advice and program recommendations</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}
