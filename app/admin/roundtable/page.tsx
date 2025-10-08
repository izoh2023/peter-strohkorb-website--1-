"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Breadcrumb } from "@/components/admin/breadcrumb"
import { TopicsTable } from "@/components/admin/topictable"
import type { Topic } from "@/components/admin/topictable"

export default function TopicsPage() {
  const router = useRouter()
  const [topics, setTopics] = useState<Topic[]>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function init() {
      try {
        setIsLoading(true)
        const res = await fetch("/api/roundtable")
        const data = await res.json()
        setTopics(data)
      } catch (error) {
        console.error(error)
        setTopics(undefined)
      } finally {
        setIsLoading(false)
      }
    }
    init()
  }, [])

  const handleEdit = (topic: Topic) => {
    router.push(`/admin/roundtable/${topic.id}/edit`)
  }

  const handleDelete = async (id: string) => {
    try {
      setIsLoading(true)
      const res = await fetch(`/api/roundtable?id=${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })

      if (!res.ok) {
        throw new Error("Failed to delete topic")
      }

      console.log("deleted")
      setTopics((prev) => prev?.filter((topic) => topic.id !== id))
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const breadcrumbItems = [{ label: "Home", href: "/admin" }, { label: "Topics" }]

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={breadcrumbItems} />

      <main className="px-6 py-6">
        <div className="rounded border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Select topic to change</h2>
                <p className="text-sm text-muted-foreground">{topics?.length} topics</p>
              </div>
              <Button
                onClick={() => router.push("/admin/roundtable/new")}
                className="gap-2 hover:bg-accent bg-accent/90 text-accent-foreground"
              >
                <Plus className="h-4 w-4" />
                Add topic
              </Button>
            </div>
          </div>

          <div className="p-4">
            {isLoading ? (
              <div className="min-h-[400px] bg-background flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading topics...</p>
                </div>
              </div>
            ) : (
              <>
                {topics ? (
                  <TopicsTable topics={topics} onEdit={handleEdit} onDelete={handleDelete} />
                ) : (
                  "Failed to fetch topics."
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
