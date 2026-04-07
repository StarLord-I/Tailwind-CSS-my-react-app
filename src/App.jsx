import React from 'react'
import  Navbar from  "./components/Navbar";
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