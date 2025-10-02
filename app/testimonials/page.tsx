import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import ModernHeader from "@/components/modern-header"
import { FadeInSection } from "@/components/fade-in-section"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"

const testimonials = [
  {
    quote:
      "Thanks to Peter's Buyer-Focused Sales Funnel we have adjusted our sales approach with tangible results. I highly recommend you get in touch with Peter.",
    name: "Neal Hooks",
    title: "Head Of Sales Europe",
    company: "PAYAPPS",
    companyType: "Specialist Payment Services, Multinational",
    details:
      "PayApps provides online payment reconciliation software for the construction sector. Their CEO wanted their Australian and their UK team to take a consistent, yet localised, approach to market.",
    imageSrc: "/images/neal-hooks-headshot.jpg",
  },
  {
    quote:
      "The results of Peter's good work has assisted our organization to face its goals with new confidence and as one team. Within a very short period of time my team made customer-focus and collaboration part of our culture.",
    name: "David Duncan",
    title: "Managing Director, APAC",
    company: "SICK AG",
    companyType: "Specialist Sensor Technology, Multinational",
    details:
      "SICK AG is a global leader in industrial sensor technology. Their APAC MD wanted his Australian team to collaborate more effectively in order to meet ambitious new sales targets.",
    imageSrc: "/images/david-duncan-headshot.jpg",
  },
  {
    quote:
      "Peter brings practical business experience, along with a well-rounded view of sales. No pushy selling tactics that bring on that 'icky' feeling. It is all about the buyer and how you can assist them, rather than just pushing your product or service. I highly recommend Peter.",
    name: "Karen Kirton",
    title: "CEO",
    company: "Amplify HR, Australia",
    companyType: "HR Professional Advisory Business, Australia",
    details:
      "Amplify HR provides consulting services on all matters of HR to small and medium businesses in Australia. CEO, Karen Kirton, came to us wanting because her business had been relying solely on word-of-mouth and on referrals for growth.",
    imageSrc: "/images/karen-kirton-headshot.jpg",
  },
  {
    quote:
      "Peter was able to very quickly grasp the intricacies of my industry and business. Within just a week of guidance from Peter, we got a big new contract over the line. A few weeks later, we had doubled our revenue! I didn't expect to realise the ROI of his program so quickly.",
    name: "Shivendra Kumar",
    title: "Founder & CEO",
    company: "Shivendra & Co, Australia",
    companyType: "Specialist Construction Process Design, Australia",
    details:
      "Shivendra & Co is a global Consulting Business specialising in the infrastructure construction sector. Shivendra's Founder & CEO engaged us after he realised that he needed a structured and scalable selling framework and ongoing sales advice.",
    imageSrc: "/images/shivendra-kumar-headshot.jpg",
  },
  {
    quote: "Peter won me over by delivering value right from the start. I can recommend him wholeheartedly.",
    name: "Timo Bishop",
    title: "CEO",
    company: "VersaDev Software Solutions, Australia",
    companyType: "HR Process Automation Services, Multinational",
    details:
      "VersaDev specialises in HR workflow software and processes, particularly in the mining sector. Their CEO wanted to lift competitiveness by improving their value proposition and prospect engagement practices.",
    imageSrc: "/images/timo-bishop-headshot.png",
  },
  {
    quote:
      "I credit Peter with coaching us to land a six-figure new client and fuel further growth. If you're a CEO, COO or CRO, you'll definitely benefit from Peter's sales acceleration advisory services.",
    name: "Sridhar Ramanathan",
    title: "COO",
    company: "Aventi Group, CA, USA",
    companyType: "Specialist Product Management Advisor, USA",
    details:
      "Aventi is an fast growing and multi-award winning Go-to-Market and Product Launch Strategy advisory firm in California, USA. They wanted to grow their sales revenue by sharpening up their outbound selling capability.",
    imageSrc: "/images/sridhar-ramanathan-headshot.png",
  },
  {
    quote:
      "Thanks to Peter, we were able to improve our margins and move into a higher value customer segment. We won the same sales revenue in just two weeks, as we had achieved in the previous 6 months!",
    name: "Brent Clark",
    title: "CEO",
    company: "Wattblock, Australia",
    companyType: "National Energy Efficiency Advisory, Australia",
    details:
      "Wattblock is a specialist consulting firm in the area of energy efficiency in commercial and residential strata buildings. After a rocky start, their new financiers demanded rapid improvements to their top line revenue performance.",
    imageSrc: "/images/brent-clark-headshot.png",
  },
  {
    quote:
      "In just a few online sessions Peter gave us great value. If you are a Sales Leader, I highly recommend you get in touch with Peter Strohkorb and take up his offer of a free Sales Funnel Self-Assessment. You won't regret it.",
    name: "Neil Cameron",
    title: "National Sales Manager",
    company: "PAYAPPS, Australia",
    companyType: "Payment Services Provider, Multinational",
    details:
      "PayApps provides specialist online payment reconciliation software for the construction sector, globally. Their CEO wanted his Australian and UK teams to take a consistent, yet localised, approach to market.",
    imageSrc: "/images/neil-cameron-headshot.png",
  },
  {
    quote:
      "Peter delivered a ton of value and insight right from the start. Investing in his services during COVID-19 was a great call for us.",
    name: "Jonathan Moody",
    title: "CEO",
    company: "Physio Inq, Australia",
    companyType: "National Franchisor, Australia",
    details:
      "Physio Inq is a national physiotherapist franchisor that wanted to grow the business by acquiring more new franchisees. Their CEO completed our Sales Assessment Test and subsequently chose our Buyer-Focused Sales Funnel Program.",
    imageSrc: "/images/jonathan-moody-headshot.png",
  },
  {
    quote:
      "Just one of Peter's Buyer-Focused Sales Funnel techniques helped us secure a new multi-million Dollar project. I strongly recommend you explore what his expertise can do for your business, too.",
    name: "Corey Veverka",
    title: "President",
    company: "TVS Inc, USA",
    companyType: "Specialist Manufacturing Compliance Services, USA",
    details:
      "TVS provides highly specialized services in the area of manufacturing compliance. Their President wanted more sales growth. After completing our our Sales Assessment Test he chose our Buyer-Focused Sales Funnel Program with immediate success.",
    imageSrc: "/images/corey-veverka-headshot.png",
  },
  {
    quote:
      "Working with my sales teams across Asia Pacific and Europe, Peter brought to us a unique focus on the buyers journey. He took us away from making assumption about buyer needs, by placing us firmly in the shoes of the buyer and their journey. I highly recommend engaging Peter.",
    name: "Tony Simonsen",
    title: "Chief Operating Officer",
    company: "PayApps, USA, APAC, UK",
    companyType: "Specialist Payment Services, Multinational",
    details:
      "PayApps provides online payment reconciliation software for the construction sector globally. Their COO wanted their Australian, US and UK team to develop a harmonised, consistent, yet localised, sales engagement approach.",
    imageSrc: "/images/tony-simonsen-headshot.png",
  },
  {
    quote:
      "I recommend Peter's program for improving sales operations and sales results. Peter's Buyer-Focused Sales Funnel program gave me great clarity and focus on my sales and marketing strategy across APAC. After just 10 weeks' working with Peter we're on a solid trajectory of revenue growth.",
    name: "Shaun Wormald",
    title: "APAC VP",
    company: "VOSS, Australia",
    companyType: "Specialist IT Communication Solutions, Multinational",
    details:
      "VOSS is a global provider of Unified Communications (UC) technology. Supported by the global CEO, their APAC VP wanted to better differentiate VOSS from its obvious competitors and engage more effectively with its ideal prospects.",
    imageSrc: "/images/shaun-wormald-headshot.png",
  },
  {
    quote:
      "Peter sees things differently. That is what I love about him. Sales is not easy and we (myself and my team) used to treat it like an artform, but Peter showed us that it is in fact a science. His knowledge of marketing and sales is very practical. Peter connected the dots for us that we didn't see. He truly is great value for any Founder.",
    name: "Vikram Sareen",
    title: "Co-Founder",
    company: "Blue Bricks Cyber Security, Australia",
    companyType: "National IT and Cyber Security Services, Australia",
    details:
      "Blue Bricks is an Australian cyber security company providing identity-based data security solutions that protect about 1 million users in governments, enterprises and financial institutions, in more than 50 organisations, spanning 10 countries.",
    imageSrc: "/images/vikram-sareen-headshot.png",
  },
  {
    quote:
      "I recommend Peter's program if you want a structured selling system and sustainable sales results. Peter's Program gave me great clarity and allowed me to focus on my industry niche and to finesse my sales and marketing strategy. Working with Peter was like a breath of fresh air.",
    name: "Caroline Falkiner",
    title: "Founder & CEO",
    company: "naveze, Australia",
    companyType: "Specialist Digital Mapping Services, Australia",
    details:
      "Naveze is an Australian provider of digital mapping services, delivering a sustainable visitor economy for local governments, tourism organisations, state governments and destination managers.",
    imageSrc: "/images/caroline-falkiner-headshot.png",
  },
  {
    quote:
      "I highly recommend Peter to others wanting to improve business processes and sales outcomes. We have been implementing the things Peter taught us with great success. I had my shortest sales cycle record last week with a new customer: 2 weeks!",
    name: "Simon Washington",
    title: "Managing Director and Chief Executive Officer",
    company: "AMA Group, Australia & USA",
    companyType: "Traffic Management Services, Multinational",
    details:
      "Advanced Mobility Analytics Group (AMAG) provides sophisticated technology and services solutions that prevent traffic accidents and save lives globally. AMAG's Managing Director and Chief Executive Officer chose us to help kick off AMAG's next phase of growth.",
    imageSrc: "/images/simon-washington-headshot.jpeg",
  },
  {
    quote:
      "I engaged Peter to run a Sales Acceleration Workshop for my team. Peter was fantastic, very engaging and captivating. In just one day he gave us the right selling tools for more senior-level customer engagements. Thank you Peter!",
    name: "Meri Kukkonen",
    title: "Sales Director",
    company: "Elcom, Australia",
    companyType: "National Workflow Automation Services, Australia",
    details:
      "Elcom is a leading Australian website and workflow automation services provider. Its Sales Director wanted her team to stop focusing on what they were selling, and instead focus on customer outcomes and benefits.",
    imageSrc: "/images/meri-kukkonen-headshot.png",
  },
  {
    quote:
      "Put simply, Peter managed to upgrade our sales engagement strategy and re-energise our sales team in just one workshop. If you're planning a sales kick-off, a conference, or you simply want your reps to become more proactive, I highly recommend Peter.",
    name: "Daniel Sargent",
    title: "Head of Sales",
    company: "NPS, Australia",
    companyType: "National Data Centre IT Hardware, Australia",
    details:
      "NPS provides hardware and services that help data centres run efficiently and safely. Their Sales Director was tasked with lifting sales revenues again, following the COVID-19 pandemic. He asked Peter Strohkorb to run a workshop with the entire sales team, to update them on the latest buyer-focused selling and prospect engagement techniques.",
    imageSrc: "/images/daniel-sargent-headshot.png",
  },
  {
    quote:
      "Vertiv's channel team was beset with a common challenge: How to grow channel revenue, while our direct influence on individual channel partners is limited. Peter and the Vertiv channel team first developed and then implemented a plan to solve this very problem. In the process, I have found Peter to be knowledgeable, inventive and engaging to work with. I can recommend his Buyer-Focused Selling programs wholeheartedly.",
    name: "Robert Linsdell",
    title: "Managing Director",
    company: "Vertiv, Australia",
    companyType: "Data Centre IT Hardware, Multinational",
    details:
      "Vertiv provides the hardware and services that make data centres run more efficiently and safely. Vertiv Australia's Managing Director was looking to grow channel partner revenue, nationally. So he invited us to run a 1-Day buyer-focused selling workshop for the Vertiv channel team and all the channel partners.",
    imageSrc: "/images/robert-linsdell-headshot.png",
  },
]

const shortTestimonials = [
  {
    quote: "Peter made me money. One particular project we were working on was worth over US$100,000!",
    name: "Todd Stewardson",
    title: "Founder & CEO, USA",
  },
  {
    quote: "Peter is one of the best coaches around. I was initially sceptical... but it was time well spent.",
    name: "Peter Boyd",
    title: "CEO, Care In The Cloud, Australia",
  },
  {
    quote:
      "Within one hour you have helped me turn my old value proposition into a shiny new one that has already resulted in new sales.",
    name: "Jo Smail",
    title: "Strategy Execution Director, Scentre Group",
  },
  {
    quote: "Peter goes above and beyond, I highly recommend connecting with him!",
    name: "Huw Thomas",
    title: "Partner, Blue Seed Consulting, Australia",
  },
  {
    quote: "Thanks to Peter, I have a killer business introduction to launch my new book. Thank you, Peter!",
    name: "Alice Heiman",
    title: "Founder and CEO, Alice Heiman LLC, USA",
  },
  {
    quote: "I have worked with Peter and found it an enjoyable and beneficial experience.",
    name: "Justin Gale",
    title: "Managing Director, Ventiv Technologies, APAC",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <PageHeader
        title={<span className="text-accent">What Our Clients Experience</span>}
        subtitle="Success stories from businesses that have transformed their sales results with our help."
      />

      <main>
        {/* Quick Success Stories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Just 3 Quick Client Success Stories...
                </h2>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FadeInSection delay={100}>
                <Link href="/case-studies/amag">
                  <Card className="card-hover hover-lift h-full text-center bg-secondary/5 border-secondary/20 group">
                    <CardContent className="p-8">
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <Image
                          src="/images/simon-washington-headshot.jpeg"
                          alt="Simon Washington Headshot"
                          layout="fill"
                          className="rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                        How This International CEO Accelerated His Team's Sales Cycle: By 400%!
                      </h3>
                      <p className="text-accent font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read the Case Study
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeInSection>
              <FadeInSection delay={200}>
                <Link href="/case-studies/engineering-services">
                  <Card className="card-hover hover-lift h-full text-center bg-accent/5 border-accent/20 group">
                    <CardContent className="p-8">
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <Image
                          src="/images/engineering-ceo-headshot.jpg"
                          alt="Engineering Services CEO Headshot"
                          layout="fill"
                          className="rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                        This Specialist Engineering Services Business Owner Had Almost Given Up. But Then We DOUBLED His
                        Sales, Fast!
                      </h3>
                      <p className="text-accent font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read the Case Study
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeInSection>
              <FadeInSection delay={300}>
                <Link href="/case-studies/it-services">
                  <Card className="card-hover hover-lift h-full text-center bg-primary/5 border-primary/20 group">
                    <CardContent className="p-8">
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <Image
                          src="/images/ian-ward-headshot.jpg"
                          alt="Ian Ward Headshot"
                          layout="fill"
                          className="rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                        This IT Services Business Owner Wanted To Exit His Business. We DOUBLED His VALUATION, in just a
                        few Months!
                      </h3>
                      <p className="text-accent font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read the Case Study
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeInSection>
            </div>
            <FadeInSection delay={400}>
              <div className="text-center mt-12">
                <Button size="lg" className="btn-modern gradient-accent text-white px-8 py-4 text-lg hover-lift">
                  <Link href="/schedule" className="flex items-center space-x-2">
                    <span>Is Your Business Ready For This Kind Of Success? Find Out Here!</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Video Testimonials</h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-gray-700 mb-4">
                    You know just how difficult it is to have clients provide you with any testimonial.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Then you also know, it's 10 times harder to get a video testimonial.
                  </p>
                  <p className="text-lg text-gray-700 mb-8">
                    So, you understand just how much our clients below must have appreciated our work, for them to
                    provide the video testimonials below.
                  </p>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="max-w-5xl mx-auto">
                <Link
                  href="https://www.youtube.com/@PeterStrohkorbSalesAdvisory/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                    <Image
                      src="/images/video-testimonials-grid.png"
                      alt="Video Testimonials Grid - Click to watch on YouTube"
                      width={1200}
                      height={600}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                      Click to Watch All Video Testimonials on YouTube
                    </p>
                  </div>
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Client Benefits Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">As Our Client, You'll...</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="grid gap-6 text-left">
                    {[
                      "Achieve (and even exceed) your sales revenue targets.",
                      "Grow your customer base.",
                      "Expand your existing accounts.",
                      "Gain better leads and more referrals.",
                      "Have your CRM finally tell you the truth.",
                    ].map((benefit, index) => (
                      <FadeInSection key={index} delay={index * 100}>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                          <p className="text-xl leading-relaxed pt-1">{benefit}</p>
                        </div>
                      </FadeInSection>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Main Testimonials */}
        <section className="py-20 gradient-surface">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  See Testimonials From Clients On 3 Continents…
                </h2>
              </div>
            </FadeInSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <FadeInSection key={index} delay={(index % 2) * 100}>
                  <Card className="card-hover hover-lift h-full flex flex-col">
                    <CardContent className="p-8 flex-grow flex flex-col">
                      <Quote className="w-10 h-10 text-accent mb-6 flex-shrink-0" />
                      <blockquote className="text-lg text-gray-700 italic mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="border-t border-gray-200 pt-6 mt-auto">
                        <div className="flex items-start space-x-4">
                          <Image
                            src={testimonial.imageSrc || `https://i.pravatar.cc/150?u=${testimonial.name}`}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          <div>
                            <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                            <p className="text-sm text-gray-600">
                              {testimonial.title}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm">
                          <p className="font-semibold text-secondary mb-1">{testimonial.companyType}</p>
                          <p className="text-gray-600">{testimonial.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Short Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary">More Praise from Our Clients</h2>
              </div>
            </FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {shortTestimonials.map((item, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <Card className="card-hover hover-lift h-full">
                    <CardContent className="p-6">
                      <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
                      <p className="font-semibold text-primary">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.title}</p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Now Imagine What You Can Achieve With Us, Too.</h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
                Let's talk about your sales challenges and how we can help you achieve similar success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent-dark px-8 py-4 text-lg hover-lift">
                  <Link href="/schedule">Let's Talk</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg hover-lift bg-transparent"
                >
                  <Link href="/programs">View All Programs</Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
    </div>
  )
}
