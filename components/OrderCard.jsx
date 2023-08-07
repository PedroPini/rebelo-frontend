
'use client';

import React from "react";
const OrderCard = ({order, items}) => {
  return (
     
      <div className="text-black duration-50 mb-5 h-70 transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform hover:translate-x-2">
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
        <span className="text-lg font-medium">Shipping Details </span>
          Tracking Number: {order.metadata.id}<br></br>
          Delivery By: {order.metadata.courier}<br></br>
          Delivery Address: {order.metadata.city}, {order.metadata.state}{' '}
          {order.metadata.zip}
        </p>

        <p className="text-black-500 mb-1">Delivery Date: {order.metadata.delivery_estimate}</p>
      </div>
    
  )
}

export default OrderCard