import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Clock, Smartphone } from "lucide-react"
import ModernHeader from "@/components/modern-header"

export default function SMSPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ModernHeader />

      {/* Hero Section */}
      <section className="gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Send Us a Text Message</h1>
          <p className="text-xl mb-8">Quick and convenient way to get in touch</p>
        </div>
      </section>

      {/* SMS Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Send a Quick Message</CardTitle>
                <p className="text-gray-600">We'll respond as soon as possible</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone Number *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Type your message here... (Keep it brief for SMS)"
                      maxLength={160}
                      required
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-1">Maximum 160 characters</p>
                  </div>

                  <Button className="w-full btn-modern gradient-accent text-white hover-lift">Send Text Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Direct SMS Option */}
            <div className="mt-8 text-center">
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <Smartphone className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Or Text Us Directly</h3>
                  <p className="text-gray-700 mb-4">Send a text message to our business number:</p>
                  <div className="text-2xl font-bold text-accent mb-4">+1 (555) SALES-01</div>
                  <p className="text-sm text-gray-600">Available 24/7 for quick questions and inquiries</p>
                </CardContent>
              </Card>
            </div>

            {/* Response Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Fast Response</h3>
                <p className="text-sm text-gray-600">Usually within 1 hour</p>
              </div>
              <div>
                <MessageSquare className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">24/7 Available</h3>
                <p className="text-sm text-gray-600">Send anytime, any day</p>
              </div>
              <div>
                <Smartphone className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Mobile Friendly</h3>
                <p className="text-sm text-gray-600">Perfect for quick questions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
