
import './App.css';
import { Home } from './componentes/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Carrito } from './componentes/carrito/Carrito'
import { Accesorios } from './componentes/Accesorios';
import { AvisosLed } from './componentes/AvisosLed';
import { Iluminacion } from './componentes/Iluminacion';
import { Otros } from './componentes/Otros';

function App() {



  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Cart' element={<Carrito />}></Route>
        <Route path='/Accesorios' element={<Accesorios />}></Route>
        <Route path='/Avisos' element={<AvisosLed />}></Route>
        <Route path='/Iluminacion' element={<Iluminacion />}></Route>
        <Route path='/Otros' element={<Otros />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
