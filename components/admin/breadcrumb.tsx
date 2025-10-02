"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-secondary/50 border-b border-border px-6 py-2">
      <nav className="django-breadcrumb flex items-center gap-1 text-sm">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="h-3 w-3" />}
            {item.href ? (
              <Link href={item.href} className="text-accent hover:underline">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}
