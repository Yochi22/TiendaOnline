import React from 'react'
import { Banner } from './Banner'
import { ProductList } from './ProductList'
import { Mapa } from './Mapa'
import { RedesSociales } from './RedesSociales'


export const Home = (allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal ) => {
  return (
    <div>
        <ProductList  allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts} />
        <Mapa />
        <RedesSociales />

    </div>
  )
}
