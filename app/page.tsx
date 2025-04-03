import { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EssayGenerator from "@/components/EssayGenerator"
import MarketingContent from "@/components/MarketingContent"
import Script from "next/script"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: "AI Essay Writer - Free Essay Generator Tool",
  description: "Create well-structured, engaging essays on any topic with our free AI-powered essay generator. No signup required. Perfect for students, professionals, and content creators.",
}

export default function Home() {
  const shareUrl = siteUrl
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Essay Writer",
    "description": "Free AI-powered essay generator tool that creates well-structured, engaging essays on any topic. No signup required.",
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
          "text": "AI Essay Writer is a leading online essay generation tool that creates well-structured, coherent essays on any topic. It's ideal for students, researchers, and professionals looking to save time and overcome writer's block."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AI Essay Writer tool work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The tool uses advanced AI language models to generate essays based on your topic and preferences. Simply enter your topic, select essay type and other settings, and our AI creates a well-structured essay tailored to your requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Is the AI Essay Writer tool free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our AI Essay Writer is completely free, offering unlimited access without any hidden charges."
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

