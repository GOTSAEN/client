import { changeApplicationStatus } from '@/api/application';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

export function useApplication() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: updateStatus } = useMutation(
    async ({ applicationId, data, status }) => await changeApplicationStatus(applicationId, data),
    {
      onSuccess: async (res, variables) => {
        const { status } = variables;
        await queryClient.fetchQuery(['partner', 'youtuber', status]);
      },
      onError: () => {
        navigate('/login');
      },
    }
  );

  return [updateStatus];
}
