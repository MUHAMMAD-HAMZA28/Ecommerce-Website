import React from 'react'

const Sales = () => {
  return (
    <div className='flex flex-col  lg:flex-row lg:mt-1 mb-8 ml-15'>
      <img src="./src/assets/salediscountimg.jpg" alt="sale image" className='w-2xl'/>
      <div>
         <h1 className='font-bold text-4xl mt-35 ml-12 '>SPECIAL<span className='text-amber-400'> DISCOUNT</span></h1>
         <p className='ml-12 mt-3'>Get the 50% off to all products and accessiories for everyone male,female or childs.</p>
      </div>
    </div>
  )
}

export default Sales