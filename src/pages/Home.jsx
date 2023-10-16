import { Button } from '@/components/ui/button'
import React from 'react'
import AdsCard from '@/components/AdsCard'
import { useQuery } from 'react-query'
import { fetchAds } from '@/api/ads'

export default function Home() {
  const {
    isLoading,
    data: ads,
    error,
  } = useQuery(
    ['ads', 'all'],
    async () => await fetchAds().then((res) => res),
    {
      staleTime: 1000 * 60 * 30,
    }
  )

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2'>
      {ads?.length > 0 &&
        ads.map((ad, index) => (
          <AdsCard
            key={ad.advertisementId}
            adsCardInfo={ad}
          />
        ))}
    </section>
  )
}
