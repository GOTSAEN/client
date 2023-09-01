import React from 'react'
import MultiCarousel from '../common/carousel/multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function ImagesCarousel({ images }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <section className='w-full h-full'>
      <MultiCarousel responsive={responsive}>
        {images &&
          images.map((image, idx) => (
            <div
              className='w-full lg:h-[420px] md:h-[320px] sm:h-[400px] cursor-pointer hover:shadow-lg'
              key={idx}
            >
              <img
                className='w-full h-100 bg-cover'
                src={image}
                alt='hu'
              />
            </div>
          ))}
      </MultiCarousel>
    </section>
  )
}
