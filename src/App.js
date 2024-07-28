
import './App.css';
import Home from './compontes/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hambergue from './compontes/hamburguer';
import Desayuno from './compontes/desayuno';
import Tacos from './compontes/tacos';
import HambergueScrem from './compontes/hambergueScrem';
import TacosScrem from './compontes/tacoScrem';
import DesayunoScrem from './compontes/desayunoScrem';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hamberguer' element={<Hambergue />} />
        <Route path='/hamberguer/:nombre' element={<HambergueScrem />} />
        <Route path='/tacos' element={<Tacos />} />
        <Route path='/tacos/:name' element={<TacosScrem />} />
        <Route path='/desayuno' element={<Desayuno />} />
        <Route path='/desayuno/:nombre' element={<DesayunoScrem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
