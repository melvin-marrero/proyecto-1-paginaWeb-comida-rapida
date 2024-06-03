
import './App.css';
import Home from './compontes/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ContainerHamburguer from './compontes/containerHamburguer';
import ContainerTacos from './compontes/containerTacos';
import ContainerDesayuno from './compontes/containerDesayuno';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hamberguer' element={<ContainerHamburguer />} />
        <Route path='/tacos' element={<ContainerTacos />} />
        <Route path='/desayuno' element={<ContainerDesayuno/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
