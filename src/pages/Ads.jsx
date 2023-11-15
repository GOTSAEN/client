import { fetchAdsByCategory } from '@/api/ads';
import AdsCard from '@/components/AdsCard';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function Ads() {
  const params = useParams();
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(
    ['ads', `${params.category}`],
    async () => await fetchAdsByCategory(params.category).then((res) => res),
    {
      staleTime: 1000 * 60 * 30,
    },
  );

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
      {ads?.length > 0 && ads.map((ad) => <AdsCard key={ad.advertisementId} adsCardInfo={ad} />)}
    </section>
  );
}
