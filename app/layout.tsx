import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ModernHeader from "@/components/modern-header"
import { ModernFooter } from "@/components/modern-footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Peter Strohkorb Sales Advisory | B2B Sales Consulting & Coaching",
    template: "%s | Peter Strohkorb Sales Advisory",
  },
  description:
    "Transform your B2B sales with Peter Strohkorb's Buyer-Friendly strategies. Double revenue and shorten sales cycles.",
  keywords: [
    "B2B sales consulting",
    "sales coaching & enablement",
    "sales transformation",
    "revenue growth",
    "sales performance",
    "sales coaching",
    "business development",
    "sales strategy",
    "Peter Strohkorb",
    "sales advisory",
    "Buyer-Friendly Sales Funnel",
  ],
  authors: [{ name: "Peter Strohkorb", url: "https://peterstrohkorb.com" }],
  creator: "Peter Strohkorb",
  publisher: "Peter Strohkorb Sales Advisory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.peterstrohkorb.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Peter Strohkorb Sales Advisory | B2B Sales Consulting & Coaching",
    description:
      "Transform your B2B sales with Peter Strohkorb's Buyer-Friendly strategies. Double revenue and shorten sales cycles.",
    url: "https://www.peterstrohkorb.com",
    siteName: "Peter Strohkorb Sales Advisory",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Peter Strohkorb Sales Advisory - B2B Sales Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Strohkorb Sales Advisory | B2B Sales Consulting & Coaching",
    description:
      "Transform your B2B sales with Peter Strohkorb's Buyer-Friendly strategies. Double revenue and shorten sales cycles.",
    images: ["/og-image.jpg"],
    creator: "@PeterStrohkorb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "business",
  icons: {
    icon: "/favicon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Peter Strohkorb Sales Advisory",
              url: "https://www.peterstrohkorb.com/",
              logo: "https://www.peterstrohkorb.com/images/logo-peter-strohkorb-sales-advisory-transparent.png",
              description: "Expert B2B sales consulting and training services.",
              telephone: "+1-XXX-XXX-XXXX",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              founder: {
                "@type": "Person",
                name: "Peter Strohkorb",
              },
              serviceType: ["Sales Consulting", "Sales Training", "Business Development", "Revenue Growth Strategy"],
              areaServed: "Worldwide",
            }),
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @media (max-width: 768px) {
              elevenlabs-convai {
                transform: scale(0.8) !important;
                bottom: 10px !important;
                right: 10px !important;
              }
            }
          `,
          }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        <ModernHeader />
        <ScrollToTop />
        <main className="flex-grow pt-20">{children}</main>
        <ModernFooter />
        <elevenlabs-convai agent-id="agent_01jw6hzxg0e0gb3s46vf661wep"></elevenlabs-convai>
      </body>
    </html>
  )
}
