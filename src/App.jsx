import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Funcionalidades from './pages/Funcionalidades.jsx'
import Tecnologias from './pages/Tecnologias.jsx'
import Contato from './pages/Contato.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
