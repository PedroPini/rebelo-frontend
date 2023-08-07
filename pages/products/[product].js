import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import RootLayout from '@component/Layout';
import Loading from '@component/Loading';
import Image from 'next/image'
import { dividePriceForProduct } from "../../utils/functions"
async function getProductId(id) {
    const data = await fetch(process.env.API_URL+"/product/"+id, {method: 'GET',  next: { revalidate: 3600 }})
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
    return data.json()
  }

  export default function Product() {
    const router = useRouter();
    const id = router.query.product;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchProduct() {
        try {
          const productData = await getProductId(id);
          setProduct(productData);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
  
      if (id) {
        fetchProduct();
      }
    }, [id]);
  
    if (loading) {
      return <Loading/>;
    }
      return (<RootLayout> { !id ?

        <div className="flex h-screen w-screen items-center justify-center">
           
          
            <div className="max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="flex flex-col items-center justify-between p-8">
                <h2 className="text-xl font-bold"> Product not found!</h2>
              </div>
            </div>
          </div>
          :
        <div className="flex h-screen w-screen items-center justify-center"> 
          <div className="max-w-4xl w-96 overflow-hidden rounded-lg bg-white shadow-lg">
            <Image
              className="h-56  w-full object-cover object-center" height={150} width={50}
              src={product.data.images ? product.data.images.toString() : "https://dummyimage.com/720x400"}
              alt={product.data.name}
            />
            <div className="p-6">
              <h3 className="text-black text-lg font-semibold text-gray-800">
                {product.data.name}
              </h3>
    
              <p className="mt-2 text-sm text-gray-600">{product.data.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  ${dividePriceForProduct(product?.price)} - {product.data.description}
                </span>   
              </div>
            </div>
          </div>
        </div>}

        
</RootLayout>)

  }