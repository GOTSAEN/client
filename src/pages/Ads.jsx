import { fetchAdsByCategory } from '@/api/ads';
import AdsCard from '@/components/AdsCard';
import { Search } from 'lucide-react';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function Ads() {
  const category = useParams().category;

  const { isLoading, data, error } = useQuery(
    ['ads', `${category}`],
    async () => await fetchAdsByCategory(category).then((res) => res),
    {
      staleTime: 1000 * 60 * 30,
    }
  );

  return (
    <>
      <div className="flex items-end mb-4">
        <h2 className="text-md font-semibold flex items-center w-fit bg-muted py-1 px-4">
          <span className="mr-1">🏷️</span>
          {category}
        </h2>
        <p className="text-muted-foreground text-sm p-2 w-fit">총 {data?.pageInfo.totalElements || 0}개의 결과</p>
      </div>
      <section className="grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 gap-4 py-2">
        {data?.data.length > 0 && data?.data.map((ad) => <AdsCard key={ad.advertisementId} adsCardInfo={ad} />)}
      </section>
      {data?.data.length === 0 && <p className="py-12 text-center ">해당 카테고리의 검색된 결과가 없습니다🥲</p>}
    </>
  );
}
