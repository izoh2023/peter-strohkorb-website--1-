import { Card, CardContent, CardHeader } from "@/components/ui/card"
import ModernHeader from "@/components/modern-header"
import { PageHeader } from "@/components/page-header"

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <PageHeader title="Modern Selling Blog" subtitle="Loading articles..." />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="h-full flex flex-col animate-pulse">
                <CardHeader>
                  <div className="aspect-video w-full mb-4 bg-gray-200 rounded"></div>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
