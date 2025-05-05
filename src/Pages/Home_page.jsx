import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import image1 from "../assets/Images/image1.jpg";
import image2 from "../assets/Images/image2.jpg";
import image3 from "../assets/Images/image3.jpg";
import image4 from "../assets/Images/image4.jpg";


const Home_page = () => {

  const slides = [
    {
      image: image1,
      title: "Building Tomorrow's World",
      description: "Excellence in Construction Since 1995"
    },
    {
      image: image2,
      title: "Quality & Innovation",
      description: "Leading the Construction Industry"
    },
    {
      image: image3,
      title: "Sustainable Building",
      description: "Creating Eco-friendly Structures"
    },
    {
      image: image4,
      title: "Quality & Innovation",
      description: "Leading the Construction Industry"
    }
  ];

  return (
    <section className="hero-section ">
      <Carousel fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 mx-auto "
              src={slide.image}
              alt={slide.title}
              style={{ height: '100vh', objectFit: 'cover' }}
            />
            <Carousel.Caption className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
    );
  };


export default Home_page