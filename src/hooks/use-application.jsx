import { changeApplicationStatus } from '@/api/application';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useApiError from './use-api-error';

export function useApplication() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { handleError } = useApiError();
  const {
    mutate: updateStatus,
    isLoading,
    isSuccess,
  } = useMutation(async ({ applicationId, data, status }) => await changeApplicationStatus(applicationId, data), {
    onSuccess: async (res, variables) => {
      const { status } = variables;
      await queryClient.fetchQuery(['application', status]);
      toast.success('성공적으로 입력되었습니다👍🏻');
      return true;
    },
    onError: (error) => {
      handleError(error);
      return false;
    },
  });

  return { updateStatus, isLoading, isSuccess };
}
