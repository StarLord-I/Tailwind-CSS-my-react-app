import React from 'react'
import  Navbar from  "./components/navbar";
import Categories from './components/categories';
import Product from './components/Product';
 function App() {
 
    return (
       <div>
         <Navbar />
          <Categories />
          <Product />
       </div>
  )
 }  


export default App