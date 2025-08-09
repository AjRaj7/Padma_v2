import Script from 'next/script'

interface StructuredDataProps {
  data: object
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Scaler SchoolConnect",
  "alternateName": "SchoolConnect",
  "url": "https://schoolconnect.scaler.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://schoolconnect.scaler.com/logo.png",
    "width": 400,
    "height": 100
  },
  "description": "Premium coding education platform for students in Classes 10-12. Learn web development, mobile app development, and data science from industry experts.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 136",
    "addressLocality": "Noida",
    "addressRegion": "UP",
    "postalCode": "201304",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN"
    }
  ],
  "sameAs": [
    "https://twitter.com/scaler_official",
    "https://linkedin.com/company/scaler-schoolconnect",
    "https://facebook.com/scalerschoolconnect",
    "https://instagram.com/scaler.schoolconnect"
  ],
  "foundingDate": "2021-01-01",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 150
  },
  "award": "Best EdTech Platform 2024",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2847",
    "bestRating": "5",
    "worstRating": "1"
  }
}

// Course Schema Generator
export const generateCourseSchema = (course: {
  name: string
  description: string
  duration: string
  price: number
  rating: number
  reviewCount: number
  skills: string[]
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": course.name,
  "description": course.description,
  "provider": {
    "@type": "Organization",
    "name": "Scaler SchoolConnect",
    "url": "https://schoolconnect.scaler.com"
  },
  "courseMode": "online",
  "educationalLevel": "Secondary",
  "timeRequired": course.duration,
  "totalTime": course.duration,
  "offers": {
    "@type": "Offer",
    "price": course.price,
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "https://schoolconnect.scaler.com/student-registration"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": course.rating,
    "reviewCount": course.reviewCount,
    "bestRating": "5",
    "worstRating": "1"
  },
  "teaches": course.skills,
  "coursePrerequisites": "No prior coding experience required",
  "educationalCredentialAwarded": "Certificate of Completion",
  "audience": {
    "@type": "EducationalAudience",
    "educationalRole": "student",
    "audienceType": "Students in Classes 10-12"
  }
})

// FAQ Schema Generator
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

// Review Schema Generator
export const generateReviewSchema = (reviews: Array<{
  author: string
  rating: number
  text: string
  datePublished: string
}>) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Scaler SchoolConnect",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": reviews.length.toString()
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.text,
    "datePublished": review.datePublished
  }))
})

// WebSite Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Scaler SchoolConnect",
  "url": "https://schoolconnect.scaler.com",
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://schoolconnect.scaler.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  ],
  "publisher": {
    "@type": "Organization",
    "name": "Scaler SchoolConnect"
  }
}

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.url
  }))
})