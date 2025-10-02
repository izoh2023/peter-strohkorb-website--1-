"use client"

import type React from "react"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Breadcrumb } from "@/components/admin/breadcrumb"
import EditorDemo from "@/components/admin/ckeditor-wrapper"
import { SerializedEditorState } from "lexical"
import type { Article } from "@/components/admin/article-page"

export default function NewArticlePage() {
  const router = useRouter()

  // keep formData only for simple fields
  const htmlRef = useRef("") // <-- keep HTML here, no rerenders
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    hero_image: "",
    summary: "",
    content_json: "" as unknown as SerializedEditorState,
    seo_description: "",
    seo_keywords: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate required fields
      if (!formData.title.trim() || !formData.author.trim() || !formData.content_json) {
        alert("Please fill in all required fields (Title, Author, Content)")
        return
      }

      // Check field lengths
      if (formData.title.length > 2000) {
        alert("Title must be less than 2000 characters")
        return
      }
      if (formData.author.length > 255) {
        alert("Author name must be less than 255 characters")
        return
      }
      if (formData.seo_description.length > 300) {
        alert("SEO description must be less than 300 characters")
        return
      }
      if (formData.seo_keywords.length > 500) {
        alert("SEO keywords must be less than 500 characters")
        return
      }

      // Build article payload
      const newArticle: Omit<Article, "id" | "created_at" | "updated_at"> = {
        title: formData.title.trim(),
        author: formData.author.trim(),
        hero_image: formData.hero_image.trim() || undefined,
        summary: formData.summary.trim() || undefined,
        content_json: formData.content_json,
        content_html: htmlRef.current,
        seo_description: formData.seo_description.trim() || undefined,
        seo_keywords: formData.seo_keywords.trim() || undefined,
      }

      console.log("[v0] Creating article:", newArticle)


      try {
        const res =await fetch(`/api/articles`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newArticle)
        })
  
        if(!res.ok){
          throw new Error('Failed to add article')
        }
  
        console.log('added')
        
      } catch (error) {
        console.error(error)
      }

      router.push("/admin/articles")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const breadcrumbItems = [
    { label: "Home", href: "/admin" },
    { label: "Articles", href: "/admin/articles" },
    { label: "New" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={breadcrumbItems} />

      <main className="px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Add Article</h1>
            <p className="text-muted-foreground">
              Create a new blog article with rich content and SEO optimization.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <fieldset className="border border-border rounded-lg p-6 space-y-6">
              <legend className="px-3 text-lg font-semibold text-foreground">
                Basic Information
              </legend>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Title <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Enter article title..."
                    maxLength={2000}
                    required
                  />
                  <div className="text-xs text-muted-foreground">
                    {formData.title.length}/2000 characters
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">
                    Author <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                    placeholder="Author name..."
                    maxLength={255}
                    required
                  />
                  <div className="text-xs text-muted-foreground">
                    {formData.author.length}/255 characters
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hero_image">Hero Image URL</Label>
                <Input
                  id="hero_image"
                  type="url"
                  value={formData.hero_image}
                  onChange={(e) => handleInputChange("hero_image", e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
                <div className="text-xs text-muted-foreground">
                  Optional: URL to the article's hero image
                </div>
              </div>
            </fieldset>

            {/* Content */}
            <fieldset className="border border-border rounded-lg p-6 space-y-6">
              <legend className="px-3 text-lg font-semibold text-foreground">
                Content
              </legend>

              <div className="space-y-2">
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  value={formData.summary}
                  onChange={(e) => handleInputChange("summary", e.target.value)}
                  placeholder="Brief summary of the article..."
                  rows={3}
                />
                <div className="text-xs text-muted-foreground">
                  Optional: A brief summary or excerpt
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">
                  Content <span className="text-destructive">*</span>
                </Label>
                <EditorDemo
                  value={formData.content_json}
                  onChange={(val, html) => {
                    handleInputChange("content_json", val)
                    htmlRef.current = html 
                  }}
                />
                <div className="text-xs text-muted-foreground">
                  Main article content with rich text formatting support and
                  image uploads.
                </div>
              </div>
            </fieldset>

            {/* SEO */}
            <fieldset className="border border-border rounded-lg p-6 space-y-6">
              <legend className="px-3 text-lg font-semibold text-foreground">
                SEO Settings
              </legend>

              <div className="space-y-2">
                <Label htmlFor="seo_description">SEO Description</Label>
                <Textarea
                  id="seo_description"
                  value={formData.seo_description}
                  onChange={(e) =>
                    handleInputChange("seo_description", e.target.value)
                  }
                  placeholder="Meta description for search engines..."
                  rows={3}
                  maxLength={300}
                />
                <div className="text-xs text-muted-foreground">
                  {formData.seo_description.length}/300 characters
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="seo_keywords">SEO Keywords</Label>
                <Input
                  id="seo_keywords"
                  value={formData.seo_keywords}
                  onChange={(e) =>
                    handleInputChange("seo_keywords", e.target.value)
                  }
                  placeholder="keyword1, keyword2, keyword3..."
                  maxLength={500}
                />
                <div className="text-xs text-muted-foreground">
                  {formData.seo_keywords.length}/500 characters • Separate
                  keywords with commas
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
                {isSubmitting ? "Saving..." : "Save Article"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin/articles")}
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
