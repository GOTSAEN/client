import React from 'react'
import { Link } from 'react-router-dom'

function AdsCard({ adsCardInfo }) {
  const {
    advertisementId,
    productName,
    numberOfRecruit,
    category,
    imageUrl,
  } = adsCardInfo

  return (
    <Link to={`/product/${advertisementId}`}>
      <article className='border rounded-lg shadow-sm p-3 bg-background'>
        <img
          src={imageUrl}
          alt={productName}
          className='w-full h-[200px]'
        />
        <h2 className='font-semibold py-2'>
          {productName}
        </h2>
        <div className='flex justify-between items-center'>
          <p className='text-gray-500 text-sm'>
            {category}
          </p>
          <p className='text-gray-500 text-xs'>
            모집인원 {numberOfRecruit}명
          </p>
        </div>
      </article>
    </Link>
  )
}

export default AdsCard
