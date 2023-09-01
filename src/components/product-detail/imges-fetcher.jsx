import React from 'react'
import { useQuery } from 'react-query'
import ImagesCarousel from './images-carousel'

export default function ImagesFetcher() {
  const images = [
    'https://res.cloudinary.com/testdart/image/upload/v1686622372/lgfjbpyuklur2albx0ht.jpg',
    'https://res.cloudinary.com/testdart/image/upload/v1686557176/lfsn42i0e86m03l8vo6p.jpg',
    'https://res.cloudinary.com/testdart/image/upload/v1686556832/npqybkpp5nhqimynxpwg.jpg',
    'https://res.cloudinary.com/testdart/image/upload/v1686622372/lgfjbpyuklur2albx0ht.jpg',
    'https://res.cloudinary.com/testdart/image/upload/v1686557176/lfsn42i0e86m03l8vo6p.jpg',
    'https://res.cloudinary.com/testdart/image/upload/v1686556832/npqybkpp5nhqimynxpwg.jpg',
    'https://res.cloudinary.com/testdart/image/upload/v1686622372/lgfjbpyuklur2albx0ht.jpg',
    'https://res.cloudinary.com/testdart/image/upload/v1686557176/lfsn42i0e86m03l8vo6p.jpg',
    'https://res.cloudinary.com/testdart/image/upload/v1686556832/npqybkpp5nhqimynxpwg.jpg',
  ]
  return <ImagesCarousel images={images} />
}
