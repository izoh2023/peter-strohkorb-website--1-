"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Icons } from "@/components/icons"

export default function ModernHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState({
    programs: false,
    publications: false,
  })

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setMobileDropdowns({ programs: false, publications: false })
  }

  const toggleMobileDropdown = (dropdown: "programs" | "publications") => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }))
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white shadow-lg py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo-peter-strohkorb-sales-advisory-transparent.png"
              alt="Peter Strohkorb Sales Advisory Logo"
              width={280}
              height={50}
              className="h-8 sm:h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          {pathname.includes("admin") ? (
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
              <Link
                href="/"
                className="text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base"
              >
                View Site
              </Link>
              <Link
                href="/admin/profile"
                className="text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base"
              >
                Profile
              </Link>
            </nav>
          ) : (
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
              <Link
                href="/"
                className="text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base"
              >
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base">
                  <span>Programs</span>
                  <div className="w-4 h-4">
                    <Icons.ChevronDown />
                  </div>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <Link
                      href="/programs"
                      className="block px-4 py-2 text-primary hover:bg-gray-50 hover:text-accent rounded-md transition-colors text-sm"
                    >
                      All Programs
                    </Link>
                    <Link
                      href="/sales-checklist"
                      className="block px-4 py-2 text-primary hover:bg-gray-50 hover:text-accent rounded-md transition-colors text-sm"
                    >
                      Sales Self-Assessment
                    </Link>
                    <Link
                      href="/clarity-sessions"
                      className="block px-4 py-2 text-primary hover:bg-gray-50 hover:text-accent rounded-md transition-colors text-sm"
                    >
                      Clarity Sessions
                    </Link>
                    <Link
                      href="/competencies"
                      className="block px-4 py-2 text-primary hover:bg-gray-50 hover:text-accent rounded-md transition-colors text-sm"
                    >
                      10 Competencies
                    </Link>
                    <Link
                      href="/sales-transformation"
                      className="block px-4 py-2 text-primary hover:bg-gray-50 hover:text-accent rounded-md transition-colors text-sm"
                    >
                      Sales Transformation
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/tips"
                className="text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base"
              >
                Sales Tips
              </Link>
              <Link
                href="/ai-advice"
                className="text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base"
              >
                AI Advice
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base">
                  <span>Publications</span>
                  <div className="w-4 h-4">
                    <Icons.ChevronDown />
                  </div>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <Link
                      href="https://peterstrohkorbadvisory.squarespace.com/sales-articles-blog"
                      className="block px-4 py-2 text-primary hover:bg-gray-50 hover:text-accent rounded-md transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Modern Selling Blog
                    </Link>
                    <Link
                      href="/peters-books"
                      className="block px-4 py-2 text-primary hover:bg-gray-50 hover:text-accent rounded-md transition-colors text-sm"
                    >
                      Peter's Books
                    </Link>
                    <Link
                      href="/media"
                      className="block px-4 py-2 text-primary hover:bg-gray-50 hover:text-accent rounded-md transition-colors text-sm"
                    >
                      Events, Videos and Podcasts
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/sales-master-roundtable"
                className="text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base"
              >
                Roundtable
              </Link>
              <Link
                href="/testimonials"
                className="text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base"
              >
                Testimonials
              </Link>
              <Link
                href="/about"
                className="text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-primary hover:text-accent transition-colors font-medium text-sm 2xl:text-base"
              >
                Contact
              </Link>
            </nav>
          )}

          {/* CTA Button */}
          {!pathname.includes("admin") && (
            <div className="hidden lg:block">
              <Link
                href="https://calendly.com/d/cpd5-5d4-46q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 xl:px-6 text-sm font-medium rounded-md transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "#f2a324", color: "#ffffff" }}
              >
                Book Information Call
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6">{isMobileMenuOpen ? <Icons.X /> : <Icons.Menu />}</div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-1 pt-4 max-h-[70vh] overflow-y-auto">
              {pathname.includes("admin") ? (
                <>
                  <Link
                    href="/"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    View Site
                  </Link>
                  <Link
                    href="/admin/profile"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>

                  <div className="border-b border-gray-100 pb-2">
                    <button
                      onClick={() => toggleMobileDropdown("programs")}
                      className="w-full flex items-center justify-between px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md font-medium"
                    >
                      <span>Programs</span>
                      <div
                        className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns.programs ? "rotate-180" : ""}`}
                      >
                        <Icons.ChevronDown />
                      </div>
                    </button>
                    {mobileDropdowns.programs && (
                      <div className="ml-4 border-l-2 border-accent/20 bg-gray-50/50 rounded-r-md">
                        <Link
                          href="/programs"
                          className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-white transition-colors rounded-md font-medium"
                          onClick={closeMobileMenu}
                        >
                          All Programs
                        </Link>
                        <Link
                          href="/sales-checklist"
                          className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-white transition-colors rounded-md"
                          onClick={closeMobileMenu}
                        >
                          Sales Self-Assessment
                        </Link>
                        <Link
                          href="/clarity-sessions"
                          className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-white transition-colors rounded-md"
                          onClick={closeMobileMenu}
                        >
                          Clarity Sessions
                        </Link>
                        <Link
                          href="/competencies"
                          className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-white transition-colors rounded-md"
                          onClick={closeMobileMenu}
                        >
                          10 Competencies
                        </Link>
                        <Link
                          href="/sales-transformation"
                          className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-white transition-colors rounded-md"
                          onClick={closeMobileMenu}
                        >
                          Sales Transformation
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/tips"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Sales Tips
                  </Link>

                  <Link
                    href="/ai-advice"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    AI Advice
                  </Link>

                  <div className="border-b border-gray-100 pb-2">
                    <button
                      onClick={() => toggleMobileDropdown("publications")}
                      className="w-full flex items-center justify-between px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md font-medium"
                    >
                      <span>Publications</span>
                      <div
                        className={`w-4 h-4 transition-transform duration-200 ${mobileDropdowns.publications ? "rotate-180" : ""}`}
                      >
                        <Icons.ChevronDown />
                      </div>
                    </button>
                    {mobileDropdowns.publications && (
                      <div className="ml-4 border-l-2 border-accent/20 bg-gray-50/50 rounded-r-md">
                        <Link
                          href="https://peterstrohkorbadvisory.squarespace.com/sales-articles-blog"
                          className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-white transition-colors rounded-md"
                          onClick={closeMobileMenu}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Modern Selling Blog
                        </Link>
                        <Link
                          href="/peters-books"
                          className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-white transition-colors rounded-md"
                          onClick={closeMobileMenu}
                        >
                          Peter's Books
                        </Link>
                        <Link
                          href="/media"
                          className="block px-4 py-2 text-sm text-primary hover:text-accent hover:bg-white transition-colors rounded-md"
                          onClick={closeMobileMenu}
                        >
                          Events, Videos and Podcasts
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/sales-master-roundtable"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Roundtable
                  </Link>

                  <Link
                    href="/testimonials"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Testimonials
                  </Link>

                  <Link
                    href="/about"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>

                  <Link
                    href="/contact"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>

                  <Link
                    href="/how-we-work"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    How We Work
                  </Link>

                  <Link
                    href="/admin"
                    className="px-4 py-2 text-primary hover:text-accent hover:bg-gray-50 transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Admin
                  </Link>

                  <div className="px-4 pt-4 border-t border-gray-100 mt-2">
                    <Link
                      href="https://calendly.com/d/cpd5-5d4-46q"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-300"
                      style={{ backgroundColor: "#f2a324", color: "#ffffff" }}
                    >
                      Book Information Call
                    </Link>
                  </div>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
