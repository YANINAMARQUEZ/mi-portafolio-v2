import { Container, Form, Button } from 'react-bootstrap';
// src/componentes/Header.tsx
import '../style/Contact.css';

function Contact() {
  return (
    <Container className="py-5" id="contact">
      <h2 className="text-center mb-4">Contacto</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Tu nombre" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Tu email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={4} required />
        </Form.Group>
        <Button type="submit" variant="primary">Enviar</Button>
      </Form>
      <Button
  variant="success"
  href="https://wa.me/5493754530645"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3"
>
  Contactar por WhatsApp
</Button>

    </Container>
  );
}

export default Contact;
