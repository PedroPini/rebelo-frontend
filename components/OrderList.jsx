import React, { useState, useEffect } from 'react';
import Loading from '@component/Loading';
import OrderCard from './OrderCard'
async function getAllOrders() {
  const data = await fetch(process.env.API_URL+"/order/all", {method: 'GET',  next: { revalidate: 3600 }})
  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }
  return data.json()
}

export default  function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function  fetchData() {
      const response = await getAllOrders()
      setOrders(response);
      setLoading(false);
    };
    if(orders){
      fetchData();
    }
    
  }, []);

  if (loading) {
    return <Loading/>;
  }
    
    return(  
    <main className="flex min-h-screen  flex-col items-center justify-between p-6 md:p-24 lg:p-24">   
      <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex">
          {orders?.data?.data?.map((order) => (
          <OrderCard key={order.id} order={order} items={orders.items}/>
      ))}
      </div> 
     </main>);
};
  
