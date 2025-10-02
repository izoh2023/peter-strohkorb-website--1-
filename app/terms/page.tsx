import ModernHeader from "@/components/modern-header"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ModernHeader />

      {/* Content */}
      <main className="pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Service Terms & Conditions</h1>
              <p className="text-gray-600 mb-8">Last updated: January 2025</p>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms and provision of
                  this agreement.
                </p>

                <h2 className="text-2xl font-bold mb-4">Service Description</h2>
                <p className="mb-6">
                  Peter Strohkorb Sales Advisory provides sales consulting, training, and coaching services to help
                  businesses improve their sales performance.
                </p>

                <h2 className="text-2xl font-bold mb-4">Client Responsibilities</h2>
                <p className="mb-6">
                  Clients are responsible for implementing recommended strategies, participating in training sessions,
                  and providing necessary information for service delivery.
                </p>

                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="mb-6">
                  You agree to accept sole responsibility for all business and personal outcomes resulting from
                  decisions made in applying any information, advice, or guidance provided.
                </p>

                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="mb-6">
                  All content, methodologies, and materials provided remain the intellectual property of Peter Strohkorb
                  Sales Advisory.
                </p>

                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="mb-6">For questions about these terms, please contact us at legal@peterstrohkorb.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
