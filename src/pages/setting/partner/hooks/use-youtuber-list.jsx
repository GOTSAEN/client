import { useQuery } from 'react-query';
import { fetchPartnerAdsYoutuber } from '@/api/members/ads';

export function useYoutuberList() {
  const GetYoutuberList = (id, page, status) => {
    const { data, isLoading, error } = useQuery(['application', status], async () => {
      try {
        const result = await fetchPartnerAdsYoutuber(page, id);
        return result;
      } catch (error) {
        throw new Error('Error fetching data');
      }
    });

    return { data, isLoading, error };
  };

  return { GetYoutuberList };
}
