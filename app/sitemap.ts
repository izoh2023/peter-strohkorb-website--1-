import { MetadataRoute } from "next"
import { getArticles } from "@/lib/db"  // make sure this exists

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.peterstrohkorb.com"

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/ai-advice",
    "/clarity-sessions",
    "/competencies",
    "/contact",
    "/guarantee",
    "/how-we-work",
    "/media",
    "/peters-books",
    "/programs",
    "/sales-checklist",
    "/sales-master-roundtable",
    "/sales-transformation",
    "/schedule",
    "/testimonials",
    "/tips",
    "/privacy",
    "/terms",
  ]

  const staticRoutes = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }))

  // ✅ Blog posts (dynamic from DB now)
  const articles = await getArticles()
  const blogRoutes = articles.map(article => ({
    url: `${baseUrl}/blog/${article.id}`, // use article.slug if available
    lastModified: article.updated_at ? new Date(article.updated_at) : new Date(article.created_at),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Case studies (unchanged, still static)
  const caseStudies = ["amag", "engineering-services", "it-services"]
  const caseStudyRoutes = caseStudies.map(slug => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes]
}
