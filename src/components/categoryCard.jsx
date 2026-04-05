import React from 'react'

function CategoryCard({ image, title }) {
  return (
    <div className='bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 cursor-pointer text-center'>
         <img src={image}
          alt={title}
          className='mx-auto mb-2'
          />

         <p className='font-semibold'>{title}</p>
        </div>
  )
}

export default CategoryCard