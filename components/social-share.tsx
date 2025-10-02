"use client"

import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Facebook } from 'lucide-react'

export function SocialShare() {
  const pathname = usePathname()
  const url = `https://www.peterstrohkorb.com${pathname}`

  const socialLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  }

  return (
    <div className="mt-8 pt-8 border-t">
      <h3 className="text-lg font-semibold text-center mb-4">Share this article</h3>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon" asChild>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
            <Twitter className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
            <Facebook className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  )
}
