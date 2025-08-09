'use client'

import { useEffect } from 'react'

// Web Vitals measurement
interface WebVitalsMetric {
  id: string
  name: string
  value: number
  delta: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

// Performance monitoring hook
export function usePerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Import web-vitals dynamically to avoid increasing bundle size
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      const sendToAnalytics = (metric: WebVitalsMetric) => {
        // Send to Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.value),
            custom_map: { metric_rating: metric.rating }
          })
        }

        // Send to other analytics services
        console.log('Web Vitals:', metric)
      }

      // Measure Core Web Vitals
      onCLS(sendToAnalytics)  // Cumulative Layout Shift
      onFCP(sendToAnalytics)  // First Contentful Paint
      onLCP(sendToAnalytics)  // Largest Contentful Paint
      onTTFB(sendToAnalytics) // Time to First Byte
      onINP(sendToAnalytics)  // Interaction to Next Paint
    }).catch(err => {
      console.warn('Failed to load web-vitals:', err)
    })
  }, [])
}

// Performance budget checker
export function checkPerformanceBudget() {
  if (typeof window === 'undefined' || !window.performance) return

  const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  if (!navigation) return

  const metrics = {
    // Time to First Byte (should be < 200ms)
    ttfb: navigation.responseStart - navigation.requestStart,
    
    // DOM Content Loaded (should be < 1500ms)
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
    
    // Load Complete (should be < 3000ms)
    loadComplete: navigation.loadEventEnd - navigation.fetchStart,
    
    // First Paint (should be < 1000ms)
    firstPaint: window.performance.getEntriesByName('first-paint')[0]?.startTime || 0,
    
    // First Contentful Paint (should be < 1500ms)
    firstContentfulPaint: window.performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
  }

  const budgets = {
    ttfb: 200,
    domContentLoaded: 1500,
    loadComplete: 3000,
    firstPaint: 1000,
    firstContentfulPaint: 1500
  }

  const violations = Object.entries(metrics).filter(([key, value]) => {
    return value > budgets[key as keyof typeof budgets]
  })

  if (violations.length > 0) {
    console.warn('Performance budget violations:', violations)
  }

  return { metrics, budgets, violations }
}

// Resource loading optimization
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return

  // Preload critical fonts
  const criticalFonts = [
    '/fonts/inter-var.woff2',
    '/fonts/fira-code-var.woff2'
  ]

  criticalFonts.forEach(font => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = font
    link.as = 'font'
    link.type = 'font/woff2'
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  })

  // Preload critical images
  const criticalImages = [
    '/og-image.png',
    '/hero-bg.jpg',
    '/logo.png'
  ]

  criticalImages.forEach(image => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = image
    link.as = 'image'
    document.head.appendChild(link)
  })
}

// Image optimization utilities
export function generateResponsiveImageSizes(breakpoints = [640, 768, 1024, 1280, 1536]) {
  return breakpoints
    .map((width, index) => {
      if (index === breakpoints.length - 1) {
        return `${width}px`
      }
      return `(max-width: ${breakpoints[index + 1]}px) ${width}px`
    })
    .join(', ')
}

// Lazy loading intersection observer
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  }

  return new IntersectionObserver(callback, defaultOptions)
}

// Bundle analyzer helper (development only)
export function analyzeBundleSize() {
  if (process.env.NODE_ENV !== 'development') return

  // This would integrate with webpack-bundle-analyzer in development
  console.log('Bundle analysis available in development mode')
}

// Service Worker registration for caching
export function registerServiceWorker() {
  if (
    typeof window !== 'undefined' && 
    'serviceWorker' in navigator &&
    process.env.NODE_ENV === 'production'
  ) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration)
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}

// Memory usage monitoring
export function monitorMemoryUsage() {
  if (typeof window === 'undefined' || !('memory' in window.performance)) return

  const memory = (window.performance as any).memory
  if (!memory) return

  const memoryInfo = {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
    usagePercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
  }

  // Warn if memory usage is high
  if (memoryInfo.usagePercentage > 75) {
    console.warn('High memory usage detected:', memoryInfo)
  }

  return memoryInfo
}

// Performance observer for long tasks
export function observeLongTasks() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.duration > 50) {
          console.warn('Long task detected:', {
            duration: entry.duration,
            startTime: entry.startTime,
            name: entry.name
          })

          // Send to analytics
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'long_task', {
              event_category: 'Performance',
              event_label: 'Long Task',
              value: Math.round(entry.duration)
            })
          }
        }
      })
    })

    observer.observe({ entryTypes: ['longtask'] })
    
    return () => observer.disconnect()
  } catch (error) {
    console.warn('PerformanceObserver not supported:', error)
  }
}

// Main performance monitor component
export default function PerformanceMonitor() {
  usePerformanceMonitor()

  useEffect(() => {
    // Initialize performance monitoring
    preloadCriticalResources()
    registerServiceWorker()
    
    const disconnectLongTaskObserver = observeLongTasks()
    
    // Check performance budget after page load
    setTimeout(() => {
      checkPerformanceBudget()
      monitorMemoryUsage()
    }, 1000)

    return () => {
      disconnectLongTaskObserver?.()
    }
  }, [])

  return null // This component doesn't render anything
}