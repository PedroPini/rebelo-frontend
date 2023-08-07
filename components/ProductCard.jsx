
'use client';
import Link from 'next/link'
import React from "react";
<<<<<<< HEAD
const ProductCard = (product) => {
 
return (
  
  <Link
    href="/products/[product]"
    as={`products/${product.id}`}
    key={product.id}
    query={{product: product.name, id: product.id}}
  >
    
    <div className="duration-50 relative h-64  transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform hover:translate-y-1">
    
      <h2 className="text-black h-16 border-b-2 text-lg font-medium line-clamp-2">
        {product.name}
      </h2>

      <p className=" my-2 text-gray-500 line-clamp-4 ">{product.description}</p>

      <p
        className="p-4 text-lg font-bold text-gray-800 "
        style={{ position: 'absolute', bottom: 0, left: 0 }}
      >
        ${product.price}
      </p>
    </div>
  </Link>
  
)
=======

const ProductCard = (product) => {
 
  return (
    <Link
      href="/products/[product]"
      as={`products/${product.id}`}
      key={product.id}
      query={{product: product.name, id: product.id}}
    >
      <div className="duration-50 relative h-64 transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform hover:translate-y-1">
        <h2 className="text-black h-16 border-b-2 text-lg font-medium line-clamp-2">
          {product.name}
        </h2>
        <p className=" my-2 text-gray-500 line-clamp-4 ">{product.description}</p>
        <p
          className="p-4 text-lg font-bold text-gray-800 "
          style={{ position: 'absolute', bottom: 0, left: 0 }}
        >
          ${product.price}
        </p>
      </div>
    </Link>
  )
>>>>>>> 98487cc0ff3806ced871aa8582ad410cf8a29372
}

export default ProductCard