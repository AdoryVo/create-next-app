import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { Inter } from 'next/font/google'
import { Provider } from 'react-wrap-balancer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-200 via-white to-cyan-100" />
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
