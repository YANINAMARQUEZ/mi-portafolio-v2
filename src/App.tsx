import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projet from './pages/Projet';
import Contact from './pages/Contact';
import './style/index.css'; // O el archivo que estés usando
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap

function App() {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/proyectos" element={<Projet />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
