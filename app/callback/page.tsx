import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, Calendar } from "lucide-react"
import ModernHeader from "@/components/modern-header"

export default function CallbackPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ModernHeader />

      {/* Hero Section */}
      <section className="gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Phone className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Request a Callback</h1>
          <p className="text-xl mb-8">We'll call you at your preferred time</p>
        </div>
      </section>

      {/* Callback Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Schedule Your Callback</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll call you back</p>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What would you like to discuss?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Tell us about your sales challenges or goals..."
                    ></textarea>
                  </div>

                  <Button className="w-full btn-modern gradient-accent text-white hover-lift">Request Callback</Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Quick Response</h3>
                <p className="text-sm text-gray-600">We'll call within 24 hours</p>
              </div>
              <div>
                <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                <p className="text-sm text-gray-600">Available Mon-Fri 9AM-6PM</p>
              </div>
              <div>
                <Phone className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">No Obligation</h3>
                <p className="text-sm text-gray-600">Free consultation call</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
