import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'GDG on Campus DA-IICT',
  description: 'Google Developer Group on Campus DA-IICT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="gradient-bg min-h-screen flex flex-col">
        <div className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <div className="comic-border bg-white p-6 random-rotate">
              <Header />
              <main>{children}</main>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}