
import './App.css';
import { Banner } from './componentes/Banner'
import { Mapa } from './componentes/Mapa'
import { Navbar } from './componentes/Navbar'
import { useState } from 'react';
import { ProductList } from './componentes/ProductList';
import { RedesSociales } from './componentes/RedesSociales';
import { data } from './data';
import { ButtonList } from './componentes/ButtonList';






function App() {

const [allProducts, setAllProducts] = useState([])
const [total, setTotal] = useState(0)
const [countProducts, setCountProducts] = useState(0);

const allCategories = ["All" ,...new Set(data.map((article) => article.category))];
const [categories, setCategories] = useState(allCategories)
const [articles, setArticles] = useState(data)

const filterCategory = (category) => {
 if (category === 'All'){
  setArticles(data)
  return
 }

 const filteredData = data.filter((article) => article.category === category);
 setArticles(filteredData)

}



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

       <ButtonList categories={categories}
       filterCategory={filterCategory} />

      <ProductList
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      articles={articles}/>

      <Mapa />
      <RedesSociales />
    </div>
  
  );
}

export default App;
