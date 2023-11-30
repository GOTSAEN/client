import React from 'react';
import { Link } from 'react-router-dom';

function AdsCard({ adsCardInfo }) {
  const { advertisementId, productName, numberOfRecruit, category, imageUrl } = adsCardInfo;
  console.log(productName);

  return (
    <Link to={`/product/${advertisementId}`} className="bg-card">
      <article className="border rounded-lg shadow-sm p-3 aspect-1">
        <img
          src={imageUrl || '/no_img.jpg'}
          alt={productName}
          className="w-full h-full outline-1 outline-border hover:scale-105 rounded-sm aspect-1"
        />
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
