"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle } from "lucide-react"
import type { Article } from "./article-page"

interface DeleteArticleDialogProps {
  article: Article | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export function DeleteArticleDialog({ article, open, onOpenChange, onConfirm }: DeleteArticleDialogProps) {
  if (!article) return null

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <DialogTitle>Delete Article</DialogTitle>
              <DialogDescription>This action cannot be undone.</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-muted/50 p-4">
            <h4 className="font-medium text-foreground mb-2">Article to be deleted:</h4>
            <div className="space-y-1 text-sm">
              <p className="font-medium text-foreground">{article.title}</p>
              <p className="text-muted-foreground">by {article.author}</p>
              <p className="text-muted-foreground">Created: {formatDate(article.created_at)}</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this article? This will permanently remove the article and all its content.
            This action cannot be undone.
          </p>
        </div>

        <DialogFooter>
          <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={() => {
              onConfirm()
              onOpenChange(false)
            }}
          >
            Delete Article
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
