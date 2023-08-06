import React, { useState, useEffect } from 'react';
import RootLayout from '../app/layout';
import OrderCard from './OrderCard'
async function getAllCharacters() {
  const data = await fetch("http://localhost:3000/order/all", {method: 'GET', next: { revalidate: 3600 }})

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export default  function OrdersList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllCharacters()
      
      setOrders(response);
    };

    fetchData();
  }, []);
    
    return(  <main className="flex min-h-screen flex-col items-center justify-between p-24">
       
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {orders?.data?.data?.map((order) => (
        <OrderCard key={order.id} order={order} items={orders.items}/>
      
     ))}</div> </main>);
};
  
