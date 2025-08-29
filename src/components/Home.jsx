import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col  lg:flex-row lg:mt-14 ml-22 justify-around'>
      <div>
        <h1 className='font-bold text-6xl mt-18 w-110 leading-18'>ONLINE SHOPPING</h1>
        <p className='mt-8 w-120'>Here you find the amazing products and accessiories for adults and childs.
          Now search and buy your favourite items here that you like.
        </p>
        <button className='mt-4 bg-red-500 text-white p-1.5 px-3 rounded-2xl cursor-pointer hover:bg-black'>Buy Now</button>
      </div>
      <img src="./src/assets/shopping.jpg" alt="product photo" className='w-120 mr-2' />
    </div>
  )
}

export default Home