import Navbar from '@component/Navbar'
import '../app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar/>
        {children}
        
    </>
  )
}
