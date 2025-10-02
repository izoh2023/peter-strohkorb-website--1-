import { MetadataRoute } from "next"

// Assuming these are your blog slugs
const blogPosts = [
  "10-sales-funnel-mistakes",
  "6-success-traps",
  "shock-discounting-just-5-percent-can-hurt-your-bottom-line-by-a-massive-50-percent",
  "the-secret-to-effortless-sales-growth-build-a-referral-selling-machine",
  "the-winning-sales-strategy-that-salesforce-just-endorsed",
  "three-stages-of-building-trust-with-buyers",
]

// Assuming these are your case study slugs
const caseStudies = ["amag", "engineering-services", "it-services"]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.peterstrohkorb.com"

  // Add other pages here
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
    changeFrequency: page === "" || page.startsWith("/blog") || page.startsWith("/case-studies") ? "monthly" : "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }))

  const blogRoutes = blogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const caseStudyRoutes = caseStudies.map(slug => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes]
}
