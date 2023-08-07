import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"
import ProductCard from "./ProductCard"
import { findPriceForProduct } from "../utils/functions"
async function getAllProducts() {
    const data = await fetch(process.env.API_URL+"/product/all", {method: 'GET', next: { revalidate: 3600 }})
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
    return data.json()
  }
  
  export default async function ProductList() {
    const data = await getAllProducts()
    console.log(data)
    return (
      <main> 
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data?.message?.data?.map((product) => (
           <>
            <ProductCard key={product.id} id={product.id} name={product.name} description={product.description} price={findPriceForProduct(product.id, data?.prices)}/>
            </>
          ))}
        </div>
      </main>
    )
  }