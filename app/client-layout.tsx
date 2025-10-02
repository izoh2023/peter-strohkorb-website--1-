"use client"

import type React from "react"
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

export default function ClientRootLayout({
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
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        <ModernHeader />
        <ScrollToTop />
        <main className="flex-grow pt-20">{children}</main>
        <ModernFooter />
        <style jsx global>{`
          @media (max-width: 768px) {
            elevenlabs-convai {
              transform: scale(0.8);
              bottom: 10px !important;
              right: 10px !important;
            }
          }
        `}</style>
        <elevenlabs-convai agent-id="agent_01jw6hzxg0e0gb3s46vf661wep"></elevenlabs-convai>
      </body>
    </html>
  )
}
