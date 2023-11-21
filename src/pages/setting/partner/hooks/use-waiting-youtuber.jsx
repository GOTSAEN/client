import { changeApplicationStatus } from '@/api/application';

import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

export function useWaitingYoutuber() {
  const queryClient = useQueryClient();
  const params = useParams();
  const navigate = useNavigate();

  const updateStatus = useMutation(({ id, data }) => changeApplicationStatus(id, data), {
    onSuccess: (res) => {
      queryClient.fetchQuery(['partner', 'ads', 'progress']);
    },
    onError: () => {
      navigate('/login');
    },
  });

  return [updateStatus];
}
