import { changeApplicationStatus } from '@/api/application';
import { getApplication } from '@/api/youtuber/application';
import { useAdsList } from '@/pages/setting/youtuber/hooks/use-ads-list';

import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

export function useApplication() {
  const queryClient = useQueryClient();
  const params = useParams();
  const navigate = useNavigate();
  const { GetAdList } = useAdsList();
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
