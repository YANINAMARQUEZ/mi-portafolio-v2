import { Container } from 'react-bootstrap';
// src/componentes/Header.tsx
import '../style/Footer.css';



function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container className="text-center">
        <small>© {new Date().getFullYear()} Damiana. Todos los derechos reservados.</small>
      </Container>
    </footer>
  );
}

export default Footer;
