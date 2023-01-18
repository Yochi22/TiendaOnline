import React from 'react'
import '../hojas-de-estilo/accesoriosyseguridad.css';
import avisoLed1 from '../imagenes/avisoled1.jpg'
import avisoLed2 from '../imagenes/avisoled2.jpg'
import avisoLed3 from '../imagenes/avisoled3.jpg'
import avisoLed4 from '../imagenes/avisoled4.jpg'
import Navbar from './Navbar'
import { BsWhatsapp } from 'react-icons/bs'

export const AvisosLed = () => {


  const avisosLed = [

      {
          id: 1,
          src: avisoLed1,
          name: 'Aviso LED/Personalizable',
          code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20el%20aviso%20LED%20personalizable' ,
          price: 250 + '$'
      },

      {
          id: 2,
          src: avisoLed2,
          name: 'Aviso LED/Personalizable)',
          code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20el%20aviso%20LED%20personalizable',
          price: 250 + '$'
      },

      {
        id: 3,
        src: avisoLed3,
        name: 'Aviso LED/Personalizable',
        code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20el%20aviso%20LED%20personalizable',
        price: 250 + '$'
    },

    {
      id: 4,
      src: avisoLed4,
      name: 'Aviso LED/Personalizable',
      code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20el%20aviso%20LED%20personalizable',
      price: 250 + '$'
  },

 

  ]

return (
  <div>
      <Navbar />
      <div>
          <h2>AVISOS LED/PERSONALIZADOS</h2>
      </div>

      <div className="productos-lista">
      {avisosLed.map(({ id, src, name, price, code}) => (

              

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

