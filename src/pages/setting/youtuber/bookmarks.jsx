import { fetchAds } from '@/api/ads';
import { getBookmarks } from '@/api/bookmark';
import AdsCard from '@/components/AdsCard';
import ListSkeleton from '@/components/home/list-skeleton';
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
      {isLoading && <ListSkeleton/>}
      <section className="grid sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-5  2xl:grid-cols-5 gap-4">
        {ads?.length > 0 && ads.map((ad) => <AdsCard key={ad.advertisementId} adsCardInfo={ad} />)}
      </section>
    </>
  );
}
