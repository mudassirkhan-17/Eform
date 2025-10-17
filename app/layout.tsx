import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Convenience Store Application - Mckinney & Co. Insurance',
  description: 'Professional insurance application form for convenience stores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMyFvqQx5cHw3bZaL85NFWYVo6Dfq8qfo&libraries=places,drawing,geometry"
          async
          defer
        ></script>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
