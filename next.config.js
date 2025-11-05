/** @type {import('next').NextConfig} */
const nextConfig = {
  // No experimental flags needed for Next.js 14
  // Railway deployment works well with standard Next.js build
  
  // Disable caching to prevent stale data in resume forms
  onDemandEntries: {
    maxInactiveAge: 1000, // Cache for 1 second instead of default
    pagesBufferLength: 2,
  },
  experimental: {
    isrMemoryCacheSize: 0, // Disable ISR memory cache
  },
}

module.exports = nextConfig