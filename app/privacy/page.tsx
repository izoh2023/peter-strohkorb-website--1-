import ModernHeader from "@/components/modern-header"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />

      <main className="pt-24">
        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <p className="text-gray-600 mb-8">Last updated: January 2025</p>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="mb-6">
                  We collect information you provide directly to us, such as when you create an account, subscribe to
                  our newsletter, or contact us for support.
                </p>

                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="mb-6">
                  We use the information we collect to provide, maintain, and improve our services, process
                  transactions, and communicate with you.
                </p>

                <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy.
                </p>

                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, please contact us at privacy@peterstrohkorb.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
