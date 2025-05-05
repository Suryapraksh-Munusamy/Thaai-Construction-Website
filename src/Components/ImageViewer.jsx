import React from 'react';

const ImageViewer = ({ image, onClose, onNext, onPrev }) => {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
      style={{ zIndex: 2000 }}
      onClick={onClose}
    >
      <div className="position-relative" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Zoomed" style={{ maxHeight: '80vh', maxWidth: '90vw' }} />

        <button
          onClick={onPrev}
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
        >
          ‹
        </button>

        <button
          onClick={onNext}
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
        >
          ›
        </button>

        <button
          onClick={onClose}
          className="btn btn-danger position-absolute top-0 end-0 m-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
