import React from 'react'

function Categories() {
  return (
       <div className='p-6'>
        <h2 className='text-2xl font-bold mb-4'>Categories</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className="bg-white p-4 rounded-xl shadow text-center transform hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXRzfGVufDB8fDB8fHww" alt="fruits"
                className='mx-auto mb-2' />
                <p className='font-semibold'>Fruits</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center transform hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D" alt="vegetables"
                className='mx-auto mb-2' />
                <p className='font-semibold'>Vegetables</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center transform hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1622371684824-dc014541a4f5?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhaXJ5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" alt="dairy"
                className='mx-auto mb-2' />
                <p className='font-semibold'>Dairy</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center transform hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdHxlbnwwfHwwfHx8MA%3D%3D" alt="meat"
                className='mx-auto mb-2' />
    
                <p className='font-semibold'>Meat</p>
            </div>

        </div>

       </div>
  )
}

export default Categories