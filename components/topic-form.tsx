"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export interface Topic {
  month: string
  title: string
  description: string
  summaryLink: string
}

interface TopicFormProps {
  initialData?: Topic
  onSubmit: (data: Topic) => void
  mode?: "create" | "update"
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function TopicForm({ initialData, onSubmit, mode = "create" }: TopicFormProps) {
  const [formData, setFormData] = useState<Topic>(
    initialData || {
      month: "",
      title: "",
      description: "",
      summaryLink: "",
    },
  )
  const [errors, setErrors] = useState<Partial<Record<keyof Topic, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Topic, string>> = {}

    if (!formData.month) {
      newErrors.month = "Month is required"
    }

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    }

    if (!formData.summaryLink.trim()) {
      newErrors.summaryLink = "Summary link is required"
    } else {
      try {
        new URL(formData.summaryLink)
      } catch {
        newErrors.summaryLink = "Please enter a valid URL"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit(formData)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({
      month: "",
      title: "",
      description: "",
      summaryLink: "",
    })
    setErrors({})
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-2xl">{mode === "create" ? "Create New Topic" : "Update Topic"}</CardTitle>
        <CardDescription>
          {mode === "create" ? "Add a new topic to the collection" : "Update the topic information"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="month">
              Month <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.month}
              onValueChange={(value) => {
                setFormData({ ...formData, month: value })
                setErrors({ ...errors, month: undefined })
              }}
            >
              <SelectTrigger id="month" className={errors.month ? "border-destructive" : ""}>
                <SelectValue placeholder="Select a month" />
              </SelectTrigger>
              <SelectContent>
                {MONTHS.map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.month && <p className="text-sm text-destructive">{errors.month}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">
              Title <span className="text-destructive">*</span>
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter topic title"
              value={formData.title}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value })
                setErrors({ ...errors, title: undefined })
              }}
              className={errors.title ? "border-destructive" : ""}
            />
            {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Description <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Enter topic description"
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value })
                setErrors({ ...errors, description: undefined })
              }}
              className={`min-h-[120px] resize-none ${errors.description ? "border-destructive" : ""}`}
            />
            {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="summaryLink">
              Summary Link <span className="text-destructive">*</span>
            </Label>
            <Input
              id="summaryLink"
              type="url"
              placeholder="https://example.com/summary"
              value={formData.summaryLink}
              onChange={(e) => {
                setFormData({ ...formData, summaryLink: e.target.value })
                setErrors({ ...errors, summaryLink: undefined })
              }}
              className={errors.summaryLink ? "border-destructive" : ""}
            />
            {errors.summaryLink && <p className="text-sm text-destructive">{errors.summaryLink}</p>}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {isSubmitting
                ? mode === "create"
                  ? "Creating..."
                  : "Updating..."
                : mode === "create"
                  ? "Create Topic"
                  : "Update Topic"}
            </Button>
            <Button type="button" variant="outline" onClick={handleReset} disabled={isSubmitting}>
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
