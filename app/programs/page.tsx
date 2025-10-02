import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target, Users, Share2, BarChart3, User, Clock, MessageSquare } from "lucide-react"
import ModernHeader from "@/components/modern-header"

const programs = [
  {
    icon: <Target className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
    title: "Buyer-Friendly Sales Funnel",
    price: "$2,497",
    period: "/ month + tax",
    duration: "12-month program",
    description:
      "A proven, structured and scalable selling framework that sets your business up for sustainable revenue growth.",
    features: [
      "Ensures your sales team has a proven process to follow.",
      "Shifts the team's focus to being buyer-centric.",
      "Teaches understanding of buyers' needs and processes.",
      "Weekly 1-hour online consultation and co-creation sessions.",
      "Ongoing strategy advice and performance coaching.",
      "Unlimited email support between sessions.",
      "Full recordings and text summaries of all sessions.",
      "Complete shared online curriculum and workbook.",
    ],
    testimonial: {
      quote: "Our sales cycle went from 2 months, down to just 2 weeks!",
      author: "Simon Washington, Global CEO, AMAG",
    },
    ctaLink: "https://calendly.com/d/cpd5-5d4-46q/sales-foundation-program",
    testimonialColor: "text-blue-600",
  },
  {
    icon: <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500" />,
    title: "Voice of Customer Program",
    price: "$3,497",
    period: "+ tax (if applicable)",
    duration: "One-time comprehensive program",
    description:
      "Unlock deep customer insights to transform your sales approach, messaging, and value proposition through systematic customer feedback analysis.",
    features: [
      "Comprehensive customer interview strategy and execution.",
      "Customer journey mapping and pain point identification.",
      "Voice of customer data analysis and insights extraction.",
      "Sales messaging optimization based on customer language.",
      "Value proposition refinement and positioning strategy.",
      "Customer persona development and segmentation.",
      "Competitive differentiation insights from customer perspective.",
      "Implementation roadmap and ongoing measurement framework.",
      "Customer feedback integration into sales processes.",
      "Training materials for ongoing voice of customer practices.",
    ],
    testimonial: {
      quote:
        "Understanding our customers' true voice revolutionized our entire sales approach and increased close rates by 40%.",
      author: "Michael Rodriguez, VP Sales, Enterprise Solutions Inc.",
    },
    ctaLink: "https://calendly.com/d/cpd5-5d4-46q/voice-of-customer-program",
    testimonialColor: "text-teal-600",
  },
  {
    icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
    title: "Account Expansion Program",
    price: "$2,497",
    period: "/ month + tax",
    duration: "12-month program",
    description:
      "Maximize revenue from existing clients through strategic account expansion and relationship deepening.",
    features: [
      "Systematic approach to identifying expansion opportunities.",
      "Account mapping and stakeholder relationship strategies.",
      "Cross-selling and upselling methodologies.",
      "Customer success integration for retention.",
      "Value-based selling techniques for premium pricing.",
      "Weekly strategic planning and execution sessions.",
      "Account-specific playbooks and templates.",
      "Performance tracking and optimization tools.",
    ],
    testimonial: {
      quote: "We increased our average account value by 180% within 8 months.",
      author: "Jennifer Martinez, Sales Director, TechFlow Solutions",
    },
    ctaLink: "https://calendly.com/d/cpd5-5d4-46q/account-expansion-program",
    testimonialColor: "text-green-600",
  },
  {
    icon: <Share2 className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />,
    title: "Referral Selling System",
    price: "$2,497",
    period: "/ month + tax",
    duration: "12-month program",
    description: "Build a systematic referral engine that generates consistent, high-quality leads from your network.",
    features: [
      "Referral system design and implementation.",
      "Network mapping and relationship cultivation.",
      "Referral request scripts and timing strategies.",
      "Partner and alliance development frameworks.",
      "Customer advocacy program creation.",
      "Referral tracking and reward systems.",
      "Weekly coaching on relationship building.",
      "Templates for referral communications.",
    ],
    testimonial: {
      quote: "60% of our new business now comes from referrals. It's transformed our growth.",
      author: "David Thompson, CEO, Professional Services Group",
    },
    ctaLink: "https://calendly.com/d/cpd5-5d4-46q/referral-selling-program",
    testimonialColor: "text-purple-600",
  },
  {
    icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />,
    title: "Smarketing Sales Revenue Optimisation",
    price: "$2,497",
    period: "/ month + tax",
    duration: "12-month program",
    description: "Align sales and marketing teams for maximum revenue generation through integrated strategies.",
    features: [
      "Sales and marketing alignment assessment.",
      "Integrated lead generation and nurturing systems.",
      "Content strategy for sales enablement.",
      "Marketing qualified lead (MQL) optimization.",
      "Sales and marketing technology integration.",
      "Performance metrics and reporting dashboards.",
      "Cross-team collaboration frameworks.",
      "Revenue attribution and ROI tracking.",
    ],
    testimonial: {
      quote: "Our sales and marketing teams finally work as one. Revenue increased 250%.",
      author: "Lisa Chen, CMO, Growth Dynamics",
    },
    ctaLink: "https://calendly.com/d/cpd5-5d4-46q/smarketing-program",
    testimonialColor: "text-orange-600",
  },
  {
    icon: <User className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500" />,
    title: "Professional Success Coaching & Mentoring",
    price: "$497",
    period: "/ hour + tax",
    duration: "Flexible scheduling",
    description: "One-on-one coaching and mentoring for sales professionals and leaders seeking accelerated growth.",
    features: [
      "Personalized coaching based on individual needs.",
      "Leadership development and executive presence.",
      "Career advancement strategies and planning.",
      "Performance improvement and skill development.",
      "Confidence building and mindset coaching.",
      "Goal setting and accountability frameworks.",
      "Industry insights and best practices sharing.",
      "Flexible scheduling to fit your calendar.",
    ],
    testimonial: {
      quote: "Peter's coaching helped me secure a VP role and double my income in 18 months.",
      author: "Mark Stevens, VP of Sales, Enterprise Tech",
    },
    ctaLink: "https://calendly.com/d/cpd5-5d4-46q/professional-coaching",
    testimonialColor: "text-indigo-600",
  },
  {
    icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />,
    title: "B2B Sales Advisory and Coaching Services",
    price: "$497",
    period: "/ hour + tax",
    duration: "Hourly consultation",
    description:
      "Expert advisory services for specific sales challenges, strategy development, and tactical execution.",
    features: [
      "On-demand sales strategy consultation.",
      "Deal review and closing strategy sessions.",
      "Sales process audit and optimization.",
      "Team performance analysis and improvement.",
      "Competitive positioning and differentiation.",
      "Pricing strategy and negotiation tactics.",
      "Sales technology and CRM optimization.",
      "Crisis management and turnaround strategies.",
    ],
    testimonial: {
      quote: "Peter's strategic insights helped us close our biggest deal ever - $2.3M.",
      author: "Rachel Kim, Sales Manager, Industrial Solutions",
    },
    ctaLink: "https://calendly.com/d/cpd5-5d4-46q/sales-advisory",
    testimonialColor: "text-red-600",
  },
]

export default function ProgramsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ModernHeader />
      <PageHeader
        title={<span className="text-accent">Our Programs</span>}
        subtitle="Comprehensive sales programs and services designed to accelerate your business growth. Choose the solution that best fits your current needs and objectives."
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {programs.slice(0, 6).map((program, index) => (
              <Card
                key={index}
                className="flex flex-col rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-t-4 border-accent h-full"
              >
                <CardHeader className="text-center pt-6 sm:pt-8 px-4 sm:px-6">
                  <div className="mx-auto bg-gray-100 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-primary mb-3">{program.title}</CardTitle>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{program.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-4 sm:p-6">
                  <div className="text-center my-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-primary">{program.price}</span>
                    <span className="text-gray-500 text-sm sm:text-base">{program.period}</span>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{program.duration}</p>
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-semibold text-base sm:text-lg mb-3 text-center">What's Included:</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className={`text-center italic text-sm sm:text-base ${program.testimonialColor}`}>
                      "{program.testimonial.quote}"
                    </p>
                    <p className="text-center font-semibold text-xs sm:text-sm mt-2 text-gray-500">
                      - {program.testimonial.author}
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="space-y-3">
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-[#f2a324] hover:bg-[#e09315] text-white font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base py-3 border border-[#f2a324]"
                      >
                        <a href={program.ctaLink} target="_blank" rel="noopener noreferrer">
                          Buy Now
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full border-2 border-[#f2a324] text-[#f2a324] hover:bg-[#f2a324] hover:text-white transition-all duration-300 text-sm sm:text-base py-3 bg-white"
                      >
                        <a href={program.ctaLink} target="_blank" rel="noopener noreferrer">
                          Book Information Call
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {programs.length > 6 && (
            <div className="flex justify-center mt-6 lg:mt-8">
              <div className="w-full lg:w-1/2 xl:w-1/3">
                {programs.slice(6).map((program, index) => (
                  <Card
                    key={index + 6}
                    className="flex flex-col rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-t-4 border-accent h-full"
                  >
                    <CardHeader className="text-center pt-6 sm:pt-8 px-4 sm:px-6">
                      <div className="mx-auto bg-gray-100 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4">
                        {program.icon}
                      </div>
                      <CardTitle className="text-xl sm:text-2xl font-bold text-primary mb-3">{program.title}</CardTitle>
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{program.description}</p>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col p-4 sm:p-6">
                      <div className="text-center my-4">
                        <span className="text-3xl sm:text-4xl font-extrabold text-primary">{program.price}</span>
                        <span className="text-gray-500 text-sm sm:text-base">{program.period}</span>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">{program.duration}</p>
                      </div>

                      <div className="flex-grow">
                        <h4 className="font-semibold text-base sm:text-lg mb-3 text-center">What's Included:</h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                          {program.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-6 border-t">
                        <p className={`text-center italic text-sm sm:text-base ${program.testimonialColor}`}>
                          "{program.testimonial.quote}"
                        </p>
                        <p className="text-center font-semibold text-xs sm:text-sm mt-2 text-gray-500">
                          - {program.testimonial.author}
                        </p>
                      </div>

                      <div className="mt-auto pt-6">
                        <div className="space-y-3">
                          <Button
                            asChild
                            size="lg"
                            className="w-full bg-[#f2a324] hover:bg-[#e09315] text-white font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base py-3 border border-[#f2a324]"
                          >
                            <a href={program.ctaLink} target="_blank" rel="noopener noreferrer">
                              Buy Now
                            </a>
                          </Button>
                          <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full border-2 border-[#f2a324] text-[#f2a324] hover:bg-[#f2a324] hover:text-white transition-all duration-300 text-sm sm:text-base py-3 bg-white"
                          >
                            <a href={program.ctaLink} target="_blank" rel="noopener noreferrer">
                              Book Information Call
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
