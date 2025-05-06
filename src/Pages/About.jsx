import React from 'react';
import '../css/About.css'; // Import the custom CSS file

const About = () => {
  return (
    <section id="about" className="about-section mx-4 py-1 px-5">
      <div className="container-fluid">
        {/* Section Title */}
        <h2 className="text-center display-4 font-weight-bold text-dark mb-5">
          About Us
        </h2>
        <p className="lead text-center text-muted mb-4">
          With over 20 years of experience in civil and structural construction, we are trusted builders delivering quality infrastructure across Tamil Nadu. Our team of engineers, architects, and skilled workers is dedicated to excellence, safety, and client satisfaction in every project we undertake.
        </p>

        <div className="row justify-content-center">
          {/* Vision Card */}
          <div className="col-md-6 mb-4">
            <div className="card about-card shadow-lg border-0 rounded-lg">
              <div className="card-body">
                <h3 className="h4 card-title text-dark mb-3">Our Vision</h3>
                <p className="card-text text-muted">
                  To become a leading force in India's infrastructure development by blending innovation, sustainability, and craftsmanship.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="col-md-6 mb-4">
            <div className="card about-card shadow-lg border-0 rounded-lg">
              <div className="card-body">
                <h3 className="h4 card-title text-dark mb-3">Our Mission</h3>
                <p className="card-text text-muted">
                  We strive to deliver durable and innovative construction solutions that exceed client expectations while adhering to the highest standards of quality and safety.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Optional Image Section */}
        <div className="row mt-5 justify-content-center">
          <div className="col-12 text-center">
        
            <img
            src="https://cdn-icons-png.flaticon.com/128/18707/18707205.png"
            alt="Construction Icon"
            className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
