import { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EssayGenerator from "@/components/EssayGenerator"
import MarketingContent from "@/components/MarketingContent"
import Script from "next/script"

export const metadata: Metadata = {
  title: "AI Essay Writer - Free Essay Generator Tool",
  description: "Create well-structured, engaging essays on any topic with our free AI-powered essay generator. No signup required. Perfect for students, professionals, and content creators.",
}

export default function Home() {
  const deploymentUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "https://ai-essay-writer.vercel.app"
    
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Essay Writer",
    "description": "Free AI-powered essay generator tool that creates well-structured, engaging essays on any topic. No signup required.",
    "url": deploymentUrl,
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
      "url": deploymentUrl,
      "logo": `${deploymentUrl}/ai-essay-writer-thumbnail.webp`
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": `${deploymentUrl}/#generator`
    },
    "image": `${deploymentUrl}/ai-essay-writer-thumbnail.webp`,
    "screenshot": `${deploymentUrl}/ai-essay-writer-thumbnail.webp`,
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
        "item": deploymentUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Essay Generator",
        "item": `${deploymentUrl}/#generator`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Features",
        "item": `${deploymentUrl}/#features`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "How It Works",
        "item": `${deploymentUrl}/#how-it-works`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "FAQ",
        "item": `${deploymentUrl}/#faq`
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

