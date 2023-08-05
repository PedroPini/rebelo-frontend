import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"
import ProductCard from "./ProductCard"
import { Product } from '../types/Product'

async function getAllCharacters() {
    const data = await fetch("http://localhost:3000/product/all", {method: 'GET'})
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data.json()
  }
  
// Function to find the price for a specific product id
function findPriceForProduct(productId: any, prices: any) {
    console.log(prices)
    const price = prices.data.find((price:any) => price.product === productId);
    return price ? price.unit_amount : "Price not found";
  }
  
  
  export default async function ProductList() {
    const data = await getAllCharacters()
    console.log(data)
    return (
      <main>
        <div>{JSON.stringify(data)}</div>;
               <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data?.message?.data?.map((product: Product) => (
           <>
           
            <ProductCard key={product.id} product={product} />
            </>
          ))}
        </div>
           

        
       
      </main>
    )
  }