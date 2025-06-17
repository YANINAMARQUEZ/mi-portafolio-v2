import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../componentes/ProjectCard';
import banner from '../assets/project.jpg'; // reemplazá con tus imágenes

function Project() {
  const projects = [
    {
      title: 'E-commerce React',
      description: 'Carrito, login, filtro por categorías y diseño responsivo.',
      image: banner,
      demo: 'https://mi-ecommerce-two.vercel.app',
      repo: 'https://github.com/damiana/ecommerce-react',
    }
    // Podés agregar más proyectos
  ];

  return (
    <Container className="py-5" id="projects">
      <h2 className="text-center mb-4">Mis Proyectos</h2>
      <Row>
        {projects.map((proj, i) => (
          <Col key={i} md={6} lg={4} className="mb-4">
            <ProjectCard {...proj} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;
