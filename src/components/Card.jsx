import React from 'react'

const Card = ({logo,itemname,itemdesc}) => {
  return (
    <div className='mb-12 ml-20'>
      <div className='bg-slate-200 w-80 p-7 text-center rounded-2xl'>
        <img src={logo} alt="card img" className='w-2xl h-52'/>
        <h2 className='font-bold mt-1'>{itemname}</h2>
        <p>{itemdesc}</p>
        <button className='mt-4 bg-slate-700 text-white p-1.5 px-3 rounded-2xl cursor-pointer hover:bg-black'>Add to cart</button>
    </div>
    </div>
  )
}

export default Card