import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:mt-7 '>
       <div className='mt-8'>
       <h1 className='font-bold text-5xl mt-12 ml-17 text-sky-400 '>Contact Us</h1>
       <p className='ml-17 mt-7 mr-2 mb-8'>If you have any question to ask contact us we 
        are here for solving your problems thank you.
       </p>
       </div>
    <div className='bg-blue-300 w-160 h-110 mr-15 ml-2 p-10 rounded-2xl mb-4'>
      <form className='flex flex-col' >
        <h1 className='font-bold text-white text-4xl mt-4 mb-6 text-center'>Contact Us</h1>
        <label className='text-slate-700 '>Your Name</label>
        <input type="text" placeholder='Enter your name' className='bg-amber-50 p-2 mt-1 mb-2 rounded-lg'/>
        <label className='text-slate-700 '>Your Email</label>
        <input type="email" placeholder='Enter your email' className='bg-amber-50 p-2 mt-1 mb-2 rounded-lg'/>
        <label className='text-slate-700 '>Message</label>
        <input type="text" placeholder='Your message' className='bg-amber-50 py-6 px-2 mt-1 mb-2 rounded-lg'/>
        <button className='bg-blue-500 text-white rounded-2xl py-2 mt-2 cursor-pointer hover:bg-black'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact