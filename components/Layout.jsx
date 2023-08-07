import '../app/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@component/Navbar'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  
  return (
    <>
     
      <Navbar/>
        {children}
    
    </>
  )
}
