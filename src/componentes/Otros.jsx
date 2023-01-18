import React from 'react'
import Navbar from './Navbar'
import '../hojas-de-estilo/accesoriosyseguridad.css';
import { BsWhatsapp } from 'react-icons/bs'

import griferiaCromada from '../imagenes/griferiacromada.jpg'
import griferiaMetalica from '../imagenes/griferiametalica.jpg'




export const Otros = () => {


    const otros = [

        {
            id: 1,
            src: griferiaCromada,
            name: 'Grifería cromada',
            code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20la%20Grifer%C3%ADa%20cromada' ,
            price: 20 + '$'
        },

        {
            id: 2,
            src: griferiaMetalica,
            name: 'Grifería Metálica Cromada',
            code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20la%20Grifer%C3%ADa%20Met%C3%A1lica%20Cromada',
            price: 20 + '$'
        },



    

    ]

  return (
    <div id='accesorios'>
        <Navbar />
        <div className='texto-accesorios'>
            <h2>OTROS</h2>
        </div>

        <div className="productos-lista">
        {otros.map(({ id, src, name, price, code}) => (

                

                <div key={id}>
                    <h3>{name}</h3>
                  <img
                    src={src}
                    alt=""
                    className=""
                  />
                  <h2>{price}</h2>
            
                  <div className="icons-pedir-carrito">
                  <button className='btn-añadir-al-carrito'>AÑADIR AL CARRITO</button>
                  <a href={code} target='_blank' className='pedir-whatsapp'><BsWhatsapp/></a>
                  </div>

                </div>
                
              ))}

              
        </div>
        
     















        </div>
)
    
  }

