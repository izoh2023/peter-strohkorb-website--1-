"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Breadcrumb } from "@/components/admin/breadcrumb"
import EditorDemo from "@/components/admin/ckeditor-wrapper"
import type { Article } from "@/components/admin/article-page"
import { SerializedEditorState } from "lexical"
import { useRef } from "react"

export default function EditArticlePage() {
  const router = useRouter()
  const params = useParams()
  const articleId = params.id as string

  const [article, setArticle] = useState<Article>()
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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function init() {
      try {
        setIsLoading(true)
        const res = await fetch(`/api/articles?id=${articleId}`)
        if (!res.ok) {
          throw new Error('Failed to delete article')
        }
        const foundArticle = await res.json()
        if (foundArticle) {
          setArticle(foundArticle)
          setFormData({
            title: foundArticle.title || "",
            author: foundArticle.author || "",
            hero_image: foundArticle.hero_image || "",
            summary: foundArticle.summary || "",
            content_json: foundArticle.content_json || "",
            seo_description: foundArticle.seo_description || "",
            seo_keywords: foundArticle.seo_keywords || "",
          })
        }
      } catch (error) {
        console.log(error)
        setArticle(undefined)
      }finally{
        setIsLoading(false)
      }
    }
    init()
    
    setIsLoading(false)
  }, [articleId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!article) return

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

      const updatedArticle: Article = {
        ...article,
        title: formData.title.trim(),
        author: formData.author.trim(),
        hero_image: formData.hero_image.trim() || undefined,
        summary: formData.summary.trim() || undefined,
        content_json: formData.content_json,
        content_html: htmlRef.current,
        seo_description: formData.seo_description.trim() || undefined,
        seo_keywords: formData.seo_keywords.trim() || undefined,
        updated_at: new Date().toISOString(),
      }

      console.log("[v0] Updating article:", updatedArticle)

      try {
        const res =await fetch(`/api/articles`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedArticle)
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (isLoading) {
    return (
      <div className="bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    )
  }else{
    if (!article) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Article Not Found</h1>
            <p className="text-muted-foreground mb-4">The article you're looking for doesn't exist.</p>
            <Button onClick={() => router.push("/admin/articles")}>Back to Articles</Button>
          </div>
        </div>
      )
    }
    const breadcrumbItems = [
      { label: "Home", href: "/admin" },
      { label: "Articles", href: "/admin/articles" },
      { label: article.title },
    ]
  
    return (
      <div className="min-h-screen bg-background">
        <Breadcrumb items={breadcrumbItems} />
  
        <main className="px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">Edit Article</h1>
              <p className="text-muted-foreground mb-4">Update your article content and settings.</p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>Created: {formatDate(article.created_at)}</span>
                <span>Last updated: {formatDate(article.updated_at)}</span>
              </div>
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <fieldset className="border border-border rounded-lg p-6 space-y-6">
                <legend className="px-3 text-lg font-semibold text-foreground">Basic Information</legend>
  
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-sm font-medium">
                      Title <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter article title..."
                      maxLength={2000}
                      required
                      className="w-full"
                    />
                    <div className="text-xs text-muted-foreground">{formData.title.length}/2000 characters</div>
                  </div>
  
                  <div className="space-y-2">
                    <Label htmlFor="author" className="text-sm font-medium">
                      Author <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => handleInputChange("author", e.target.value)}
                      placeholder="Author name..."
                      maxLength={255}
                      required
                      className="w-full"
                    />
                    <div className="text-xs text-muted-foreground">{formData.author.length}/255 characters</div>
                  </div>
                </div>
  
                <div className="space-y-2">
                  <Label htmlFor="hero_image" className="text-sm font-medium">
                    Hero Image URL
                  </Label>
                  <Input
                    id="hero_image"
                    type="url"
                    value={formData.hero_image}
                    onChange={(e) => handleInputChange("hero_image", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="w-full"
                  />
                  <div className="text-xs text-muted-foreground">Optional: URL to the article's hero image</div>
                </div>
              </fieldset>
  
              {/* Content */}
              <fieldset className="border border-border rounded-lg p-6 space-y-6">
                <legend className="px-3 text-lg font-semibold text-foreground">Content</legend>
  
                <div className="space-y-2">
                  <Label htmlFor="summary" className="text-sm font-medium">
                    Summary
                  </Label>
                  <Textarea
                    id="summary"
                    value={formData.summary}
                    onChange={(e) => handleInputChange("summary", e.target.value)}
                    placeholder="Brief summary of the article..."
                    rows={3}
                    className="w-full"
                  />
                  <div className="text-xs text-muted-foreground">Optional: A brief summary or excerpt</div>
                </div>
  
                <div className="space-y-2">
                  <Label htmlFor="content" className="text-sm font-medium">
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
                    Main article content with rich text formatting support and image uploads.
                  </div>
                </div>
              </fieldset>
  
              {/* SEO */}
              <fieldset className="border border-border rounded-lg p-6 space-y-6">
                <legend className="px-3 text-lg font-semibold text-foreground">SEO Settings</legend>
  
                <div className="space-y-2">
                  <Label htmlFor="seo_description" className="text-sm font-medium">
                    SEO Description
                  </Label>
                  <Textarea
                    id="seo_description"
                    value={formData.seo_description}
                    onChange={(e) => handleInputChange("seo_description", e.target.value)}
                    placeholder="Meta description for search engines..."
                    rows={3}
                    maxLength={300}
                    className="w-full"
                  />
                  <div className="text-xs text-muted-foreground">{formData.seo_description.length}/300 characters</div>
                </div>
  
                <div className="space-y-2">
                  <Label htmlFor="seo_keywords" className="text-sm font-medium">
                    SEO Keywords
                  </Label>
                  <Input
                    id="seo_keywords"
                    value={formData.seo_keywords}
                    onChange={(e) => handleInputChange("seo_keywords", e.target.value)}
                    placeholder="keyword1, keyword2, keyword3..."
                    maxLength={500}
                    className="w-full"
                  />
                  <div className="text-xs text-muted-foreground">
                    {formData.seo_keywords.length}/500 characters • Separate keywords with commas
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
                  {isSubmitting ? "Updating..." : "Update Article"}
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


}
