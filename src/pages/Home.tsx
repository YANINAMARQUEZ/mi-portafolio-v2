// src/pages/Home.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// src/componentes/Header.tsx
import '../style/Home.css';
import damianaPhoto from '../assets/damiana.jpg';



function Home() {
  return (
    <div className="home-section d-flex align-items-center" id="home">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold">Hola, soy Damiana 👋</h1>
            <p className="lead">Frontend Developer enfocada en React, diseño limpio y experiencia de usuario</p>
            <div className="mt-4">
              <Button variant="primary" href="/proyectos" className="me-3">Ver Proyectos</Button>
              <Button variant="outline-light" href="/contacto">Contáctame</Button>
            </div>

          </Col>
          <Col md={4} className="text-end">
            <img
              src={damianaPhoto}
              alt="Foto de Damiana"
              className="img-fluid rounded-circle dami-foto"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
