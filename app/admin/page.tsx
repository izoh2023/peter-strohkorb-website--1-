"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FileText, Users, Settings, ChevronRight, ExternalLink } from "lucide-react"
import ArticlesPage from "@/components/admin/article-page"

export default function AdminHome() {
  const [currentPage, setCurrentPage] = useState<"home" | "articles">("home")
  const router = useRouter()

  // Mock stats data
  const stats = {
    articles: 12,
    authors: 5,
    recentUpdates: 3,
    totalViews: 1250,
  }

  const adminSections = [
    {
      title: "Articles",
      description: "Manage blog posts and content",
      icon: FileText,
      count: stats.articles,
      action: () => router.push("/admin/articles"),
    },
    {
      title: "Roundtable",
      description: "Manage user accounts and permissions",
      icon: Users,
      count: stats.authors,
      action: () => router.push("/admin/roundtable"),
    },
    {
      title: "Settings",
      description: "Configure site settings and preferences",
      icon: Settings,
      count: null,
      action: () => alert("Settings coming soon"),
    },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {currentPage === "articles" ? (
          <ArticlesPage onNavigateHome={() => setCurrentPage("home")} />
        ) : (
          <>
            <div className="bg-secondary/50 border-b border-border px-6 py-2">
              <nav className="django-breadcrumb flex items-center gap-1 text-sm">
                <span>Home</span>
              </nav>
            </div>

            <main className="px-6 py-6 flex-1">
              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Site administration</h1>
                <p className="text-muted-foreground">Select a section below to manage your site content.</p>
              </div>

              {/* Quick Stats */}
              <div className="mb-8 grid gap-4 md:grid-cols-4">
                <div className="rounded border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Articles</p>
                      <p className="text-2xl font-semibold">{stats.articles}</p>
                    </div>
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
                <div className="rounded border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Authors</p>
                      <p className="text-2xl font-semibold">{stats.authors}</p>
                    </div>
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
                <div className="rounded border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Recent Updates</p>
                      <p className="text-2xl font-semibold">{stats.recentUpdates}</p>
                    </div>
                    <Settings className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
                <div className="rounded border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Views</p>
                      <p className="text-2xl font-semibold">{stats.totalViews}</p>
                    </div>
                    <ExternalLink className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Admin Sections */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {adminSections.map((section) => {
                  const Icon = section.icon
                  return (
                    <div key={section.title} className="rounded border border-border bg-card">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/10">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{section.title}</h3>
                              {section.count !== null && (
                                <p className="text-sm text-muted-foreground">{section.count} items</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                        <Button
                          onClick={section.action}
                          className="w-full"
                          style={{ backgroundColor: "#f2a324", color: "#ffffff" }}
                        >
                          Manage {section.title}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Recent Activity */}
              <div className="mt-8 rounded border border-border bg-card">
                <div className="border-b border-border px-6 py-4">
                  <h2 className="text-lg font-semibold">Recent Activity</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-muted-foreground">2 hours ago</span>
                      <span>Article "Getting Started with Next.js 15" was updated</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-muted-foreground">1 day ago</span>
                      <span>New article "Advanced React Patterns" was created</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      <span className="text-muted-foreground">3 days ago</span>
                      <span>User "Jane Smith" was added as author</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  )
}
