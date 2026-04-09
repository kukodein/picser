import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Picser - Free Image Hosting with GitHub Integration",
    template: "%s | Picser"
  },
  description: "Upload images up to 100MB and get instant shareable URLs. Free image hosting service powered by GitHub with reliable CDN delivery and permanent storage.",
  keywords: [
    "image hosting",
    "free image upload",
    "GitHub image storage",
    "CDN image hosting",
    "permanent image links",
    "image sharing",
    "file upload service",
    "100MB image upload"
  ],
  authors: [{ name: "Kukode", url: "https://x.com/kukode_id" }],
  creator: "Kukode",
  publisher: "Picser",
  metadataBase: new URL("https://upload.kukode.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upload.kukode.com",
    siteName: "Picser",
    title: "Picser - Free Image Hosting with GitHub Integration",
    description: "Upload images up to 100MB and get instant shareable URLs. Free image hosting service powered by GitHub with reliable CDN delivery.",
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Picser - Free Image Hosting",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kukode_id",
    creator: "@kukode_id",
    title: "Picser - Free Image Hosting with GitHub Integration",
    description: "Upload images up to 100MB and get instant shareable URLs. Free image hosting service powered by GitHub.",
    images: ["/og/og-image.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-site-verification-code", // Replace with actual verification code
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Picser",
    "description": "Upload images up to 100MB and get instant shareable URLs. Free image hosting service powered by GitHub with reliable CDN delivery.",
    "url": "https://upload.kukode.com",
    "applicationCategory": "Utility",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Person",
      "name": "Kukode",
      "url": "https://x.com/kukode_id"
    },
    "featureList": [
      "Upload images up to 100MB",
      "Instant shareable URLs",
      "GitHub-powered storage",
      "Reliable CDN delivery",
      "Free forever",
      "API access available"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Picser" />
        <meta name="application-name" content="Picser" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
