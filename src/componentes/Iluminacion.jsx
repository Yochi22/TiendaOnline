import React from 'react'
import Navbar from './Navbar'
import '../hojas-de-estilo/accesoriosyseguridad.css';
import { BsWhatsapp } from 'react-icons/bs'

import reflector40W from '../imagenes/reflector40w.jpg'
import lamparaRedondaExterior from '../imagenes/lampararedondaexterior.jpg'
import bombilloLed20W from '../imagenes/bombillo20w.jpg'
import bombillo15W from '../imagenes/bombillo15w.jpg'
import lamparaVapoleta from '../imagenes/lamparavapoleta.jpg'
import lamparaLedRecargable from '../imagenes/lamparaledrecargable.jpg'
import panelLed48w from '../imagenes/panel48w.jpg'
import panelLed35w from '../imagenes/panel35w.jpg'
import reflector80W from '../imagenes/reflector80w.jpg'
import extensionVintage from '../imagenes/extensionvintage.jpg'


export const Iluminacion = () => {


    const iluminacion = [

        {
            id: 1,
            src: reflector40W,
            name: 'Reflector de 40w',
            code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20el%20reflector%20LED%2040w' ,
            price: 10 + '$'
        },

        {
            id: 2,
            src: lamparaRedondaExterior,
            name: 'Lámpara redonda para exterior 35w',
            code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20la%20L%C3%A1mpara%20redonda%20para%20exterior%2035w',
            price: 10 + '$'
        },

        {
          id: 3,
          src: bombilloLed20W,
          name: 'Bombillo 20w recargable con 2 pilas',
          code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20el%20Bombillo%2020w%20recargable%20con%202%20pilas',
          price: 9 + '$'
      },

      {
        id: 4,
        src: bombillo15W,
        name: 'Bombillo LED de 15w',
        code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20el%20Bombillo%20LED%20de%2015w',
        price: 3 + '$'
    },

    {
      id: 5,
      src: lamparaVapoleta,
      name: 'Lámpara Vapoleta para exterior',
      code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20la%20L%C3%A1mpara%20Vapoleta%20para%20exterior',
      price: 10 + '$'
  },

  {
    id: 6,
    src: lamparaLedRecargable,
    name: 'Lámpara LED recargable',
    code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20la%20L%C3%A1mpara%20LED%20recargable',
    price: 9 + '$'
},

{
  id: 7,
  src: panelLed48w,
  name: 'Panel LED 48w',
  code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20el%20Panel%20LED%2048w',
  price: 16 + '$'
},

{
  id: 8,
  src: panelLed35w,
  name: 'Panel LED 35w',
  code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20el%20Panel%20LED%2035w',
  price: 12 + '$'
},

{
  id: 9,
  src: reflector80W,
  name: 'Reflector LED 80w',
  code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20el%20Reflector%20LED%2080w',
  price: 15 + '$'
},

{
    id: 10,
    src: extensionVintage,
    name: 'Extensión Vintage',
    code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20la%20Extensi%C3%B3n%20Vintage',
    price: 40 + '$'
  },


    ]

  return (
    <div id='accesorios'>
        <Navbar />
        <div className='texto-accesorios'>
            <h2>ILUMINACIÓN</h2>
        </div>

        <div className="productos-lista">
        {iluminacion.map(({ id, src, name, price, code}) => (

                

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

