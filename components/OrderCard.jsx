
'use client';

import React from "react";
import { dividePriceForProduct } from "../utils/functions"

const OrderCard = ({order, items}) => {
  return (
     
      <div className=" text-black duration-50 mb-5 h-70  transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform hover:translate-x-2">
        <h2 className="text-lg font-medium">Order #{order.id}</h2>

        <p className="my-2 text-lg font-semibold text-gray-500">
          Status: {order.metadata.status || order.status}
        </p>

        <ul className="text-black mb-2 border-y">
       
          {items.data.filter(item_id => order.metadata.invoiceItem == item_id.id)
          .map((item) => (
            <React.Fragment key={item.id}>
              <li>
                {item.quantity} x Product {item.description} <br />
              </li>
              <p className="text-black-500">
                <span className="text-lg font-medium">
                  Total: ${dividePriceForProduct(item.amount)}{' '}
                  {item.currency.toUpperCase()}{' '}
                </span>
              </p>
            </React.Fragment>
          ))}
        </ul>
         
        <p className="text-black-500">
        <span className="text-lg font-medium">Shipping Details </span>
        <br/>
        {order.metadata.courier ? 
        <>
          Tracking Number: {order.metadata.id}<br></br>
          Delivery By: {order.metadata.courier}<br></br>
          Delivery Address: {order.metadata.city}, {order.metadata.state}{' '}
          {order.metadata.zip}<br/>
          <span className="text-black-500 mb-1">Delivery Date: {order.metadata.delivery_estimate}</span>
          </>
        : <>No Shipping information available<br/><br/><br/><br/><br/><br/></>
        }  
        </p>

       
      </div>
    
  )
}

export default OrderCard
