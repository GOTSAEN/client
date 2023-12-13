import { useEffect, useState } from 'react';

export const useIntersectionObserver = ({ threshold, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching }) => {
  const [target, setTarget] = useState();

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage && !isFetchingNextPage && !isFetching) {
        const fetchData = async () => {
          await fetchNextPage();
        };
        fetchData();
      }
    });
  };

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [target, observerCallback, threshold]);

  return { setTarget };
};
