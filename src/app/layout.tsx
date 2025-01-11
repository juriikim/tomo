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
      <body className={`flex min-h-screen min-w-[350px] flex-col antialiased`}>
        <Header /> {/** 헤더 높이 : 56px(3.5rem)  */}
        <main className="m-auto h-[calc(100vh-56px)] w-full max-w-screen-2xl grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
