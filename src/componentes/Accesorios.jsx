import React from 'react'
import Navbar from './Navbar'
import camaraWifi360 from '../imagenes/camarawifi360.jpg'
import gpsTracker from '../imagenes/gpstracker.png'
import barraLed1 from '../imagenes/barraled-1.jpg'
import '../hojas-de-estilo/accesoriosyseguridad.css';
import { BsWhatsapp } from 'react-icons/bs'
import barraLed96f from '../imagenes/barraled96f.jpg'
import barraLed168f from '../imagenes/barraled168f.jpg'
import barraLedStrober1 from '../imagenes/barraledstrober1.jpg'
import barraLedStrober2 from '../imagenes/barraledstrober2.jpg'
import pushButtom from '../imagenes/pushbuttom.jpg'
import alarma from '../imagenes/alarma.jpg'


export const Accesorios = () => {


    const accesoriosYSeguridad = [

        {
            id: 1,
            src: camaraWifi360,
            name: 'Cámara WiFi 360 grados EZVIZ con seguimiento inteligente',
            code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20adquirir%20la%20C%C3%A1mara%20WiFi%20360%20grados%20EZVIZ%20con%20seguimiento%20inteligente' ,
            price: 50 + '$'
        },

        {
            id: 2,
            src: gpsTracker,
            name: 'GPS Tracker SinoTrack (incluye chip e instalación)',
            code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20adquirir%20el%20GPS%20Tracker%20SinoTrack',
            price: 120 + '$'
        },

        {
          id: 3,
          src: barraLed1,
          name: 'Barra LED 72-F EP 216W 38cm-XB',
          code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20adquirir%20la%20Barra%20LED%2072-F%20EP%20216W%2038cm-XB',
          price: 35 + '$'
      },

      {
        id: 4,
        src: barraLed96f,
        name: 'Barra LED 96-F EP 288 W 52cm-XB',
        code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20adquirir%20la%20Barra%20LED%2096-F%20EP%20288%20W%2052cm-XB',
        price: 50 + '$'
    },

    {
      id: 5,
      src: barraLed168f,
      name: 'Barra LED 168-F EP 504W 94cm-XB',
      code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20adquirir%20la%20Barra%20LED%20168-F%20EP%20504W%2094cm-XB',
      price: 75 + '$'
  },

  {
    id: 6,
    src: barraLedStrober1,
    name: 'Barra LED Strober Rojo/Azul 45 cm. 4D-J',
    code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20adquirir%20la%20Barra%20LED%20Strober%20Rojo/Azul%2045%20cm.%204D-J',
    price: 33 + '$'
},

{
  id: 7,
  src: barraLedStrober2,
  name: 'Barra LED Strober Rojo/Azul 88,7 cm. 4D-J',
  code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20adquirir%20la%20Barra%20LED%20Strober%20Rojo/Azul%2088,7%20cm.%204D-J',
  price: 45 + '$'
},

{
  id: 8,
  src: pushButtom,
  name: 'Push Buttom Encendido con Inmovilizador 202-J',
  code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20adquirir%20el%20Push%20Buttom%20Encendido%20con%20Inmovilizador%20202-J',
  price: 35 + '$'
},

{
  id: 9,
  src: alarma,
  name: 'Alarma SPY LC095 Bluetooth PKE',
  code: 'https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20adquirir%20la%20Alarma%20SPY%20LC095%20Bluetooth%20PKE',
  price: 100 + '$'
},


    ]

  return (
    <div id='accesorios'>
        <Navbar />
        <div className='texto-accesorios'>
            <h2>ACCESORIOS Y SEGURIDAD</h2>
        </div>

        <div className="productos-lista">
        {accesoriosYSeguridad.map(({ id, src, name, price, code}) => (

                

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

