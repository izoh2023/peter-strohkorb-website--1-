"use client"

// Make sure the ScrollToTop component properly handles navigation to the home page
// by forcing a scroll to top whenever the path changes, including to "/"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "instant" instead of "smooth" for immediate scrolling
    })
  }, [pathname])

  return null
}
