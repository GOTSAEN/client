import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function MultiCarousel({
  children,
  responsive,
}) {
  return (
    <Carousel
      arrows={false}
      infinite
      autoPlay
      responsive={responsive}
      showDots={true}
      className='rounded-md'
    >
      {children}
    </Carousel>
  )
}
