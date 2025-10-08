"use client"

import { TopicForm } from "@/components/topic-form"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export interface Topic {
  id?: string
  month: string
  title: string
  description: string
  summarylink: string
}

export default function AdminPage() {
  const { toast } = useToast()
  const router = useRouter()

  const handleCreateTopic = async (data: Topic) => {
    try {
      const res = await fetch(`/api/roundtable`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error("Failed to update topic")
      
      toast({
        title: "Topic created successfully",
        description: `${data.title} has been added for ${data.month}.`,
      })

      router.push("/admin/roundtable")

    } catch (error) {
      console.log(error)
    }


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
