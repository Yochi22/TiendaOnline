import React from 'react'
import '../hojas-de-estilo/accesoriosyseguridad.css';
import {data} from '../data'
import { BsWhatsapp } from 'react-icons/bs'

export const ProductList = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {
	const onAddProduct = product => {

    if(allProducts.find (item => item.id === product.id) ){


      const products = allProducts.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1 } : item )
    
      setTotal (total + product.price * product.quantity)
      setCountProducts(countProducts + product.quantity)
      return setAllProducts([...products])

    };
    setTotal (total + product.price * product.quantity)
    setCountProducts(countProducts + product.quantity)
    setAllProducts([...allProducts, product]);
	};




    return (



      <div className='container-items'>
        {data.map(product => (
          <div className='item' key={product.id}>
            <figure>
              <img src={product.img} alt={product.name} />
            </figure>
            <div className='info-product'>
              <h3>{product.name}</h3>
              <p className='price'>${product.price}</p>
           
                <button className='btn-añadir-al-carrito' onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
           
                <div className='icon-whatsapp'>
                <a href={product.code} target='_blank' className='pedir-whatsapp'><BsWhatsapp/></a>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  };