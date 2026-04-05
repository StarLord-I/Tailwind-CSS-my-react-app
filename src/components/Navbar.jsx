import React from 'react'

function Navbar() {
  return (
   <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 bg-green-500 text-white gap-3">
       
       {/* top row  */}
        <div className='flex items-center justify-between w-full md:w-auto' >
        <h1 className="text-xl font-bold">Velox</h1>
          <button className='md:hidden bg-white text-green-600 px-3 py-1 rounded-lg'>menu</button>
        </div>
        {/* search */}

        <div className='w-full md:w-1/2 mt-2 md:mt-0' >

        <input type="text"
        placeholder='Search products...' 
        className="w-full px-4 py-2 rounded-lg text-black outline-none "
        />

        </div>

        {/* right side */}

        <div className="hidden md:flex items-center gap-6">
            <button className='hover:underline'>Login</button>
            <button className="bg-white text-green-600 px-3 py-2 rounded-lg font-semibold ">Cart</button>

        </div>

    </div>
  )
}

export default Navbar