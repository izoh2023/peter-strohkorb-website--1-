"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  Quote,
  Code,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  required?: boolean
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your content here...",
  label,
  required,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [isEditorFocused, setIsEditorFocused] = useState(false)

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value
    }
  }, [value])

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    handleInput()
  }

  const insertLink = () => {
    const url = prompt("Enter URL:")
    if (url) {
      executeCommand("createLink", url)
    }
  }

  const toolbarButtons = [
    { icon: Bold, command: "bold", title: "Bold" },
    { icon: Italic, command: "italic", title: "Italic" },
    { icon: Underline, command: "underline", title: "Underline" },
    { icon: Heading1, command: "formatBlock", value: "h1", title: "Heading 1" },
    { icon: Heading2, command: "formatBlock", value: "h2", title: "Heading 2" },
    { icon: Heading3, command: "formatBlock", value: "h3", title: "Heading 3" },
    { icon: List, command: "insertUnorderedList", title: "Bullet List" },
    { icon: ListOrdered, command: "insertOrderedList", title: "Numbered List" },
    { icon: Quote, command: "formatBlock", value: "blockquote", title: "Quote" },
    { icon: Code, command: "formatBlock", value: "pre", title: "Code Block" },
    { icon: AlignLeft, command: "justifyLeft", title: "Align Left" },
    { icon: AlignCenter, command: "justifyCenter", title: "Align Center" },
    { icon: AlignRight, command: "justifyRight", title: "Align Right" },
  ]

  return (
    <div className="space-y-2">
      {label && (
        <Label>
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      )}

      <div className={`border rounded-lg ${isEditorFocused ? "ring-2 ring-accent ring-opacity-50" : ""}`}>
        {/* Toolbar */}
        <div className="border-b bg-gray-50 p-2 flex flex-wrap gap-1">
          {toolbarButtons.map((button, index) => {
            const Icon = button.icon
            return (
              <Button
                key={index}
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                title={button.title}
                onClick={() => {
                  if (button.command === "createLink") {
                    insertLink()
                  } else {
                    executeCommand(button.command, button.value)
                  }
                }}
              >
                <Icon className="w-4 h-4" />
              </Button>
            )
          })}

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            title="Insert Link"
            onClick={insertLink}
          >
            <Link className="w-4 h-4" />
          </Button>
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          className="min-h-[300px] p-4 focus:outline-none prose prose-sm max-w-none"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
          onInput={handleInput}
          onFocus={() => setIsEditorFocused(true)}
          onBlur={() => setIsEditorFocused(false)}
          dangerouslySetInnerHTML={{ __html: value }}
          data-placeholder={placeholder}
        />
      </div>

      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }
        
        [contenteditable] h1 {
          font-size: 2rem;
          font-weight: bold;
          margin: 1rem 0;
        }
        
        [contenteditable] h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.875rem 0;
        }
        
        [contenteditable] h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0.75rem 0;
        }
        
        [contenteditable] blockquote {
          border-left: 4px solid #f2a324;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          color: #6b7280;
        }
        
        [contenteditable] pre {
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.375rem;
          overflow-x: auto;
          font-family: 'Courier New', monospace;
          margin: 1rem 0;
        }
        
        [contenteditable] ul, [contenteditable] ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        
        [contenteditable] li {
          margin: 0.25rem 0;
        }
        
        [contenteditable] a {
          color: #f2a324;
          text-decoration: underline;
        }
        
        [contenteditable] p {
          margin: 0.5rem 0;
          line-height: 1.6;
        }
      `}</style>
    </div>
  )
}
