import React from 'react'
import Iframe from 'react-iframe'
import '../hojas-de-estilo/mapa.css';

export const Mapa = () => {
  return (
    <div className='mapa'>
    <h2>UBÍCANOS EN</h2>
    <h3>Calle 49 final carrera 24, Barquisimeto, Venezuela</h3>
    <div className='map-responsive'>
    
    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.366791174179!2d-69.34230228599984!3d10.069001792803906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8766fc94823725%3A0x3dac2e8c89f08e6f!2sCalle%2049%20%26%20Carrera%2024%2C%20Barquisimeto%203001%2C%20Lara%2C%20Venezuela!5e0!3m2!1ses!2sco!4v1673731658068!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
</div>
    </div>
  )
}
