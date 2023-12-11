import { useEffect } from 'react';
import { useState } from 'react';

export const useIntersectionObserver = ({ threshold, hasNextPage, fetchNextPage }) => {
  const [target, setTarget] = useState();

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
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
  }, [observerCallback, threshold, target]);
  return { setTarget };
};
