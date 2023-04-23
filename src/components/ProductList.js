import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filtredProducts: products, Grid_view} = useFilterContext();

  if(products.length < 1){
    return (
      <h5>
        Sorry, no product matched your search...
      </h5>
    )
  }
  if (Grid_view === false){
    return <ListView products={products}/>
  }
  return (
    <GridView products={products}/>
  )

}

export default ProductList
