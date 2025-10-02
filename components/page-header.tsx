import type React from "react"

interface PageHeaderProps {
  title: React.ReactNode
  subtitle?: string
  className?: string
  author?: string
  date?: string
}

export function PageHeader({ title, subtitle, className = "", author, date }: PageHeaderProps) {
  return (
    <header className={`py-12 md:py-16 lg:py-24 text-center bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            {subtitle}
          </p>
        )}
        {(author || date) && (
          <p className="text-sm sm:text-base text-gray-600 mt-4 px-4">
            {author && `By ${author}`}
            {author && date && " • "}
            {date}
          </p>
        )}
      </div>
    </header>
  )
}

export default PageHeader
