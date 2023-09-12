import React from "react";

function AdsCard({ adsCardInfo }) {
  const { image, title, category } = adsCardInfo;
  return (
    <div className="border rounded-lg shadow-md p-3">
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="flex justify-between items-center mt-3">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-gray-500 text-sm">{category}</p>
      </div>
    </div>
  );
}

export default AdsCard;
