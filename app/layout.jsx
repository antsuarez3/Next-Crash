import React from 'react'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/header'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'My Media',
  description: 'Web development tutorials and courses',
  keywords:
    'web development, web design, javascript, react, node angular, vue, html, css',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <main className='container'>
          <Header /> {children}
        </main>
      </body>
    </html>
  )
}
