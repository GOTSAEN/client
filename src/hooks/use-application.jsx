import { changeApplicationStatus } from '@/api/application';

import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

export function useApplication() {
  const queryClient = useQueryClient();
  const params = useParams();
  const navigate = useNavigate();

  const { mutate: updateStatus } = useMutation(
    async ({ applicationId, data, status }) => {
      // 여기서 data에 대한 로직 수행 후 changeApplicationStatus 호출
      const result = await changeApplicationStatus(applicationId, data);
      return result;
    },
    {
      onSuccess: async (res, variables) => {
        const { status } = variables;
        console.log(status);
        await queryClient.fetchQuery(['partner', 'ads', status]);
      },
      onError: () => {
        navigate('/login');
      },
    }
  );

  return [updateStatus];
}
