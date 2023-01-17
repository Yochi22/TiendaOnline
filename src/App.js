
import './App.css';
import { Banner } from './componentes/Banner';
import { Categorias } from './componentes/Categorias';
import Navbar from './componentes/Navbar';
import { Mapa } from './componentes/Mapa';
import { RedesSociales } from './componentes/RedesSociales';
import { Accesorios } from './componentes/Accesorios';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Categorias />
      <Mapa />
      <RedesSociales />

    <Accesorios />
    </div>
  );
}

export default App;
