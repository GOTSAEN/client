import { fetchPartnerAds } from '@/api/members/ads'
import { useQuery, useQueryClient } from 'react-query'

export function usePastAds() {
  const queryClient = useQueryClient()
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(
    ['partner', 'ads', 'past'],
    async () =>
      await fetchPartnerAds(1, 'FINISHED').then(
        (res) => res
      ),
    {
      staleTime: 1000 * 60 * 24,
    }
  )

  return [isLoading, ads, error]
}
