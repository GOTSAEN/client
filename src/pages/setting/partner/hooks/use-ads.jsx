import { fetchPartnerAds } from '@/api/members/ads';
import { useIntersectionObserver } from '@/hooks/use-intersection-abserver';
import { useInfiniteQuery } from 'react-query';

export function useAds() {
  const GetAdsList = (status) => {
    const queryResult = useInfiniteQuery(
      ['partner', 'ads', status],
      async ({ pageParam = 1 }) => await fetchPartnerAds(pageParam, status.toUpperCase()).then((res) => res),
      {
        select: (data) => {
          return {
            pages: data.pages ?? [],
            pageParams: data.pageParams,
          };
        },
        getNextPageParam: (res) => {
          const nextPage = res.pageInfo.page;
          return nextPage >= res.pageInfo.totalPages ? undefined : nextPage + 1;
        },
        staleTime: 1000 * 60 * 24,
      }
    );

    const { data, error, isLoading, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage } = queryResult;

    return { data, error, isLoading, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage };
  };

  return { GetAdsList };
}
