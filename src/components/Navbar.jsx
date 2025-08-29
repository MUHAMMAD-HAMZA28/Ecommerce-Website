import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='lg:flex flex-row justify-between bg-slate-100 p-4 '>
    <div>
        <h2 className='ml-4 text-xl font-bold'><span className='text-purple-600'>E-</span>Store</h2>
    </div>
    <div>
        <ul className='flex-col text-center ml-40 lg:flex flex-row gap-17 mr-98 text-lg cursor-pointer '>
          <Link to='/'><li className='hover:text-purple-600'>Home</li></Link>  
          <Link to='/sales'><li className='hover:text-purple-600'>Sales</li></Link>  
          <Link to='/products'><li className='hover:text-purple-600'>Products</li></Link>  
          <Link to='/contact'><li className='hover:text-purple-600'>Contact</li></Link>  
        </ul>
    </div>
    </nav>
  )
}

export default Navbar