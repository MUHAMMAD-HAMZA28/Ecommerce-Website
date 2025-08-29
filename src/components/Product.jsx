import React from 'react'
import Card from './Card'

const Product = () => {
  return (
    <div className='flex flex-wrap mt-5'>
    <Card logo={"/src/assets/shoes.jpg"} itemname={"Shoes"} itemdesc={"Beautiful Shoes"}/>
    <Card logo={"/src/assets/jewellery.jpg"} itemname={"Jewellery"} itemdesc={"A beautiful brecelet"}/>
    <Card logo={"/src/assets/headphone.jpg"} itemname={"Head phone"} itemdesc={"The head phone"}/>
    <Card logo={"/src/assets/stylish-golden-watch.jpg"} itemname={"Golden watch"} itemdesc={"The beautiful golden watch"}/>
    <Card logo={"/src/assets/perfume.jpg"} itemname={"Perfume"} itemdesc={"Perfume with fragrance"}/>
    <Card logo={"/src/assets/purple-computer-mouse.jpg"} itemname={"Wireless mouse"} itemdesc={"The purple color wireless mouse"}/>
    </div>
  )
}

export default Product