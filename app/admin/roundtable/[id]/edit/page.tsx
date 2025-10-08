"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { TopicForm } from "@/components/topic-form"
import { useToast } from "@/hooks/use-toast"

export interface Topic {
  id?: string
  month: string
  title: string
  description: string
  summarylink: string
}

export default function EditTopicPage() {
  const { toast } = useToast()
  const router = useRouter()
  const params = useParams()
  const topicId = params.id as string

  const [topic, setTopic] = useState<Topic | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch existing topic
  useEffect(() => {
    async function fetchTopic() {
      try {
        setIsLoading(true)
        const res = await fetch(`/api/roundtable?id=${topicId}`)
        if (!res.ok) throw new Error("Failed to fetch topic")

        const foundTopic = await res.json()
        setTopic(foundTopic)
      } catch (error) {
        console.error(error)
        setTopic(null)
      } finally {
        setIsLoading(false)
      }
    }
    if (topicId) fetchTopic()
  }, [topicId])

  const handleUpdateTopic = async (data: Topic) => {
    if (!topicId) return

    try {
      const updatedTopic = { ...data, id: topicId }

      const res = await fetch(`/api/roundtable`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTopic),
      })

      if (!res.ok) throw new Error("Failed to update topic")

      toast({
        title: "Topic updated successfully",
        description: `${data.title} has been updated for ${data.month}.`,
      })

      router.push("/admin/roundtable")
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to update topic. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center text-muted-foreground">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4"></div>
          Loading topic...
        </div>
      </div>
    )
  }

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Topic Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The topic you’re looking for doesn’t exist.
          </p>
          <button
            onClick={() => router.push("/admin/topics")}
            className="bg-accent text-accent-foreground px-4 py-2 rounded"
          >
            Back to Topics
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Edit Topic</h1>
          <p className="mt-2 text-muted-foreground">
            Update the details for this topic
          </p>
        </div>

        <TopicForm
          mode="update"
          initialData={topic}
          onSubmit={handleUpdateTopic}
        />
      </div>
    </div>
  )
}
