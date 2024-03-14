import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const poppins = Poppins({ subsets: ['latin'] })

export const metadata = {
  title: 'Sign-Ease',
  description: 'Sign Online With Ease.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
