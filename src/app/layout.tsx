import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import { cn } from '@/utils/cn'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Reddish',
  description: 'Reddit clone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-black text-white antialiased', inter.className)}>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
