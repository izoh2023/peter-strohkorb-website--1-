"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, ChevronRight } from "lucide-react"
import { ArticlesTable } from "./articles-table"
import { SerializedEditorState } from "lexical"


// Mock data for articles based on the Python model
export interface Article {
  id: string // UUID
  title: string
  author: string
  hero_image?: string | null
  summary?: string | null
  content_json: object // Serialized Lexical JSON
  content_html: string
  seo_description?: string | null
  seo_keywords?: string | null
  created_at: string
  updated_at: string
}

const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Hello World 🚀",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
} as unknown as SerializedEditorState

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    author: "John Doe",
    hero_image: "/nextjs-hero.jpg",
    summary: "Learn the fundamentals of Next.js 15 and its new features.",
    content_html: "<p>Next.js 15 introduces several exciting features...</p>",
    content_json: initialValue,
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z",
    seo_description: "Complete guide to Next.js 15 features and setup",
    seo_keywords: "nextjs, react, web development, javascript",
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    author: "Jane Smith",
    summary: "Explore advanced React patterns for scalable applications.",
    content_html: "<p>Advanced React patterns help you build more maintainable...</p>",
    content_json: initialValue,    created_at: "2024-01-14T14:30:00Z",
    updated_at: "2024-01-14T14:30:00Z",
    seo_description: "Learn advanced React patterns and best practices",
    seo_keywords: "react, patterns, hooks, components",
  },
  {
    id: "3",
    title: "Building Scalable APIs",
    author: "Mike Johnson",
    hero_image: "/api-architecture.jpg",
    summary: "Best practices for building scalable and maintainable APIs.",
    content_html: "<p>Advanced React patterns help you build more maintainable...</p>",
    content_json: initialValue,
    created_at: "2024-01-13T09:15:00Z",
    updated_at: "2024-01-13T09:15:00Z",
    seo_description: "API design patterns and scalability best practices",
    seo_keywords: "api, backend, scalability, architecture",
  },
]

interface ArticlesPageProps {
  onNavigateHome: () => void
}

export default function ArticlesPage({ onNavigateHome }: ArticlesPageProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [editingArticle, setEditingArticle] = useState<Article | null>(null)

  const handleCreateArticle = (newArticle: Omit<Article, "id" | "created_at" | "updated_at">) => {
    const article: Article = {
      ...newArticle,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    setArticles((prev) => [article, ...prev])
    setIsCreateDialogOpen(false)
  }

  const handleEditArticle = (updatedArticle: Article) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === updatedArticle.id ? { ...updatedArticle, updated_at: new Date().toISOString() } : article,
      ),
    )
    setEditingArticle(null)
  }

  const handleDeleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((article) => article.id !== id))
  }

  return (
    <>
      <div className="bg-secondary/50 border-b border-border px-6 py-2">
        <nav className="django-breadcrumb flex items-center gap-1 text-sm">
          <button onClick={onNavigateHome} className="text-accent hover:underline">
            Home
          </button>
          <ChevronRight className="h-3 w-3" />
          <span>Articles</span>
        </nav>
      </div>

      <main className="px-6 py-6 flex-1">
        <div className="rounded border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Select article to change</h2>
                <p className="text-sm text-muted-foreground">{articles.length} articles</p>
              </div>
              <Button
                onClick={() => setIsCreateDialogOpen(true)}
                className="gap-2 hover:bg-accent bg-accent/90 text-accent-foreground"
              >
                <Plus className="h-4 w-4" />
                Add article
              </Button>
            </div>
          </div>
          <div className="p-4">
            <ArticlesTable articles={articles} onEdit={setEditingArticle} onDelete={handleDeleteArticle} />
          </div>
        </div>
      </main>
    </>
  )
}
