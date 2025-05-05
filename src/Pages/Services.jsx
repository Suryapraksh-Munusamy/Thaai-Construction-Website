import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Building, Hammer, PaintBucket, Ruler,Headset, DraftingCompass} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building />,
      title: "Construction",
      description: "Full-service construction for commercial and residential projects"
    },
    {
      icon: <Ruler />,
      title: "Architecture",
      description: "Innovative architectural design and planning"
    },
    {
      icon: <Hammer />,
      title: "Renovation",
      description: "Complete renovation and remodeling services"
    },
    {
      icon: <PaintBucket />,
      title: "Interior Design",
      description: "Professional interior design and decoration"
    },
    {
      icon: <Headset />,
      title: "Consulting ",
      description: "Complete Consulting services"
    },
    {
      icon: <DraftingCompass />,
      title: "Design",
      description: "Complete Designing"
    },
  ]

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={3} className="mb-4 text-center">
              <div className="service-icon mb-3">
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;