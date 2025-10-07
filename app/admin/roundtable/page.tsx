"use client"

import { TopicForm } from "@/components/topic-form"
import { useToast } from "@/hooks/use-toast"

export interface Topic {
  month: string
  title: string
  description: string
  summaryLink: string
}

export default function AdminPage() {
  const { toast } = useToast()

  const handleCreateTopic = async (data: Topic) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Creating topic:", data)

    toast({
      title: "Topic created successfully",
      description: `${data.title} has been added for ${data.month}.`,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Topic Management</h1>
          <p className="mt-2 text-muted-foreground">Create and manage topics for your content calendar</p>
        </div>

        <TopicForm onSubmit={handleCreateTopic} mode="create" />
      </div>
    </div>
  )
}
