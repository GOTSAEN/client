import React, { useEffect, useState } from 'react';
import AdsCard from '@/components/AdsCard';
import { useInfiniteQuery, useQuery } from 'react-query';
import { fetchAdsByStatus } from '@/api/ads';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveUserSession } from '@/service/login-auth';
import { Cookies } from 'react-cookie';
import { useAuth } from '@/context/AuthContext';

export default function List() {
  // const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage, error } = useInfiniteQuery(
    ['ads', 'waiting'],
    async ({ pageParam = 1 }) => await fetchAdsByStatus('WAITING', pageParam).then((res) => res),
    {
      getNextPageParam: (res) => {
        const nextPage = res.pageInfo.page;
        return nextPage > res.pageInfo.totalPages ? undefined : nextPage + 1;
      },

      staleTime: 1000 * 60 * 30,
    }
  );
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section className="grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 gap-4 py-2">
      {data?.pages[0].data.length > 0 &&
        data.pages[0].data.map((ad) => <AdsCard key={ad.advertisementId} adsCardInfo={ad} />)}
      <button onClick={() => fetchNextPage()}>다음</button>
    </section>
  );
}
