import React, { useState, useEffect } from 'react';
import '/public/styles2.css'; // Asegúrate de tener un archivo CSS para estilos

const Carousell = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };

  const goToNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="carousell-img-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: `transform 0.5s ease-out${isTransitioning ? ', opacity 0.3s ease-out' : ''}`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousell;


