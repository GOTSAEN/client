import React, { useState } from 'react';
import AdsCard from '../AdsCard';
import { useQuery } from 'react-query';
import { fetchAdsByFilter } from '@/api/ads';
import MultiCarousel from '../common/carousel/multi-carousel';
import PromotionSkeleton from './promotion-skeleton';

export default function Promotion({ promotion, mainTitle, subTitle, color }) {
  const [page, setPage] = useState(1);
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
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(['ads', promotion], () => fetchAdsByFilter(promotion, page), { staleTime: 1000 * 60 * 24 });

  return (
    <>
      {isLoading && <PromotionSkeleton mainTitle={mainTitle} subTitle={subTitle} color={color} />}
      {ads?.length > 0 && (
        <section className="my-8">
          <div className="text-center">
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
            {ads?.length > 0 &&
              ads.map((ad) => (
                <div className="m-2" key={ad.advertisementId}>
                  <AdsCard adsCardInfo={ad} />
                </div>
              ))}
          </MultiCarousel>
        </section>
      )}
    </>
  );
}
