import { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EssayGenerator from "@/components/EssayGenerator"
import MarketingContent from "@/components/MarketingContent"
import Script from "next/script"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: "AI Essay Writer - Free Essay Generator Tool",
  description: "Create well-structured, engaging essays on any topic with our free With AI Essay Writer. No signup required. Perfect for students, professionals, and content creators.",
}

export default function Home() {
  const shareUrl = siteUrl
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Essay Writer",
    "description": "Create well-structured, engaging essays on any topic with our free AI Essay Writer. No signup required. Perfect for students, professionals, and content creators.",
    "url": siteUrl,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "156"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Students, Writers, and Content Creators"
    },
    "creator": {
      "@type": "Organization",
      "name": "AI Essay Writer",
      "url": siteUrl,
      "logo": `${siteUrl}/ai-essay-writer-thumbnail.webp`
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": `${siteUrl}/#generator`
    },
    "image": `${siteUrl}/ai-essay-writer-thumbnail.webp`,
    "screenshot": `${siteUrl}/ai-essay-writer-thumbnail.webp`,
    "featureList": [
      "Multiple essay types",
      "Adjustable word count",
      "Academic level selection",
      "Citation style options",
      "Outline generation",
      "Keyword focus"
    ]
  }
  
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI Essay Writer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI Essay Writer is a free online essay generation tool that creates well-structured, engaging essays on any topic. It's perfect for students, professionals, and content creators looking to save time and overcome writer's block."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AI Essay Writer tool work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply enter your topic, select your essay type and preferences, and our AI will create a well-structured essay tailored to your requirements. No signup required - start writing instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Is the AI Essay Writer tool free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AI Essay Writer is completely free with no hidden charges. You can generate unlimited essays without creating an account."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use the essays for academic purposes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI Essay Writer is designed to be a helpful tool for research, brainstorming, and learning. While the essays can provide valuable insights and structure, we recommend using them as a starting point rather than submitting them directly as your own work. Always follow your institution's academic integrity policies."
        }
      }
    ]
  }
  
  // Add breadcrumbs structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Essay Generator",
        "item": `${siteUrl}/#generator`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Features",
        "item": `${siteUrl}/#features`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "How It Works",
        "item": `${siteUrl}/#how-it-works`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "FAQ",
        "item": `${siteUrl}/#faq`
      }
    ]
  }
  
  return (
    <div className="app">
      <Script id="schema-org" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqData)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </Script>
      <Header />
      <main id="main-content" role="main">
        <section id="generator" aria-labelledby="generator-title">
          <EssayGenerator />
        </section>
        <MarketingContent />
      </main>
      <Footer />
    </div>
  )
}

