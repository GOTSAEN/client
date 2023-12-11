import React, { useEffect } from 'react';
import AdsCard from '@/components/AdsCard';
import { useInfiniteQuery } from 'react-query';
import { fetchAdsByStatus } from '@/api/ads';
import { useLocation } from 'react-router-dom';
import { saveUserSession } from '@/service/login-auth';
import { useIntersectionObserver } from '@/hooks/use-intersection-abserver';

export default function List() {
  const location = useLocation();

  const { data, fetchNextPage, hasNextPage, error } = useInfiniteQuery(
    ['ads', 'waiting'],
    async ({ pageParam = 1 }) => await fetchAdsByStatus('WAITING', pageParam).then((res) => res),
    {
      select: (data) => ({
        pages: data.pages,
        pageParams: data.pageParams,
      }),
      getNextPageParam: (res) => {
        const nextPage = res.pageInfo.page;
        return nextPage >= res.pageInfo.totalPages ? undefined : nextPage + 1;
      },
      staleTime: 1000 * 60 * 30,
    }
  );
  const { setTarget } = useIntersectionObserver({ hasNextPage, fetchNextPage });
  useEffect(() => {
    if (location.search.includes('?')) {
      const urlSearchParams = new URLSearchParams(location.search.split('?')[1]);

      const authorization = urlSearchParams.get('Access_token');
      const email = urlSearchParams.get('Email');
      const usertype = urlSearchParams.get('UserType');
      const refresh = urlSearchParams.get('Refresh_token');

      saveUserSession(
        {
          authorization,
          usertype,
          refresh,
        },
        { email }
      );
    }
  }, [location]);

  return (
    <section className="grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 gap-4 py-2">
      {data?.pages.length > 0 &&
        data?.pages.map((page) => {
          return page.data?.map((ad) => <AdsCard key={ad.advertisementId} adsCardInfo={ad} />);
        })}
      <div ref={setTarget} className="h-[1rem]"></div>
    </section>
  );
}
