import React, { useState } from 'react';
import img1 from '../assets/Images/image1.jpg';
import img2 from '../assets/Images/image2.jpg';
import img3 from '../assets/Images/image3.jpg';
import img4 from '../assets/Images/image4.jpg';
import img5 from '../assets/Images/image1.jpg';
import img6 from '../assets/Images/image2.jpg';
import img7 from '../assets/Images/image3.jpg';
import img8 from '../assets/Images/project_image1.jpg';
import img9 from '../assets/Images/project_image2.jpg';
import img10 from '../assets/Images/project_image3.jpg';
import img11 from '../assets/Images/project_image4.jpg';
import ImageViewer from '../Components/ImageViewer';

const imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img9];

const GalleryPage = () => {
  const [viewerIndex, setViewerIndex] = useState(null);

  const openViewer = (index) => setViewerIndex(index);
  const closeViewer = () => setViewerIndex(null);

  const goNext = () => setViewerIndex((prev) => (prev + 1) % imageList.length);
  const goPrev = () => setViewerIndex((prev) => (prev - 1 + imageList.length) % imageList.length);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Full Gallery</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {imageList.map((img, index) => (
          <div className="col gallery-image" key={index}>
            <div
              className="card h-100 shadow-sm"
              onClick={() => openViewer(index)}
              style={{ cursor: 'pointer' }}
            >
              <img src={img} className="card-img-top" alt={`Image ${index + 1}`} />
              <div className="card-body">
                <h5 className="card-title text-center">{`Image ${index + 1}`}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {viewerIndex !== null && (
        <ImageViewer
          image={imageList[viewerIndex]}
          onClose={closeViewer}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </div>
  );
};

export default GalleryPage;
