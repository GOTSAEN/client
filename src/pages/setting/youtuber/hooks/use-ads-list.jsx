import { getApplication } from '@/api/youtuber/application';
import { useQuery } from 'react-query';

export function useAdsList() {
  const GetAdsList = (page, status) => {
    return useQuery(
      ['youtuber', 'ads', status],
      async () => await getApplication(page, status.toUpperCase()).then((res) => res),
      {
        staleTime: 1000 * 60 * 24,
      }
    );
  };

  return { GetAdsList };
}
