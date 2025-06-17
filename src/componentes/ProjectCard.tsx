import { Card, Button } from 'react-bootstrap';

function ProjectCard({ title, description, image, repo, demo }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img variant="top" src={image} alt={`Proyecto ${title}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={demo} target="_blank" className="me-2">Demo</Button>
        <Button variant="secondary" href={repo} target="_blank">Código</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
