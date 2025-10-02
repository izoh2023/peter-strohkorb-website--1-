import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock, FileText } from "lucide-react"
import ModernHeader from "@/components/modern-header"

export default function EmailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ModernHeader />

      {/* Hero Section */}
      <section className="gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Mail className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Send Us an Email</h1>
          <p className="text-xl mb-8">Detailed inquiries and comprehensive discussions</p>
        </div>
      </section>

      {/* Email Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Send a Detailed Message</CardTitle>
                <p className="text-gray-600">Perfect for comprehensive inquiries and detailed discussions</p>
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="programs">Sales Programs</option>
                      <option value="coaching">Coaching Services</option>
                      <option value="speaking">Speaking Engagements</option>
                      <option value="media">Media Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Please provide details about your sales challenges, goals, or inquiry..."
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                      <option value="">Select an option</option>
                      <option value="google">Google Search</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Referral</option>
                      <option value="social">Social Media</option>
                      <option value="event">Event/Conference</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Button className="w-full btn-modern gradient-accent text-white hover-lift">Send Email</Button>
                </form>
              </CardContent>
            </Card>

            {/* Direct Email Option */}
            <div className="mt-8 text-center">
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Or Email Us Directly</h3>
                  <p className="text-gray-700 mb-4">Send your message to:</p>
                  <div className="text-xl font-bold text-accent mb-4">info@peterstrohkorb.com</div>
                  <p className="text-sm text-gray-600">For media inquiries: media@peterstrohkorb.com</p>
                </CardContent>
              </Card>
            </div>

            {/* Response Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Response Time</h3>
                <p className="text-sm text-gray-600">Within 24 hours</p>
              </div>
              <div>
                <FileText className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Detailed Responses</h3>
                <p className="text-sm text-gray-600">Comprehensive answers</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Professional</h3>
                <p className="text-sm text-gray-600">Direct from our team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
