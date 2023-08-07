import Navbar from '@component/Navbar'
import ProductList from '@component/ProductList'
import RootLayout from '@component/Layout'
export default function Home() {
  return (
    <RootLayout>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm lg:flex">
      <ProductList/>
       </div>
    </main>
    </RootLayout>
  )
}
