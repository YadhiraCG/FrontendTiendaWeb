import LandingPage from './pages/landingPage';
import Carrito from './pages/carrito';
import Perfil from './pages/perfil';
import Products from './pages/products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <main style={{ minHeight: '80vh'}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
