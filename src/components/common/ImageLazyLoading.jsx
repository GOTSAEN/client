import React, { useState } from 'react';

export default function ImageLazyLoading({ url, alt }) {
  const img_style = 'w-full h-full outline-1 outline-border hover:scale-105 rounded-sm aspect-1';
  const { isLoading, setIsLoading } = useState(true);
  return (
    <>
      {isLoading && <div className={img_style}>loading</div>}
      {!isLoading && (
        <img loading="lazy" className={img_style} src={url} alt={alt} onLoading={() => setIsLoading(false)} />
      )}
    </>
  );
}
