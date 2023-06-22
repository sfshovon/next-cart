import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextCart',
  description: 'Purchase your next favorite items from NextCart',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="px-4 lg:px-10">
            <Navbar></Navbar>
            <div className="pt-20">
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
