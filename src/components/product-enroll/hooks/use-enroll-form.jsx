import { newAds, updateAds } from '@/api/ads'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'

export function useEnrollForm() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const [advertisementId, setAdvertisementId] = useState(0)
  const createAd = useMutation(newAds, {
    onSuccess: (id) => {
      setAdvertisementId(id)
    },
    onError: () => {
      navigate('/login')
    },
  })
  const updateAd = useMutation(
    (id, form) => updateAds(id, form),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['ads', 'all'])
        queryClient.invalidateQueries([
          'partner',
          'ads',
          'waiting',
        ])
        navigate('/setting/partner/ads/waiting')
      },
      onError: () => {
        navigate('/login')
      },
    }
  )
  return [advertisementId, createAd, updateAd]
}
