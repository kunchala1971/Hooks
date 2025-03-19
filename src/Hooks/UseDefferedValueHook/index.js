import React from 'react'
import ProductsList from './ProductsList'
const UseDefferedValueHook = () => {
    const products=["Mother Boards","Hard Disk","SSD","Rams","Processors","Graphic Cards"];

  return (
    <div>
      <ProductsList products={products}/>
    </div>
  )
}

export default UseDefferedValueHook
