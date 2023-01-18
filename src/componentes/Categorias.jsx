import React from 'react'
import '../hojas-de-estilo/categorias.css';
import Accesorios from '../imagenes/accesorios.png'
import Letrero from '../imagenes/letrero-neon.jpg'
import Iluminacion from '../imagenes/iluminacion.jpg'
import Otros from '../imagenes/otros.jpg'
import {Link} from "react-router-dom"

export const Categorias = () => {
  return (
    <div id='Products'>
        <h2>CATEGORÍAS</h2>
     <div className='categorias-principal'>
     <Link to={'/Accesorios'}>
     <div className='accesorios-seguridad'>
        
        <a href="/#accesorios">ACCESORIOS Y SEGURIDAD</a>
            <img src={Accesorios} alt="" />
        </div>
        </Link>

        <Link to={'/Avisos'}>
        <div className='avisos-led'>
        <a href="/#" >AVISOS LED /PERSONALIZADOS</a>
            <img src={Letrero} alt="" />
        </div>
        </Link>

        <Link to={'/Iluminacion'}>
        <div className='iluminacion'>
        <a href="/#">ILUMINACIÓN</a>
            <img src={Iluminacion} alt="" />
        </div>
        </Link>

        <Link to={'/Otros'}>
        <div className='otros'>
        <a href="/#">OTROS</a>
            <img src={Otros} alt="" />
        </div>
        </Link>

     </div>
        
    </div>
  )
}

