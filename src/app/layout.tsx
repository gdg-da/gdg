import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Acme } from 'next/font/google'

export const metadata: Metadata = {
  title: 'GDG on Campus DA-IICT',
  description: 'Google Developer Group on Campus DA-IICT',
}

const font = Acme({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="gradient-bg min-h-screen flex flex-col">
        <div className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <div className="comic-border bg-white p-6 random-rotate overflow-hidden">
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