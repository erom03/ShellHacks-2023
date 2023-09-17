import Navigation from "./components/navigation";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'How Much Car',
  description: 'This is a start',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
              <Navigation />
      <body className={inter.className}>{children}

      </body>
    </html>
  )
}