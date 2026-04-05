import React from 'react'
import CategoryCard from './categoryCard';
import ProductCard from './ProductCard';

function Product() {
  const products = [
    {
        id: 1,
        title: "Apple",
        price: "$1.99",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 2,
        title: "Broccoli",
        price: "$0.99",
        image: "https://images.unsplash.com/photo-1614336215203-05a588f74627?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJvY2NvbGl8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 3,
        title: "Milk",
        price: "$2.49",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1pbGt8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 4,
        title: "Chicken Breast",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1682991136736-a2b44623eeba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpY2tlbiUyMEJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D"
    },
   ]

  return (
         <div className='p-6 bg-gray-100'>
            <h2 className='text-2xl font-bold mb-6'>Products</h2>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {products.map((item, index) => (
                    <ProductCard 
                    key={index} 
                    title={item.title} 
                    price={item.price} 
                    image={item.image} />
                ))}
            </div>

         </div>
  )
}

export default Product