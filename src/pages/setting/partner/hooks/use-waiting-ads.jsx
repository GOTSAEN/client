import { deleteAds, toProgressAd } from '@/api/ads';
import useApiError from '@/hooks/use-api-error';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useWaitingAds() {
  const queryClient = useQueryClient();
  const { handleError } = useApiError();
  const { mutate: deleteAd } = useMutation(async (id) => await deleteAds(id), {
    onSuccess: async () => {
      await queryClient.fetchQuery(['partner', 'ads', 'waiting']);
      toast.success('삭제 완료');
    },
  });

  const { mutate: updateAdToProgress } = useMutation(async (id) => await toProgressAd(id), {
    onSuccess: async () => {
      await queryClient.fetchQuery(['partner', 'ads', 'waiting']);
      queryClient.invalidateQueries(['partner', 'ads', 'progress']);
      toast.success('광고를 진행합니다');
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return [deleteAd, updateAdToProgress];
}
