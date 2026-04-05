import React from 'react'

function ProductCard({title, price, image}) {
  return (
    <div>
            <img src={image}
             alt={title} 
             className='w-full h-48 object-cover rounded-t-lg mb-2' 
             />
           <h3 className='text-lg font-bold mt-1'>{title}</h3>

           <div>
              <span className='text-green-500 font-bold'>
                ${price}</span>
                <button className='bg-green-500 text-white px-3 py-1 rounded-lg ml-4'>Add to Cart</button>
           </div>
    </div>

  )
}

export default ProductCard