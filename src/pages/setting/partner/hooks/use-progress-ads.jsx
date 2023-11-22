import { toFinishAd } from '@/api/ads';
import { fetchPartnerAds } from '@/api/members/ads';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useProgressAds() {
  const queryClient = useQueryClient();

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
      },
    }
  );
  return [updateAdToFinish];
}
