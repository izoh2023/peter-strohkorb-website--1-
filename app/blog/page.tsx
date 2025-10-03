import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, Calendar, User } from "lucide-react"
import ModernHeader from "@/components/modern-header"
import { getArticles } from "@/lib/db"

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const dynamicArticles = await getArticles()
  console.log(dynamicArticles)

  const formattedDynamicArticles = dynamicArticles.map((article) => ({
    id: article.id,
    title: article.title,
    author: article.author,
    date: new Date(article.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    image: article.hero_image,
    summary: article.summary || article.seo_description || "Read this article to learn more.",
  }))

  const allPosts = formattedDynamicArticles.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <PageHeader
        title="Modern Selling Blog"
        subtitle="Insights and strategies to help you sell smarter, not harder."
      />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <FadeInSection key={post.id} delay={index * 100}>
                <Card className="card-hover hover-lift h-full flex flex-col">
                  <CardHeader>
                    {post.image && (
                      <div className="relative aspect-video w-full mb-4">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="rounded-t-lg object-cover"
                        />
                      </div>
                    )}
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700">{post.summary}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full btn-modern gradient-accent text-white">
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center space-x-2"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
