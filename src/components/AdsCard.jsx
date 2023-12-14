import React from 'react';
import { Link } from 'react-router-dom';
import ImageLazyLoading from './common/ImageLazyLoading';

function AdsCard({ adsCardInfo }) {
  const { advertisementId, productName, numberOfRecruit, category, imageUrl } = adsCardInfo;

  return (
    <Link to={`/product/${advertisementId}`} className="bg-card">
      <article className="border rounded-lg shadow-sm p-3 aspect-1">
        <ImageLazyLoading url={imageUrl} alt={productName} />
        <h2 className="font-semibold my-2 line-clamp-1">{productName}</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">{category}</p>
          <p className="text-gray-500 text-xs">모집인원 {numberOfRecruit}명</p>
        </div>
      </article>
    </Link>
  );
}

export default AdsCard;
