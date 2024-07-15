
import './App.css';
import Home from './compontes/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hambergue from './compontes/hamburguer';
import Desayuno from './compontes/desayuno';
import Tacos from './compontes/tacos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hamberguer' element={<Hambergue />} />
        <Route path='/tacos' element={<Tacos />} />
        <Route path='/desayuno' element={<Desayuno/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
