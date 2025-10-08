"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Edit, Trash2, LinkIcon } from "lucide-react"
import { DeleteArticleDialog } from "./delete-article-dialog"

export interface Topic {
  id: string
  month: string
  title: string
  description: string
  summarylink: string
}

interface TopicsTableProps {
  topics: Topic[]
  onEdit: (topic: Topic) => void
  onDelete: (id: string) => void
}

export function TopicsTable({ topics, onEdit, onDelete }: TopicsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [deleteTopic, setDeleteTopic] = useState<Topic | null>(null)
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  console.log(topics)
  // filter by title, month, or description
  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.month.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const truncateText = (text: string | null | undefined, maxLength: number) => {
    if (!text || typeof text !== "string") return ""
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text
  }


  const handleDeleteClick = (topic: Topic) => {
    setDeleteTopic(topic)
  }

  const handleDeleteConfirm = () => {
    if (deleteTopic) {
      onDelete(deleteTopic.id)
      setDeleteTopic(null)
    }
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTopics(filteredTopics.map((t) => t.id))
    } else {
      setSelectedTopics([])
    }
  }

  const handleSelectTopic = (topicId: string, checked: boolean) => {
    if (checked) {
      setSelectedTopics((prev) => [...prev, topicId])
    } else {
      setSelectedTopics((prev) => prev.filter((id) => id !== topicId))
    }
  }

  return (
    <div className="space-y-4">
      {/* Search and Selection Info */}
      <div className="flex items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-64"
            />
          </div>
        </div>
        {selectedTopics.length > 0 && (
          <div className="text-sm text-muted-foreground">
            {selectedTopics.length} of {filteredTopics.length} selected
          </div>
        )}
      </div>

      {/* Table */}
      <div className="border border-border rounded bg-white">
        <table className="django-table">
          <thead>
            <tr>
              <th className="text-center">
                <Checkbox
                  checked={selectedTopics.length === filteredTopics.length && filteredTopics.length > 0}
                  onCheckedChange={handleSelectAll}
                />
              </th>
              <th className="text-left">Month</th>
              <th className="text-left">Title</th>
              <th className="text-left">Description</th>
              <th className="text-left">Summary Link</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredTopics.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-muted-foreground">
                  {searchTerm
                    ? "No topics found matching your search."
                    : "No topics yet. Create your first topic!"}
                </td>
              </tr>
            ) : (
              filteredTopics.map((topic) => (
                <tr key={topic.id}>
                  <td className="text-center">
                    <Checkbox
                      checked={selectedTopics.includes(topic.id)}
                      onCheckedChange={(checked) => handleSelectTopic(topic.id, checked as boolean)}
                    />
                  </td>
                  <td className="text-left">{topic.month}</td>
                  <td className="text-left font-medium text-foreground">
                    {truncateText(topic.title, 50)}
                  </td>
                  <td className="text-left text-muted-foreground">
                    {truncateText(topic.description, 60)}
                  </td>
                  <td className="text-left">
                    {topic.summarylink ? (
                      <a
                        href={topic.summarylink.startsWith("http") ? topic.summarylink : `https://${topic.summarylink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                        title={topic.summarylink}
                      >
                        {truncateText(topic.summarylink, 60)}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>

                  <td className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onEdit(topic)}
                        className="h-7 px-2 text-accent hover:bg-accent/10"
                      >
                        <Edit className="h-3 w-3 mr-1" /> Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteClick(topic)}
                        className="h-7 px-2 text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-3 w-3 mr-1" /> Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div>
          {filteredTopics.length} topic{filteredTopics.length !== 1 ? "s" : ""}
        </div>
        {selectedTopics.length > 0 && (
          <div>
            {selectedTopics.length} of {filteredTopics.length} selected
          </div>
        )}
      </div>

      {/* Delete Dialog */}
      <DeleteArticleDialog
        article={deleteTopic as any} // temporary reuse of dialog; can rename later
        open={!!deleteTopic}
        onOpenChange={(open) => !open && setDeleteTopic(null)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  )
}
