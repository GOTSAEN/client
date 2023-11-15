import {
  fetchPartnerAds,
  fetchPartnerAdsYoutuber,
} from '@/api/members/ads'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

export function useWaitingYoutuber() {
  const params = useParams()
  const {
    isLoading,
    data: youtubers,
    error,
  } = useQuery(
    ['partner', 'ads', 'progress'],
    async () =>
      await fetchPartnerAdsYoutuber(
        1,
        params.campaignId
      ).then((res) => res)
  )

  return [isLoading, youtubers, error]
}
