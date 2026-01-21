import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
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
    "sales coaching",
    "revenue growth",
    "sales strategy",
    "Peter Strohkorb",
  ],
  metadataBase: new URL("https://www.peterstrohkorb.com"),
  openGraph: {
    title: "Peter Strohkorb Sales Advisory",
    description:
      "Transform your B2B sales with Buyer-Friendly strategies.",
    url: "https://www.peterstrohkorb.com",
    siteName: "Peter Strohkorb Sales Advisory",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>

        {/* ElevenLabs Widget */}
        <Script
          src="https://elevenlabs.io/convai-widget/index.js"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H07HWWGX1Z"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H07HWWGX1Z');
          `}
        </Script>

        {/* JSON-LD Structured Data */}
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Peter Strohkorb Sales Advisory",
            url: "https://www.peterstrohkorb.com/",
            description: "Expert B2B sales consulting and training services.",
            founder: {
              "@type": "Person",
              name: "Peter Strohkorb",
            },
            areaServed: "Worldwide",
          })}
        </Script>

        <ModernHeader />
        <ScrollToTop />
        <main className="flex-grow pt-20">{children}</main>
        <ModernFooter />

        {/* ElevenLabs Web Component */}
        <elevenlabs-convai agent-id="agent_01jw6hzxg0e0gb3s46vf661wep" />

      </body>
    </html>
  )
}
