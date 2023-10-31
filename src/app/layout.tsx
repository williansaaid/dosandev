import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevRise',
  description: 'DevRise Landing Page',
  icons: 'https://res.cloudinary.com/ds41xxspf/image/upload/v1698355225/DevRise/black-yellow_hzqxlw.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className= {inter.className} >
        {children}
      </body>
    </html>
  )
}
