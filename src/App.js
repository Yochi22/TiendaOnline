
import './App.css';
import { Banner } from './componentes/Banner';
import { Categorias } from './componentes/Categorias';
import Navbar from './componentes/Navbar';
import { Mapa } from './componentes/Mapa';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Categorias />
      <Mapa />
    </div>
  );
}

export default App;
