import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@component/Navbar'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
      <Navbar/>
        {children}</body>
    </html>
  )
}
