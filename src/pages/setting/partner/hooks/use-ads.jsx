import { fetchPartnerAds } from '@/api/members/ads';
import { useQuery } from 'react-query';

export function useAds() {
  const GetAdsList = (page, status) => {
    return useQuery(
      ['partner', 'ads', status],
      async () => await fetchPartnerAds(page, status.toUpperCase()).then((res) => res),
      {
        staleTime: 1000 * 60 * 24,
      }
    );
  };

  return { GetAdsList };
}
