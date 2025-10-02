"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FileText, PlusCircle, BarChart3, Users, Settings, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: Home,
  },
  {
    title: "Articles",
    href: "/admin/articles",
    icon: FileText,
  },
  {
    title: "New Article",
    href: "/admin/articles/new",
    icon: PlusCircle,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 p-4">
      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn("w-full justify-start", isActive && "bg-accent text-white hover:bg-accent-dark")}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.title}
              </Button>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
