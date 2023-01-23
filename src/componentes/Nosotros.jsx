import React from 'react'
import { Navbar } from './Navbar'
import Logo from '../imagenes/logocityled.png'
import { RedesSociales } from './RedesSociales'
import '../hojas-de-estilo/nosotros.css';

export const Nosotros = () => {
  return (
    <div id='Nosotros'>
        <Navbar />
    <div className='titulo'>
        <h2>NOSOTROS</h2>
    </div>
    <div className='logonosotros'>
        <img src={Logo} alt="logo-cityled" srcset="" />
    </div>
    <div className='quienessomos'>
      <p>  Somos una empresa formada en la ciudad de Barquisimeto, estado Lara, especializada en la venta al menor y detal de productos LED; como iluminación para el hogar, urbanismos o empresas y accesorios para vehículos</p>
      <br />
      <p>Tenemos servicio de instalación y planeación de proyectos</p> 
    </div>
    <RedesSociales />
    </div>
  )
}
