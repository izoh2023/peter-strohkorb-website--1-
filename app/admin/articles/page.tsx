"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Breadcrumb } from "@/components/admin/breadcrumb"
import { ArticlesTable } from "@/components/admin/articles-table"
import type { Article } from "@/components/admin/article-page"
import { useEffect } from "react"


export default function ArticlesPage() {
  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>()
  const [Loading, setIsLoading] = useState(true)

  useEffect(() => {
    async function init() {
      try {
        setIsLoading(true)
        const res = await fetch("/api/articles")
        const data = await res.json()
        setArticles(data)
      } catch (error) {
        console.log(error)
        setArticles(undefined)
      }finally{
        setIsLoading(false)
      }
    }
    init()
  }, [])

  const handleEdit = (article: Article) => {
    router.push(`/admin/articles/${article.id}/edit`)
  }

  const handleDelete = async (id: string) => {
    try {
      setIsLoading(true)
      const res = await fetch(`/api/articles?id=${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        throw new Error('Failed to delete article')
      }

      console.log('deleted')
      setArticles((prev) => prev?.filter((article) => article.id !== id))
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }


  const breadcrumbItems = [{ label: "Home", href: "/admin" }, { label: "Articles" }]

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={breadcrumbItems} />

      <main className="px-6 py-6">
        <div className="rounded border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Select article to change</h2>
                <p className="text-sm text-muted-foreground">{articles?.length} articles</p>
              </div>
              <Button
                onClick={() => router.push("/admin/articles/new")}
                className="gap-2 hover:bg-accent bg-accent/90 text-accent-foreground"
              >
                <Plus className="h-4 w-4" />
                Add article
              </Button>
            </div>
          </div>
          <div className="p-4">
          {
            Loading ? (
              <div className="min-h-[400px] bg-background flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading article...</p>
                </div>
              </div>
            ):(
              <>
                {
                  articles ? (
                    <ArticlesTable articles={articles} onEdit={handleEdit} onDelete={handleDelete} />
                  ):(
                    `failed to fetch`
                  )
                }
              </>
            )
          }  
          </div>
        </div>
      </main>
    </div>
  )
}
