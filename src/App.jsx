import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Sales from './components/Sales'
import Product from './components/Product'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path : '/sales',
      element : <div>
        <Navbar/>
        <Sales/>
      </div>
    },
    {
      path : '/products',
      element : <div>
        <Navbar/>
        <Product/>
      </div> 
    },
    {
      path : '/contact',
      element : <div>
        <Navbar/>
        <Contact/>
      </div>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App