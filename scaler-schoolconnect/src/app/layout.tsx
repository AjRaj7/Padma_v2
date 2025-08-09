import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import { StructuredData, organizationSchema, websiteSchema } from '@/components/StructuredData'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import { SkipToContent } from '@/components/Accessibility'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://schoolconnect.scaler.com'),
  title: {
    template: '%s | Scaler SchoolConnect',
    default: 'Scaler SchoolConnect - Premium Coding Education for Students',
  },
  description: 'Join 25,000+ students building real apps, learning from industry experts, and getting ready for tech careers. Premium CS education for Classes 10-12 across India.',
  keywords: [
    'coding classes for students',
    'programming courses india',
    'computer science education',
    'web development classes',
    'mobile app development',
    'data science for students',
    'AI machine learning course',
    'coding bootcamp india',
    'online programming classes',
    'tech education for teens',
    'class 10 11 12 coding',
    'student coding certification',
    'learn programming online',
    'scaler schoolconnect'
  ],
  authors: [{ name: 'Scaler SchoolConnect', url: 'https://schoolconnect.scaler.com' }],
  creator: 'Scaler SchoolConnect',
  publisher: 'Scaler SchoolConnect',
  category: 'Education Technology',
  classification: 'Educational Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://schoolconnect.scaler.com',
    siteName: 'Scaler SchoolConnect',
    title: 'Scaler SchoolConnect - Premium Coding Education for Students',
    description: 'Join 25,000+ students building real apps, learning from industry experts, and getting ready for tech careers. Premium CS education for Classes 10-12.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scaler SchoolConnect - Premium Coding Education Platform',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@scaler_official',
    creator: '@scaler_official',
    title: 'Scaler SchoolConnect - Premium Coding Education for Students',
    description: 'Join 25,000+ students building real apps, learning from industry experts, and getting ready for tech careers.',
    images: {
      url: '/og-image.png',
      alt: 'Scaler SchoolConnect - Premium Coding Education Platform',
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://schoolconnect.scaler.com',
    languages: {
      'en-IN': 'https://schoolconnect.scaler.com',
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2E86AB" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="antialiased bg-white text-gray-900 overflow-x-hidden">
        {/* Analytics */}
        <Analytics />
        
        {/* Performance Monitoring */}
        <PerformanceMonitor />
        
        {/* Structured Data */}
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        
        {/* Accessibility */}
        <SkipToContent />
        
        <div id="root">
          <main id="main-content" role="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}