import { fetchAds } from '@/api/ads';
import { getBookmarks } from '@/api/bookmark';
import AdsCard from '@/components/AdsCard';
import LocationLabel from '@/components/setting/location-label';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

export default function Bookmarks() {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(['bookmark'], async () => await getBookmarks(page).then((res) => res), {
    staleTime: 1000 * 60 * 30,
  });
  return (
    <>
      <section className="grid grid-cols-1 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ads?.length > 0 && ads.map((ad) => <AdsCard key={ad.advertisementId} adsCardInfo={ad} />)}
      </section>
    </>
  );
}
