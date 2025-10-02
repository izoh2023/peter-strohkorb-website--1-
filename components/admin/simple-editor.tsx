"use client"

interface SimpleEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function SimpleEditor({ value, onChange, placeholder, className }: SimpleEditorProps) {
  return (
    <div className={className}>
      <textarea
        className="w-full border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
        style={{ minHeight: "200px", padding: "12px" }}
        placeholder={placeholder || "Start writing..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
