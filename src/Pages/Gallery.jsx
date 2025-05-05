import React from 'react';
import img1 from '../assets/Images/image1.jpg';
import img2 from '../assets/Images/image2.jpg';
import img3 from '../assets/Images/image3.jpg';
import img4 from '../assets/Images/image4.jpg';
import img5 from '../assets/Images/image1.jpg';
import img6 from '../assets/Images/image2.jpg';
import img7 from '../assets/Images/image3.jpg';
import img8 from '../assets/Images/project_image1.jpg';
import img9 from '../assets/Images/project_image2.jpg';
import img10 from'../assets/Images/project_image3.jpg';
import img11 from'../assets/Images/project_image4.jpg';

const imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const Gallery = () => {
  const cards = imageList.map((img, index) => ({
    id: index + 1,
    title: `Image ${index + 1}`,
    img: img,
  }));

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Gallery</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 ">
        {cards.map((card) => (
          <div className="col gallery-image" key={card.id}>
            <div className="card h-100 shadow-sm">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title text-center">{card.title}</h5>
              </div>
            </div>
          </div>
        ))}

        
        <div className="col">
          <div
            className="card h-100 d-flex justify-content-center align-items-center border border-secondary border-2 bg-light text-secondary fw-bold"
            style={{
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            View More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
