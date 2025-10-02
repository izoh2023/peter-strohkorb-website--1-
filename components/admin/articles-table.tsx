"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Edit, Trash2, Eye } from "lucide-react"
import { DeleteArticleDialog } from "./delete-article-dialog"
import type { Article } from "./article-page"

interface ArticlesTableProps {
  articles: Article[]
  onEdit: (article: Article) => void
  onDelete: (id: string) => void
}

export function ArticlesTable({ articles, onEdit, onDelete }: ArticlesTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteArticle, setDeleteArticle] = useState<Article | null>(null)
  const [selectedArticles, setSelectedArticles] = useState<string[]>([])

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  const handleDeleteClick = (article: Article) => {
    setDeleteArticle(article)
  }

  const handleDeleteConfirm = () => {
    if (deleteArticle) {
      onDelete(deleteArticle.id)
      setDeleteArticle(null)
    }
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedArticles(filteredArticles.map((a) => a.id))
    } else {
      setSelectedArticles([])
    }
  }

  const handleSelectArticle = (articleId: string, checked: boolean) => {
    if (checked) {
      setSelectedArticles((prev) => [...prev, articleId])
    } else {
      setSelectedArticles((prev) => prev.filter((id) => id !== articleId))
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-64"
            />
          </div>
        </div>
        {selectedArticles.length > 0 && (
          <div className="text-sm text-muted-foreground">
            {selectedArticles.length} of {filteredArticles.length} selected
          </div>
        )}
      </div>

      <div className="border border-border rounded bg-white">
        <table className="django-table">
          <thead>
            <tr>
              <th className="text-center">
                <Checkbox
                  checked={selectedArticles.length === filteredArticles.length && filteredArticles.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </th>
              <th className="text-left">
                <a href="#" className="text-accent hover:underline">
                  Title
                </a>
              </th>
              <th className="text-left">
                <a href="#" className="text-accent hover:underline">
                  Author
                </a>
              </th>
              <th className="text-left">Summary</th>
              <th className="text-left">
                <a href="#" className="text-accent hover:underline">
                  Date created
                </a>
              </th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-muted-foreground">
                  {searchTerm
                    ? "No articles found matching your search."
                    : "No articles yet. Create your first article!"}
                </td>
              </tr>
            ) : (
              filteredArticles.map((article) => (
                <tr key={article.id}>
                  <td className="text-center">
                    <Checkbox
                      checked={selectedArticles.includes(article.id)}
                      onCheckedChange={(checked) => handleSelectArticle(article.id, checked as boolean)}
                    />
                  </td>
                  <td className="text-left">
                    <div className="space-y-1">
                      <a href="#" className="text-accent hover:underline font-medium">
                        {truncateText(article.title, 50)}
                      </a>
                      {article.hero_image && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Eye className="h-3 w-3" />
                          Has image
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="text-left text-foreground">{article.author}</td>
                  <td className="text-left text-muted-foreground">
                    {article.summary ? truncateText(article.summary, 60) : "—"}
                  </td>
                  <td className="text-left text-muted-foreground">{formatDate(article.created_at)}</td>
                  <td className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onEdit(article)}
                        className="h-7 px-2 text-accent hover:text-accent hover:bg-accent/10"
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Change
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteClick(article)}
                        className="h-7 px-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div>
          {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
        </div>
        {selectedArticles.length > 0 && (
          <div>
            {selectedArticles.length} of {filteredArticles.length} selected
          </div>
        )}
      </div>

      <DeleteArticleDialog
        article={deleteArticle}
        open={!!deleteArticle}
        onOpenChange={(open) => !open && setDeleteArticle(null)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  )
}
