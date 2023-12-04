import { enrollWaiting, getApplicationStatus } from '@/api/application';
import { getApplication } from '@/api/youtuber/application';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import useApiError from './use-api-error';

export function useWaiting() {
  const queryClient = useQueryClient();
  const { handleError } = useApiError();
  const { mutateAsync: waitingAsync, isLoading: waitingLoading } = useMutation(
    async (data) => await enrollWaiting(data),
    {
      onSuccess: async (res) => {
        await queryClient.invalidateQueries(['youtuber', 'waiting', 'ads']);
        if (res) toast.success('신청완료 되었습니다👍🏻');
        else toast.info('취소완료 되었습니다');
        return res;
      },
      onError: (error) => {
        handleError(error);
      },
    }
  );

  const handleEnroll = async (data) => {
    return await waitingAsync(data);
  };

  return { waitingAsync, waitingLoading, handleEnroll };
}
