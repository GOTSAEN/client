import { enrollWaiting } from '@/api/application';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

export function useWaiting() {
  const queryClient = useQueryClient();
  const { mutateAsync: waitingAsync, isLoading: waitingLoading } = useMutation(
    async (data) => await enrollWaiting(data),
    {
      onSuccess: (res) => {
        if (res) toast.success('신청완료 되었습니다👍🏻');
        else toast.info('취소완료 되었습니다');
        queryClient.invalidateQueries(['youtuber', 'waiting', 'ads']);
        return res;
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  return [waitingAsync, waitingLoading];
}
