import React from 'react'
import { useState } from "react"
import  Navbar from  "./components/Navbar";
import Categories from './components/categories';
import Product from './components/Product';
 function App() {

   const [cart,setCart] = useState ([])
 
    return (
       <div>
          <Navbar cartCount={cart.length} />
          <Categories />
          <Product cart={cart} setCart={setCart} />
       </div>
  )
 }  


export default App