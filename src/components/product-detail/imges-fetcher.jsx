import React from 'react'
import { useQuery } from 'react-query'
import ImagesCarousel from './images-carousel'

export default function ImagesFetcher({ images }) {
  return <ImagesCarousel images={images} />
}
