import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Calendar, MapPin, Clock } from 'lucide-react'
import Link from "next/link"
import ModernHeader from "@/components/modern-header"
import { PageHeader } from "@/components/page-header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ModernHeader />

      {/* Hero Section */}
      <PageHeader
        title={
          <>
            <span className="text-accent">Get In Touch</span>
          </>
        }
        subtitle="Ready to transform your sales results? Let's talk."
      />

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow w-full">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-xl font-semibold">Schedule a Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-lg">
                    Ready to discuss your sales challenges? Book a consultation with Peter.
                  </p>
                  <Button className="btn-modern gradient-accent text-white w-full hover-lift py-3 text-lg" asChild>
                    <Link href="https://calendly.com/d/cpd5-5d4-46q" target="_blank" rel="noopener noreferrer">
                      Book Your Consultation
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Email Button and Contact Information */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us an Email</h2>
                <p className="text-gray-600 mb-6">
                  Have a specific question or prefer to write? Send an email directly to Peter.
                </p>
                <Button className="btn-modern gradient-accent text-white w-full hover-lift py-3 text-lg" asChild>
                  <Link href="mailto:pstrohkorb@peterstrohkorb.com">
                    <Mail className="mr-2 h-5 w-5" /> Email Peter
                  </Link>
                </Button>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Locations</h3>
                      <p className="text-gray-700">Australia | USA | Online</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-gray-700">pstrohkorb@peterstrohkorb.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <h3 className="font-semibold mb-4">Media Enquiries</h3>
                  <p className="text-gray-700 mb-4">
                    If you're a member of the media and you'd like a chat, just send us an email.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white w-full hover-lift"
                  >
                    <Link href="mailto:media@peterstrohkorb.com">Media Contact</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
