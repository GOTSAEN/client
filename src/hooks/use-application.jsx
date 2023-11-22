import { changeApplicationStatus } from '@/api/application';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function useApplication() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: updateStatus,
    isLoading,
    isSuccess,
  } = useMutation(async ({ applicationId, data, status }) => await changeApplicationStatus(applicationId, data), {
    onSuccess: async (res, variables) => {
      const { status } = variables;
      await queryClient.fetchQuery(['application', status]);
      toast.success('성공적으로 입력되었습니다👍🏻');
    },
    onError: (e) => {
      toast.error(e);
    },
  });

  return { updateStatus, isLoading, isSuccess };
}
