import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react"
import ProductCard from "./ProductCard"

async function getAllCharacters() {
    const data = await fetch(process.env.API_URL+"/product/all", {method: 'GET', next: { revalidate: 3600 }})
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data.json()
  }
  
// Function to find the price for a specific product id
function findPriceForProduct(productId, prices) {
    console.log(prices)
    const price = prices.data.find((price) => price.product === productId);
    return price ? price.unit_amount/100 : "Price not found";
  }
  
  
  export default async function ProductList() {
    const data = await getAllCharacters()
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