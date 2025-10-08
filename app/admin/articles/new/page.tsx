"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Breadcrumb } from "@/components/admin/breadcrumb"
import { useToast } from "@/hooks/use-toast"

export interface Topic {
  month: string
  title: string
  description: string
  summarylink: string
}

export default function NewTopicPage() {
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState<Topic>({
    month: "",
    title: "",
    description: "",
    summarylink: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof Topic, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validation
      if (!formData.title.trim() || !formData.month.trim() || !formData.description.trim()) {
        alert("Please fill in all required fields (Month, Title, Description)")
        return
      }

      if (formData.title.length > 255) {
        alert("Title must be less than 255 characters")
        return
      }
      if (formData.description.length > 2000) {
        alert("Description must be less than 2000 characters")
        return
      }

      // Simulate API request (replace this with actual endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Creating topic:", formData)

      toast({
        title: "Topic created successfully",
        description: `${formData.title} has been added for ${formData.month}.`,
      })

      router.push("/admin/roundtable")
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const breadcrumbItems = [
    { label: "Home", href: "/admin" },
    { label: "Topics", href: "/admin/roundtable" },
    { label: "New" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={breadcrumbItems} />

      <main className="px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Add Topic</h1>
            <p className="text-muted-foreground">
              Create a new topic for your content calendar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Topic Details */}
            <fieldset className="border border-border rounded-lg p-6 space-y-6">
              <legend className="px-3 text-lg font-semibold text-foreground">
                Topic Details
              </legend>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="month">
                    Month <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="month"
                    placeholder="e.g. October 2025"
                    value={formData.month}
                    onChange={(e) => handleInputChange("month", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">
                    Title <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter topic title..."
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    maxLength={255}
                    required
                  />
                  <div className="text-xs text-muted-foreground">
                    {formData.title.length}/255 characters
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">
                  Description <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe this topic..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={4}
                  maxLength={2000}
                  required
                />
                <div className="text-xs text-muted-foreground">
                  {formData.description.length}/2000 characters
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="summarylink">Summary Link</Label>
                <Input
                  id="summarylink"
                  type="url"
                  placeholder="https://example.com/summary"
                  value={formData.summarylink}
                  onChange={(e) => handleInputChange("summarylink", e.target.value)}
                />
                <div className="text-xs text-muted-foreground">
                  Optional: Link to a detailed summary or resource.
                </div>
              </div>
            </fieldset>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="hover:bg-accent bg-accent/90 text-accent-foreground px-8"
              >
                {isSubmitting ? "Saving..." : "Save Topic"}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin/roundtable")}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
