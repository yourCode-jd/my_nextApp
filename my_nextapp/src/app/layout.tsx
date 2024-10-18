import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Montserrat } from 'next/font/google'
import './globals.css'

const font = Montserrat({
  subsets: ['latin'],
  // variable: '--Montserrat'
})

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
      <body className={font.className}>
        <main className='relative overflow-hidden'>
          <Header />

          {children}

          <Footer />
        </main>

      </body>
    </html>
  )
}
