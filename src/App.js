
import './App.css';
import { Banner } from './componentes/Banner'
import { Mapa } from './componentes/Mapa'
import { Navbar } from './componentes/Navbar'
import { useState } from 'react';
import { ProductList } from './componentes/ProductList';
import { RedesSociales } from './componentes/RedesSociales';




function App() {

const [allProducts, setAllProducts] = useState([])
const [total, setTotal] = useState(0)
const [countProducts, setCountProducts] = useState(0)

  return (
    <div>
      <Navbar 
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
       />
       
       <Banner />
      <ProductList
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}/>

      <Mapa />
      <RedesSociales />
    </div>
  
  );
}

export default App;
