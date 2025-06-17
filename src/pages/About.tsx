
import { Container, Row, Col } from 'react-bootstrap';
import '../style/About.css';


import reactLogo from '../assets/react-logo.svg';
import cssLogo from '../assets/css-logo.svg';
import nodeLogo from '../assets/node-logo.svg';
import jsLogo from '../assets/js-logo.svg';

const About = () => {
  return (
    <section id="about">
      <Container className="py-5 text-center">
        <h2 className="mb-4">✨Sobre mí✨</h2>
        <p className="mb-5">
          💼Soy una frontend developer apasionada por construir interfaces atractivas, funcionales y accesibles. Trabajo con tecnologías como React, CSS, JavaScript y Node.js para crear experiencias web modernas y profesionales.
        </p>
        <Row className="justify-content-center align-items-center tech-logos">
          <Col xs={6} sm={3} md={2}>
            <img src={reactLogo} alt="React" className="img-fluid" />
          </Col>
          <Col xs={6} sm={3} md={2}>
            <img src={cssLogo} alt="CSS" className="img-fluid" />
          </Col>
          <Col xs={6} sm={3} md={2}>
            <img src={jsLogo} alt="JavaScript" className="img-fluid" />
          </Col>
          <Col xs={6} sm={3} md={2}>
            <img src={nodeLogo} alt="Node.js" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

