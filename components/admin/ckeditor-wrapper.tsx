"use client"

import { useEffect, useState } from "react"
import { SerializedEditorState } from "lexical"
import {$generateHtmlFromNodes } from '@lexical/html'
import DOMPurify from "dompurify"

import dynamic from "next/dynamic"
const Editor = dynamic(
  () => import("@/components/blocks/editor-x/editor").then((mod) => mod.Editor),
  { ssr: false }
)

interface EditorDemoProps {
  value?: SerializedEditorState
  onChange?: (json: SerializedEditorState, html: string) => void
}



export default function EditorDemo({ value, onChange }: EditorDemoProps) {
  const [editorState, setEditorState] = useState<SerializedEditorState | undefined>(value)

  useEffect(() => {
    if (value) setEditorState(value)
  }, [value])

  return (
    <div>
      <Editor
        editorSerializedState={editorState}
        onSerializedChange={(val, editor) => {
          setEditorState(val)

          // Generate HTML from current nodes
          let html = ""
          editor.read(() => {
            html = $generateHtmlFromNodes(editor)
          })

          const safeHtml = DOMPurify.sanitize(html, {
            ALLOWED_TAGS: [
              "p", "h1", "h2", "h3", "h4", "strong", "em",
              "a", "ul", "ol", "li", "blockquote",
              "code", "pre", "img", "table", "tr", "td", "th",
              "iframe"
            ],
            ALLOWED_ATTR: [
              "href", "src", "alt", "title", "target", "width", "height", "frameborder", "allow", "allowfullscreen"
            ],
            ADD_ATTR: ["allow", "allowfullscreen"], // ensure fullscreen works
            ALLOW_DATA_ATTR: false // block base64/data: injections
          })

          onChange?.(val, html)
        }}
      />
    </div>
  )
}