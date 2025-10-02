import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, TrendingUp, Clock, Handshake, Target } from "lucide-react"
import Link from "next/link"
import ModernHeader from "@/components/modern-header"

export default function GuaranteePage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />

      {/* Hero Section */}
      <section className="gradient-primary text-white py-16 pt-28">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Our Commitment to Your Success</h1>
          <p className="text-xl mb-8">Your investment is protected by our simple, powerful value guarantee.</p>
        </div>
      </section>

      {/* Guarantee Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Guarantee */}
            <Card className="mb-12 border-2 border-accent/50 shadow-lg">
              <CardHeader className="text-center bg-accent/10">
                <CardTitle className="text-3xl text-primary">Our 'First Session Value' Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    Experience value in your first paid session, or it's free.
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are confident that you will find immense value in our very first paid strategy session. If, for
                    any reason, you feel you didn't get the value you expected, we will refund your session fee in full.
                    No questions asked. It's that simple. We believe in earning your trust and business through tangible
                    results from day one.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Typical Results Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">The Results Our Clients Typically Achieve</h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
                While we can't guarantee specific outcomes, as we work collaboratively with you and your team, here is
                what our clients often experience after implementing our strategies:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Significant Revenue Growth</h3>
                  <p className="text-gray-600">
                    Our frameworks are designed to unlock new revenue streams and boost sales performance.
                  </p>
                </div>
                <div className="text-center p-4">
                  <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Accelerated Sales Cycles</h3>
                  <p className="text-gray-600">
                    We help you shorten the time from initial contact to closed deal by focusing on buyer needs.
                  </p>
                </div>
                <div className="text-center p-4">
                  <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Improved Close Rates</h3>
                  <p className="text-gray-600">
                    By building a sales process from the buyer's perspective, our clients see a marked improvement in
                    conversions.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Partnership Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Our Collaborative Partnership</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-primary">
                      <Handshake /> What We Bring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Proven frameworks tailored to your business</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Expert, hands-on guidance from a seasoned sales leader</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Actionable strategies to implement immediately</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>A commitment to your long-term success</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-primary">
                      <Target /> Your Commitment to Success
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Active participation from business leadership</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>A willingness to challenge existing processes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Commitment to implementing agreed-upon changes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Open and honest communication about challenges and progress</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-accent/10 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started Risk-Free?</h2>
              <p className="text-lg text-gray-700 mb-6">
                With our 'First Session Value' Guarantee, your first step towards transformation is completely
                risk-free.
              </p>
              <div className="space-x-4">
                <Button asChild className="btn-modern gradient-accent text-white hover-lift">
                  <a href="https://calendly.com/d/cpd5-5d4-46q" target="_blank" rel="noopener noreferrer">
                    Book Your First Session
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white hover-lift bg-transparent"
                >
                  <Link href="/programs">View Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
