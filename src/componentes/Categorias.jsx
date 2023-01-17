import React from 'react'
import '../hojas-de-estilo/categorias.css';
import Accesorios from '../imagenes/accesorios.png'
import Letrero from '../imagenes/letrero-neon.jpg'
import Iluminacion from '../imagenes/iluminacion.jpg'
import Otros from '../imagenes/otros.jpg'

export const Categorias = () => {
  return (
    <div id='Products'>
        <h2>CATEGORÍAS</h2>
     <div className='categorias-principal'>
     <div className='accesorios-seguridad'>
        <a href="/#accesorios">ACCESORIOS Y SEGURIDAD</a>
            <img src={Accesorios} alt="" />
        </div>
        <div className='avisos-led'>
        <a href="/#" >AVISOS LED /PERSONALIZADOS</a>
            <img src={Letrero} alt="" />
        </div>
        <div className='iluminacion'>
        <a href="/#">ILUMINACIÓN</a>
            <img src={Iluminacion} alt="" />
        </div>
        <div className='otros'>
        <a href="/#">OTROS</a>
            <img src={Otros} alt="" />
        </div>
     </div>
        
    </div>
  )
}

