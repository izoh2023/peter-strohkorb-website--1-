import Link from "next/link"
import Image from "next/image"
import { Linkedin, Facebook, Youtube, User } from "lucide-react"

export function ModernFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/logo-peter-strohkorb-sales-advisory-transparent.png"
              alt="Peter Strohkorb Sales Advisory"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-gray-300 text-sm">
              Transforming sales teams through buyer-friendly strategies and proven methodologies.
            </p>
            <p className="text-gray-400 text-sm">📍 Sydney, Australia</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/company/peter-strohkorb-advisory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="LinkedIn Company Page"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/peterstrohkorbsalesmarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Peter's LinkedIn Profile"
              >
                <User className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/peterstrohkorbsalesexpert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@PeterStrohkorbSalesAdvisory/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://bio.site/PeterStrohkorbSalesAdvisory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Bio Site"
              >
                <User className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Sales Programs
                </Link>
              </li>
              <li>
                <Link href="/sales-transformation" className="text-gray-300 hover:text-white transition-colors">
                  Sales Transformation
                </Link>
              </li>
              <li>
                <Link href="/clarity-sessions" className="text-gray-300 hover:text-white transition-colors">
                  Clarity Sessions
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-gray-300 hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/peters-books" className="text-gray-300 hover:text-white transition-colors">
                  Peter's Books
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-300 hover:text-white transition-colors">
                  Media & Podcasts
                </Link>
              </li>
              <li>
                <Link href="/sales-checklist" className="text-gray-300 hover:text-white transition-colors">
                  Sales Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-300 hover:text-white transition-colors">
                  Book a Call
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Peter
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Peter Strohkorb Sales Advisory. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
