import React from 'react'
import Navbar from './Navbar'
import camaraWifi360 from '../imagenes/camarawifi360.jpg'
import gpsTracker from '../imagenes/gpstracker.png'
import '../hojas-de-estilo/accesoriosyseguridad.css';
import { BsWhatsapp } from 'react-icons/bs'


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
    ]

  return (
    <div id='accesorios'>
        <Navbar />
        <div className='texto-accesorios'>
            <h2>ACCESORIOS Y SEGURIDAD</h2>
        </div>

        <div className="accesorios-y-seguridad">
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

