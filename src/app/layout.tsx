import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

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
      <body>
        <header>헤더</header>
        <nav></nav>
        <main>{children}</main>
      </body>
    </html>
  )
}