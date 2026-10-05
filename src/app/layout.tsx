import type { Metadata, Viewport } from "next";

import "./fonts.css";
import "./globals.css";
import { I18nProvider } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { CookieConsent } from "@/components/cookie-consent";
import { SITE_URL } from "@/lib/seo";

const OG_IMAGE = "/images/hero-auditorium.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Batimob — Menuiserie & agencement d'exception depuis 1966",
  description:
    "Menuiserie, agencement et bureau d'études pour cinémas, hôtels, boutiques et sièges sociaux. Savoir-faire jurassien depuis 1966.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    siteName: "Batimob",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Batimob — Menuiserie & agencement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Analytics />
        <I18nProvider>
          <a
            href="#main"
            className="sr-only z-50 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
          >
            Aller au contenu
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CookieConsent />
        </I18nProvider>
      </body>
    </html>
  );
}