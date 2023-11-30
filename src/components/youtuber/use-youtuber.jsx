import { getAllYoutuberList, getYoutuberByCategory } from '@/api/youtuber';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

export default function useYoutuber() {
  const [youtubers, setYoutubers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const FetchAllYoutubers = (page) =>
    useQuery(
      ['youtuber', page],
      async () => {
        setIsLoading(true);
        await getAllYoutuberList(page).then((res) => setYoutubers(res));
      },
      {
        onSuccess: setYoutubers,
        onError: setError(true),
      }
    );

  const FetchYoutubersByCategory = (page, category) =>
    useQuery(
      ['youtuber', category, page],
      async () => {
        setIsLoading(true);
        await getYoutuberByCategory(page, category).then((res) => setYoutubers(res));
      },
      {
        onSuccess: setYoutubers,
        onError: setError(true),
      }
    );

  return { FetchAllYoutubers, FetchYoutubersByCategory, youtubers, isLoading, error };
}
