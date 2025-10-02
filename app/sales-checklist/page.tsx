import { PageHeader } from "@/components/page-header"
import ModernHeader from "@/components/modern-header"

export default function SalesChecklistPage() {
  return (
    <div className="bg-white min-h-screen">
      <ModernHeader />
      <PageHeader
        title={<span className="text-accent">How well does your sales funnel perform?</span>}
        subtitle="Sales Funnel Self-Assessment"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                className="w-full h-[800px] sm:h-[900px] md:h-[1000px] lg:h-[1200px] border-0"
                src="https://form.jotform.com/pstrohkorb/sales-funnel-self-assessment"
                title="Sales Funnel Self-Assessment"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
