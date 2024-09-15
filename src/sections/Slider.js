import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;
