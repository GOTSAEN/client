import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useQuery } from 'react-query';
import { fetchByKeyword } from '@/api/search';
import AdsCard from '@/components/AdsCard';

export default function SearchPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const keyword = params.get('keyword');
  const [page, setPage] = useState(1);

  const { isLoading, data, error } = useQuery(
    ['search', keyword],
    async () =>
      await fetchByKeyword(keyword, page).then((res) => {
        return res;
      }),
    {
      staleTime: 1000 * 60 * 24,
    },
  );
  useEffect(() => {
    console.log('object');
  }, [keyword]);
  return (
    <main>
      {isLoading && <p> loading </p>}
      {error && <p> error </p>}
      <div className="flex items-end">
        <h2 className="text-lg font-semibold flex items-center w-fit bg-muted py-2 px-4">
          <Search size={20} className="mr-1" />
          {keyword}
        </h2>
        <p className="text-muted-foreground text-sm p-2 w-fit">총 {data?.pageInfo.totalElements || 0}개의 결과</p>
      </div>

      {data?.data.length ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
          {data.data?.map((ads) => (
            <AdsCard adsCardInfo={ads} key={ads.advertisementId} />
          ))}
        </section>
      ) : (
        <p className="py-12 text-center ">해당 키워드로 검색된 결과가 없습니다🥲</p>
      )}
    </main>
  );
}
