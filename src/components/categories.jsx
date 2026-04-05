import React from 'react'
import CategoryCard from './categoryCard';
function Categories() {
   
   const categories = [
    {
        id: 1,
        title: "Fruits",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXRzfGVufDB8fDB8fHww"
    },
    {
        id: 2,
        title: "Vegetables",
        image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 3,
        title: "Dairy",
        image: "https://images.unsplash.com/photo-1622371684824-dc014541a4f5?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhaXJ5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 4,
        title: "Meat",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdHxlbnwwfHwwfHx8MA%3D%3D"
    },
   ]

  return (
       <div className='p-6'>
        <h2 className='text-2xl font-bold mb-4'>Categories</h2>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6'>
              {categories.map(category => (
                <CategoryCard 
                key={category.id}
                image={category.image}
                title={category.title}
                />
              ))}

        </div>

       </div>
  )
}

export default Categories

