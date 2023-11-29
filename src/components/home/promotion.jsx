import React, { useState } from 'react';
import AdsCard from '../AdsCard';
import { useQuery } from 'react-query';
import { fetchAdsByFilter } from '@/api/ads';
import MultiCarousel from '../common/carousel/multi-carousel';

export default function Promotion({ promotion, mainTitle, subTitle, position }) {
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
    <section className={`flex flex-row `}>
      <div>
        {mainTitle && <h2>{mainTitle}</h2>}
        {subTitle && <h4>{subTitle}</h4>}
      </div>
      <MultiCarousel responsive={responsive} showDots={false}>
        {ads?.length > 0 && ads.map((ad) => <AdsCard key={ad.advertisementId} adsCardInfo={ad} />)}
      </MultiCarousel>
    </section>
  );
}
