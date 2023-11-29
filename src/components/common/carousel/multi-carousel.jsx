import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MultiCarousel({ children, responsive, showDots }) {
  return (
    <Carousel arrows={false} infinite responsive={responsive} showDots={showDots ?? true} className="rounded-md">
      {children}
    </Carousel>
  );
}
