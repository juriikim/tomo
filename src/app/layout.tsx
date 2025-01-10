import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'xiondi',
  description: 'study chinese',
  icons: [
    {
      url: 'logo.svg',
      rel: 'icon',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col antialiased`}>
        <Header />
        <main className="m-auto w-screen max-w-screen-xl grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
