import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import pimage1 from "../assets/Images/project_image1.jpg";
import pimage2 from "../assets/Images/project_image2.jpg";
import pimage3 from "../assets/Images/project_image3.jpg";
import pimage4 from "../assets/Images/project_image4.jpg";

const Projects_page = () => {
  const projects = [
    {
      title: "Modern Office Complex",
      image: pimage1,
      description: "A state-of-the-art office building with sustainable features"
    },
    {
      title: "Luxury Apartments",
      image: pimage2,
      description: "High-end residential complex with premium amenities"
    },
    {
      title: "Shopping Mall",
      image: pimage3,
      description: "Modern shopping center with innovative design"
    },
    {
        title: "Luxury Apartments",
        image: pimage4,
        description: "High-end residential complex with premium amenities"
    },    
    {
        title: "Shopping Mall",
        image: pimage3,
        description: "Modern shopping center with innovative design"
    },
    {
      title: "Luxury Apartments",
      image: pimage4,
      description: "High-end residential complex with premium amenities"
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">Our Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="project-card h-100">
                <Card.Img 
                  variant="top" 
                  src={project.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects_page;