import React, { useState, useEffect } from 'react';
import Navbar from '@component/Navbar';
import OrdersList from '@component/OrderList';
import RootLayout from './layout';


export default  function OrderPage() {

    return <RootLayout><OrdersList/></RootLayout>;
};
  
