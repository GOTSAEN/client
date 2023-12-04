import { toFinishAd } from '@/api/ads';
import { fetchPartnerAds } from '@/api/members/ads';
import useApiError from '@/hooks/use-api-error';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useProgressAds() {
  const queryClient = useQueryClient();
  const { handleError } = useApiError();

  const { mutate: updateAdToFinish } = useMutation(async (id) => await toFinishAd(id), {
    onSuccess: async () => {
      await queryClient.fetchQuery(['partner', 'ads', 'progress']);
      queryClient.invalidateQueries(['partner', 'ads', 'finished']);
      toast.success('광고를 종료합니다');
    },
    onError: (error) => {
      handleError(error);
    },
  });
  return [updateAdToFinish];
}
