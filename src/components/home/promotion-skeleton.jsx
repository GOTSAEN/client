import React from 'react';
import { Skeleton } from '../ui/skeleton';
import MultiCarousel from '../common/carousel/multi-carousel';

export default function PromotionSkeleton({ mainTitle, subTitle, color }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="text-center my-8">
        {mainTitle && (
          <h2 className="text-2xl Jalnan fit-content">
            <span className="pt-1" style={{ background: color }}>
              {mainTitle}
            </span>
          </h2>
        )}
        {subTitle && <h4 className="text-lg font-semibold">{subTitle}</h4>}
      </div>
      <MultiCarousel responsive={responsive} showDots={false} autoPlay={true}>
        {[1, 2, 3].map((el, idx) => (
          <AdCardSkeleton key={idx} />
        ))}
      </MultiCarousel>
    </>
  );
}

export function AdCardSkeleton() {
  return (
    <article className="border rounded-lg shadow-sm p-3 aspect-1 m-2">
      <div className="flex flex-col gap-2">
        <Skeleton className="w-full h-full outline-1 outline-border hover:scale-105 rounded-sm aspect-1" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6" />
          <div className="flex justify-between">
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-20 h-4" />
          </div>
        </div>
      </div>
    </article>
  );
}
