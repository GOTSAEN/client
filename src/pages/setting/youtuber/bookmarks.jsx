import { getBookmarks } from '@/api/bookmark';
import AdsCard from '@/components/AdsCard';
import ListSkeleton from '@/components/home/list-skeleton';

import { useIntersectionObserver } from '@/hooks/use-intersection-abserver';
import React from 'react';
import { useInfiniteQuery } from 'react-query';

export default function Bookmarks() {
  const {
    isLoading,
    data: ads,
    error,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(['bookmark'], async ({ pageParam = 1 }) => await getBookmarks(pageParam).then((res) => res), {
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageInfo,
    }),
    getNextPageParam: ({ pageInfo }) => {
      const nextPage = pageInfo.page;
      return nextPage >= pageInfo.totalPages ? undefined : nextPage + 1;
    },
    staleTime: 1000 * 60 * 30,
  });
  const { setTarget } = useIntersectionObserver({ hasNextPage, fetchNextPage, isFetchingNextPage, isFetching });
  return (
    <>
      {isLoading && <ListSkeleton />}
      <section className="grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 gap-4 py-2">
        {ads?.pages.map((page) => {
          return page.data?.map((ad) => <AdsCard key={ad.advertisementId} adsCardInfo={ad} />);
        })}
        <div ref={setTarget}></div>
      </section>
    </>
  );
}
