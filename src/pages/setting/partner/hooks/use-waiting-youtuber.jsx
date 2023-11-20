import { changeApplicationStatus } from '@/api/application';
import { fetchPartnerAdsYoutuber } from '@/api/members/ads';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export function useWaitingYoutuber() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const params = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    data: youtubers,
    error,
  } = useQuery(
    ['partner', 'ads', 'progress'],
    async () => await fetchPartnerAdsYoutuber(page, params.campaignId).then((res) => res)
  );

  const updateStatus = useMutation(({ id, data }) => changeApplicationStatus(id, data), {
    onSuccess: (res) => {
      queryClient.fetchQuery(['partner', 'ads', 'progress']);
    },
    onError: () => {
      navigate('/login');
    },
  });

  return [isLoading, youtubers, error, updateStatus];
}
