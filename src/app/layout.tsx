import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'
import Navbar from '@/components/nav-bar/Navbar'

export const metadata: Metadata = {
  title: 'Kronon Labs Frontend Recruitment Task',
  description: 'Kronon Labs Frontend Recruitment Task',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <body
        className='
       bg-tradeBg'
      >
        <Navbar />
        <main className='w-full'>{children}</main>
      </body>
    </html>
  )
}
