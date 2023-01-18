import React from 'react'
import { Banner } from './Banner'
import { Categorias } from './Categorias'
import { Navbar} from './Navbar'
import { Mapa } from './Mapa'
import { RedesSociales } from './RedesSociales'


export const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Categorias />
        <Mapa />
        <RedesSociales />

    </div>
  )
}
