import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AI Essay Writer - Free Essay Generator Tool",
  description:
    "Create well-structured, engaging essays on any topic with our free With AI Essay Writer. No signup required. Perfect for students, professionals, and content creators.",
  keywords: "AI essay writer, essay generator, free essay writer, AI writing tool, academic writing, essay help",
  generator: 'Next.js',
  applicationName: 'AI Essay Writer',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'AI Essay Writer Team' }],
  creator: 'AI Essay Writer',
  publisher: 'AI Essay Writer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AI Essay Writer - Free Essay Generator Tool',
    description: 'Create well-structured, engaging essays on any topic with our free With AI Essay Writer. No signup required. Perfect for students, professionals, and content creators.',
    url: siteUrl,
    siteName: 'AI Essay Writer',
    images: [
      {
        url: '/ai-essay-writer-thumbnail.webp',
        width: 1200,
        height: 630,
        alt: 'AI Essay Writer - Free Essay Generator Tool',
        type: 'image/webp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Essay Writer - Free Essay Generator Tool',
    description: 'Create well-structured, engaging essays on any topic with our free With AI Essay Writer. No signup required. Perfect for students, professionals, and content creators.',
    images: ['/ai-essay-writer-thumbnail.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { 
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png', 
        sizes: '512x512',
        type: 'image/png'
      }
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body>{children}</body>
    </html>
  )
}