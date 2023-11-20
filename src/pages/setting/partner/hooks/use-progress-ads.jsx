import { toFinishAd } from '@/api/ads';
import { fetchPartnerAds } from '@/api/members/ads';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useProgressAds() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(['partner', 'ads', 'progress'], async () => await fetchPartnerAds(1, 'PROGRESS').then((res) => res), {
    staleTime: 1000 * 60 * 24,
  });

  const updateAdToFinish = useMutation(
    (id) => {
      toFinishAd(id);
    },
    {
      onSuccess: async () => {
        await queryClient.fetchQuery(['partner', 'ads', 'progress']);
        toast.success('광고를 종료합니다');
      },
      onError: (e) => {
        toast.error(e);
        console.log(error);
      },
    }
  );
  return [isLoading, ads, error, updateAdToFinish];
}
