import React from 'react'
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs'
import '../hojas-de-estilo/redessociales.css';


export const RedesSociales = () => {

    const links = [
        {
            id: 1,
            child: (
                 <>
                 <BsWhatsapp size={30}/>
                 </>
            ),
            href: 'https://wa.me/584245532742',
            style: 'rounded-tr-md'
        },

        {
            id: 2,
            child: (
                 <>
                 <BsFacebook size={30}/>
                 </>
            ),
            href: 'https://wa.me/584245532742&text=Hola,%20estoy%20interesad@%20%en20%sus20%productos?',
            style: 'rounded-tr-md'
        },

        {
            id: 3,
            child: (
                 <>
                 <BsInstagram size={30}/>
                 </>
            ),
            href: 'https://www.instagram.com/CITYLED251_/',
            style: 'rounded-tr-md'
        },



    ]

  return (
    
    <div className='redes-sociales'>
        
        {links.map(({id, child, href,})=>(
                <li key={id} className='icon-social'>
                <a href={href} className="link-social" target='_blank' rel="Hola, escribe un mensaje"> {child}
            </a></li>
            ))}
        
    </div>
  )
}
