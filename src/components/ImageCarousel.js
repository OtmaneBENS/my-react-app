// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
