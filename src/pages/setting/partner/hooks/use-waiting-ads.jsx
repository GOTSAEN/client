import { deleteAds, toProgressAd } from '@/api/ads';
import { fetchPartnerAds } from '@/api/members/ads';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useWaitingAds() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(['partner', 'ads', 'waiting'], async () => await fetchPartnerAds(1, 'WAITING').then((res) => res), {
    staleTime: 1000 * 60 * 24,
  });

  const { mutate } = useMutation(async (id) => await deleteAds(id), {
    onSuccess: async () => {
      await queryClient.fetchQuery(['partner', 'ads', 'waiting']);
      toast.success('삭제 완료');
    },
  });

  const { mutate: updateAdToProgress } = useMutation(async (id) => await toProgressAd(id), {
    onSuccess: async () => {
      await queryClient.fetchQuery(['partner', 'ads', 'waiting']);
      toast.success('광고를 진행합니다');
    },
    onError: (e) => {
      toast.error(e);
    },
  });

  return [isLoading, ads, error, mutate, updateAdToProgress];
}
