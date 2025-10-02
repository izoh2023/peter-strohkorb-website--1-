import PageHeader from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { PlayCircle, Mic, Users, Rss } from "lucide-react"

const mediaItems = [
  {
    type: "Podcast",
    title: "The Biggest Sales Mistake That Most Businesses Make",
    description: "Uncover the common pitfalls that could be costing you sales and learn how to avoid them.",
    image: "/images/podcast-biggest-sales-mistake.png",
    url: "https://www.youtube.com/watch?v=d2binIlPQ5A",
    icon: <Mic className="w-5 h-5" />,
  },
  {
    type: "Video",
    title: "How To Lift Sales, Without Adding More Resources",
    description: "Sales 3.0 Conference 2021 - USA",
    image: "/images/lift-sales-without-resources-video.png",
    url: "https://www.youtube.com/watch?v=U9iiRiVC7VY&t=1s",
    icon: <PlayCircle className="w-5 h-5" />,
  },
  {
    type: "Podcast",
    title: "The Ambitious Entrepreneur Podcast Network",
    description: "Insights and strategies for ambitious entrepreneurs looking to scale their business.",
    image: "/images/podcast-ambitious-entrepreneur.png",
    url: "https://ambitiousentrepreneurnetwork.com/ep391-how-to-remain-successful-at-selling-as-a-business-owner-or-sales-leader/",
    icon: <Rss className="w-5 h-5" />,
  },
  {
    type: "Video",
    title: "Expert Talk on Modern Selling",
    description: "Join Peter Strohkorb as he shares his expertise on modern selling techniques.",
    image: "/expert-sales-talk.png",
    url: "https://www.youtube.com/@PeterStrohkorbSalesAdvisory/videos",
    icon: <Users className="w-5 h-5" />,
  },
  {
    type: "Podcast",
    title: "Membrain's Podcast on Storytelling in Sales",
    description: "Learn how to use storytelling to create powerful connections with your buyers.",
    image: "/images/podcast-membrain-story-telling.png",
    url: "https://www.membrain.com/blog/the-three-step-story-telling-formula-with-peter-strohkorb",
    icon: <Mic className="w-5 h-5" />,
  },
  {
    type: "Podcast",
    title: "The Evolvers Podcast",
    description: "A deep dive into the evolution of sales and business growth strategies.",
    image: "/images/podcast-evolvers-new.png",
    url: "https://open.spotify.com/episode/3D389BWjbf3GR6HYQN1brI",
    icon: <Rss className="w-5 h-5" />,
  },
  {
    type: "Podcast",
    title: "What You Should Really Do When Asked For A Proposal",
    description: "A strategic guide to responding to proposal requests in a way that wins deals.",
    image: "/images/podcast-proposal-new.png",
    url: "https://www.youtube.com/channel/UCLlvcqAuqJMYBVUBoiixChQ/search?query=peter+strohkorb",
    icon: <Mic className="w-5 h-5" />,
  },
  {
    type: "Video",
    title: "Rebooting Your Sales Engine",
    description:
      "Alice Heiman (of Miller-Heiman fame) and I challenge your thinking about sales. Get all the tips, techniques and advice gems in this expert talk.",
    image: "/images/rebooting-sales-engine-video.png",
    url: "https://www.youtube.com/watch?v=XFrihw13DCg&t=1s",
    icon: <PlayCircle className="w-5 h-5" />,
  },
  {
    type: "Podcast",
    title: "The Dadpreneur Podcast",
    description: "Insights on balancing entrepreneurship and fatherhood with Peter Strohkorb.",
    image: "/images/podcast-dadpreneur-new.png",
    url: "https://dadpreneur.co/peter-strohkorb/",
    icon: <Mic className="w-5 h-5" />,
  },
  {
    type: "Podcast",
    title: "The One Simple Technique To Help You Sell More, Faster. Right Now.",
    description:
      'Podcast on Spotify: Craig Saphin and Steve Barlow interview Peter Strohkorb on "How to sell more, faster" today.',
    image: "/images/podcast-humanised-workforce.png",
    url: "https://open.spotify.com/episode/4rQVE3HqI4XEcMJplM0XBL?nd=1&si=BNSQDHURTLyAlDioxgzRBg",
    icon: <Mic className="w-5 h-5" />,
  },
  {
    type: "Podcast",
    title: "Accelerating Your Deals In A Complex Decision Environment",
    description:
      "Podcast on Spotify: Tom Pisello and Peter Strohkorb discuss how to accelerate selling even in a complex decision environment.",
    image: "/images/podcast-evolvers-tom-pisello.png",
    url: "https://open.spotify.com/episode/3D389BWjbf3GR6HYQN1brI",
    icon: <Mic className="w-5 h-5" />,
  },
  {
    type: "Video",
    title: "Buyer-Friendly Sales Funnels",
    description:
      "Discover how re-thinking your current Sales Engagement delivers faster sales and more repeat business. Plus: Surprisingly, it's easier than you probably think…",
    image: "/images/buyer-focused-sales-funnels-video.png",
    url: "https://www.youtube.com/watch?v=GWdwfOQmgeY",
    icon: <PlayCircle className="w-5 h-5" />,
  },
]

export default function MediaPage() {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Online Events, Videos & Podcasts"
        subtitle="Explore a curated collection of Peter Strohkorb's appearances on various platforms, sharing insights on modern selling, sales leadership, and business growth."
      />

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mediaItems.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-contain bg-gray-100"
                />
                <div className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  {item.icon}
                  <span>{item.type}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold h-16">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button
                  asChild
                  className="w-full gradient-accent text-white hover:shadow-lg transition-all duration-300"
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Watch Now
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <section className="mt-24 bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Featured Podcast Episode</h2>
          <p className="text-gray-600 text-center mb-6">
            Listen to Peter's latest insights on modern selling strategies and buyer-friendly approaches.
          </p>
          <div className="w-full">
            <iframe
              width="100%"
              height="180"
              frameBorder="0"
              scrolling="no"
              seamless
              src="https://share.transistor.fm/e/f36110c0"
              title="Featured Podcast Episode"
            />
          </div>
        </section>

        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">More Modern Selling Tips & Topics…</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Dive deeper into specific sales strategies with these video playlists from our YouTube channel.
          </p>
          <Link href="https://www.youtube.com/@PeterStrohkorbSalesAdvisory" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/youtube-videos-grid-new.png"
              alt="Grid of YouTube video thumbnails on modern selling"
              width={1200}
              height={675}
              className="rounded-lg shadow-xl mx-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </section>
      </main>
    </div>
  )
}
