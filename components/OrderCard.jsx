
'use client';
import Link from 'next/link'
import NextPage from 'next'
import { useRouter }  from 'next/navigation';
import React from "react";
import ReactDOM from "react-dom";



const OrderCard = ({order, items}) => {


  return (
    
    <Link
 
      href="/products/[product]"
      as={`products/${order.id}`}
      key={order.id}
     
    

    >
   
      <div className="text-black duration-50 mb-4 h-70 transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform hover:translate-x-2">
        <h2 className="text-lg font-medium">Order #{order.id}</h2>

        <p className="my-2 text-lg font-semibold text-gray-500">
          Status: {order.status}
        </p>

        <ul className="text-black mb-2 border-y">
          {items.data.map((item) => (
            <li key={item.description}>
              {item.quantity} x Product {item.description} <br></br>
               Unit Price ${item.amount} {item.currency.toUpperCase()}
            </li>
          ))}
        </ul>
         
        <p className="text-black-500">
        <h3 className="text-lg font-medium">Shipping Details </h3>
          Tracking Number: {order.metadata.id}<br></br>
          Delivery By: {order.metadata.courier}<br></br>
          Delivery Address: {order.metadata.city}, {order.metadata.state}{' '}
          {order.metadata.zip}
        </p>

        <p className="text-gray-500">Delivery Date: {order.metadata.delivery_estimate}</p>
      </div>
    </Link>
    
  )
}

export default OrderCard