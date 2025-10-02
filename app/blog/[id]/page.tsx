import { getArticleById } from "@/lib/db"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const id = params.id
  const article = await getArticleById(id)

  if (!article) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <article className="space-y-8">
            {article.hero_image && (
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <Image
                  src={article.hero_image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">{article.title}</h1>

              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.created_at)}</span>
                </div>
              </div>

              {article.summary && <p className="text-xl text-gray-700 leading-relaxed">{article.summary}</p>}
            </header>

            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-800 leading-relaxed prose prose-headings:text-primary prose-a:text-accent prose-blockquote:border-l-accent prose-blockquote:text-gray-600"
                dangerouslySetInnerHTML={{ __html: article.content_html }}
              />
            </div>

            {article.seo_keywords && (
              <div className="border-t pt-8">
                <h3 className="text-lg font-semibold text-primary mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.seo_keywords.split(",").map((keyword, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {keyword.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id
  const article = await getArticleById(id)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: article.title,
    description: article.seo_description || article.summary || `Article by ${article.author}`,
    keywords: article.seo_keywords?.split(",").map((k) => k.trim()) || [],
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.seo_description || article.summary || `Article by ${article.author}`,
      images: article.hero_image ? [article.hero_image] : [],
      type: "article",
      publishedTime: article.created_at,
      modifiedTime: article.updated_at,
      authors: [article.author],
    },
  }
}

