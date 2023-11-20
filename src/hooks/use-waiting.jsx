import { enrollWaiting, getApplicationStatus } from '@/api/application';
import { getApplication } from '@/api/youtuber/application';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useWaiting() {
  const queryClient = useQueryClient();
  const { mutateAsync: waitingAsync, isLoading: waitingLoading } = useMutation(
    async (data) => await enrollWaiting(data),
    {
      onSuccess: async (res) => {
        await queryClient.fetchQuery(['youtuber', 'waiting', 'ads']);
        if (res) toast.success('신청완료 되었습니다👍🏻');
        else toast.info('취소완료 되었습니다');
        return res;
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  const handleEnroll = async (data) => {
    try {
      const res = await waitingAsync(data);
      return res;
    } catch (error) {
      throw error;
    }
  };

  return { waitingAsync, waitingLoading, handleEnroll };
}
