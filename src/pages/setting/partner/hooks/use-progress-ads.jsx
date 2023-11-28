import { toFinishAd } from '@/api/ads';
import { fetchPartnerAds } from '@/api/members/ads';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useProgressAds() {
  const queryClient = useQueryClient();

  const { mutate: updateAdToFinish } = useMutation(async (id) => await toFinishAd(id), {
    onSuccess: async (status) => {
      console.log(status);
      await queryClient.fetchQuery(['partner', 'ads', 'progress']);
      queryClient.invalidateQueries(['partner', 'ads', 'finished']);
      toast.success('광고를 종료합니다');
    },
    onError: (error) => {
      toast.error(error.toString().replace('Error:', ''));
    },
  });
  return [updateAdToFinish];
}
