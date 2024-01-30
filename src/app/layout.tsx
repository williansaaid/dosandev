import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dosan Dev',
  description: 'Dosan Dev...',
  icons: 'https://res.cloudinary.com/dwowtb0ya/image/upload/v1705537144/devrise/inary_xx7xkb.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`bg-dark w-full min-h-screen flex flex-col items-center text-white ${inter.className}`}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
