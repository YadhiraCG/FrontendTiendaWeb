import LandingPage from './pages/landingPage';
import Carrito from './pages/carrito';
import Perfil from './pages/perfil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
